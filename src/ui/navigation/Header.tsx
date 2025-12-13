"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "../button/Button";
import { Icon } from "../atoms/Icon";
import {
  MobileMenu,
  type MobileMenuLink,
  type ContactLink,
} from "./MobileMenu";
import { cn } from "../utils/cn";
import Link from "next/link";
import Image from "next/image";

export type HeaderLink = MobileMenuLink;
export type HeaderProps = {
  links: HeaderLink[];
  phone?: string;
  mobileSocials?: ContactLink[];
  ctaLabel?: string;
  ctaHref?: string;
  brandName?: string;
  brandLogoSrc?: string;
  brandHref?: string;
  sticky?: boolean;
  transparent?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Header({
  links,
  phone,
  mobileSocials,
  ctaLabel = "Записаться",
  ctaHref = "#booking",
  brandName = "Александрова Дача",
  brandLogoSrc,
  brandHref = "/",
  sticky = false,
  transparent = false,
  className,
  children,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrowNav, setIsNarrowNav] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(true);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCloseDropdown = () => setActiveDropdown(null);
  const handleOpenDropdown = (key: string) => setActiveDropdown(key);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setIsMobile(mobile);
      setIsNarrowNav(width < 950);
      if (!mobile) {
        setShowMobileBar(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile || open) return;
      const current = window.scrollY;
      if (current <= 0) {
        setShowMobileBar(true);
        if (hideTimer.current) {
          clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
        lastScrollY.current = 0;
        return;
      }

      const isScrollingUp = current < lastScrollY.current - 4;
      const isScrollingDown = current > lastScrollY.current + 4;

      if (isScrollingUp) {
        setShowMobileBar(true);
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setShowMobileBar(false), 5000);
      } else if (isScrollingDown) {
        setShowMobileBar(false);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [isMobile, open]);

  useEffect(() => {
    if (open) {
      setShowMobileBar(true);
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    }
  }, [open]);

  useEffect(() => {
    if (!isMobile || open) return;
    setShowMobileBar(true);
    lastScrollY.current = window.scrollY;
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    if (window.scrollY > 0) {
      hideTimer.current = setTimeout(() => setShowMobileBar(false), 5000);
    }

    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
    };
  }, [open, isMobile]);

  return (
    <header
      className={cn(
        "relative z-30 border-b border-transparent transition-transform duration-300",
        sticky && "sticky top-0 backdrop-blur",
        transparent ? "bg-transparent" : "bg-[rgba(246,239,224,0.95)]",
        isMobile
          ? showMobileBar
            ? "translate-y-0"
            : "-translate-y-full"
          : "translate-y-0",
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={brandHref} className="flex items-center gap-3">
          {brandLogoSrc && (
            <Image
              width={48}
              height={48}
              src={brandLogoSrc}
              alt={brandName || "Logo"}
              className="h-12 w-12 rounded-full object-cover"
              priority
            />
          )}
          <span className="font-serif text-xl text-[#2f3600] sm:text-2xl">
            {brandName}
          </span>
        </Link>

        <nav
          className="relative z-10 hidden items-center gap-1 lg:gap-6 text-sm font-medium text-[#2f3600] md:flex"
          onMouseLeave={handleCloseDropdown}
        >
          {links.map((link) => {
            const hasChildren = Boolean(link.children?.length);
            const key = link.href || link.label;
            const isOpen = activeDropdown === key;

            return (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => hasChildren && handleOpenDropdown(key)}
                onFocus={() => hasChildren && handleOpenDropdown(key)}
              >
                {link.href ? (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-full px-1 md:px-3 lg:px-3 py-2 transition hover:bg-[#f1e4ca] hover:text-[#1f2600]"
                  >
                    <span>{link.label}</span>
                    {hasChildren && (
                      <Icon name="chevron-down" width={16} height={16} />
                    )}
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 rounded-full px-1 md:px-3 lg:px-3 py-2 transition hover:bg-[#f1e4ca] hover:text-[#1f2600]">
                    <span>{link.label}</span>
                    {hasChildren && (
                      <Icon name="chevron-down" width={16} height={16} />
                    )}
                  </span>
                )}

                {hasChildren && (
                  <div
                    className={cn(
                      "absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-3 transition duration-200",
                      isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    )}
                  >
                    <div className="rounded-2xl border border-[#e6d8bc] bg-[#f8f2e4] p-4 shadow-xl shadow-black/10">
                      <ul className="space-y-3">
                        {link.children!.map((child) => {
                          const childHasChildren = Boolean(
                            child.children?.length
                          );
                          return (
                            <li
                              key={child.href || child.label}
                              className="group"
                            >
                              <div className="flex items-start justify-between gap-2">
                                {child.href ? (
                                  <Link
                                    href={child.href}
                                    className="flex-1 text-base font-semibold text-[#2f3600] transition-colors group-hover:text-[#1f2600]"
                                  >
                                    {child.label}
                                  </Link>
                                ) : (
                                  <span className="flex-1 text-base font-semibold text-[#2f3600]">
                                    {child.label}
                                  </span>
                                )}
                                {childHasChildren && (
                                  <Icon
                                    name="arrow-right"
                                    width={16}
                                    height={16}
                                    className="text-[#8d7a4c]"
                                  />
                                )}
                              </div>

                              {childHasChildren && (
                                <ul className="mt-2 space-y-2 border-l border-[#d3c6aa] pl-3">
                                  {child.children!.map((nested) => (
                                    <li key={nested.href || nested.label}>
                                      {nested.href ? (
                                        <Link
                                          href={nested.href}
                                          className="text-sm text-[#3a3f1c] transition-colors hover:text-[#1f2600]"
                                        >
                                          {nested.label}
                                        </Link>
                                      ) : (
                                        <span className="text-sm text-[#3a3f1c]">
                                          {nested.label}
                                        </span>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          {phone && (
            <Link
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-[#2f3600]"
            >
              <Icon name="phone" width={18} height={18} />
              {phone}
            </Link>
          )}
          {children ?? (
            <Button href={ctaHref} size={isNarrowNav ? "sm" : "md"}>
              {ctaLabel}
            </Button>
          )}
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
      <MobileMenu
        open={open}
        onOpenChange={setOpen}
        links={links}
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        phone={phone}
        socials={mobileSocials}
      />
    </header>
  );
}
