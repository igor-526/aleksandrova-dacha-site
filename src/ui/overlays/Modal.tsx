"use client";

import { useEffect, type MouseEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Button, type ButtonProps } from "../button/Button";
import { cn } from "../utils/cn";

export type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  footer?: ReactNode;
  fullWidthOnMobile?: boolean;
};

const sizeClass: Record<NonNullable<ModalProps["size"]>, string> = {
  sm: "",
  md: "",
  lg: "",
};

export type ModalTriggerButtonProps = ButtonProps & {
  onOpenChange: ModalProps["onOpenChange"];
};

export function ModalTriggerButton({
  onOpenChange,
  onClick,
  children,
  ...buttonProps
}: ModalTriggerButtonProps) {
  const handleClick = (
    event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      onOpenChange(true);
    }
  };

  return (
    <Button {...buttonProps} onClick={handleClick}>
      {children}
    </Button>
  );
}

export function Modal({
  open,
  onOpenChange,
  title,
  size = "md",
  children,
  footer,
  fullWidthOnMobile = false,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const modalContent = (
    <div
      className={cn(
        "fixed inset-0 z-50 grid place-items-center bg-black/40 p-4",
        fullWidthOnMobile && "p-0 sm:p-4"
      )}
      role="dialog"
      aria-modal="true"
      onClick={() => onOpenChange(false)}
    >
      <div
        className={cn(
          "inline-flex max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] flex-col rounded-3xl bg-[#f8f2e4] shadow-xl",
          fullWidthOnMobile &&
            "w-full max-w-none rounded-none sm:w-auto sm:max-w-[calc(100vw-2rem)] sm:rounded-3xl",
          sizeClass[size]
        )}
        onClick={(event) => event.stopPropagation()}
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
            x
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

  return createPortal(modalContent, document.body);
}
