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
      { label: "Разведение", href: "/service/breeding" },
      { label: "О нас", href: "/about" },
      { label: "Фотографии", href: "/photosession" },
      { label: "Контакты", href: "/about/contacts" },
    ];

    return (
      <div className="min-h-screen bg-[#f6efe0] text-[#2f3600]">
        <Header
          links={links}
          phone="+7 812 345-67-89"
          sticky
          transparent={false}
        />

        <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 py-10">
          <section>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Конные прогулки", href: "/horse_riding" },
                { label: 'Маршрут "Лесной"' },
              ]}
            />
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl">Tabs</h2>
            <Tabs
              items={[
                { value: "rides", label: "Прогулки" },
                { value: "lessons", label: "Обучение" },
                { value: "zoo", label: "Зоопарк" },
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
          address="Санкт-Петербург, Александрова Дача"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          socials={[
            { label: "VK", href: "https://vk.com" },
            { label: "Telegram", href: "https://t.me" },
          ]}
          menus={[
            {
              title: "Меню",
              links,
            },
            {
              title: "Информация",
              links: [
                { label: "Политика конфиденциальности", href: "#" },
                { label: "Документы", href: "#" },
              ],
            },
          ]}
        />
      </div>
    );
  },
};
