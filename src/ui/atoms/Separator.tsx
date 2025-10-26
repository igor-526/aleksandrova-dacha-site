import { cn } from "../utils/cn";

export type SeparatorProps = {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  className?: string;
};

export function Separator({
  orientation = "horizontal",
  decorative = true,
  className,
}: SeparatorProps) {
  const isVertical = orientation === "vertical";
  const role = decorative ? "presentation" : "separator";

  return (
    <span
      role={role}
      className={cn(
        "block bg-[#d3c6aa]",
        isVertical ? "h-full w-px" : "h-px w-full",
        className,
      )}
    />
  );
}
