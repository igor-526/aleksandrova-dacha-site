import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { TableType } from "@/types/table";
import { DataTable } from "../data-display/DataTable";

const sampleTable: TableType = {
  columns: [
    { key: "service", title: "Service", annotation: "What is included", cell_formatter: [] },
    { key: "weekday", title: "Weekday", annotation: "Mon–Fri price", cell_formatter: [] },
    { key: "weekend", title: "Weekend", annotation: "Sat–Sun price", cell_formatter: [] },
  ],
  rows: [
    {
      cells: {
        service: { value: "Ride 30 min", annotation: "Short warm-up", cell_formatter: [] },
        weekday: { value: "1 000 ₽", annotation: "Base price", cell_formatter: ["text_bold"] },
        weekend: { value: "1 200 ₽", annotation: "Weekend surcharge", cell_formatter: [] },
      },
    },
    {
      cells: {
        service: { value: "Ride 60 min", annotation: "", cell_formatter: [] },
        weekday: { value: "1 500 ₽", annotation: "", cell_formatter: ["text_bold"] },
        weekend: { value: "1 800 ₽", annotation: "", cell_formatter: [] },
      },
    },
    {
      cells: {
        service: { value: "Trail lesson", annotation: "", cell_formatter: [] },
        weekday: { value: "2 000 ₽", annotation: "", cell_formatter: ["text_bold"] },
        weekend: { value: "2 300 ₽", annotation: "", cell_formatter: [] },
      },
    },
  ],
};

const meta: Meta<typeof DataTable> = {
  tags: ["autodocs"],
  title: "UI/Data Display/DataTable",
  component: DataTable,
  args: {
    item: sampleTable,
  },
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {};

export const Responsive: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
