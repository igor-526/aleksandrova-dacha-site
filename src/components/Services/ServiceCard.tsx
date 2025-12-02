import {
  Card,
  DataTable,
  DataTableProps,
  GalleryGridProps,
  GallerySection,
} from "@/ui";
import Image from "next/image";
import { ReactNode } from "react";

export type ServiceCardProps = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  images?: GalleryGridProps["items"];
  mediaPosition?: "top" | "left" | "right";
  classNameMedia?: string;
  price?: number | string;
  tablePrice?: DataTableProps;
};

export function ServiceCard({
  id,
  name,
  description,
  image,
  images = [],
  mediaPosition = "top",
  classNameMedia,
  price,
  tablePrice,
}: ServiceCardProps) {
  let children: ReactNode = null;
  if (price) {
    children = <div className="font-serif text-2xl">{price} ₽</div>;
  }
  if (tablePrice) {
    children = <DataTable {...tablePrice} />;
  }
  return (
    <div key={id}>
      <Card
        key={id}
        title={name}
        content={description}
        variant={"default"}
        media={
          <div>
            {image && (
              <Image
                src={image || "/images/default-service.jpg"}
                alt={"description"}
                fill
                sizes="(min-width:768px) 600px, 100vw, 100vh"
                className="object-cover"
              />
            )}
            {images && <GallerySection items={images} columns={1} />}
          </div>
        }
        mediaPosition={mediaPosition}
        classNameMedia={classNameMedia}
      >
        {children}
      </Card>
    </div>
  );
}
