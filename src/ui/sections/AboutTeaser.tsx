import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type AboutTeaserProps = {
  title: string;
  text: string[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function AboutTeaser({
  title,
  text,
  ctaLabel = "Подробнее",
  ctaHref = "/about",
  className,
}: AboutTeaserProps) {
  return (
    <section
      className={cn(
        "rounded-3xl bg-[#fdfaf4] p-8 shadow-[0_24px_48px_rgba(56,64,0,0.08)]",
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
