"use client";

import { useEffect } from "react";
import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type MobileMenuLink = {
  label: string;
  href: string;
};

export type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: MobileMenuLink[];
};

export function MobileMenu({ open, onOpenChange, links }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black/40 transition-opacity",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      onClick={() => onOpenChange(false)}
    >
      <nav
        className={cn(
          "absolute right-0 top-0 h-full w-80 max-w-full transform bg-[#f8f2e4] p-6 shadow-xl transition-transform",
          open ? "translate-x-0" : "translate-x-full"
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="mb-6 flex items-center justify-between">
          <span className="text-lg font-semibold text-[#2f3600]">Меню</span>
          <button
            type="button"
            className="text-2xl leading-none text-[#2f3600]"
            onClick={() => onOpenChange(false)}
            aria-label="Закрыть меню"
          >
            ×
          </button>
        </header>
        <ul className="space-y-4 text-lg text-[#2f3600]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[#384000]"
                onClick={() => onOpenChange(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <footer className="mt-8">
          <Button
            variant="primary"
            fullWidth
            onClick={() => onOpenChange(false)}
          >
            Записаться
          </Button>
        </footer>
      </nav>
    </div>
  );
}
