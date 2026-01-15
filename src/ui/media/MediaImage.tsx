import Image from "next/image";
import { cn } from "../utils/cn";

export type MediaImageProps = {
  src: string;
  alt: string;
  ratio?: "square" | "landscape" | "portrait" | "auto";
  fill?: boolean;
  className?: string;
};

const ratioClasses: Record<Exclude<MediaImageProps["ratio"], undefined>, string> = {
  square: "aspect-square",
  landscape: "aspect-[16/9]",
  portrait: "aspect-[3/4]",
  auto: "",
};

export function MediaImage({ src, alt, ratio = "auto", fill = true, className }: MediaImageProps) {
  if (fill) {
    return (
      <div className={cn("relative overflow-hidden", ratioClasses[ratio], className)}>
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
