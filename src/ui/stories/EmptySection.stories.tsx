import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmptySection } from "../sections/EmptySection";

const meta: Meta<typeof EmptySection> = {
  title: "UI/Sections/EmptySection",
  component: EmptySection,
  parameters: { layout: "fullscreen" },
  argTypes: {
    background: { control: "color" },
    title: { control: "text" },
    contentWidth: {
      control: "select",
      options: ["full", "1/2", "2/3", "1/3", "1/4"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptySection>;

export const Playground: Story = {
  args: {
    title: "Своя секция",
    background: "#f6efe0",
    contentWidth: "2/3",
  },
  render: (args) => (
    <EmptySection {...args}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-white/80 p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2f3600]">Блок контента</h3>
          <p className="text-[#4b4d2f]">
            Добавьте сюда текст, карточки или форму. Цвет фона секции можно
            менять через контролы Storybook.
          </p>
        </div>
        <div className="rounded-xl border border-white/40 bg-white/50 p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-[#2f3600]">Второй блок</h3>
          <p className="text-[#4b4d2f]">
            Контент секции ограничивается `contentWidth`. Для своих макетов вы
            можете применять любые утилиты Tailwind прямо в дочерних блоках.
          </p>
        </div>
      </div>
    </EmptySection>
  ),
};
