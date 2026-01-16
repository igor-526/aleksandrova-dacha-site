"use client";

import { useEffect, useRef } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "../utils/cn";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  storageKey?: string;
};

export function Breadcrumbs({ items, className, storageKey }: BreadcrumbsProps) {
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    const checkOverflow = () => {
      const el = listRef.current;
      if (!el) return;
      const hasOverflow = el.scrollWidth > el.clientWidth + 1;
      if (hasOverflow) {
        requestAnimationFrame(() => {
          el.scrollLeft = el.scrollWidth;
        });
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [items]);

  useEffect(() => {
    if (!storageKey) return;
    try {
      const storedItems = items.map((item, index) => {
        const isLast = index === items.length - 1;
        if (isLast && !item.href) {
          return { ...item, href: window.location.pathname };
        }
        return item;
      });
      sessionStorage.setItem(storageKey, JSON.stringify(storedItems));
    } catch {
      // ignore write errors (privacy mode, quota)
    }
  }, [items, storageKey]);

  let position = 1;

  return (
    <nav
      aria-label="Навигация"
      className={cn("text-sm text-[#2f3600] italic", className)}
    >
      <ol itemScope itemType="http://schema.org/BreadcrumbList"
        ref={listRef}
        className="flex flex-nowrap items-center gap-2 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.name}-${index}`}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
              className="flex items-center gap-2 last:font-semibold"
            >
              {item.href && !isLast ? (
                <a itemProp="item" rel="canonical" href={item.href} className="text-[#2f3600] hover:underline">
                  {item.name}
                </a>

              ) : (
                <span itemProp="name" className="text-[#2f3600]">
                  {item.name}
                </span>
              )}
              <meta itemProp="position" content={String(position++)} />
              {!isLast && (
                <Icon
                  name="arrow-right"
                  width={14}
                  height={14}
                  className="text-[#c9b585]"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
