import Image from "next/image";
import { FC } from "react";

type ImageBlockProps = {
  pathImage: string;
  width?: number;
  height?: number;
  alt?: string;
};

export const ImageBlock: FC<ImageBlockProps> = ({ pathImage, width = 40, height = 40, alt = "Логотип" }) => {
  return (
    <div>
      <Image width={width} height={height} src={pathImage} alt={alt}></Image>
    </div>
  );
};
