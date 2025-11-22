"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
};

export function Carousel<T>({
  items,
  renderItem,
  autoPlay = false,
  interval = 5000,
  className,
}: CarouselProps<T>) {
  const [index, setIndex] = useState(0);
  const length = items.length;

  useEffect(() => {
    if (!autoPlay || length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, length]);

  const currentItem = useMemo(() => items[index], [items, index]);

  if (length === 0) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-[#f8f2e4] p-6",
        className
      )}
    >
      <div className="transition-all duration-500" key={index}>
        {renderItem(currentItem, index)}
      </div>
      {length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2"
            onClick={() => setIndex((prev) => (prev - 1 + length) % length)}
          >
            ←
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2"
            onClick={() => setIndex((prev) => (prev + 1) % length)}
          >
            →
          </Button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={cn(
                  "h-2 w-2 rounded-full bg-[#d3c6aa]",
                  idx === index && "w-4 bg-[#384000]"
                )}
                onClick={() => setIndex(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
