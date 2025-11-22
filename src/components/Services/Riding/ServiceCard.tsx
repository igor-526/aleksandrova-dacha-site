import { Card } from "@/ui";
import Image from "next/image";
import { ReactNode } from "react";
import TablePrice, { TablePriceProps } from "./TablePrice";

export type ServiceCardProps = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  price?: number | string;
  tablePrice?: TablePriceProps;
};

export function ServiceCard({
  id,
  name,
  description,
  image,
  price,
  tablePrice,
}: ServiceCardProps) {
  let child: ReactNode = null;
  if (price) {
    child = <div className="font-serif text-2xl">{price} ₽</div>;
  }
  if (tablePrice) {
    child = <TablePrice {...tablePrice} />;
  }
  return (
    <div key={id}>
      <Card
        key={id}
        title={name}
        content={description}
        variant={"default"}
        media={
          <div className="relative h-56 overflow-hidden rounded-2xl">
            <Image
              src={image || "/images/default-service.jpg"}
              alt={"description"}
              fill
              sizes="(min-width:768px) 600px, 100vw"
              className="object-cover"
            />
          </div>
        }
        child={child}
      ></Card>
    </div>
  );
}
