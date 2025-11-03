import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { QuickServices, type QuickServicesProps } from "./QuickServices";

const sampleItems: QuickServicesProps["items"] = [
  {
    id: "riding",
    title: "Конные прогулки",
    description: "Живописные маршруты для новичков и опытных всадников.",
    href: "/horse_riding",
    icon: (
      <span role="img" aria-label="horse">
        🐎
      </span>
    ),
  },
  {
    id: "zoo",
    title: "Мини-зоопарк",
    description: "Пони, козочки, овечки и другие дружелюбные животные.",
    href: "/about/zoo",
    icon: (
      <span role="img" aria-label="zoo">
        🐑
      </span>
    ),
  },
  {
    id: "photos",
    title: "Фотосессии",
    description: "Профессиональные съёмки с лошадьми на территории клуба.",
    href: "/photosession",
    icon: (
      <span role="img" aria-label="camera">
        📷
      </span>
    ),
  },
];

const meta: Meta<typeof QuickServices> = {
  title: "UI/QuickServices",
  component: QuickServices,
  tags: ["autodocs"],
  args: {
    items: sampleItems,
  } satisfies Partial<QuickServicesProps>,
};

export default meta;

type Story = StoryObj<typeof QuickServices>;

export const Default: Story = {};

export const WithoutHeading: Story = {
  args: {
    heading: undefined,
  },
};

export const FourColumns: Story = {
  args: {
    items: [
      ...sampleItems,
      {
        id: "breeding",
        title: "Разведение",
        description: "Профессиональная работа с пони редких пород.",
        href: "/service/breeding",
        icon: (
          <span role="img" aria-label="trophy">
            🏆
          </span>
        ),
      },
    ],
  },
};
