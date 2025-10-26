import { cn } from "../utils/cn";

export type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  className?: string;
};

export function Skeleton({ width = "100%", height = 16, radius = "8px", className }: SkeletonProps) {
  return (
    <span
      className={cn("block animate-pulse bg-[#e2d6bc]", className)}
      style={{ width, height, borderRadius: radius }}
    />
  );
}
