import { MapEmbed, type MapEmbedProps } from "../media/MapEmbed";
import { cn } from "../utils/cn";

export type RoutesMapProps = {
  description: string;
  tips?: string[];
  map: Omit<MapEmbedProps, "className">;
  className?: string;
};

export function RoutesMap({ description, tips = [], map, className }: RoutesMapProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <p className="text-base text-[#4b4d2f]">{description}</p>
      <MapEmbed {...map} className="min-h-[320px]" />
      {tips.length > 0 && (
        <ul className="rounded-3xl bg-[#f0e7cf] p-6 text-sm text-[#2f3600]">
          {tips.map((tip) => (
            <li key={tip}>• {tip}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
