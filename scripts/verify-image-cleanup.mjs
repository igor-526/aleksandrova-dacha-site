import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, relative, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

export const homeIcons = ['ridding', 'farm', 'rent', 'sale'];
const homeSource = 'src/features/home/services/homePageDataService.tsx';
const alts = ['Верховая езда', 'Контактная мини-ферма', 'Аренда экипажей и животных', 'Разведение и продажа'];
const allowedComments = new Set(homeIcons.map((name, i) =>
  `// icon: <ImageBlock pathImage="/icons/${name}.ico" alt="${alts[i]}" /> — отключено: задача 114.`));
const checks = ['direct', 'css', 'dynamic', 'metadata', 'fallback', 'archive', 'stories', 'cms', 'external'];

function decoded(text) {
  try { return decodeURIComponent(text).replaceAll('\\/', '/'); }
  catch { return text.replaceAll('\\/', '/'); }
}

// Also fold literal concatenations: '/icons/' + 'name' + '.ico'.
function literals(text) {
  const tree = ts.createSourceFile('source.tsx', text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const values = [];
  function constant(node) {
    if (ts.isStringLiteralLike(node)) return node.text;
    if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
      const left = constant(node.left), right = constant(node.right);
      if (left !== undefined && right !== undefined) return left + right;
    }
    if (ts.isTemplateExpression(node)) {
      let value = node.head.text;
      for (const span of node.templateSpans) {
        const part = constant(span.expression);
        if (part === undefined) return undefined;
        value += part + span.literal.text;
      }
      return value;
    }
  }
  function visit(node) {
    const value = constant(node);
    if (value !== undefined) values.push(value);
    ts.forEachChild(node, visit);
  }
  visit(tree);
  return values.join('\n');
}

export function assessDeletion(entry, sources) {
  const errors = [];
  const explicit = homeIcons.some((name) => entry.path === `public/icons/${name}.ico`) && entry.reason === 'explicit-home';
  if (typeof entry.path !== 'string' || !entry.path.startsWith('public/') || entry.path.split('/').includes('..') || entry.path.includes('\\')) return ['unsafe public path'];
  if (!/^[a-f0-9]{64}$/.test(entry.sha256 ?? '')) errors.push('missing original SHA256');
  if (!explicit && (!entry.evidence || checks.some((key) => entry.checks?.[key] !== 'complete'))) {
    errors.push('incomplete usage proof (including CMS/external)');
  }
  if (!explicit && /favicon|apple-icon|opengraph-image|twitter-image/.test(basename(entry.path))) {
    errors.push('metadata/file convention protected');
  }
  const url = entry.path.slice('public'.length);
  for (const [file, original] of Object.entries(sources)) {
    const text = original.split('\n').filter((line) =>
      !(explicit && file === homeSource && allowedComments.has(line.trim()))).join('\n');
    const haystack = decoded(text) + '\n' + decoded(literals(text));
    if (haystack.includes(url) || haystack.includes(basename(entry.path))) errors.push(`reference: ${file}`);
    // Unknown generators never establish non-use, even without a literal URL.
    if (!explicit && /readdir|\$\{|getImagesFromFolder|(?:\/images\/|\/icons\/)['"]\s*\+/.test(text)) {
      errors.push(`dynamic consumer needs review: ${file}`);
    }
  }
  return [...new Set(errors)];
}

export function collectSources(root) {
  const result = {};
  const walk = (dir) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = resolve(dir, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (/\.(?:[cm]?[jt]sx?|css|md|json|html|ya?ml)$/.test(entry.name)) {
        result[relative(root, path)] = readFileSync(path, 'utf8');
      }
    }
  };
  for (const dir of ['src', '.storybook', 'docs']) walk(resolve(root, dir));
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (entry.isFile() && !entry.name.startsWith('.env') && /\.(?:[cm]?[jt]sx?|css|md|json|html|ya?ml)$/.test(entry.name)) {
      result[entry.name] = readFileSync(resolve(root, entry.name), 'utf8');
    }
  }
  return result;
}

export function verifyManifest(root, manifest) {
  const errors = [];
  const sources = collectSources(root);
  const paths = new Set();
  const homeLines = (sources[homeSource] ?? '').split('\n').map((line) => line.trim());
  for (const comment of allowedComments) {
    if (homeLines.filter((line) => line === comment).length !== 1) errors.push('expected exactly one home comment: ' + comment);
  }
  if (!Array.isArray(manifest.entries) || manifest.entries.length === 0) return ['empty manifest'];
  for (const entry of manifest.entries) {
    if (typeof entry.path !== 'string' || !entry.path.startsWith('public/') || entry.path.split('/').includes('..') || entry.path.includes('\\')) {
      errors.push('unsafe manifest path'); continue;
    }
    if (paths.has(entry.path)) errors.push(`duplicate: ${entry.path}`);
    paths.add(entry.path);
    const path = resolve(root, entry.path);
    if (entry.decision === 'delete') {
      errors.push(...assessDeletion(entry, sources).map((error) => `${entry.path}: ${error}`));
      if (existsSync(path)) errors.push(`deleted file still present: ${entry.path}`);
    } else if (['retain', 'uncertain'].includes(entry.decision)) {
      if (!existsSync(path)) errors.push(`retained file missing: ${entry.path}`);
      else if (createHash('sha256').update(readFileSync(path)).digest('hex') !== entry.sha256) errors.push(`retained SHA changed: ${entry.path}`);
    } else errors.push(`unknown decision: ${entry.path}`);
  }
  // An explicit deletion manifest cannot silently omit one of the four required removals.
  for (const name of homeIcons) {
    if (!manifest.entries.some((entry) => entry.path === `public/icons/${name}.ico` && entry.decision === 'delete' && entry.reason === 'explicit-home')) {
      errors.push(`missing explicit removal: ${name}`);
    }
  }
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const index = process.argv.indexOf('--manifest');
  if (index < 0 || !process.argv[index + 1]) {
    console.error('Usage: node scripts/verify-image-cleanup.mjs --manifest <reviewed-json>');
    process.exitCode = 1;
  } else {
    const manifest = JSON.parse(readFileSync(resolve(process.argv[index + 1]), 'utf8'));
    const errors = verifyManifest(process.cwd(), manifest);
    console.log(JSON.stringify({ status: errors.length ? 'failed' : 'passed', entries: manifest.entries.length, errors }, null, 2));
    if (errors.length) process.exitCode = 1;
  }
}
