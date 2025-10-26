import { AnimalCard, type AnimalCardProps } from "../data-display/AnimalCard";
import { cn } from "../utils/cn";

export type HorsesShowcaseProps = {
  animals: AnimalCardProps[];
  className?: string;
};

export function HorsesShowcase({ animals, className }: HorsesShowcaseProps) {
  return (
    <section className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {animals.map((animal) => (
        <AnimalCard key={animal.name} {...animal} />
      ))}
    </section>
  );
}
