import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export type QuickServiceItem = {
  id: string;
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
};

export type QuickServicesProps = {
  heading?: string;
  items: QuickServiceItem[];
  className?: string;
};

export function QuickServices({
  heading,
  items,
  className,
}: QuickServicesProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="text-center">
        <h2 className="font-serif text-3xl text-[#2f3600] sm:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const content = (
            <div
              className={cn(
                "flex h-full flex-col gap-4 rounded-3xl border border-[#d3c6aa] bg-[#f8f2e4] p-6 shadow-[0_12px_24px_rgba(56,64,0,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(56,64,0,0.12)]"
              )}
            >
              {item.icon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e4d8bd] text-[#2f3600]">
                  {item.icon}
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#2f3600]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4b4d2f]">
                  {item.description}
                </p>
              </div>
              <div className="mt-auto h-0.5 w-12 rounded-full bg-[#c9b585]" />
            </div>
          );

          return item.href ? (
            <Link
              key={item.id}
              rel="canonical"
              href={item.href}
              className="block focus:outline-none"
            >
              {content}
            </Link>
          ) : (
            <div key={item.id}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
