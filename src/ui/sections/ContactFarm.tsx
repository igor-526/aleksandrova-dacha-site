import { Button } from "../button/Button";
import { Icon } from "../atoms/Icon";
import { MapEmbed, type MapEmbedProps } from "../media/MapEmbed";
import { cn } from "../utils/cn";

export type ContactFarmProps = {
  address: string;
  phones: string[];
  map: Omit<MapEmbedProps, "className">;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function ContactFarm({
  address,
  phones,
  map,
  ctaLabel = "Построить маршрут",
  ctaHref = "https://yandex.ru/maps",
  className,
}: ContactFarmProps) {
  return (
    <section className={cn("grid gap-8 lg:grid-cols-2", className)}>
      <div className="space-y-5 rounded-3xl bg-[#fdfaf4] p-8 shadow-[0_24px_48px_rgba(56,64,0,0.08)]">
        <h2 className="font-serif text-3xl text-[#2f3600]">Как нас найти</h2>
        <p className="flex items-start gap-3 text-sm text-[#4b4d2f]">
          <Icon
            name="location"
            width={20}
            height={20}
            className="mt-1 text-[#c9b585]"
          />
          {address}
        </p>
        <div className="space-y-2 text-sm font-semibold text-[#2f3600]">
          {phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-2"
            >
              <Icon name="phone" width={16} height={16} />
              {phone}
            </a>
          ))}
        </div>
        <Button href={ctaHref} target="_blank" rel="noreferrer">
          {ctaLabel}
        </Button>
      </div>
      <MapEmbed {...map} className="min-h-[320px]" />
    </section>
  );
}
