import type { ReactNode } from "react";
import { cn } from "../utils/cn";

const toneClassMap: Record<BadgeTone, string> = {
  neutral: "bg-[#f0e7cf] text-[#2f3600]",
  success: "bg-[#d8edc5] text-[#1f4d1a]",
  warning: "bg-[#f9e0a2] text-[#5a3d04]",
  danger: "bg-[#f4c7c7] text-[#6d1f1f]",
};

export type BadgeTone = "neutral" | "success" | "warning" | "danger";

export type BadgeProps = {
  tone?: BadgeTone;
  icon?: ReactNode;
  onClose?: () => void;
  children: ReactNode;
  className?: string;
};

export function Badge({ tone = "neutral", icon, onClose, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
        toneClassMap[tone],
        className,
      )}
    >
      {icon}
      <span>{children}</span>
      {onClose && (
        <button
          type="button"
          className="-mr-1 ml-1 rounded-full p-1 hover:bg-black/10"
          onClick={onClose}
          aria-label="Удалить"
        >
          ×
        </button>
      )}
    </span>
  );
}
