import { PersonCard, type PersonCardProps } from "../data-display/PersonCard";
import { cn } from "../utils/cn";

export type TeamGridProps = {
  members: PersonCardProps[];
  className?: string;
};

export function TeamGrid({ members, className }: TeamGridProps) {
  return (
    <section className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {members.map((member) => (
        <PersonCard key={member.name} {...member} />
      ))}
    </section>
  );
}
