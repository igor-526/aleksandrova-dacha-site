"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type LightboxProps = {
  images: { src: string; alt?: string }[];
  startIndex?: number;
  open: boolean;
  onClose: () => void;
};

export function Lightbox({
  images,
  startIndex = 0,
  open,
  onClose,
}: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  const showPrevious = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () => setIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (open) {
      setIndex(startIndex);
    }
  }, [open, startIndex]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
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
      <div className="pointer-events-none absolute left-6 top-6 z-10 rounded-full bg-black/35 px-4 py-2 text-sm font-medium text-white">
        {index + 1} из {images.length}
      </div>
      <button
        className="self-end p-6 text-3xl"
        onClick={onClose}
        aria-label="Закрыть"
      >
        ×
      </button>
      <div className="relative mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-6 pb-12">
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="absolute left-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20"
              onClick={showPrevious}
              aria-label="Предыдущее фото"
            >
              ←
            </button>
            <button
              type="button"
              className="absolute right-6 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition-colors hover:bg-white/20"
              onClick={showNext}
              aria-label="Следующее фото"
            >
              →
            </button>
          </>
        )}
        <Image
          src={current.src}
          alt={current.alt ?? ""}
          fill
          sizes="(min-width: 768px) 60vw, 90vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
