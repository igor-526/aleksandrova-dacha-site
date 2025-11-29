import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PriceServiceTable } from "@/components/Services/Riding/PriceServiceTable";
import type { PriceServiceDto } from "@/types/prices";
import serviceExample from "../../tableExamples/price_service_4.json";

const meta = {
  title: "Components/Services/Price Service Table",
  component: PriceServiceTable,
  tags: ["autodocs"],
} satisfies Meta<typeof PriceServiceTable>;

export default meta;

type Story = StoryObj<typeof PriceServiceTable>;

const table = (serviceExample as PriceServiceDto).price_tables[0];

export const FromDto: Story = {
  args: {
    table,
  },
};
