import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Button } from "../button/Button";
import { Modal } from "../overlays/Modal";
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
          <Button onClick={() => setModalOpen(true)}>Открыть модалку</Button>
          <Button variant="secondary" onClick={() => setLightboxOpen(true)}>
            Открыть Lightbox
          </Button>
          <Button variant="ghost" onClick={() => setToastOpen(true)}>
            Показать Toast
          </Button>
        </div>

        <Modal
          open={modalOpen}
          onOpenChange={setModalOpen}
          title="Бронирование прогулки"
          footer={
            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                Отмена
              </Button>
              <Button>Сохранить</Button>
            </div>
          }
        >
          <p>
            В модальном окне можно разместить форму или подтверждение действия.
            Компонент поддерживает разные размеры и настраиваемый футер.
          </p>
        </Modal>

        <Lightbox
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={[
            { src: "/images/home-img.jpg", alt: "Конная прогулка" },
            { src: "/images/services/1.jpg", alt: "Услуга 1" },
            { src: "/images/services/3.jpg", alt: "Услуга 2" },
          ]}
        />

        <Toast
          open={toastOpen}
          onOpenChange={setToastOpen}
          tone="success"
          title="Заявка отправлена"
          description="Мы свяжемся с вами в течение 15 минут."
        />
      </div>
    );
  },
};
