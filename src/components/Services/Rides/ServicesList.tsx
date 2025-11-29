import { cn } from "@/ui";
import { ServiceCard, ServiceCardProps } from "./ServiceCard";

export type ServicesListProps = {
  heading?: string;
  items: ServiceCardProps[];
  className?: string;
};

export function ServicesList({ heading, items, className }: ServicesListProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="text-center">
        <h2 className="font-serif text-3xl text-[#2f3600] sm:text-4xl">
          {heading}
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ServiceCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
