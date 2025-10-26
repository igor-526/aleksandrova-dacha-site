import type { Meta, StoryObj } from "@storybook/react";
import { GalleryGrid } from "./GalleryGrid";

const meta: Meta<typeof GalleryGrid> = {
  tags: ["autodocs"],
  title: "UI/Data Display/GalleryGrid",
  component: GalleryGrid,
  args: {
    items: [
      { src: "/images/home-img.jpg", alt: "Главная" },
      { src: "/images/services/1.jpg", alt: "Услуга" },
      { src: "/images/services/3.jpg", alt: "Пони" },
      { src: "/images/services/5.jpg", alt: "Тренер" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof GalleryGrid>;

export const ThreeColumns: Story = {};

export const TwoColumns: Story = {
  args: {
    columns: 2,
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
  },
};
