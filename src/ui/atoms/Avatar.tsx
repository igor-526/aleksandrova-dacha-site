import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "../utils/cn";

export type AvatarShape = "circle" | "rounded";
export type AvatarSize = "sm" | "md" | "lg" | "xl";

const sizeMap: Record<AvatarSize, number> = {
  sm: 32,
  md: 48,
  lg: 72,
  xl: 96,
};

export type AvatarProps = {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  fallback?: string;
  className?: string;
};

export function Avatar({
  src,
  alt = "",
  size = "md",
  shape = "circle",
  fallback,
  className,
}: AvatarProps) {
  const dimension = sizeMap[size];
  const radius: CSSProperties["borderRadius"] = shape === "circle" ? "999px" : "var(--radius-md)";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#d7c7a4] text-[#2f3600]",
        className,
      )}
      style={{ width: dimension, height: dimension, borderRadius: radius }}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={`${dimension}px`} className="object-cover" />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-lg font-semibold uppercase">
          {fallback?.slice(0, 2) ?? "?"}
        </span>
      )}
    </div>
  );
}
