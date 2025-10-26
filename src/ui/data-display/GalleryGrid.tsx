import Image from "next/image";
import { cn } from "../utils/cn";

export type GalleryItem = {
  src: string;
  alt?: string;
};

export type GalleryGridProps = {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  onItemClick?: (index: number) => void;
  className?: string;
};

export function GalleryGrid({ items, columns = 3, onItemClick, className }: GalleryGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {items.map((item, index) => (
        <button
          type="button"
          key={item.src}
          className="group relative h-48 overflow-hidden rounded-2xl"
          onClick={() => onItemClick?.(index)}
        >
          <Image
            src={item.src}
            alt={item.alt ?? ""}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:768px) 35vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>
      ))}
    </div>
  );
}
