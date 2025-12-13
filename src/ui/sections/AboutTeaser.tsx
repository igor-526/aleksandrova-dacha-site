import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type AboutTeaserProps = {
  title: string;
  text: string[];
  ctaLabel?: string;
  ctaHref?: string;
  colorVariant?: "f0e7cf" | "f6efe0" | "fdfaf4";
  withInnerShadow?: boolean;
  className?: string;
};

export function AboutTeaser({
  title,
  text,
  ctaLabel = "Р?Р?Р?С?Р?Р+Р?РчРч",
  ctaHref = "/about",
  colorVariant = "fdfaf4",
  withInnerShadow,
  className,
}: AboutTeaserProps) {
  const variantStyles = {
    f0e7cf: "bg-[#f0e7cf]",
    f6efe0: "bg-[#f6efe0]",
    fdfaf4: "bg-[#fdfaf4]",
  } as const;
  const showInnerShadow = Boolean(withInnerShadow);

  return (
    <section
      className={cn(
        "rounded-3xl p-8",
        variantStyles[colorVariant],
        showInnerShadow &&
          "shadow-[inset_0_1px_2px_rgba(47,54,0,0.16),inset_1px_0_2px_rgba(47,54,0,0.12),inset_0_-1px_2px_rgba(255,255,255,0.6),inset_-1px_0_2px_rgba(255,255,255,0.5)]",
        className
      )}
    >
      <h2 className="font-serif text-3xl text-[#2f3600]">{title}</h2>
      {text.map((paragraph, index) => (
        <p
          key={index}
          className="mt-4 text-base leading-relaxed text-[#4b4d2f]"
        >
          {paragraph}
        </p>
      ))}

      <Button variant="primary" className="mt-6" href={ctaHref}>
        {ctaLabel}
      </Button>
    </section>
  );
}
