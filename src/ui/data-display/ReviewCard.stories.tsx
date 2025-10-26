import type { Meta, StoryObj } from "@storybook/react";
import { ReviewCard } from "./ReviewCard";

const meta: Meta<typeof ReviewCard> = {
  tags: ["autodocs"],
  title: "UI/Data Display/ReviewCard",
  component: ReviewCard,
  args: {
    author: "Анна",
    rating: 5,
    text: "Великолепное место! Тренеры внимательно относятся к каждому посетителю.",
    source: "Google",
  },
};

export default meta;

type Story = StoryObj<typeof ReviewCard>;

export const Default: Story = {};

export const WithoutRating: Story = {
  args: {
    rating: undefined,
  },
};
