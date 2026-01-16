"use client";

import {
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useState,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
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
  ctaSlot?: ReactNode;
  phone?: string;
  socials?: ContactLink[];
};

type MobileMenuItemProps = {
  item: MobileMenuLink;
  level?: number;
  onNavigate: () => void;
  expandedMap: Record<number, string | undefined>;
  onExpand: (level: number, key?: string) => void;
};

function MobileMenuItem({
  item,
  level = 0,
  onNavigate,
  expandedMap,
  onExpand,
}: MobileMenuItemProps) {
  const hasChildren = item.children?.length;
  const key = item.href || item.label;
  const expanded = expandedMap[level] === key;
  const paddingLeft = useMemo(() => Math.min(level * 12, 36), [level]);

  const handleToggle = (event: MouseEvent) => {
    if (!hasChildren) return;
    event.preventDefault();
    onExpand(level, expanded ? undefined : key);
  };

  return (
    <li>
      <div
        className={cn(
          "flex items-center justify-between gap-3 rounded-xl px-3",
          hasChildren ? "py-3" : "py-2",
          expanded ? "bg-[#f1e4ca]" : "hover:bg-[#f5ebd8]"
        )}
        style={{ paddingLeft }}
        onClick={handleToggle}
      >
        {hasChildren ? (
          <button
            type="button"
            aria-expanded={expanded}
            className="flex-1 text-left text-base font-semibold text-[#2f3600]"
          >
            {item.label}
          </button>
        ) : item.href ? (
          <a rel="canonical"
            href={item.href}
            className="flex-1 text-sm font-medium text-[#2f3600]"
            onClick={onNavigate}
          >
            {item.label}
          </a>
        ) : (
          <span className="flex-1 text-sm font-medium text-[#2f3600]">
            {item.label}
          </span>
        )}
        {hasChildren && (
          <Icon
            name="chevron-down"
            width={16}
            height={16}
            className={cn(
              "text-[#2f3600] transition-transform duration-200",
              expanded && "-rotate-180"
            )}
          />
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
              expandedMap={expandedMap}
              onExpand={onExpand}
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
  ctaSlot,
  phone,
  socials = [],
}: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);
  const sanitizedPhone = phone?.replace(/[^+\d]/g, "");
  const [expandedMap, setExpandedMap] = useState<Record<number, string | undefined>>({});
  const contactLinks = [
    sanitizedPhone && { type: "phone", href: `tel:${sanitizedPhone}`, label: "Телефон" },
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

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleExpand = (level: number, key?: string) => {
    setExpandedMap((prev) => {
      const next: Record<number, string | undefined> = {};
      Object.entries(prev).forEach(([lvl, value]) => {
        const num = Number(lvl);
        if (num < level) next[num] = value;
      });
      if (key) next[level] = key;
      return next;
    });
  };

  if (typeof document === "undefined" || !mounted) return null;

  const overlay = (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black/40 transition-opacity",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
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
              expandedMap={expandedMap}
              onExpand={handleExpand}
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
                    "flex h-12 w-12 items-center justify-center rounded-full border transition",
                    contactColors[contact.type]
                  )}
                  target={
                    contact.type === "telegram" || contact.type === "vk"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.type === "telegram" || contact.type === "vk"
                      ? "noreferrer canonical"
                      : "canonical"
                  }
                >
                  <Icon name={contact.type} width={30} height={30} />
                </a>
              ))}
            </div>
          )}
          <div
            onClickCapture={() => setTimeout(() => onOpenChange(false), 0)}
          >
            {ctaSlot
              ? isValidElement(ctaSlot)
                ? (() => {
                  const ctaElement = ctaSlot as ReactElement<{
                    className?: string;
                    fullWidth?: boolean;
                  }>;
                  return cloneElement(ctaElement, {
                    key: "mobile-cta",
                    className: cn(ctaElement.props?.className, "w-full"),
                    fullWidth: ctaElement.props?.fullWidth ?? true,
                  });
                })()
                : ctaSlot
              : (
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => onOpenChange(false)}
                  href={ctaHref}
                >
                  {ctaLabel}
                </Button>
              )}
          </div>
        </footer>
      </nav>
    </div>
  );

  return createPortal(overlay, document.body);
}
