import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AnimalCard } from "../data-display/AnimalCard";

const meta: Meta<typeof AnimalCard> = {
  title: "UI/Data Display/AnimalCard",
  component: AnimalCard,
  args: {
    name: "Пони Бонни",
    photo: "/images/services/3.jpg",
    tags: ["пони", "доброжелательная"],
    description:
      "Любит яблоки и прогулки с детьми. Подходит для первых занятий.",
    ctaLabel: "Подробнее",
  },
};

export default meta;

type Story = StoryObj<typeof AnimalCard>;

export const Default: Story = {};

export const WithoutTags: Story = {
  args: {
    tags: [],
  },
};
