import { PriceCard, type PriceCardProps } from "../data-display/PriceCard";
import { cn } from "../utils/cn";

export type PackagesProps = {
  title?: string;
  packages: PriceCardProps[];
  className?: string;
};

export function Packages({ title, packages, className }: PackagesProps) {
  return (
    <section className={cn("space-y-6", className)}>
      {title && <h2 className="font-serif text-3xl text-[#2f3600]">{title}</h2>}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {packages.map((pkg) => (
          <PriceCard key={pkg.title} {...pkg} />
        ))}
      </div>
    </section>
  );
}
