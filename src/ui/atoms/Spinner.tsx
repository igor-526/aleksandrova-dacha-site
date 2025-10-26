import { cn } from "../utils/cn";

export type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeMap: Record<NonNullable<SpinnerProps["size"]>, number> = {
  sm: 16,
  md: 24,
  lg: 36,
};

export function Spinner({ size = "md", className }: SpinnerProps) {
  const dimension = sizeMap[size];

  return (
    <span
      className={cn(
        "inline-block animate-spin rounded-full border-2 border-current border-t-transparent",
        className,
      )}
      style={{ width: dimension, height: dimension }}
      aria-label="Загрузка"
    />
  );
}
