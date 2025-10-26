import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "../foundations/Container";
import { ThemeTokens } from "../foundations/ThemeTokens";

const meta: Meta<typeof Container> = {
  tags: ["autodocs"],
  title: "UI/Foundations",
  component: Container,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj<typeof Container>;

export const TokensAndContainer: Story = {
  render: () => (
    <ThemeTokens>
      <div className="space-y-6 rounded-3xl border border-dashed border-[#c9b585] bg-[#fdfaf4] p-6">
        <p className="text-sm text-[#4b4d2f]">
          ThemeTokens устанавливает CSS-переменные бренда. Ниже — пример разных размеров контейнера.
        </p>
        <div className="space-y-4">
          {(["sm", "md", "lg", "xl"] as const).map((size) => (
            <Container
              key={size}
              size={size}
              className="rounded-2xl border border-[#d3c6aa] bg-white p-4 text-[#2f3600]"
            >
              Container size = {size}
            </Container>
          ))}
        </div>
      </div>
    </ThemeTokens>
  ),
};
