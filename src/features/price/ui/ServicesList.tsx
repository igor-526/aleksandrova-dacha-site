import { PriceOutDto } from "@/types";
import { Button, cn, DataTable, GallerySection, MediaImage } from "@/ui";
import ServiceCard from "./ServiceCard";
type ServicesListProps = {
  heading?: string;
  items: PriceOutDto[];
  mediaPosition?: "top" | "left";
  gallery?: boolean;
  columns?: 1 | 2 | 3;
  className?: string;
};

const ServicesList = ({
  heading,
  items = [],
  mediaPosition = "top",
  gallery = true,
  columns = 3,
  className,
}: ServicesListProps) => {
  return (
    <section className={cn("space-y-6 mx-auto", className)}>
      {heading && (
        <div className="text-center">
          <h2 className="font-serif text-3xl text-[#2f3600] sm:text-4xl">
            {heading}
          </h2>
        </div>
      )}
      <div
        className={cn(
          "grid gap-6 items-stretch justify-items-stretch",
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
          const photoUrl = photos[0]?.url;
          const mediaCard = gallery ? (
            <GallerySection
              items={galleryItems}
              columns={1}
              className="w-full h-full"
            />
          ) : (
            <MediaImage
              src={photoUrl}
              alt={item.slug}
              className="w-full h-full"
            />
          );

          return (
            <div key={index} className={cn("flex mx-auto h-full w-full")}>
              <ServiceCard
                title={item.name}
                content={item.description || ""}
                mediaPosition={mediaPosition}
                media={mediaCard}
              >
                {item.price_tables && item.price_tables.length > 0 && (
                  <div className="space-y-4">
                    {item.price_tables.map(
                      (table, tableIndex) =>
                        table && <DataTable key={tableIndex} item={table} />
                    )}
                  </div>
                )}
                <Button
                  variant="secondary"
                  size="sm"
                  href={`/uslugi/${item.slug}`}
                  className="my-2"
                >
                  Подробнее
                </Button>
              </ServiceCard>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesList;
