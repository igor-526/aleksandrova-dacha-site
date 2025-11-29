import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Header } from "../navigation/Header";
import { MobileMenu } from "../navigation/MobileMenu";
import { Breadcrumbs } from "../navigation/Breadcrumbs";
import { Tabs } from "../navigation/Tabs";
import { Pagination } from "../navigation/Pagination";
import { Footer } from "../navigation/Footer";

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
        label: "Услуги",
        children: [
          {
            label: "Катание",
            children: [
              { label: "Прогулки по лесу", href: "/services/rides/forest" },
              { label: "Выездные маршруты", href: "/services/rides/travel" },
            ],
          },
          { label: "Обучение", href: "/services/lessons" },
        ],
      },
      {
        label: "Ферма",
        children: [
          { label: "Питомцы", href: "/farm/animals" },
          { label: "Экскурсии", href: "/farm/tours" },
        ],
      },
      { label: "О нас", href: "/about" },
      { label: "Контакты", href: "/contact" },
    ];
    const mobileSocials = [
      { type: "whatsapp", href: "https://wa.me/78123456789", label: "WhatsApp" },
      { type: "telegram", href: "https://t.me/aleksandrova_dacha", label: "Telegram" },
      { type: "vk", href: "https://vk.com/aleksandrova_dacha", label: "VK" },
      { type: "mail", href: "mailto:hello@aleksandrova-dacha.ru", label: "Email" },
    ];
    const footerMenus = [
      {
        title: "Навигация",
        links: [
          { label: "Услуги", href: "/services" },
          { label: "Ферма", href: "/farm" },
          { label: "О нас", href: "/about" },
          { label: "Контакты", href: "/contact" },
        ],
      },
      {
        title: "Популярное",
        links: [
          { label: "Верховые прогулки", href: "#" },
          { label: "Дни рождения", href: "#" },
        ],
      },
    ];

    return (
      <div className="min-h-screen bg-[#f6efe0] text-[#2f3600]">
        <Header
          links={links}
          phone="+7 812 345-67-89"
          mobileSocials={mobileSocials}
          brandName="Усадьба «Александрова Дача»"
          brandLogoSrc="/images/Logo.jpg"
          sticky
          transparent={false}
        />

        <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10">
          <section>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Маршруты верхом", href: "/horse_riding" },
                { label: "Лесная прогулка" },
              ]}
            />
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl">Tabs</h2>
            <Tabs
              items={[
                { value: "rides", label: "Катание" },
                { value: "lessons", label: "Обучение" },
                { value: "zoo", label: "Мини-зоопарк" },
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
          address="Ленинградская область, Александрова Дача"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          socials={[
            { label: "VK", href: "https://vk.com" },
            { label: "Telegram", href: "https://t.me" },
          ]}
          menus={footerMenus}
        />
      </div>
    );
  },
};
