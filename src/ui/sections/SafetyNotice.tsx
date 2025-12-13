import { cn } from "../utils/cn";

export type SafetyNoticeProps = {
  title: string;
  items: string[];
  colorVariant?: "f0e7cf" | "f6efe0" | "fdfaf4";
  withInnerShadow?: boolean;
  className?: string;
};

export function SafetyNotice({
  title,
  items,
  colorVariant = "f6efe0",
  withInnerShadow,
  className,
}: SafetyNoticeProps) {
  const variantStyles = {
    f0e7cf: "bg-[#f0e7cf]",
    f6efe0: "bg-[#f6efe0]",
    fdfaf4: "bg-[#fdfaf4]",
  } as const;
  const showInnerShadow = Boolean(withInnerShadow);

  return (
    <section
      className={cn(
        "rounded-3xl p-6",
        variantStyles[colorVariant],
        showInnerShadow &&
          "shadow-[inset_0_1px_2px_rgba(47,54,0,0.16),inset_1px_0_2px_rgba(47,54,0,0.12),inset_0_-1px_2px_rgba(255,255,255,0.6),inset_-1px_0_2px_rgba(255,255,255,0.5)]",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="space-y-3">
          <h3 className="font-serif text-3xl text-[#2f3600]">{title}</h3>
          <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[#4b4d2f]">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
