"use client";

import { forwardRef } from "react";
import { cn } from "../utils/cn";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, helperText, error, options, className, id, ...props }, ref) => {
    const selectId = id ?? props.name;

    return (
      <label className="flex flex-col gap-2 text-sm text-[#2f3600]">
        {label && <span className="font-medium text-[#2f3600]">{label}</span>}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            "rounded-xl border border-[#d3c6aa] bg-white px-4 py-2 text-base text-[#2f3600] shadow-sm focus:border-[#384000] focus:outline-none focus:ring-2 focus:ring-[#c9b585]/40",
            error && "border-[#c96c6c] focus:ring-[#c96c6c]/40",
            className,
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? (
          <span className="text-xs text-[#a03b3b]">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-[#4b4d2f]">{helperText}</span>
        ) : null}
      </label>
    );
  },
);

Select.displayName = "Select";
