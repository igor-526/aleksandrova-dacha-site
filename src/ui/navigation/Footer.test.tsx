// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Footer } from "./Footer";

afterEach(cleanup);
it("PR-02/03 preserves contacts and exposes the license notice", () => {
  render(<Footer phones={["+7 999"]} socials={[
    { type: "vk", label: "Сообщество", href: "https://vk.com/example" },
    { type: "mail", label: "Почта", href: "mailto:a@example.org" },
    { label: "Без типа", href: "https://example.org" },
  ]} />);
  const vk = screen.getByRole("link", { name: "Сообщество" });
  expect(vk.textContent).toContain("VK");
  expect(vk.getAttribute("href")).toBe("https://vk.com/example");
  expect(vk.getAttribute("target")).toBe("_blank");
  expect(vk.getAttribute("rel")).toBe("noreferrer canonical");
  vk.focus(); expect(document.activeElement).toBe(vk);
  const mail = screen.getByRole("link", { name: "Почта" });
  expect(mail.getAttribute("href")).toBe("mailto:a@example.org");
  expect(mail.querySelector('[data-icon="mail"]')).not.toBeNull();
  expect(screen.getByRole("link", { name: "+7 999" }).getAttribute("href")).toBe("tel:+7999");
  expect(screen.getByRole("link", { name: "Лицензии иконок" }).getAttribute("href")).toBe("/third-party-notices.txt");
  expect(screen.getByRole("link", { name: "Без типа" }).querySelector("svg")).toBeNull();
});
it("preserves no-settings rendering", () => {
  render(<Footer />);
  expect(screen.getByRole("link", { name: "Александрова Дача" }).getAttribute("href")).toBe("/");
  expect(screen.queryByRole("link", { name: "Почта" })).toBeNull();
});
