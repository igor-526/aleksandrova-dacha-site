import Image from "next/image";
import { cn } from "../utils/cn";

export type PortfolioItem = {
  src: string;
  alt?: string;
  title?: string;
};

export type PortfolioGridProps = {
  items: PortfolioItem[];
  className?: string;
};

export function PortfolioGrid({ items, className }: PortfolioGridProps) {
  return (
    <section className={cn("grid gap-6 md:grid-cols-2", className)}>
      {items.map((item) => (
        <figure key={item.src} className="space-y-3">
          <div className="relative h-80 overflow-hidden rounded-3xl">
            <Image src={item.src} alt={item.alt ?? ""} fill sizes="(min-width:768px) 45vw, 90vw" className="object-cover" />
          </div>
          {item.title && <figcaption className="text-sm text-[#4b4d2f]">{item.title}</figcaption>}
        </figure>
      ))}
    </section>
  );
}
