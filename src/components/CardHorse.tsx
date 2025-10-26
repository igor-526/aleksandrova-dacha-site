import { Card } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

type Prors = {
  id: number;
  name: string;
  breed: string;
  sex: number;
  sire: string;
  dame: string;
  description: string;
  pathImage: string;
};

const CardHorse: FC<Prors> = async ({
  id,
  name,
  breed,
  sex,
  sire,
  dame,
  description,
  pathImage,
}: Prors) => {
  const pathCard = `/archive/breeding/ponies/${id}`;

  return (
    <Card href={pathCard} className="max-w-sm">
      <div className="w-80 h-48 relative">
        <Image fill={true} src={pathImage} alt="" objectFit="cover"></Image>
      </div>

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p>breed: {breed}</p>
      <p>sex: {sex}</p>
      <p>
        {sire} + {dame}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};

export default CardHorse;
