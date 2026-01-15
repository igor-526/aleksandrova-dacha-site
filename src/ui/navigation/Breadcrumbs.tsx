"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "../atoms/Icon";
import { cn } from "../utils/cn";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const listRef = useRef<HTMLOListElement | null>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const el = listRef.current;
      if (!el) return;
      const hasOverflow = el.scrollWidth > el.clientWidth + 1;
      setIsOverflowing((prev) => (prev === hasOverflow ? prev : hasOverflow));
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [items]);

  let position = 1;

  return (
    <nav
      aria-label="Навигация"
      className={cn(
        "text-sm text-[#2f3600] italic",
        isOverflowing &&
        "relative after:pointer-events-none after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:text-[#8d784f] after:content-['...']",
        className
      )}
    >
      <ol itemScope itemType="http://schema.org/BreadcrumbList"
        ref={listRef}
        className="flex flex-nowrap items-center gap-2 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={
          isOverflowing
            ? {
              maskImage: "linear-gradient(90deg, #000 70%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, #000 70%, transparent)",
            }
            : undefined
        }
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`${item.name}-${index}`}
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              {item.href && !isLast ? (
                <a itemProp="item" rel="canonical" href={item.href} className="text-[#2f3600] hover:underline">
                  {item.name}
                </a>

              ) : (
                <span itemProp="name" className="text-[#8d784f]">{item.name}</span>
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
