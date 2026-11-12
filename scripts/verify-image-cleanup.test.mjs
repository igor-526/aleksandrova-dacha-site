import { test } from 'node:test';
import assert from 'node:assert/strict';
import { assessDeletion, homeIcons, verifyManifest } from './verify-image-cleanup.mjs';

const sha256 = 'a'.repeat(64);
const candidate = (path = 'public/images/spare.jpg') => ({
  path, sha256, reason: 'unused', evidence: 'reviewed fixture only',
  checks: Object.fromEntries(['direct', 'css', 'dynamic', 'metadata', 'fallback', 'archive', 'stories', 'cms', 'external'].map((key) => [key, 'complete'])),
});

test('complete proof without consumers is eligible, never deletes files', () => {
  assert.deepEqual(assessDeletion(candidate(), { 'src/page.tsx': 'export default 1;' }), []);
});
for (const [name, file, text] of [
  ['CSS', 'src/style.css', 'background: url("/images/spare.jpg")'],
  ['fallback', 'src/fallback.ts', 'const image = photo || "/images/spare.jpg"'],
  ['archive', 'src/app/(archive)/page.tsx', '<img src="/images/spare.jpg" />'],
  ['encoded', 'src/page.tsx', 'const src = "%2Fimages%2Fspare.jpg"'],
  ['import', 'src/page.tsx', 'import image from "./spare.jpg"'],
  ['concatenation', 'src/page.tsx', 'const src = "/images/" + "spare" + ".jpg"'],
  ['template', 'src/page.tsx', 'const src = `/images/${"spare"}.jpg`'],
  ['story', '.storybook/story.tsx', '<img src="/images/spare.jpg" />'],
]) {
  test(`negative ${name} reference prevents deletion`, () => {
    assert.ok(assessDeletion(candidate(), { [file]: text }).some((error) => error.startsWith('reference:')));
  });
}
for (const text of ['readdirSync(folder).map(file => folder + file)', 'const src = `/images/${name}.jpg`']) {
  test(`negative dynamic generator without literal URL: ${text}`, () => {
    assert.ok(assessDeletion(candidate(), { 'src/dynamic.ts': text }).some((error) => error.startsWith('dynamic consumer')));
  });
}
for (const key of ['cms', 'external', 'dynamic', 'metadata', 'fallback', 'archive']) {
  test(`negative unknown ${key} preserves candidate despite zero references`, () => {
    const entry = candidate(); entry.checks[key] = 'unknown';
    assert.ok(assessDeletion(entry, {}).includes('incomplete usage proof (including CMS/external)'));
  });
}
test('negative favicon/file conventions are protected', () => {
  assert.ok(assessDeletion(candidate('public/favicon.png'), { 'src/layout.tsx': 'export default 1' }).includes('metadata/file convention protected'));
});
test('only four exact home comments are exceptions, not arbitrary comments', () => {
  const alts = ['Верховая езда', 'Контактная мини-ферма', 'Аренда экипажей и животных', 'Разведение и продажа'];
  for (const [index, name] of homeIcons.entries()) {
    const entry = { path: `public/icons/${name}.ico`, sha256, reason: 'explicit-home' };
    const comment = `// icon: <ImageBlock pathImage="/icons/${name}.ico" alt="${alts[index]}" /> — отключено: задача 114.`;
    assert.deepEqual(assessDeletion(entry, { 'src/features/home/services/homePageDataService.tsx': comment }), []);
    assert.ok(assessDeletion(entry, { 'src/other.tsx': comment }).length);
    assert.ok(assessDeletion(entry, { 'src/features/home/services/homePageDataService.tsx': `${comment} extra` }).length);
    assert.ok(assessDeletion(entry, { 'src/features/home/services/homePageDataService.tsx': `<img src="/icons/${name}.ico" />` }).length);
  }
});
test('missing manifest and unsafe paths cannot authorize cleanup', () => {
  assert.deepEqual(verifyManifest(process.cwd(), { entries: [] }), ['empty manifest']);
  assert.ok(assessDeletion(candidate('public/../outside.jpg'), {}).includes('unsafe public path'));
});
