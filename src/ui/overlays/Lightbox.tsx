"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "../utils/cn";

export type LightboxProps = {
  images: { src: string; alt?: string }[];
  startIndex?: number;
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ images, startIndex = 0, open, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (open) {
      setIndex(startIndex);
    }
  }, [open, startIndex]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") setIndex((prev) => (prev + 1) % images.length);
      if (event.key === "ArrowLeft") setIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    if (open) {
      window.addEventListener("keydown", handler);
    }
    return () => window.removeEventListener("keydown", handler);
  }, [open, images.length, onClose]);

  if (!open || images.length === 0) return null;

  const current = images[index];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/90 text-white">
      <button className="self-end p-6 text-3xl" onClick={onClose} aria-label="Закрыть">
        ×
      </button>
      <div className="relative mx-auto flex w-full max-w-4xl flex-1 items-center justify-center px-6 pb-12">
        <Image
          src={current.src}
          alt={current.alt ?? ""}
          fill
          sizes="(min-width: 768px) 60vw, 90vw"
          className="object-contain"
        />
      </div>
      <div className="flex justify-center gap-4 pb-8">
        {images.map((image, idx) => (
          <button
            key={image.src}
            className={cn(
              "h-16 w-24 overflow-hidden rounded-lg border border-white/30",
              idx === index && "border-white",
            )}
            onClick={() => setIndex(idx)}
            aria-label={`Показать изображение ${idx + 1}`}
          >
            <Image src={image.src} alt={image.alt ?? ""} width={96} height={64} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
