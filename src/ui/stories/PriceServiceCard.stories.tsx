import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PriceServiceCard } from "@/components/Services/Riding/PriceServiceCard";
import type { PriceServiceDto } from "@/types/prices";
import serviceExample from "../../tableExamples/price_service_1.json";

const meta = {
  title: "Components/Services/Price Service Card",
  component: PriceServiceCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PriceServiceCard>;

export default meta;

type Story = StoryObj<typeof PriceServiceCard>;

export const FromDto: Story = {
  args: {
    service: serviceExample as PriceServiceDto,
  },
};
