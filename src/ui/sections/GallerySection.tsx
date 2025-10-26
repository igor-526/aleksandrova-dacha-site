"use client";

import { useState } from "react";
import { GalleryGrid, type GalleryGridProps } from "../data-display/GalleryGrid";
import { Lightbox } from "../overlays/Lightbox";
import { cn } from "../utils/cn";

export type GallerySectionProps = {
  title?: string;
  items: GalleryGridProps["items"];
  className?: string;
};

export function GallerySection({ title, items, className }: GallerySectionProps) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <section className={cn("space-y-6", className)}>
      {title && <h2 className="font-serif text-3xl text-[#2f3600]">{title}</h2>}
      <GalleryGrid
        items={items}
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
