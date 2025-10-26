import { cn } from "../utils/cn";

export type MissionProps = {
  title: string;
  points: { heading: string; text: string }[];
  className?: string;
};

export function Mission({ title, points, className }: MissionProps) {
  return (
    <section className={cn("rounded-3xl border border-[#d3c6aa] bg-[#f8f2e4] p-8", className)}>
      <h2 className="font-serif text-3xl text-[#2f3600]">{title}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {points.map((point) => (
          <div key={point.heading} className="space-y-2">
            <h3 className="text-lg font-semibold text-[#2f3600]">{point.heading}</h3>
            <p className="text-sm text-[#4b4d2f]">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
