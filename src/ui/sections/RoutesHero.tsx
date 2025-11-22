import { Button } from "../button/Button";
import { MediaImage } from "../media/MediaImage";
import { cn } from "../utils/cn";

export type RoutesHeroProps = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: { src: string; alt: string };
  className?: string;
};

export function RoutesHero({
  title,
  subtitle,
  description,
  ctaLabel = "Выбрать маршрут",
  ctaHref = "#routes",
  image,
  className,
}: RoutesHeroProps) {
  return (
    <section
      className={cn(
        "grid gap-8 rounded-3xl bg-[#f8f2e4] p-8 lg:grid-cols-[1fr_1.1fr]",
        className
      )}
    >
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.4em] text-[#8d784f]">
          {subtitle}
        </p>
        <h1 className="font-serif text-4xl text-[#2f3600]">{title}</h1>
        <p className="text-base text-[#4b4d2f]">{description}</p>
        <Button href={ctaHref}>{ctaLabel}</Button>
      </div>
      <MediaImage
        src={image.src}
        alt={image.alt}
        fill
        ratio="landscape"
        className="rounded-3xl"
      />
    </section>
  );
}
