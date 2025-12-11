import { PriceOutDto } from "@/types/prices";
import { Card, cn, DataTable } from "@/ui";

export type ServicesListProps = {
  heading?: string;
  items: PriceOutDto[];
  className?: string;
  mediaPosition?: "top" | "left" | "right";
  classNameMedia?: string;
  columns?: 1 | 2 | 3;
  gallery?: boolean;
  mediaWidth?: "1/3" | "1/2" | "full" | `${number}px` | number | string;
  mediaHeight?: "1/3" | "1/2" | "full" | `${number}px` | number | string;
  maxCardWidth?: number | string;
};

export function ServicesList({
  heading,
  items,
  className,
  mediaPosition = "top",
  classNameMedia,
  columns = 3,
  gallery = false,
  mediaWidth = "1/3",
  mediaHeight,
  maxCardWidth = "450px",
}: ServicesListProps) {
  const maxWidthStyle = maxCardWidth
    ? {
        maxWidth:
          typeof maxCardWidth === "number" ? `${maxCardWidth}px` : maxCardWidth,
      }
    : undefined;

  return (
    <section className={cn("space-y-6", className)}>
      <div className="text-center">
        <h2 className="font-serif text-3xl text-[#2f3600] sm:text-4xl">
          {heading}
        </h2>
      </div>
      <div
        className={cn(
          "grid gap-6 items-stretch",
          columns === 1 && "sm:grid-cols-1",
          columns === 2 && "sm:grid-cols-1 md:grid-cols-2",
          columns === 3 && "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        {items.map((item, index) => {
          const photos = item.photos ?? [];
          const galleryItems = photos.map((photo) => ({
            src: photo.url,
            alt: item.slug,
          }));
          const coverUrl = photos[0]?.url;

          return (
            <div
              key={index}
              className="flex h-full w-full mx-auto"
              style={maxWidthStyle}
            >
              <Card
                className="h-full w-full"
                title={item.name}
                content={item.description || ""}
                mediaPosition={mediaPosition}
                gallery={gallery}
                galleryItems={gallery ? galleryItems : undefined}
                mediaWidth={mediaWidth}
                mediaHeight={mediaHeight}
                classNameMedia={classNameMedia}
                media={
                  gallery || !coverUrl ? undefined : (
                    <div
                      className="h-full w-full rounded-2xl bg-cover bg-center"
                      style={{ backgroundImage: `url(${coverUrl})` }}
                    />
                  )
                }
              >
                {item.price_tables && <DataTable item={item.price_tables[0]} />}
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
