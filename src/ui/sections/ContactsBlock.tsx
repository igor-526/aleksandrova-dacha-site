import { Button } from "../button/Button";
import { Icon } from "../atoms/Icon";
import { MapEmbed, type MapEmbedProps } from "../media/MapEmbed";
import { cn } from "../utils/cn";

export type ContactsBlockProps = {
  address: string;
  phones: string[];
  map?: Omit<MapEmbedProps, "className">;
  hours?: { label: string; value: string }[];
  socials?: { type?: "vk" | "mail"; label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function ContactsBlock({
  address,
  phones,
  map,
  hours = [],
  socials = [],
  ctaLabel = "Построить маршрут",
  ctaHref,
  className,
}: ContactsBlockProps) {
  const routeHref =
    ctaHref &&
    map &&
    (map.provider === "yandex"
      ? `https://yandex.ru/maps/org/aleksandrova_dacha/1195551970/?ll=${map.lng}%2C${map.lat}&z=${map.zoom}`
      : `https://www.google.com/maps/dir/?api=1&destination=${map.lat},${map.lng}`);

  return (
    <section className={cn("grid gap-8 lg:grid-cols-2", className)}>
      <div className="space-y-5 rounded-3xl bg-[#fdfaf4] p-8 shadow-[0_24px_48px_rgba(56,64,0,0.08)]">
        <h2 className="font-serif text-3xl text-[#2f3600]">Как нас найти</h2>
        {address && (
          <p className="flex items-start gap-3 text-sm text-[#4b4d2f]">
            <Icon
              name="location"
              width={20}
              height={20}
              className="mt-1 text-[#c9b585]"
            />
            {address}
          </p>
        )}
        {hours.length > 0 && (
          <div className="space-y-1 rounded-2xl bg-[#fff9ee] p-3 text-sm text-[#2f3600]">
            <div className="flex items-center gap-2 font-semibold uppercase tracking-[0.14em] text-[#8b7b43]">
              <Icon name="calendar" width={16} height={16} />
              График работы
            </div>
            {hours.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-28 text-[#8b7b43]">{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        )}
        {phones.length > 0 && (
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[#2f3600]">
            {phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2"
              >
                <Icon name="phone" width={16} height={16} />
                {phone}
              </a>
            ))}
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c9b585] bg-[#f6efe0] text-[#2f3600] transition hover:border-[#2f3600] hover:text-[#1f2600]"
                aria-label={social.label}
              >
                {social.type && (
                  <Icon name={social.type} width={36} height={36} />
                )}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        )}
        {ctaLabel && ctaHref && (
          <div className="flex justify-center">
            <Button href={routeHref} target="_blank" rel="noreferrer">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
      {map && <MapEmbed {...map} className="min-h-[320px]" />}
    </section>
  );
}
