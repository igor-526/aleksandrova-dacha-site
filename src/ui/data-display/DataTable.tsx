import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export type DataColumn = {
  key: string;
  title: string;
  align?: "left" | "center" | "right";
};

export type DataTableProps = {
  columns: DataColumn[];
  rows: Record<string, ReactNode>[];
  onSort?: (key: string) => void;
  responsive?: boolean;
  className?: string;
};

export function DataTable({ columns, rows, onSort, responsive = true, className }: DataTableProps) {
  return (
    <div className={cn(responsive && "overflow-x-auto", className)}>
      <table className="min-w-full divide-y divide-[#e2d6bc] text-sm text-[#2f3600]">
        <thead className="bg-[#f0e7cf] text-xs uppercase tracking-[0.2em] text-[#8d784f]">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={cn(
                  "px-4 py-3 text-left",
                  column.align === "center" && "text-center",
                  column.align === "right" && "text-right",
                )}
              >
                <button type="button" className="flex items-center gap-1" onClick={() => onSort?.(column.key)}>
                  {column.title}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#f0e7cf] bg-white">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn(
                    "px-4 py-3",
                    column.align === "center" && "text-center",
                    column.align === "right" && "text-right",
                  )}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
