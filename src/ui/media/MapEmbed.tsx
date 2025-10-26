import { cn } from "../utils/cn";

export type MapEmbedProps = {
  provider?: "yandex" | "google";
  lat: number;
  lng: number;
  zoom?: number;
  markerLabel?: string;
  className?: string;
  height?: number;
};

const buildSrc = ({ provider = "yandex", lat, lng, zoom = 14, markerLabel }: MapEmbedProps) => {
  if (provider === "google") {
    const label = encodeURIComponent(markerLabel ?? "");
    return `https://maps.google.com/maps?q=${lat},${lng}${label ? `%20(${label})` : ""}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  }

  const label = encodeURIComponent(markerLabel ?? "");
  return `https://yandex.ru/map-widget/v1/?ll=${lng}%2C${lat}&z=${zoom}${label ? `&pt=${lng},${lat},pm2rdl~${label}` : ""}`;
};

export function MapEmbed(props: MapEmbedProps) {
  return (
    <div className={cn("overflow-hidden rounded-3xl", props.className)} style={{ height: props.height ?? 360 }}>
      <iframe
        src={buildSrc(props)}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        title="Карта"
      />
    </div>
  );
}
