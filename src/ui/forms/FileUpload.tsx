"use client";

import { forwardRef } from "react";
import { cn } from "../utils/cn";

export type FileUploadProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  helperText?: string;
  error?: string;
  maxSizeMB?: number;
};

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
  ({ label, helperText, error, maxSizeMB, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <label className="flex flex-col gap-2 text-sm text-[#2f3600]">
        {label && <span className="font-medium text-[#2f3600]">{label}</span>}
        <input
          ref={ref}
          id={inputId}
          type="file"
          className={cn(
            "block rounded-xl border border-dashed border-[#d3c6aa] bg-white px-4 py-8 text-sm text-[#2f3600] shadow-sm focus:border-[#384000] focus:outline-none focus:ring-2 focus:ring-[#c9b585]/40",
            error && "border-[#c96c6c] focus:ring-[#c96c6c]/40",
            className,
          )}
          {...props}
        />
        <span className="text-xs text-[#4b4d2f]">
          {error
            ? error
            : helperText ??
              (maxSizeMB ? `Максимальный размер файла: ${maxSizeMB} МБ` : "Добавьте файлы перетаскиванием")}
        </span>
      </label>
    );
  },
);

FileUpload.displayName = "FileUpload";
