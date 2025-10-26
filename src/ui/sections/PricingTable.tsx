import { DataTable, type DataColumn, type DataTableProps } from "../data-display/DataTable";
import { cn } from "../utils/cn";

export type PricingTableProps = {
  columns: DataColumn[];
  rows: DataTableProps["rows"];
  className?: string;
};

export function PricingTable({ columns, rows, className }: PricingTableProps) {
  return (
    <section className={cn("rounded-3xl border border-[#d3c6aa] bg-white p-4", className)}>
      <DataTable columns={columns} rows={rows} responsive={true} />
    </section>
  );
}
