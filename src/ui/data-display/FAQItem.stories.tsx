import type { Meta, StoryObj } from "@storybook/react";
import { FAQItem } from "./FAQItem";

const meta: Meta<typeof FAQItem> = {
  tags: ["autodocs"],
  title: "UI/Data Display/FAQItem",
  component: FAQItem,
  args: {
    question: "Нужно ли брать экипировку?",
    answer: "На первые занятия достаточно удобной одежды и обуви на ровной подошве. Шлем выдаем на месте.",
  },
};

export default meta;

type Story = StoryObj<typeof FAQItem>;

export const Default: Story = {};

export const OpenByDefault: Story = {
  args: {
    defaultOpen: true,
  },
};
