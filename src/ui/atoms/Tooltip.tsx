"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

export type TooltipSide = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  content: string;
  side?: TooltipSide;
  delay?: number;
  children: ReactNode;
  className?: string;
};

const sideMap: Record<TooltipSide, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
  bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2",
  left: "right-full top-1/2 -translate-y-1/2 -translate-x-2",
  right: "left-full top-1/2 -translate-y-1/2 translate-x-2",
};

export function Tooltip({
  content,
  side = "top",
  delay = 80,
  children,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof globalThis.setTimeout> | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      globalThis.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const show = () => {
    clearTimer();
    timeoutRef.current = globalThis.setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    clearTimer();
    setVisible(false);
  };

  useEffect(() => {
    return clearTimer;
  }, []);

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <span
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-50 whitespace-nowrap rounded-full bg-[#2f3600] px-3 py-1 text-xs text-white shadow",
            sideMap[side],
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}
