"use client";

import { useEffect, useState } from "react";
import {
  GalleryGrid,
  type GalleryGridProps,
} from "../data-display/GalleryGrid";
import { Lightbox } from "../overlays/Lightbox";
import { cn } from "../utils/cn";

export type GallerySectionProps = {
  title?: string;
  items: GalleryGridProps["items"];
  columns?: GalleryGridProps["columns"];
  ratio?: GalleryGridProps["ratio"];
  rounded?: GalleryGridProps["rounded"];
  className?: string;
};

export function GallerySection({
  title,
  items,
  columns,
  ratio,
  rounded = "2xl",
  className,
}: GallerySectionProps) {
  const [index, setIndex] = useState<number | null>(null);
  const [visibleColumns, setVisibleColumns] = useState(1);

  const resolveColumns = (width: number) => {
    const maxColumns = columns ?? 3;

    if (width >= 1024) return maxColumns;
    if (width >= 640) return Math.min(maxColumns, 2);
    return 1;
  };

  useEffect(() => {
    const handleResize = () =>
      setVisibleColumns(resolveColumns(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);

  const visibleItems = items.slice(0, visibleColumns);

  return (
    <section className={cn("space-y-6", className)}>
      {title && <h2 className="font-serif text-3xl text-[#2f3600]">{title}</h2>}
      <GalleryGrid
        items={visibleItems}
        columns={columns}
        ratio={ratio}
        rounded={rounded}
        onItemClick={(idx) => setIndex(idx)}
      />
      <Lightbox
        images={items}
        startIndex={index ?? 0}
        open={index !== null}
        onClose={() => setIndex(null)}
      />
    </section>
  );
}
