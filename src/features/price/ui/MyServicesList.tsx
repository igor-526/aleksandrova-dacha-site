import { PriceOutDto } from "@/types";
import { cn, DataTable, GallerySection, MediaImage } from "@/ui";
import ServiceCard from "./ServiceCard";
type MyServicesListProps = {
  heading?: string;
  items: PriceOutDto[];
  mediaPosition?: "top" | "left";
  gallery?: boolean;
  columns?: 1 | 2 | 3;
  className?: string;
};

const MyServicesList = ({
  heading,
  items = [],
  mediaPosition = "top",
  gallery = true,
  columns = 3,
  className,
}: MyServicesListProps) => {
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
                {item.price_tables && <DataTable item={item.price_tables[0]} />}
              </ServiceCard>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyServicesList;
