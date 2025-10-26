import type { Meta, StoryObj } from "@storybook/react";
import { MediaImage } from "../media/MediaImage";
import { MediaVideo } from "../media/MediaVideo";
import { MapEmbed } from "../media/MapEmbed";

const meta: Meta = {
  tags: ["autodocs"],
  title: "UI/Media",
  parameters: {
    layout: "centered",
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj;

export const ImageVideoMap: Story = {
  render: () => (
    <div className="space-y-6 text-[#2f3600]">
      <div className="w-[480px] space-y-3 rounded-3xl bg-[#fdfaf4] p-4">
        <h3 className="font-serif text-xl">MediaImage (fill)</h3>
        <MediaImage src="/images/home-img.jpg" alt="Главный экран" fill ratio="landscape" className="rounded-3xl" />
      </div>
      <div className="w-[480px] space-y-3 rounded-3xl bg-[#fdfaf4] p-4">
        <h3 className="font-serif text-xl">MediaVideo</h3>
        <MediaVideo
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          poster="/images/services/1.jpg"
          controls
        />
      </div>
      <div className="w-[480px] space-y-3 rounded-3xl bg-[#fdfaf4] p-4">
        <h3 className="font-serif text-xl">MapEmbed</h3>
        <MapEmbed lat={59.727} lng={30.411} zoom={13} markerLabel="Александрова Дача" />
      </div>
    </div>
  ),
};
