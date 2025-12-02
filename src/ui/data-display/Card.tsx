import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export type CardProps = {
  title?: string;
  content?: string;
  media?: ReactNode;
  variant?: "default" | "outlined" | "soft";
  actions?: ReactNode;
  children?: ReactNode;
  mediaPosition?: "top" | "left" | "right";
  classNameMedia?: string;
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
  children,
  mediaPosition = "top",
  classNameMedia,
  className,
}: CardProps) {
  const isSideMedia = mediaPosition === "left" || mediaPosition === "right";
  const mediaNode = media ? (
    <div className={classNameMedia}>{media}</div>
  ) : null;

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl px-6 py-5 text-[#2f3600]",
        variantMap[variant],
        className
      )}
    >
      {isSideMedia ? (
        <div className="flex flex-1 gap-4">
          {mediaPosition === "left" && mediaNode}
          <div className="flex flex-1 flex-col">
            {(title || content) && (
              <div className="space-y-1.5 mb-1.5">
                {title && <h3 className="font-serif text-2xl">{title}</h3>}
                {content && (
                  <p className="text-sm leading-relaxed text-[#4b4d2f]">
                    {content}
                  </p>
                )}
              </div>
            )}

            {children && <div className="mt-auto">{children}</div>}
          </div>
          {mediaPosition === "right" && mediaNode}
        </div>
      ) : (
        <>
          {mediaNode}
          <div className="flex flex-1 flex-col">
            {(title || content) && (
              <div className="space-y-1.5 mb-1.5">
                {title && <h3 className="font-serif text-2xl">{title}</h3>}
                {content && (
                  <p className="text-sm leading-relaxed text-[#4b4d2f]">
                    {content}
                  </p>
                )}
              </div>
            )}

            {children && <div className="mt-auto">{children}</div>}
          </div>
        </>
      )}

      {actions && <div className="pt-2">{actions}</div>}
    </article>
  );
}
