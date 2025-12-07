import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Carousel } from "../data-display/Carousel";
import { Card } from "../data-display/Card";

const meta: Meta = {
  tags: ["autodocs"],
  title: "UI/Data Display/Carousel",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj;

const items = [
  {
    title: 'Маршрут "Лесной"',
    description: "Прогулка вдоль озера и соснового леса.",
  },
  {
    title: 'Маршрут "Парковый"',
    description: "Исторические дорожки Царского Села.",
  },
  {
    title: 'Маршрут "Закатный"',
    description: "Закатные виды на открытых полянах.",
  },
];

export const Default: Story = {
  render: () => (
    <Carousel
      items={items}
      renderItem={(item) => (
        <Card
          title={item.title}
          content={item.description}
          className="bg-[#fdfaf4]"
        />
      )}
      autoPlay
      interval={4000}
    />
  ),
};
