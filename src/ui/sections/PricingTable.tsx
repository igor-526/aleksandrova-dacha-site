import type { TableType } from "@/types/table";
import { DataTable } from "../data-display/DataTable";
import { cn } from "../utils/cn";

export type PricingTableProps = {
  item: TableType;
  className?: string;
};

export function PricingTable({ item, className }: PricingTableProps) {
  return (
    <section className={cn("rounded-3xl border border-[#d3c6aa] bg-white p-4", className)}>
      <DataTable item={item} responsive={true} />
    </section>
  );
}
