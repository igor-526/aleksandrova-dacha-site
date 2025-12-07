import type { CSSProperties, ReactNode } from "react";
import { cn } from "../utils/cn";
import {
  GallerySection,
  type GallerySectionProps,
} from "../sections/GallerySection";

export type MediaPosition = "top" | "left" | "right";
export type Breakpoint = "base" | "sm" | "md" | "lg" | "xl" | "2xl";
export type ResponsiveMediaPosition =
  | MediaPosition
  | Partial<Record<Breakpoint, MediaPosition>>;

export type CardProps = {
  title?: string;
  content?: string;
  media?: ReactNode;
  variant?: "default" | "outlined" | "soft";
  actions?: ReactNode;
  children?: ReactNode;
  mediaPosition?: ResponsiveMediaPosition;
  gallery?: boolean;
  galleryItems?: GallerySectionProps["items"];
  classNameMedia?: string;
  mediaWidth?: "1/3" | "1/2" | "full" | `${number}px` | number | string;
  mediaHeight?: "1/3" | "1/2" | "full" | `${number}px` | number | string;
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
  gallery = false,
  galleryItems,
  classNameMedia,
  mediaWidth,
  mediaHeight,
  className,
}: CardProps) {
  const breakpoints: Breakpoint[] = ["base", "sm", "md", "lg", "xl", "2xl"];
  const mediaPositionMap: Partial<Record<Breakpoint, MediaPosition>> =
    typeof mediaPosition === "string"
      ? { base: mediaPosition }
      : mediaPosition ?? {};

  // Cascade responsive values so a setting on a smaller breakpoint is reused until overridden.
  const resolvedPositions = breakpoints.reduce<
    Record<Breakpoint, MediaPosition>
  >((acc, bp, index) => {
    const previous =
      index === 0
        ? mediaPositionMap.base ?? "top"
        : acc[breakpoints[index - 1]];
    acc[bp] = mediaPositionMap[bp] ?? previous;
    return acc;
  }, {} as Record<Breakpoint, MediaPosition>);

  const dimensionToCss = (
    value?: CardProps["mediaWidth"]
  ): string | undefined => {
    if (value === "1/3") return "33.3333%";
    if (value === "1/2") return "50%";
    if (value === "full") return "100%";
    if (typeof value === "number") return `${value}px`;
    return value;
  };

  const mediaStyle: CSSProperties = {
    width: dimensionToCss(mediaWidth),
    height: dimensionToCss(mediaHeight),
  };

  const galleryContent =
    galleryItems ??
    (Array.isArray(media)
      ? (media as GallerySectionProps["items"])
      : undefined);

  // Cards display only the first gallery item to keep a single preview image.
  const singleGalleryItem = (galleryContent ?? []).slice(0, 1);

  const mediaContent = gallery ? (
    <GallerySection items={singleGalleryItem} columns={1} />
  ) : (
    media
  );

  const shouldRenderMedia = gallery || Boolean(media);

  const mediaNode = shouldRenderMedia ? mediaContent : null;

  const layoutClasses = ["flex", "flex-1", "gap-4"];
  const mediaOrder: string[] = [];
  const contentOrder: string[] = ["flex", "flex-1", "flex-col"];

  breakpoints.forEach((bp) => {
    const prefix = bp === "base" ? "" : `${bp}:`;
    const pos = resolvedPositions[bp];
    if (pos === "left") {
      layoutClasses.push(`${prefix}flex-row`);
      mediaOrder.push(`${prefix}order-1`);
      contentOrder.push(`${prefix}order-2`);
    } else if (pos === "right") {
      layoutClasses.push(`${prefix}flex-row`);
      mediaOrder.push(`${prefix}order-2`);
      contentOrder.push(`${prefix}order-1`);
    } else {
      layoutClasses.push(`${prefix}flex-col`);
      mediaOrder.push(`${prefix}order-1`);
      contentOrder.push(`${prefix}order-2`);
    }
  });

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-3xl px-6 py-5 text-[#2f3600] border border-[#bcc76e]",
        variantMap[variant],
        className
      )}
    >
      <div className={cn(...layoutClasses)}>
        {mediaNode && (
          <div
            className={cn("shrink-0", ...mediaOrder, classNameMedia)}
            style={mediaStyle}
          >
            {mediaNode}
          </div>
        )}
        <div className={cn(...contentOrder)}>
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
      </div>

      {actions && <div className="pt-2">{actions}</div>}
    </article>
  );
}
