"use client";

import { useEffect, useRef, useState } from "react";
import type { TableType } from "@/types/table";
import { Tooltip } from "../atoms/Tooltip";
import { cn } from "../utils/cn";

const formatterClassNames: Record<
  TableType["columns"][number]["cell_formatter"][number],
  string
> = {
  text_bold: "font-semibold",
  text_italic: "italic",
  text_underline: "underline",
};

export type DataTableProps = {
  item: TableType;
  responsive?: boolean;
  className?: string;
};

export function DataTable({
  item,
  responsive = true,
  className,
}: DataTableProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const recalcScale = () => {
      const container = containerRef.current;
      const table = tableRef.current;
      if (!container || !table) return;

      const isBelowSm = window.matchMedia("(max-width: 639px)").matches;
      if (!isBelowSm) {
        setScale(1);
        return;
      }

      const containerWidth = container.clientWidth;
      const tableWidth = table.scrollWidth;
      if (!containerWidth || !tableWidth) return;

      setScale(Math.min(1, containerWidth / tableWidth));
    };

    recalcScale();
    window.addEventListener("resize", recalcScale);
    return () => window.removeEventListener("resize", recalcScale);
  }, [item]);

  if (!item || !item.columns || !item.rows) {
    return null;
  }

  const { columns, rows } = item;
  const isScaledDown = scale < 1;
  const scaledStyle = isScaledDown
    ? {
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        width: `${(1 / scale) * 100}%`,
      }
    : undefined;

  return (
    <div
      ref={containerRef}
      className={cn(
        responsive && "sm:overflow-x-auto",
        responsive && "max-sm:overflow-visible",
        className
      )}
    >
      <div
        style={scaledStyle}
        className={isScaledDown ? "max-sm:w-max" : undefined}
      >
        <table
          ref={tableRef}
          className="min-w-full divide-y divide-[#e2d6bc] text-sm text-[#2f3600] aspect-auto"
        >
          <thead className="bg-[#f0e7cf] text-xs uppercase text-[#8d784f]">
            <tr>
              {columns.map((column) => {
                const titleContent = (
                  <div className="flex flex-col gap-1">
                    <span>{column.title}</span>
                  </div>
                );

                return (
                  <th
                    key={column.key}
                    scope="col"
                    className="px-4 py-3 text-left"
                  >
                    {column.annotation ? (
                      <Tooltip content={column.annotation} side="top">
                        {titleContent}
                      </Tooltip>
                    ) : (
                      titleContent
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0e7cf] bg-white">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => {
                  const cell = row.cells[column.key];
                  const cellClasses =
                    cell?.cell_formatter
                      .map((formatter) => formatterClassNames[formatter])
                      .filter(Boolean)
                      .join(" ") || "";

                  const cellContent = cell?.annotation ? (
                    <Tooltip content={cell.annotation} side="top">
                      <span>{cell?.value ?? ""}</span>
                    </Tooltip>
                  ) : (
                    cell?.value ?? ""
                  );

                  return (
                    <td
                      key={column.key}
                      className={cn("px-2.5 py-2", cellClasses)}
                    >
                      {cellContent}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
