import { cn } from "../utils/cn";

export type ProgramsIntroProps = {
  title: string;
  description: string;
  stats?: { label: string; value: string }[];
  className?: string;
};

export function ProgramsIntro({ title, description, stats = [], className }: ProgramsIntroProps) {
  return (
    <section className={cn("rounded-3xl bg-[#fdfaf4] p-8 shadow-[0_24px_48px_rgba(56,64,0,0.08)]", className)}>
      <h2 className="font-serif text-3xl text-[#2f3600]">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-[#4b4d2f]">{description}</p>
      {stats.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-[#f0e7cf] p-4 text-center">
              <div className="text-3xl font-semibold text-[#2f3600]">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#8d784f]">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
