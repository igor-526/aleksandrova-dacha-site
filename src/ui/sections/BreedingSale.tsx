import { AnimalCard, type AnimalCardProps } from "../data-display/AnimalCard";
import { cn } from "../utils/cn";

export type BreedingSaleProps = {
  animals: AnimalCardProps[];
  description?: string;
  className?: string;
};

export function BreedingSale({ animals, description, className }: BreedingSaleProps) {
  return (
    <section className={cn("space-y-6", className)}>
      {description && <p className="text-sm text-[#4b4d2f]">{description}</p>}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {animals.map((animal) => (
          <AnimalCard key={animal.name} {...animal} />
        ))}
      </div>
    </section>
  );
}
