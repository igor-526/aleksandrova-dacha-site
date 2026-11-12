// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";
import { MobileMenu } from "./MobileMenu";

afterEach(cleanup);
it("PR-02 preserves mobile social names, focus and phone", () => {
  render(<MobileMenu open onOpenChange={vi.fn()} links={[]} phone="+7 999" socials={[
    { type: "vk", label: "Сообщество", href: "https://vk.com/example" },
    { type: "mail", label: "Почта", href: "mailto:a@example.org" },
  ]} />);
  const vk = screen.getByRole("link", { name: "Сообщество" });
  expect(vk.textContent).toBe("VK");
  expect(vk.getAttribute("href")).toBe("https://vk.com/example");
  expect(vk.getAttribute("target")).toBe("_blank");
  expect(vk.getAttribute("rel")).toBe("noreferrer canonical");
  vk.focus(); expect(document.activeElement).toBe(vk);
  const mail = screen.getByRole("link", { name: "Почта" });
  expect(mail.getAttribute("href")).toBe("mailto:a@example.org");
  expect(mail.querySelector('[data-icon="mail"]')).not.toBeNull();
  expect(screen.getByRole("link", { name: "Телефон" }).getAttribute("href")).toBe("tel:+7999");
});
it("preserves no-settings menu", () => {
  render(<MobileMenu open onOpenChange={vi.fn()} links={[]} />);
  expect(screen.queryByRole("link", { name: "Почта" })).toBeNull();
  expect(screen.getByRole("button", { name: "Закрыть меню" })).not.toBeNull();
});
