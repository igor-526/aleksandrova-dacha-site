import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export type CardProps = {
  title?: string;
  content?: string;
  media?: ReactNode;
  variant?: "default" | "outlined" | "soft";
  actions?: ReactNode;
  child?: ReactNode;
  className?: string;
};

const variantMap: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-[#f8f2e4] shadow-[0_12px_24px_rgba(56,64,0,0.08)]",
  outlined: "border border-[#d3c6aa] bg-white",
  soft: "bg-[#f0e7cf]",
};

export function Card({
  title,
  content,
  media,
  variant = "default",
  actions,
  child,
  className,
}: CardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl px-6 py-5 text-[#2f3600]",
        variantMap[variant],
        className
      )}
    >
      {media}
      {(title || content) && (
        <div className="flex h-full flex-col justify-between">
          {title && <h3 className="font-serif text-2xl">{title}</h3>}
          {content && (
            <p className="text-sm leading-relaxed text-[#4b4d2f]">{content}</p>
          )}
          {child}
        </div>
      )}

      {actions && <div className="mt-auto pt-2">{actions}</div>}
    </article>
  );
}
