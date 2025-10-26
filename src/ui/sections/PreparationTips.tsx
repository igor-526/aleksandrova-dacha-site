import { cn } from "../utils/cn";

export type PreparationTipsProps = {
  title: string;
  tips: { heading: string; text: string }[];
  className?: string;
};

export function PreparationTips({ title, tips, className }: PreparationTipsProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <h2 className="font-serif text-3xl text-[#2f3600]">{title}</h2>
      <div className="space-y-3">
        {tips.map((tip) => (
          <div key={tip.heading} className="rounded-2xl bg-[#f0e7cf] p-4">
            <h3 className="text-lg font-semibold text-[#2f3600]">{tip.heading}</h3>
            <p className="mt-2 text-sm text-[#4b4d2f]">{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
