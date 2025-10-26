"use client";

import { useState } from "react";
import { cn } from "../utils/cn";

export type FAQItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-[#d3c6aa] bg-white p-4">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left text-[#2f3600]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className="text-2xl leading-none">{open ? "−" : "+"}</span>
      </button>
      <div
        className={cn(
          "grid overflow-hidden text-sm text-[#4b4d2f] transition-[grid-template-rows,opacity]",
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 leading-relaxed">{answer}</div>
      </div>
    </div>
  );
}
