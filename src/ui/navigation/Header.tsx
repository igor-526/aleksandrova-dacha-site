"use client";

import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../button/Button";
import { Icon } from "../atoms/Icon";
import {
  MobileMenu,
  type ContactLink,
  type MobileMenuLink,
} from "./MobileMenu";
import { cn } from "../utils/cn";

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
  brandName = "Александрова дача",
  brandLogoSrc,
  brandHref = "/",
  sticky = false,
  transparent = false,
  className,
  children,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedSubmenus, setExpandedSubmenus] = useState<
    Record<string, boolean>
  >({});
  const [isMobile, setIsMobile] = useState(false);
  const [isNarrowNav, setIsNarrowNav] = useState(false);
  const [showMobileBar, setShowMobileBar] = useState(true);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCloseDropdown = () => setActiveDropdown(null);
  const handleOpenDropdown = (key: string) => setActiveDropdown(key);
  const toggleSubmenu = (key: string) =>
    setExpandedSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  useEffect(() => {
    setExpandedSubmenus({});
  }, [activeDropdown]);

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
    if (!isMobile) {
      setShowMobileBar(true);
      return;
    }

    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const current = window.scrollY;

      const clearHideTimer = () => {
        if (hideTimer.current) {
          clearTimeout(hideTimer.current);
          hideTimer.current = null;
        }
      };

      if (open) {
        setShowMobileBar(true);
        clearHideTimer();
        lastScrollY.current = current;
        return;
      }

      if (current <= 0) {
        setShowMobileBar(true);
        clearHideTimer();
        lastScrollY.current = 0;
        return;
      }

      if (current > lastScrollY.current + 2) {
        setShowMobileBar(false);
        clearHideTimer();
      } else if (current < lastScrollY.current - 2) {
        setShowMobileBar(true);
        clearHideTimer();
        hideTimer.current = setTimeout(() => setShowMobileBar(false), 3000);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [isMobile, open]);

  const renderCta = (options?: {
    key?: string;
    fullWidth?: boolean;
    className?: string;
  }) => {
    if (children) {
      if (isValidElement(children)) {
        const childElement = children as ReactElement<{
          className?: string;
          fullWidth?: boolean;
        }>;
        return cloneElement(childElement, {
          key: options?.key,
          className: cn(childElement.props?.className, options?.className),
          fullWidth: childElement.props?.fullWidth ?? options?.fullWidth,
        });
      }
      return children;
    }

    return (
      <Button
        href={ctaHref}
        size={options?.fullWidth ? "lg" : isNarrowNav ? "sm" : "md"}
        fullWidth={options?.fullWidth}
        className={options?.className}
      >
        {ctaLabel}
      </Button>
    );
  };

  return (
    <>
      <header
        className={cn(
          "z-30 border-b border-transparent transition-transform duration-300",
          isMobile
            ? "fixed inset-x-0 top-0"
            : sticky
              ? "relative sticky top-0 backdrop-blur"
              : "relative",
          transparent ? "bg-transparent" : "bg-[rgba(246,239,224,0.95)]",
          isMobile
            ? showMobileBar
              ? "translate-y-0"
              : "-translate-y-full"
            : "translate-y-0",
          className
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href={brandHref} className="flex items-center gap-3">
            {brandLogoSrc && (
              <Image
                width={72}
                height={72}
                src={brandLogoSrc}
                alt={brandName || "Logo"}
                className="h-16 w-16 rounded-full object-cover"
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
                      "absolute left-0 top-full w-[320px] pt-3 transition duration-200",
                      isOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    )}
                  >
                      <div className="rounded-2xl border border-[#e6d8bc] bg-[#f8f2e4] p-4 shadow-xl shadow-black/10">
                        <ul className="space-y-3">
                        {link.children!.map((child, childIndex) => {
                          const childHasChildren = Boolean(
                            child.children?.length
                          );
                          const childKey = `${key}-${
                            child.href || child.label
                          }`;
                          const isSubmenuExpanded =
                            expandedSubmenus[childKey] ??
                            (childHasChildren && isOpen && childIndex === 0);
                          return (
                            <li
                              key={child.href || child.label}
                              className="group"
                            >
                                <div className="flex items-start justify-between gap-2">
                                  {childHasChildren ? (
                                    <button
                                      type="button"
                                      aria-expanded={isSubmenuExpanded}
                                      className="flex-1 text-left text-base font-semibold text-[#2f3600] transition-colors group-hover:text-[#1f2600]"
                                      onClick={() => toggleSubmenu(childKey)}
                                    >
                                      {child.label}
                                    </button>
                                  ) : child.href ? (
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
                                </div>

                                {childHasChildren && (
                                  <ul
                                    className={cn(
                                      "mt-2 space-y-2 border-l border-[#d3c6aa] pl-3",
                                      isSubmenuExpanded ? "block" : "hidden"
                                    )}
                                  >
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
        <div className="hidden items-center gap-4 md:flex">{renderCta()}</div>
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
          ctaSlot={renderCta({
            key: "mobile-cta",
            fullWidth: true,
            className: "w-full",
          })}
          phone={phone}
          socials={mobileSocials}
        />
      </header>
      {isMobile && <div className="h-20 md:hidden" aria-hidden="true" />}
    </>
  );
}
