"use client";

import { useState } from "react";
import { Button } from "../button/Button";
import { Icon } from "../atoms/Icon";
import { MobileMenu, type MobileMenuLink } from "./MobileMenu";
import { cn } from "../utils/cn";

export type HeaderLink = MobileMenuLink;
export type HeaderProps = {
  links: HeaderLink[];
  phone?: string;
  ctaLabel?: string;
  ctaHref?: string;
  sticky?: boolean;
  transparent?: boolean;
  className?: string;
};

export function Header({
  links,
  phone,
  ctaLabel = "Записаться",
  ctaHref = "#booking",
  sticky = false,
  transparent = false,
  className,
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "relative z-30 border-b border-transparent",
        sticky && "sticky top-0 backdrop-blur",
        transparent ? "bg-transparent" : "bg-[rgba(246,239,224,0.95)]",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="font-serif text-2xl text-[#2f3600]">
          Александрова Дача
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#2f3600] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#384000]">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          {phone && (
            <a
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-[#2f3600]"
            >
              <Icon name="phone" width={18} height={18} />
              {phone}
            </a>
          )}
          <Button href={ctaHref}>{ctaLabel}</Button>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d3c6aa] text-[#2f3600] md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
        >
          ☰
        </button>
      </div>
      <MobileMenu open={open} onOpenChange={setOpen} links={links} />
    </header>
  );
}
