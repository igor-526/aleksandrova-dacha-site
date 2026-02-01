import { PriceOutDto } from "@/types";
import { Button, cn, DataTable, GallerySection, MediaImage } from "@/ui";
import ServiceCard from "./ServiceCard";
import { ReactNode } from "react";
import Link from "next/link";
export type ServicesListProps = {
  heading?: string;
  content?: ReactNode;
  items: PriceOutDto[];
  mediaPosition?: "top" | "left";
  gallery?: boolean;
  typeMedia?: "image" | "gallery";
  minHeightCard?: string;
  columns?: 1 | 2 | 3;
  moreDetails?: boolean;
  className?: string;
};

const ServicesList = ({
  heading,
  content,
  items = [],
  mediaPosition = "top",
  gallery = false,
  typeMedia = "image",
  minHeightCard,
  columns = 3,
  moreDetails = false,
  className,
}: ServicesListProps) => {
  return (
    <section className={cn("space-y-6 mx-auto", className)}>
      {heading && (
        <div className="px-6">
          <h2 className="font-serif text-3xl text-[#2f3600] sm:text-4xl">
            {heading}
          </h2>
        </div>
      )}
      <div className="px-6 font-serif text-sm md:text-md lg:text-lg text-[#2f3600]">{content}</div>
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

          const mediaCard = (typeMedia === "gallery") ? (
            <GallerySection
              items={galleryItems}
              columns={1}
              className="w-full h-full"
            />
          ) : (
            <MediaImage
              src={galleryItems[0]?.src || "/images/placeholder.png"}
              alt={galleryItems[0]?.alt || "image"}
              className="w-full h-full"
            />
          );

          return (
            <Link key={index} rel="canonical" href={`/uslugi/${item.slug}`} className={cn("flex mx-auto h-full w-full transition-transform duration-200 hover:-translate-y-1 hover:rounded-3xl hover:shadow-[0_16px_36px_rgba(56,64,0,0.12)]")}>
              <ServiceCard
                title={item.name}
                gallery={gallery}
                content={item.description || ""}
                mediaPosition={mediaPosition}
                colunms={columns}
                media={mediaCard}
                className={`min-h-[${minHeightCard || "auto"}]`}
              >
                {item.price_tables && item.price_tables.length > 0 && (
                  <div className="space-y-4">
                    {item.price_tables.map(
                      (table, tableIndex) =>
                        table && <DataTable key={tableIndex} item={table} />
                    )}
                  </div>
                )}
                {moreDetails && (
                  <Button
                    variant="secondary"
                    size="sm"
                    href={`/uslugi/${item.slug}`}
                    className="my-2"
                  >
                    Подробнее
                  </Button>
                )}
              </ServiceCard>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesList;
