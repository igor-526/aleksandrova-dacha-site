import { cn } from "../utils/cn";

export type MissionProps = {
  title: string;
  points: { heading: string; text: string }[];
  className?: string;
  colorVariant?: "f0e7cf" | "f6efe0" | "fdfaf4" | "f8f2e4";
  withInnerShadow?: boolean;
};

export function Mission({
  title,
  points,
  className,
  colorVariant = "f8f2e4",
  withInnerShadow,
}: MissionProps) {
  const variantStyles = {
    f0e7cf: "bg-[#f0e7cf]",
    f6efe0: "bg-[#f6efe0]",
    fdfaf4: "bg-[#fdfaf4]",
    // fallback to legacy color to avoid breaking old usages
    f8f2e4: "bg-[#f8f2e4]",
  } as const;
  const showInnerShadow = Boolean(withInnerShadow);

  return (
    <section
      className={cn(
        "rounded-3xl border border-[#d3c6aa] p-8",
        variantStyles[colorVariant],
        showInnerShadow &&
          "shadow-[inset_0_1px_2px_rgba(47,54,0,0.16),inset_1px_0_2px_rgba(47,54,0,0.12),inset_0_-1px_2px_rgba(255,255,255,0.6),inset_-1px_0_2px_rgba(255,255,255,0.5)]",
        className
      )}
    >
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
