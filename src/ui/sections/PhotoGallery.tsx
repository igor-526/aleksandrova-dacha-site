import { GalleryGrid, type GalleryGridProps } from "../data-display/GalleryGrid";
import { cn } from "../utils/cn";

export type PhotoGalleryProps = {
  title: string;
  description?: string;
  items: GalleryGridProps["items"];
  className?: string;
};

export function PhotoGallery({ title, description, items, className }: PhotoGalleryProps) {
  return (
    <section className={cn("space-y-5", className)}>
      <div>
        <h2 className="font-serif text-3xl text-[#2f3600]">{title}</h2>
        {description && <p className="mt-2 text-sm text-[#4b4d2f]">{description}</p>}
      </div>
      <GalleryGrid items={items} />
    </section>
  );
}
