"use client";

import { forwardRef, type ReactNode } from "react";
import { cn } from "../utils/cn";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-start gap-3 text-sm text-[#2f3600]">
        <span className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center">
          <input
            ref={ref}
            type="checkbox"
            className={cn(
              "peer h-5 w-5 rounded-md border border-[#d3c6aa] bg-white text-[#384000] focus:outline-none focus:ring-2 focus:ring-[#c9b585]/50",
              className,
            )}
            {...props}
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs text-white opacity-0 transition-opacity peer-checked:opacity-100">
            ✓
          </span>
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
