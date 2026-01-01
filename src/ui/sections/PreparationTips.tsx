import { cn } from "../utils/cn";

export type PreparationTipsProps = {
  title: string;
  tips: { heading: string; text: string }[];
  columns?: 1 | 2 | 3;
  className?: string;
};

export function PreparationTips({
  title,
  tips,
  columns = 1,
  className,
}: PreparationTipsProps) {
  const tipsLayout =
    columns === 3
      ? "grid gap-3 md:grid-cols-2 xl:grid-cols-3"
      : columns === 2
      ? "grid gap-3 md:grid-cols-2"
      : "space-y-3";

  return (
    <section className={cn("space-y-4", className)}>
      <h2 className="font-serif text-3xl text-[#2f3600] px-6">{title}</h2>
      <div className={tipsLayout}>
        {tips.map((tip) => (
          <div key={tip.heading} className="rounded-2xl bg-[#f0e7cf] p-4">
            <h3 className="text-lg font-semibold text-[#2f3600]">
              {tip.heading}
            </h3>
            <p className="mt-2 text-sm text-[#4b4d2f]">{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
