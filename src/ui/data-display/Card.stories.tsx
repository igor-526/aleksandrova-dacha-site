import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  parameters: { layout: "docs" },
  tags: ["autodocs"],
  title: "UI/Data Display/Card",
  component: Card,
  args: {
    title: "Карточка",
    content:
      "Описание карточки в несколько предложений, подчеркивающее основную мысль блока.",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithMedia: Story = {
  args: {
    media: (
      <div
        className="h-40 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: "url(/images/home-img.jpg)" }}
      />
    ),
    actions: <button className="text-[#384000] underline">Подробнее</button>,
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const MediaCustomSize: Story = {
  args: {
    media: (
      <div className="h-full w-full rounded-2xl bg-[#c9b585]" />
    ),
    classNameMedia: "h-48 w-full",
    content: "Медиа блок с кастомными размерами через classNameMedia.",
  },
};

const sideMedia = (
  <div
    className="h-32 w-40 shrink-0 rounded-2xl bg-cover bg-center"
    style={{ backgroundImage: "url(/images/home-img.jpg)" }}
  />
);

export const MediaLeft: Story = {
  args: {
    media: sideMedia,
    mediaPosition: "left",
    content:
      "Краткое описание услуги с текстом, показывающим как карточка выглядит при боковом размещении изображения.",
  },
};

export const MediaRight: Story = {
  args: {
    media: sideMedia,
    mediaPosition: "right",
    content:
      "Тот же текст, но медиа-блок расположен справа. Заголовок остаётся сверху, как и требовалось.",
  },
};
