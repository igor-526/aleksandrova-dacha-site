import Image from "next/image";
import { FC } from "react";

type Prors = {
  pathImage: string;
};

const Icon: FC<Prors> = ({ pathImage }) => {
  return (
    <div>
      <Image width={40} height={40} src={pathImage} alt={""}></Image>
    </div>
  );
};

export default Icon;
