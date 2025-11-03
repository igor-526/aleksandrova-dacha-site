import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, type ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Записаться на прогулку",
  } satisfies Partial<ButtonProps>,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Loading: Story = {
  args: {
    variant: "primary",
    loading: true,
  },
};

export const WithIcons: Story = {
  args: {
    variant: "primary",
    iconLeft: (
      <span role="img" aria-label="Horse">
        🐎
      </span>
    ),
    iconRight: (
      <span role="img" aria-label="Arrow">
        ➜
      </span>
    ),
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    children: "Недоступно",
  },
};
