import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PersonCard } from "../data-display/PersonCard";

const meta: Meta<typeof PersonCard> = {
  tags: ["autodocs"],
  title: "UI/Data Display/PersonCard",
  component: PersonCard,
  args: {
    name: "Екатерина Петрова",
    role: "Старший тренер",
    photo: "/images/services/5.jpg",
    bioShort:
      "Стаж 10 лет. Специализация — подготовка детей и взрослых к соревнованиям.",
  },
};

export default meta;

type Story = StoryObj<typeof PersonCard>;

export const Default: Story = {};

export const WithoutBio: Story = {
  args: {
    bioShort: undefined,
  },
};
