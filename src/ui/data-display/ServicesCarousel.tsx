"use client";

import { Carousel } from "@/ui";
import type { ReactNode } from "react";

export type ServicesCarouselData = {
  items: ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
};

type ServicesCarouselProps = ServicesCarouselData;

const ServicesCarousel = ({ items, autoPlay, interval, className }: ServicesCarouselProps) => {
  if (!items || items.length === 0) return null;

  return (
    <Carousel
      items={items}
      renderItem={(item) => (
        <div className="rounded-lg bg-[#f0e7cf] p-6 text-sm md:text-md lg:text-lg text-center shadow-md">
          {item}
        </div>
      )}
      autoPlay={autoPlay}
      interval={interval}
      className={className}
    />
  );
};

export default ServicesCarousel;
