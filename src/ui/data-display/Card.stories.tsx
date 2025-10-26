import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  parameters: { layout: "docs" },
  tags: ["autodocs"],
  title: "UI/Data Display/Card",
  component: Card,
  args: {
    title: "Карточка",
    content: "Описание карточки в несколько предложений, подчеркивающее основную мысль блока.",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithMedia: Story = {
  args: {
    media: (
      <div className="h-40 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url(/images/home-img.jpg)" }} />
    ),
    actions: <button className="text-[#384000] underline">Подробнее</button>,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};
