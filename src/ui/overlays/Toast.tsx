"use client";

import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

export type ToastTone = "success" | "warning" | "danger" | "info";

const toneMap: Record<ToastTone, string> = {
  success: "bg-[#d8edc5] text-[#1f4d1a]",
  warning: "bg-[#f9e0a2] text-[#5a3d04]",
  danger: "bg-[#f4c7c7] text-[#6d1f1f]",
  info: "bg-[#e2d6bc] text-[#2f3600]",
};

export type ToastProps = {
  open: boolean;
  title: string;
  description?: string;
  tone?: ToastTone;
  duration?: number;
  onOpenChange?: (open: boolean) => void;
};

export function Toast({
  open,
  title,
  description,
  tone = "info",
  duration = 4000,
  onOpenChange,
}: ToastProps) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    setVisible(open);
  }, [open]);

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      onOpenChange?.(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onOpenChange]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-8 z-50 flex justify-center">
      <div className={cn("w-full max-w-md rounded-2xl px-5 py-4 shadow-lg", toneMap[tone])}>
        <div className="flex justify-between gap-4">
          <div>
            <h4 className="font-semibold">{title}</h4>
            {description && <p className="mt-1 text-sm opacity-80">{description}</p>}
          </div>
          <button
            type="button"
            className="text-lg leading-none opacity-80"
            onClick={() => {
              setVisible(false);
              onOpenChange?.(false);
            }}
            aria-label="Закрыть уведомление"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
