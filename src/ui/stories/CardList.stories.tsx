import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CardList } from "../sections/CardList";
import { Button } from "../button/Button";

const meta: Meta<typeof CardList> = {
  title: "UI/Sections/CardList",
  component: CardList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CardList>;

const sampleItems = [
  {
    title: "Командные выезды",
    content: "Маршрут по лесу с проводником для группы от 4 человек.",
    media: (
      <div
        className="h-full w-full rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: "url(/images/home-img.jpg)" }}
      />
    ),
    mediaWidth: "1/2",
    mediaHeight: 220,
    actions: (
      <Button fullWidth href="#booking">
        Забронировать
      </Button>
    ),
    children: (
      <div className="font-serif text-xl text-[#2f3600]">4 500 RUB</div>
    ),
  },
  {
    title: "Индивидуальное занятие",
    content: "Персональный тренер и спокойные лошади для новичков.",
    media: <div className="h-full w-full rounded-2xl bg-[#d9c8a1]" />,
    mediaWidth: "1/3",
    mediaHeight: 220,
    children: (
      <div className="font-serif text-xl text-[#2f3600]">6 000 RUB</div>
    ),
  },
  {
    title: "Детский пони-клуб",
    content: "Уроки верховой езды для детей с 7 лет, в группе до 6 человек.",
    media: <div className="h-full w-full rounded-2xl bg-[#c1d6a3]" />,
    mediaHeight: 220,
    children: (
      <div className="font-serif text-xl text-[#2f3600]">3 000 RUB</div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    columns: { base: 1, md: 2, xl: 3 },
    mediaWidth: { base: "1/2", md: "1/3" },
    mediaHeight: { base: 220, md: 260 },
    mediaPosition: "top",
  },
};

const responsiveItems = sampleItems.map((item) => ({
  ...item,
  mediaPosition: { base: "top", md: "left", xl: "right" },
}));

export const ResponsiveMedia: Story = {
  args: {
    items: responsiveItems,
    columns: { base: 1, md: 2, xl: 3 },
    mediaWidth: { base: "1/2", md: "1/3", xl: "1/2" },
    mediaHeight: { base: 220, md: 260, xl: 300 },
  },
};
