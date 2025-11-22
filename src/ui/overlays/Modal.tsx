"use client";

import { useEffect, type ReactNode } from "react";
import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  footer?: ReactNode;
};

const sizeClass: Record<NonNullable<ModalProps["size"]>, string> = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export function Modal({
  open,
  onOpenChange,
  title,
  size = "md",
  children,
  footer,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          "w-full rounded-3xl bg-[#f8f2e4] shadow-xl",
          sizeClass[size]
        )}
      >
        <header className="flex items-center justify-between border-b border-[#e2d6bc] px-6 py-4">
          {title && (
            <h3 className="text-lg font-semibold text-[#2f3600]">{title}</h3>
          )}
          <button
            type="button"
            className="text-2xl leading-none text-[#2f3600]"
            onClick={() => onOpenChange(false)}
            aria-label="Закрыть"
          >
            ×
          </button>
        </header>
        <div className="px-6 py-5 text-[#2f3600]">{children}</div>
        <footer className="flex items-center justify-end gap-3 border-t border-[#e2d6bc] px-6 py-4">
          {footer ?? (
            <Button variant="secondary" onClick={() => onOpenChange(false)}>
              Закрыть
            </Button>
          )}
        </footer>
      </div>
    </div>
  );
}
