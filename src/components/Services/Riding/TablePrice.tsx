import { cn } from "@/ui";

export type TablePriceProps = {
  columns: string[];
  rows: string[][];
  responsive?: boolean;
  className?: string;
};

export default function TablePrice({
  columns,
  rows,
  responsive = true,
  className,
}: TablePriceProps) {
  return (
    <div className={cn(responsive && "overflow-x-auto", className)}>
      <table className="min-w-full divide-y divide-[#e2d6bc] text-sm text-[#2f3600]">
        <thead className="bg-[#f0e7cf] text-xs uppercase tracking-[0.2em] text-[#8d784f]">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={cn("px-4 py-3 text-left", "text-center")}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#f0e7cf] bg-white">
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => {
                return (
                  <th
                    key={index}
                    scope="col"
                    className={cn("px-4 py-3 text-left", "text-center")}
                  >
                    {cell}
                  </th>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
