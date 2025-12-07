import { ReactNode } from "react";
import { cn } from "@/ui";

export type ComponentsGridProps = {
  components: ReactNode[];
  className?: string;
};

export function ComponentsGrid({ components, className }: ComponentsGridProps) {
  return (
    <section
      className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}
    >
      {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </section>
  );
}
