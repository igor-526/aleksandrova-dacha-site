import { Button, type ButtonVariant } from "../button/Button";
import { MediaImage } from "../media/MediaImage";
import { cn } from "../utils/cn";

export type VisitStableCTAProps = {
  title: string;
  text: string;
  image?: { src: string; alt: string };
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaVariant?: ButtonVariant;
  className?: string;
};

export function VisitStableCTA({
  title,
  text,
  image,
  ctaLabel = "Запланировать визит",
  ctaHref = "#booking",
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaVariant = "ghost",
  className,
}: VisitStableCTAProps) {
  const hasSecondaryCta = Boolean(secondaryCtaLabel && secondaryCtaHref);

  return (
    <section
      className={cn(
        "grid gap-8 rounded-3xl bg-[#8d784f] p-6 text-[#f6efe0] lg:grid-cols-[1fr_0.9fr]",
        className
      )}
    >
      <div className="space-y-5">
        <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
        <div className="text-sm sm:text-base text-[#f0e7cf]">
          {text.split("\n").map((line, index) => (
            <p key={index} className="mb-1">
              {line}
            </p>
          ))}
        </div>
        <div className="flex flex-nowrap gap-3">
          <Button
            variant="secondary"
            href={ctaHref}
            size="sm"
            className="text-sm sm:px-6 sm:py-2.5 sm:text-base"
          >
            {ctaLabel}
          </Button>
          {hasSecondaryCta && (
            <Button
              variant={secondaryCtaVariant}
              href={secondaryCtaHref}
              size="sm"
              className="text-sm sm:px-6 sm:py-2.5 sm:text-base"
            >
              {secondaryCtaLabel}
            </Button>
          )}
        </div>
      </div>
      {image && (
        <MediaImage
          src={image.src}
          alt={image.alt}
          fill
          ratio="landscape"
          className="rounded-3xl"
        />
      )}
    </section>
  );
}
