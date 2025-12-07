import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "../button/Button";
import { EmptyPage, type EmptyPageProps } from "../empty-page/EmptyPage";

const meta: Meta<typeof EmptyPage> = {
  title: "UI/EmptyPage",
  component: EmptyPage,
  tags: ["autodocs"],
  args: {
    title: "Страница находится в разработке",
    description:
      "Мы добавляем сюда свежие материалы и новые возможности. Возвращайтесь позже или выберите другой раздел.",
  } satisfies Partial<EmptyPageProps>,
};

export default meta;

type Story = StoryObj<typeof EmptyPage>;

export const Default: Story = {};

export const WithAction: Story = {
  args: {
    action: (
      <Button href="/contacts" variant="secondary">
        Связаться с нами
      </Button>
    ),
  },
};
