import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Header } from "../navigation/Header";
import { MobileMenu, type ContactLink } from "../navigation/MobileMenu";
import { Breadcrumbs } from "../navigation/Breadcrumbs";
import { Tabs } from "../navigation/Tabs";
import { Pagination } from "../navigation/Pagination";
import { Footer } from "../navigation/Footer";
import { Button } from "../button/Button";

const meta: Meta = {
  tags: ["autodocs"],
  title: "UI/Navigation",
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => {
    const [page, setPage] = useState(2);
    const [tab, setTab] = useState("rides");
    const links = [
      {
        label: "?‘?>‘??ñ",
        children: [
          {
            label: "?ø‘'ø?ñç",
            children: [
              { label: "?‘???‘?>óñ õ? >ç‘?‘?", href: "/services/rides/forest" },
              { label: "'‘<çú??‘<ç ?ø‘?‘?‘?‘?‘'‘<", href: "/services/rides/travel" },
            ],
          },
          { label: "?+‘?‘Øç?ñç", href: "/services/lessons" },
        ],
      },
      {
        label: "ýç‘??ø",
        children: [
          { label: "?ñ‘'??‘Å‘<", href: "/farm/animals" },
          { label: "-ó‘?ó‘?‘?‘?ññ", href: "/farm/tours" },
        ],
      },
      { label: "? ?ø‘?", href: "/about" },
      { label: "???‘'øó‘'‘<", href: "/contact" },
    ];
    const mobileSocials: ContactLink[] = [
      { type: "whatsapp", href: "https://wa.me/78123456789", label: "WhatsApp" },
      { type: "telegram", href: "https://t.me/aleksandrova_dacha", label: "Telegram" },
      { type: "vk", href: "https://vk.com/aleksandrova_dacha", label: "VK" },
      { type: "mail", href: "mailto:hello@aleksandrova-dacha.ru", label: "Email" },
    ];

    return (
      <div className="min-h-screen bg-[#f6efe0] text-[#2f3600]">
        <Header
          links={links}
          phone="+7 812 345-67-89"
          mobileSocials={mobileSocials}
          brandName="Александрова Дача"
          brandLogoSrc="/images/Logo.jpg"
          sticky
          transparent={false}
        />

        <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10">
          <section>
            <Breadcrumbs
              items={[
                 { label: "Главная", href: "/" },
                 { label: "Верховая езда", href: "/horse_riding" },
                 { label: "Групповые занятия" },
              ]}
            />
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl">Tabs</h2>
            <Tabs
              items={[
                { value: "rides", label: "?ø‘'ø?ñç" },
                { value: "lessons", label: "?+‘?‘Øç?ñç" },
                { value: "zoo", label: "?ñ?ñ-ú??õø‘?ó" },
              ]}
              value={tab}
              onValueChange={setTab}
            />
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl">Pagination</h2>
            <Pagination total={9} page={page} onPageChange={setPage} />
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl">Mobile Menu (always open)</h2>
            <div className="relative h-96 rounded-3xl border border-dashed border-[#c9b585]">
              <MobileMenu open onOpenChange={() => undefined} links={links} />
            </div>
          </section>
        </main>

        <Footer
          brandName="Александрова Дача"
          brandLogoSrc="/images/Logo.jpg"
          brandHref="/"
          address="Санкт-Петербург, посёлок Александрова Дача"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          socials={[
            { label: "VK", href: "https://vk.com", type: "vk" },
            { label: "Telegram", href: "https://t.me", type: "telegram" },
            { label: "Email", href: "mailto:hello@aleksandrova-dacha.ru", type: "mail" },
          ]}
          schedule={{
            weekday: { label: "џ¾ ±£´½¸¼", hours: "11:00 – 19:30" },
            weekend: { label: "’«¥¾”½¾µ", hours: "10:00 – 20:00" },
          }}
          navLinks={links}
          feedbackSlot={
            <Button variant="primary" size="lg">
              �¾±¾� ¾± °¢½¾�ь
            </Button>
          }
        />
      </div>
    );
  },
};
