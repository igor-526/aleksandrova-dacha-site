import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../atoms/Badge";
import { Avatar } from "../atoms/Avatar";
import { Icon } from "../atoms/Icon";
import { Separator } from "../atoms/Separator";
import { Tooltip } from "../atoms/Tooltip";
import { Spinner } from "../atoms/Spinner";
import { Skeleton } from "../atoms/Skeleton";

const meta: Meta = {
  tags: ["autodocs"],
  title: "UI/Atoms/Overview",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj;

export const AllAtoms: Story = {
  render: () => (
    <div className="space-y-8 text-[#2f3600]">
      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Badge</h3>
        <div className="flex flex-wrap gap-3">
          <Badge tone="neutral">Neutral</Badge>
          <Badge tone="success">Success</Badge>
          <Badge tone="warning">Warning</Badge>
          <Badge tone="danger">Danger</Badge>
          <Badge tone="neutral" onClose={() => undefined}>
            Closable
          </Badge>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Avatar</h3>
        <div className="flex items-center gap-4">
          <Avatar src="/images/Logo.jpg" alt="Лого" size="lg" />
          <Avatar fallback="AD" size="lg" />
          <Avatar src="/images/Logo1.jpg" alt="Лошадь" size="md" shape="rounded" />
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Icons & Separator</h3>
        <div className="flex items-center gap-4">
          {(["horse", "leaf", "phone", "location", "calendar", "arrow-right", "quote"] as const).map(
            (name) => (
              <Icon key={name} name={name} width={28} height={28} />
            ),
          )}
        </div>
        <Separator />
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold">Tooltip</h3>
        <div className="flex gap-4">
          <Tooltip content="Наведи, чтобы увидеть подсказку">
            <span className="cursor-pointer rounded-full bg-[#f0e7cf] px-4 py-2">Наведи</span>
          </Tooltip>
          <Tooltip content="Влево" side="left">
            <span className="cursor-pointer rounded-full bg-[#f0e7cf] px-4 py-2">←</span>
          </Tooltip>
        </div>
      </section>

      <section className="flex items-center gap-6">
        <div className="space-y-2 text-sm">
          <p>Spinner</p>
          <div className="flex items-center gap-3">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p>Skeleton</p>
          <div className="space-y-2">
            <Skeleton width={220} height={16} />
            <Skeleton width={300} height={16} />
            <Skeleton width={180} height={16} />
          </div>
        </div>
      </section>
    </div>
  ),
};
