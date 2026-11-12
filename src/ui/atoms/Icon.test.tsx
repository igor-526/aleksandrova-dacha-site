// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";
import { Icon } from "./Icon";

afterEach(cleanup);
it.each([["vk", "link"], ["mail", "mail"]] as const)("PR-02 renders library %s with size, currentColor, class and aria", (name, libraryName) => {
  const { container } = render(<Icon name={name} width={30} height={36} className="contact-color" aria-label="Contact" />);
  const wrapper = container.firstElementChild as HTMLElement;
  expect(wrapper.classList.contains("contact-color")).toBe(true);
  expect(wrapper.getAttribute("aria-label")).toBe("Contact");
  expect(wrapper.style.width).toBe("30px");
  expect(wrapper.style.height).toBe("36px");
  expect(wrapper.querySelector("svg")?.getAttribute("data-icon")).toBe(libraryName);
  expect(wrapper.querySelector("svg")?.getAttribute("fill")).toBe("currentColor");
});
it("PR-03 verifies exact installed modules, MIT versions and full notice", () => {
  const lock = JSON.parse(readFileSync("package-lock.json", "utf8"));
  const notice = readFileSync("public/third-party-notices.txt", "utf8");
  const license = readFileSync("node_modules/@ant-design/icons/LICENSE", "utf8");
  expect(notice).toContain(license);
  for (const [name, version] of [["@ant-design/icons", "5.6.1"], ["@ant-design/icons-svg", "4.4.2"]]) {
    const installed = JSON.parse(readFileSync(`node_modules/${name}/package.json`, "utf8"));
    expect(installed.version).toBe(version);
    expect(installed.license).toBe("MIT");
    expect(lock.packages[`node_modules/${name}`].version).toBe(version);
    expect(notice).toContain(`${name} ${version}`);
  }
  expect(notice).toContain("038764e4e46499212751a452704f64231fa756ba");
});
it("keeps original phone geometry and only short vk/mail comments", () => {
  const { container } = render(<Icon name="phone" width={16} height={16} />);
  expect(container.querySelector("svg")?.getAttribute("viewBox")).toBe("0 0 56 56");
  expect(container.querySelector("path")?.getAttribute("d")?.startsWith("M27.9999 51.9062")).toBe(true);
  const source = readFileSync("src/ui/atoms/Icon.tsx", "utf8");
  expect(source).toContain("// vk: прежний inline SVG отключён, задача 114.");
  expect(source).toContain("// mail: прежний inline SVG отключён, задача 114.");
  expect(source.slice(source.indexOf("// vk:"), source.indexOf("export type IconProps"))).not.toContain("<path");
});

it("PR-03 unavailable library exports fall back to plain text without copied paths", async () => {
  vi.resetModules();
  vi.doMock("@ant-design/icons/LinkOutlined", () => ({ default: undefined }));
  vi.doMock("@ant-design/icons/MailOutlined", () => ({ default: undefined }));
  try {
    const { Icon: FallbackIcon } = await import("./Icon");
    const { container } = render(<><FallbackIcon name="vk" /><FallbackIcon name="mail" /></>);
    expect(container.textContent).toBe("VKEmail");
    expect(container.querySelector("svg")).toBeNull();
  } finally {
    vi.doUnmock("@ant-design/icons/LinkOutlined");
    vi.doUnmock("@ant-design/icons/MailOutlined");
    vi.resetModules();
  }
});
