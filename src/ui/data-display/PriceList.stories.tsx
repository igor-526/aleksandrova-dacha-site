import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PriceList } from "./PriceList";

const meta: Meta<typeof PriceList> = {
  tags: ["autodocs"],
  title: "UI/Data Display/PriceList",
  component: PriceList,
  args: {
    items: [
      {
        title: "Прогулка верхом",
        price: "от 1 500 ₽",
        description: "В сопровождении инструктора",
        options: [
          { title: "30 минут", price: "1 000 ₽" },
          { title: "60 минут", price: "1 800 ₽" },
          { title: "Индивидуальное", price: "2 300 ₽" },
        ],
      },
      {
        title: "Мини-зоопарк",
        description: "Доступно ежедневно",
        options: [
          { title: "Взрослый", price: "600 ₽" },
          { title: "Детский", price: "400 ₽" },
          { title: "Фотосессия", price: "1 500 ₽" },
        ],
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof PriceList>;

export const Default: Story = {};

export const SingleItem: Story = {
  args: {
    items: [
      {
        title: "Аренда лошади",
        price: "25 000 ₽/мес",
        options: [
          { title: "Полнопансион", price: "25 000 ₽" },
          { title: "Спорт-пакет", price: "32 000 ₽" },
        ],
      },
    ],
  },
};
