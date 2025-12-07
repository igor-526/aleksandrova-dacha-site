import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PriceCard } from "../data-display/PriceCard";

const meta: Meta<typeof PriceCard> = {
  parameters: { layout: "docs" },
  tags: ["autodocs"],
  title: "UI/Data Display/PriceCard",
  component: PriceCard,
  args: {
    title: "Прогулка верхом",
    price: "1 500 ₽",
    description: "60 минут с инструктором по живописному маршруту.",
    features: ["Фото на память", "Два уровня сложности"],
    ctaLabel: "Записаться",
    ctaHref: "/booking",
  },
};

export default meta;

type Story = StoryObj<typeof PriceCard>;

export const Default: Story = {};

export const Premium: Story = {
  args: {
    title: "Премиум пакет",
    price: "4 500 ₽",
    features: ["Индивидуальный маршрут", "Фотосессия", "Фирменный мерч"],
  },
};
