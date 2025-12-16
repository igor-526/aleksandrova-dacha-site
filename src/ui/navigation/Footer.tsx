"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { IconName } from "../atoms/Icon";
import { Icon } from "../atoms/Icon";
import { Container } from "../foundations/Container";
import type { MobileMenuLink } from "./MobileMenu";
import { cn } from "../utils/cn";

type FooterSocial = { label: string; href: string; type?: IconName };

type FooterSchedule = {
  weekday?: { label?: string; hours?: string };
  weekend?: { label?: string; hours?: string };
};

export type FooterProps = {
  brandName?: string;
  brandLogoSrc?: string;
  brandHref?: string;
  address?: string;
  phones?: string[];
  socials?: FooterSocial[];
  schedule?: FooterSchedule;
  navLinks?: MobileMenuLink[];
  feedbackSlot?: ReactNode;
  className?: string;
};

const sanitizePhone = (phone: string) => phone.replace(/[^+\d]/g, "");

function FooterNavList({ links = [] }: { links?: MobileMenuLink[] }) {
  const [openPath, setOpenPath] = useState<string[]>([]);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpenPath([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggle = (level: number, key: string) => {
    setOpenPath((prev) =>
      prev[level] === key ? prev.slice(0, level) : [...prev.slice(0, level), key]
    );
  };

  const renderNested = (items: MobileMenuLink[], level = 0) => (
    <ul className={cn("space-y-1", level === 0 ? "" : "pl-2")}>
      {items.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const key = item.href || item.label;
        const isOpen = openPath[level] === key;

        if (!hasChildren) {
          return (
            <li key={key}>
              {item.href ? (
                <a
                  href={item.href}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm text-[#f6efe0] transition hover:bg-[#30370d] hover:text-white"
                >
                  <span>{item.label}</span>
                </a>
              ) : (
                <span className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-sm text-[#f6efe0]">
                  <span>{item.label}</span>
                </span>
              )}
            </li>
          );
        }

        return (
          <li key={key} className="relative">
            <button
              type="button"
              className={cn(
                "flex w-full items-center justify-between gap-2 rounded-lg px-2.5 text-left text-sm text-[#f6efe0] transition hover:bg-[#30370d] hover:text-white",
                hasChildren ? "py-2.5 font-semibold" : "py-1.5 font-medium"
              )}
              aria-expanded={isOpen}
              onClick={(event) => {
                event.stopPropagation();
                toggle(level, key);
              }}
            >
              <span className="truncate">{item.label}</span>
              <Icon
                name={level === 0 ? "chevron-right" : "chevron-down"}
                width={14}
                height={14}
                className={cn(
                  "transition duration-200",
                  level === 0 ? (isOpen && "rotate-180") : isOpen && "-rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                isOpen ? "block" : "hidden",
                level === 0
                  ? "absolute left-full top-0 z-10 ml-2 mt-0 w-max max-w-xs whitespace-nowrap rounded-lg border border-[#3d431c] bg-[#262b00] px-2 py-1.5 text-[11px] text-[#f6efe0] shadow-lg"
                  : "mt-1.5 w-full rounded-lg border border-[#3d431c] bg-[#262b00] px-2 py-1.5 text-[11px] text-[#f6efe0] shadow-lg"
              )}
              onClick={(event) => event.stopPropagation()}
            >
              {renderNested(item.children!, level + 1)}
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div
      ref={rootRef}
      className="space-y-1"
      onClick={(event) => event.stopPropagation()}
    >
      {renderNested(links)}
    </div>
  );
}

export function Footer({
  brandName,
  brandLogoSrc,
  brandHref = "/",
  address,
  phones = [],
  socials = [],
  schedule,
  navLinks = [],
  feedbackSlot,
  className,
}: FooterProps) {
  const displayName = brandName || "Александрова Дача";

  return (
    <footer className={cn("bg-[#2f3600] text-[#f6efe0]", className)}>
      <Container className="grid justify-items-center gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div className="flex flex-col items-center justify-center space-y-7 md:col-span-2 lg:col-span-1">
          {(brandLogoSrc || displayName) && (
            <div className="flex items-center gap-4 -mt-6">
              {brandLogoSrc && (
                <a
                  href={brandHref}
                  className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[#3d431c] bg-[#262b00]"
                >
                  <Image
                    src={brandLogoSrc}
                    alt={displayName}
                    width={72}
                    height={72}
                    className="h-full w-full object-cover"
                  />
                </a>
              )}
              {displayName && (
                <a
                  href={brandHref}
                  className="font-serif text-2xl text-[#f6efe0] transition hover:text-white"
                >
                  {displayName}
                </a>
              )}
            </div>
          )}

          {address && (
            <p className="flex items-start gap-3 text-sm leading-relaxed text-[#f0e7cf]">
              <Icon name="location" width={18} height={18} className="mt-1" />
              {address}
            </p>
          )}

          {(schedule?.weekday?.hours || schedule?.weekend?.hours) && (
            <div className="space-y-2 text-sm text-[#f6efe0]">
              <div className="flex items-center gap-2 font-semibold uppercase tracking-[0.18em] text-[#e4d8bd]">
                <Icon name="calendar" width={18} height={18} />
                График работы
              </div>
              {schedule.weekday?.hours && (
                <div className="flex items-center gap-3">
                  <span className="w-28 text-[#e4d8bd]">
                    {schedule.weekday.label || "По будням"}
                  </span>
                  <span className="font-semibold">
                    {schedule.weekday.hours}
                  </span>
                </div>
              )}
              {schedule.weekend?.hours && (
                <div className="flex items-center gap-3">
                  <span className="w-28 text-[#e4d8bd]">
                    {schedule.weekend.label || "Выходные"}
                  </span>
                  <span className="font-semibold">
                    {schedule.weekend.hours}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="hidden w-auto space-y-3 mt-4 md:col-span-1 md:block lg:col-span-1 lg:mt-6 lg:self-start">
          <h3 className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#e4d8bd]">
            Навигация
          </h3>
          <FooterNavList links={navLinks} />
        </div>

        <div className="flex w-full flex-col items-center justify-start space-y-4 mt-4 md:col-span-1 lg:col-span-1 lg:mt-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e4d8bd]">
            Контакты
          </h3>
          {phones.length > 0 && (
            <div className="space-y-2 text-sm">
              {phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${sanitizePhone(phone)}`}
                  className="flex items-center gap-2 text-[#f6efe0] transition hover:text-white"
                >
                  <Icon name="phone" width={16} height={16} />
                  {phone}
                </a>
              ))}
            </div>
          )}

          {socials.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#e4d8bd]">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="flex items-center gap-2 rounded-full border border-[#3d431c] px-3 py-2 transition hover:border-[#f6efe0] hover:text-white"
                  target={
                    social.type === "vk" || social.type === "telegram"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.type === "vk" || social.type === "telegram"
                      ? "noreferrer"
                      : undefined
                  }
                >
                  {social.type && (
                    <Icon name={social.type} width={16} height={16} />
                  )}
                  {social.label}
                </a>
              ))}
            </div>
          )}

          {feedbackSlot && (
            <div className="pt-1">
              {feedbackSlot}
            </div>
          )}
        </div>
      </Container>
      <div className="border-t border-[#3d431c] py-4 text-center text-xs text-[#c9b585]">
        © {new Date().getFullYear()} {displayName}. Все права защищены.
      </div>
    </footer>
  );
}
