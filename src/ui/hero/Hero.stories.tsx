import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "../button/Button";
import { Hero, type HeroProps } from "./Hero";

const sampleBg = {
  src: "/images/home-img.jpg",
  alt: "Лошадь на закате",
};

const meta: Meta<typeof Hero> = {
  title: "UI/Hero",
  component: Hero,
  tags: ["autodocs"],
  args: {
    title: "Конные прогулки и зоопарк",
    subtitle: "Александрова дача",
    description:
      "Проведите незабываемый день на нашей конюшне: познакомьтесь с животными, прокатитесь верхом и насладитесь природой.",
    backgroundImage: sampleBg,
  } satisfies Partial<HeroProps>,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const CenterAligned: Story = {
  render: (args) => (
    <Hero {...args} cta={<Button variant="primary">Записаться</Button>} />
  ),
};

export const LeftAligned: Story = {
  args: {
    align: "left",
  },
  render: (args) => (
    <Hero
      {...args}
      cta={
        <div className="flex gap-4">
          <Button variant="primary">Записаться</Button>
          <Button variant="secondary">Подробнее</Button>
        </div>
      }
    />
  ),
};

export const DarkOverlay: Story = {
  args: {
    overlay: "dark",
  },
  render: (args) => (
    <Hero
      {...args}
      cta={
        <div className="flex gap-4">
          <Button variant="secondary">Связаться</Button>
        </div>
      }
    />
  ),
};
