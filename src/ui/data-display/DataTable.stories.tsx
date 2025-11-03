import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DataTable } from "./DataTable";

const meta: Meta<typeof DataTable> = {
  tags: ["autodocs"],
  title: "UI/Data Display/DataTable",
  component: DataTable,
  args: {
    columns: [
      { key: "service", title: "Услуга" },
      { key: "weekday", title: "Будни", align: "right" },
      { key: "weekend", title: "Выходные", align: "right" },
    ],
    rows: [
      { service: "Прогулка 30 мин", weekday: "1 000 ₽", weekend: "1 200 ₽" },
      { service: "Прогулка 60 мин", weekday: "1 500 ₽", weekend: "1 800 ₽" },
      { service: "Индивид. занятие", weekday: "2 000 ₽", weekend: "2 300 ₽" },
    ],
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
