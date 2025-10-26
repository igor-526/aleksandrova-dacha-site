"use client";

import { forwardRef } from "react";
import { cn } from "../utils/cn";

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="flex items-center gap-3 text-sm text-[#2f3600]">
        <span className="relative inline-flex h-5 w-5 items-center justify-center">
          <input
            ref={ref}
            type="radio"
            className={cn(
              "peer h-5 w-5 rounded-full border border-[#d3c6aa] bg-white focus:outline-none focus:ring-2 focus:ring-[#c9b585]/50",
              className,
            )}
            {...props}
          />
          <span className="pointer-events-none absolute inset-1 rounded-full bg-[#384000] opacity-0 transition-opacity peer-checked:opacity-100" />
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  },
);

Radio.displayName = "Radio";
