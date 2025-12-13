import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Button } from "../button/Button";
import { Modal, ModalTriggerButton } from "../overlays/Modal";
import { Lightbox } from "../overlays/Lightbox";
import { Toast } from "../overlays/Toast";

const meta: Meta = {
  tags: ["autodocs"],
  title: "UI/Overlays",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj;

export const Interactive: Story = {
  render: () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);

    return (
      <div className="space-y-6 rounded-3xl bg-[#fdfaf4] p-6 text-[#2f3600]">
        <div className="flex flex-wrap gap-4">
          <ModalTriggerButton onOpenChange={setModalOpen}>РћС‚РєСЂС‹С‚СЊ РјРѕРґР°Р»РєСѓ</ModalTriggerButton>
          <Button variant="secondary" onClick={() => setLightboxOpen(true)}>
            РћС‚РєСЂС‹С‚СЊ Lightbox
          </Button>
          <Button variant="ghost" onClick={() => setToastOpen(true)}>
            РџРѕРєР°Р·Р°С‚СЊ Toast
          </Button>
        </div>

        <Modal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title="Р‘СЂРѕРЅРёСЂРѕРІР°РЅРёРµ РїСЂРѕРіСѓР»РєРё"
          footer={
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                РћС‚РјРµРЅР°
              </Button>
              <Button>РЎРѕС…СЂР°РЅРёС‚СЊ</Button>
            </div>
          }
        >
          <p>
            Р’ РјРѕРґР°Р»СЊРЅРѕРј РѕРєРЅРµ РјРѕР¶РЅРѕ СЂР°Р·РјРµСЃС‚РёС‚СЊ С„РѕСЂРјСѓ РёР»Рё РїРѕРґС‚РІРµСЂР¶РґРµРЅРёРµ РґРµР№СЃС‚РІРёСЏ.
            РљРѕРјРїРѕРЅРµРЅС‚ РїРѕРґРґРµСЂР¶РёРІР°РµС‚ СЂР°Р·РЅС‹Рµ СЂР°Р·РјРµСЂС‹ Рё РЅР°СЃС‚СЂР°РёРІР°РµРјС‹Р№ С„СѓС‚РµСЂ.
          </p>
        </Modal>

        <Lightbox
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={[
            { src: "/images/home-img.jpg", alt: "РљРѕРЅРЅР°СЏ РїСЂРѕРіСѓР»РєР°" },
            { src: "/images/services/1.jpg", alt: "РЈСЃР»СѓРіР° 1" },
            { src: "/images/services/3.jpg", alt: "РЈСЃР»СѓРіР° 2" },
          ]}
        />

        <Toast
          open={toastOpen}
          onOpenChange={setToastOpen}
          tone="success"
          title="Р—Р°СЏРІРєР° РѕС‚РїСЂР°РІР»РµРЅР°"
          description="РњС‹ СЃРІСЏР¶РµРјСЃСЏ СЃ РІР°РјРё РІ С‚РµС‡РµРЅРёРµ 15 РјРёРЅСѓС‚."
        />
      </div>
    );
  },
};

