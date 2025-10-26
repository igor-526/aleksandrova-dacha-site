"use client";

import { forwardRef } from "react";
import { cn } from "../utils/cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, helperText, error, className, id, ...props }, ref) => {
    const textareaId = id ?? props.name;

    return (
      <label className="flex flex-col gap-2 text-sm text-[#2f3600]">
        {label && <span className="font-medium text-[#2f3600]">{label}</span>}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "min-h-[120px] rounded-xl border border-[#d3c6aa] bg-white px-4 py-3 text-base text-[#2f3600] shadow-sm focus:border-[#384000] focus:outline-none focus:ring-2 focus:ring-[#c9b585]/40",
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

Textarea.displayName = "Textarea";
