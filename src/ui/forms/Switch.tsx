"use client";

import { forwardRef } from "react";
import { cn } from "../utils/cn";

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-center gap-3 text-sm text-[#2f3600]">
        <span className="relative inline-flex h-6 w-11 items-center">
          <input
            ref={ref}
            type="checkbox"
            className={cn(
              "peer sr-only",
              className,
            )}
            {...props}
          />
          <span className="h-full w-full rounded-full bg-[#d3c6aa] transition peer-checked:bg-[#384000]" />
          <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5" />
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  },
);

Switch.displayName = "Switch";
