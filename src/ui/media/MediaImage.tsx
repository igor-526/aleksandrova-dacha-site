import Image from "next/image";
import { cn } from "../utils/cn";

export type MediaImageRatio =
  | "square"
  | "landscape"
  | "portrait"
  | "auto"
  | `${number}/${number}`;

export type MediaImageProps = {
  src: string;
  alt: string;
  ratio?: MediaImageRatio;
  fill?: boolean;
  className?: string;
};

const ratioClasses: Record<Exclude<MediaImageRatio, `${number}/${number}`>, string> = {
  square: "aspect-square",
  landscape: "aspect-[16/9]",
  portrait: "aspect-[3/4]",
  auto: "",
};

export const getRatioClassName = (ratio: MediaImageRatio) =>
  ratio in ratioClasses ? ratioClasses[ratio as keyof typeof ratioClasses] : "";

export const getRatioStyle = (ratio: MediaImageRatio): { aspectRatio?: string } =>
  ratio.includes("/") ? { aspectRatio: ratio } : {};

export function MediaImage({ src, alt, ratio = "auto", fill = true, className }: MediaImageProps) {
  if (fill) {
    return (
      <div
        className={cn("relative overflow-hidden", getRatioClassName(ratio), className)}
        style={getRatioStyle(ratio)}
      >
        <Image src={src} alt={alt} fill sizes="(min-width:768px) 50vw, 90vw" className="object-cover" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={ratio === "portrait" ? 1000 : 450}
      className={cn("h-auto w-full rounded-3xl object-cover", className)}
    />
  );
}
