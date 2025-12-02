import { cn } from "@/ui";
import { ServiceCard, ServiceCardProps } from "./ServiceCard";

export type ServicesListProps = {
  heading?: string;
  items: ServiceCardProps[];
  className?: string;
  mediaPosition?: "top" | "left" | "right";
  classNameMedia?: string;
  columns?: 1 | 2 | 3;
};

export function ServicesList({
  heading,
  items,
  className,
  mediaPosition,
  classNameMedia,
  columns = 3,
}: ServicesListProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="text-center">
        <h2 className="font-serif text-3xl text-[#2f3600] sm:text-4xl">
          {heading}
        </h2>
      </div>
      <div
        className={cn(
          "grid gap-6 ",
          columns === 1 && "sm:grid-cols-1",
          columns === 2 && "sm:grid-cols-1 md:grid-cols-2",
          columns === 3 && "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        {items.map((item) => (
          <ServiceCard
            key={item.name}
            {...item}
            mediaPosition={mediaPosition}
            classNameMedia={classNameMedia}
          />
        ))}
      </div>
    </section>
  );
}
