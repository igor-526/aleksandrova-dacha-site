"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "../button/Button";
import { cn } from "../utils/cn";
import { Icon } from "../atoms/Icon";

export type MobileMenuLink = {
  label: string;
  href?: string;
  children?: MobileMenuLink[];
  description?: string;
};

export type ContactLink = {
  type: "phone" | "whatsapp" | "telegram" | "vk" | "mail";
  href: string;
  label?: string;
};

export type MobileMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: MobileMenuLink[];
  ctaLabel?: string;
  ctaHref?: string;
  phone?: string;
  socials?: ContactLink[];
};

type MobileMenuItemProps = {
  item: MobileMenuLink;
  level?: number;
  onNavigate: () => void;
  defaultExpanded?: boolean;
};

function MobileMenuItem({
  item,
  level = 0,
  onNavigate,
  defaultExpanded = false,
}: MobileMenuItemProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const hasChildren = item.children?.length;
  const paddingLeft = useMemo(() => Math.min(level * 12, 36), [level]);

  return (
    <li>
      <div
        className={cn(
          "flex items-start gap-3 rounded-xl px-3 py-2",
          expanded ? "bg-[#f1e4ca]" : "hover:bg-[#f5ebd8]"
        )}
        style={{ paddingLeft }}
      >
        {item.href ? (
          <a
            href={item.href}
            className="flex-1 text-base font-semibold text-[#2f3600]"
            onClick={onNavigate}
          >
            {item.label}
          </a>
        ) : (
          <span className="flex-1 text-base font-semibold text-[#2f3600]">
            {item.label}
          </span>
        )}
        {hasChildren && (
          <button
            type="button"
            aria-expanded={expanded}
            className="text-sm font-semibold text-[#384000]"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "−" : "+"}
          </button>
        )}
      </div>

      {hasChildren && (
        <ul
          className={cn(
            "space-y-2 border-l border-[#d3c6aa]/60 pl-5",
            expanded ? "mt-2" : "hidden"
          )}
        >
          {item.children!.map((child, index) => (
            <MobileMenuItem
              key={`${child.href || child.label}-${level}-${index}`}
              item={child}
              level={level + 1}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function MobileMenu({
  open,
  onOpenChange,
  links,
  ctaLabel = "Записаться",
  ctaHref = "#booking",
  phone,
  socials = [],
}: MobileMenuProps) {
  const sanitizedPhone = phone?.replace(/[^+\d]/g, "");
  const contactLinks = [
    sanitizedPhone && { type: "phone", href: `tel:${sanitizedPhone}`, label: "Позвонить" },
    ...socials,
  ].filter(Boolean) as ContactLink[];

  const contactColors: Record<ContactLink["type"], string> = {
    phone: "bg-[#e7f0ff] text-[#1d4ed8] border-[#c8dbff] hover:bg-[#d8e8ff]",
    whatsapp: "bg-[#e5f7ee] text-[#0a8f4a] border-[#bfead3] hover:bg-[#d5f1e3]",
    telegram: "bg-[#e7f3ff] text-[#1c8adb] border-[#c4e0ff] hover:bg-[#d9eaff]",
    vk: "bg-[#ebefff] text-[#3b5bb2] border-[#ccd5ff] hover:bg-[#dce2ff]",
    mail: "bg-[#fff3e5] text-[#c2410c] border-[#ffd7b3] hover:bg-[#ffe8cc]",
  };

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
          "absolute right-0 top-0 my-4 w-80 max-w-full transform rounded-l-3xl bg-[#f8f2e4] p-6 shadow-xl transition-transform",
          "max-h-[calc(100vh-2rem)] overflow-y-auto",
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
        <ul className="space-y-2 text-lg text-[#2f3600]">
          {links.map((link) => (
            <MobileMenuItem
              key={link.href || link.label}
              item={link}
              onNavigate={() => onOpenChange(false)}
              defaultExpanded={link.label?.toLowerCase() === "услуги"}
            />
          ))}
        </ul>
        <footer className="mt-8 space-y-3">
          {contactLinks.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {contactLinks.map((contact) => (
                <a
                  key={`${contact.type}-${contact.href}`}
                  href={contact.href}
                  aria-label={contact.label ?? contact.type}
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-full border transition",
                    contactColors[contact.type]
                  )}
                  target={contact.type === "telegram" || contact.type === "vk" ? "_blank" : undefined}
                  rel={contact.type === "telegram" || contact.type === "vk" ? "noreferrer" : undefined}
                >
                  <Icon name={contact.type} width={20} height={20} />
                </a>
              ))}
            </div>
          )}
          <Button
            variant="primary"
            fullWidth
            onClick={() => onOpenChange(false)}
            href={ctaHref}
          >
            {ctaLabel}
          </Button>
        </footer>
      </nav>
    </div>
  );
}
