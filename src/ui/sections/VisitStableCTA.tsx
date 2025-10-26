import { Button } from "../button/Button";
import { MediaImage } from "../media/MediaImage";
import { cn } from "../utils/cn";

export type VisitStableCTAProps = {
  title: string;
  text: string;
  image?: { src: string; alt: string };
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function VisitStableCTA({ title, text, image, ctaLabel = "Запланировать визит", ctaHref = "#booking", className }: VisitStableCTAProps) {
  return (
    <section className={cn("grid gap-8 rounded-3xl bg-[#2f3600] p-8 text-[#f6efe0] lg:grid-cols-[1fr_0.9fr]", className)}>
      <div className="space-y-5">
        <h2 className="font-serif text-4xl">{title}</h2>
        <p className="text-base text-[#f0e7cf]">{text}</p>
        <Button variant="secondary" href={ctaHref}>
          {ctaLabel}
        </Button>
      </div>
      {image && <MediaImage src={image.src} alt={image.alt} fill ratio="landscape" className="rounded-3xl" />}
    </section>
  );
}
