// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { ContactsBlock } from "./ContactsBlock";

afterEach(cleanup);
it("PR-02 preserves socials, accessible names, keyboard focus and phone", () => {
  render(<ContactsBlock address="Address" phones={["+7 (999) 123-45-67"]} socials={[
    { type: "vk", label: "Сообщество", href: "https://vk.com/example" },
    { type: "mail", label: "Почта", href: "mailto:example@example.org" },
    { label: "Без типа", href: "https://example.org" },
  ]} />);
  const vk = screen.getByRole("link", { name: "Сообщество" });
  expect(vk.textContent).toContain("VK");
  expect(vk.getAttribute("href")).toBe("https://vk.com/example");
  expect(vk.getAttribute("target")).toBe("_blank");
  expect(vk.getAttribute("rel")).toBe("noreferrer");
  vk.focus(); expect(document.activeElement).toBe(vk);
  const mail = screen.getByRole("link", { name: "Почта" });
  expect(mail.getAttribute("href")).toBe("mailto:example@example.org");
  expect(mail.querySelector('[data-icon="mail"]')).not.toBeNull();
  expect(screen.getByRole("link", { name: "+7 (999) 123-45-67" }).getAttribute("href")).toBe("tel:+79991234567");
  expect(screen.getByRole("link", { name: "Без типа" }).querySelector("svg")).toBeNull();
});
it("preserves no-settings and no-phone baseline", () => {
  const { rerender } = render(<ContactsBlock address="" phones={[]} />);
  expect(screen.queryAllByRole("link")).toHaveLength(0);
  rerender(<ContactsBlock address="" phones={[]} socials={[{ type: "vk", label: "VK", href: "https://vk.com/example" }]} />);
  expect(screen.queryAllByRole("link")).toHaveLength(0);
});
