"use client";

import { useState } from "react";
import { cn } from "../utils/cn";

export type TabItem = {
  value: string;
  label: string;
};

export type TabsProps = {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
};

export function Tabs({ items, value, defaultValue, onValueChange, className }: TabsProps) {
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value ?? "");
  const active = value ?? internal;

  const handleSelect = (next: string) => {
    if (!value) {
      setInternal(next);
    }
    onValueChange?.(next);
  };

  return (
    <div className={cn("flex flex-wrap gap-2 rounded-full bg-[#f0e7cf] p-1", className)}>
      {items.map((item) => {
        const isActive = item.value === active;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => handleSelect(item.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition",
              isActive ? "bg-white text-[#2f3600] shadow" : "text-[#4b4d2f] hover:text-[#2f3600]",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
