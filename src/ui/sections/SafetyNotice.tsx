import { GallerySection, type GallerySectionProps } from "./GallerySection";
import { cn } from "../utils/cn";

export type SafetyNoticeProps = {
  title: string;
  items: string[];
  colorVariant?: "f0e7cf" | "f6efe0" | "fdfaf4";
  withInnerShadow?: boolean;
  className?: string;
  gallerySection?: (GallerySectionProps & { position?: "start" | "end" }) | null;
};

export function SafetyNotice({
  title,
  items,
  colorVariant = "f6efe0",
  withInnerShadow,
  className,
  gallerySection,
}: SafetyNoticeProps) {
  const variantStyles = {
    f0e7cf: "bg-[#f0e7cf]",
    f6efe0: "bg-[#f6efe0]",
    fdfaf4: "bg-[#fdfaf4]",
  } as const;
  const showInnerShadow = Boolean(withInnerShadow);
  const galleryPosition = gallerySection?.position ?? "end";
  const renderGallery = gallerySection
    ? (() => {
        const { position: _position, ...galleryProps } = gallerySection;
        return (
          <GallerySection
            {...galleryProps}
            columns={galleryProps.columns ?? 3}
            className={cn(
              "w-full h-[150px] sm:h-[200px]",
              galleryPosition === "start" ? "mb-6" : "mt-6",
              gallerySection.className
            )}
          />
        );
      })()
    : null;

  return (
    <section
      className={cn(
        "rounded-3xl p-6",
        variantStyles[colorVariant],
        showInnerShadow &&
          "shadow-[inset_0_1px_2px_rgba(47,54,0,0.16),inset_1px_0_2px_rgba(47,54,0,0.12),inset_0_-1px_2px_rgba(255,255,255,0.6),inset_-1px_0_2px_rgba(255,255,255,0.5)]",
        className
      )}
    >
      {galleryPosition === "start" ? renderGallery : null}

      <div className="flex items-start gap-4">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl text-[#2f3600]">{title}</h3>
          <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[#4b4d2f]">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {galleryPosition === "end" ? renderGallery : null}
    </section>
  );
}
