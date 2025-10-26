"use client";

import { forwardRef } from "react";
import { cn } from "../utils/cn";

export type TimePickerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
  intervalMinutes?: number;
};

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  ({ label, helperText, error, className, id, intervalMinutes = 15, ...props }, ref) => {
    const inputId = id ?? props.name;
    const step = intervalMinutes * 60;

    return (
      <label className="flex flex-col gap-2 text-sm text-[#2f3600]">
        {label && <span className="font-medium text-[#2f3600]">{label}</span>}
        <input
          ref={ref}
          id={inputId}
          type="time"
          step={step}
          className={cn(
            "rounded-xl border border-[#d3c6aa] bg-white px-4 py-2 text-base text-[#2f3600] shadow-sm focus:border-[#384000] focus:outline-none focus:ring-2 focus:ring-[#c9b585]/40",
            error && "border-[#c96c6c] focus:ring-[#c96c6c]/40",
            className,
          )}
          {...props}
        />
        {error ? (
          <span className="text-xs text-[#a03b3b]">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-[#4b4d2f]">{helperText}</span>
        ) : null}
      </label>
    );
  },
);

TimePicker.displayName = "TimePicker";
