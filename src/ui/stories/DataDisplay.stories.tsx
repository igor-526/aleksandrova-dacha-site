import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { TableType } from "@/types/table";
import { Card } from "../data-display/Card";
import { PriceCard } from "../data-display/PriceCard";
import { PersonCard } from "../data-display/PersonCard";
import { AnimalCard } from "../data-display/AnimalCard";
import { ReviewCard } from "../data-display/ReviewCard";
import { FAQItem } from "../data-display/FAQItem";
import { GalleryGrid } from "../data-display/GalleryGrid";
import { Carousel } from "../data-display/Carousel";
import { DataTable } from "../data-display/DataTable";
import { PriceList } from "../data-display/PriceList";

const meta: Meta = {
  tags: ["autodocs"],
  title: "UI/Data Display",
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj;

const dataTableSample: TableType = {
  columns: [
    { key: "service", title: "Service", annotation: "What you get", cell_formatter: [] },
    { key: "weekday", title: "Weekday", annotation: "Mon–Fri", cell_formatter: [] },
    { key: "weekend", title: "Weekend", annotation: "Sat–Sun", cell_formatter: [] },
  ],
  rows: [
    {
      cells: {
        service: { value: "Ride 30 min", annotation: "Short warm-up", cell_formatter: [] },
        weekday: { value: "1 000 ₽", annotation: "Base price", cell_formatter: ["text_bold"] },
        weekend: { value: "1 200 ₽", annotation: "Weekend surcharge", cell_formatter: [] },
      },
    },
    {
      cells: {
        service: { value: "Ride 60 min", annotation: "", cell_formatter: [] },
        weekday: { value: "1 500 ₽", annotation: "", cell_formatter: ["text_bold"] },
        weekend: { value: "1 800 ₽", annotation: "", cell_formatter: [] },
      },
    },
    {
      cells: {
        service: { value: "Trail lesson", annotation: "", cell_formatter: [] },
        weekday: { value: "2 000 ₽", annotation: "", cell_formatter: ["text_bold"] },
        weekend: { value: "2 300 ₽", annotation: "", cell_formatter: [] },
      },
    },
  ],
};

export const Overview: Story = {
  render: () => (
    <div className="space-y-8 text-[#2f3600]">
      <section className="grid gap-6 md:grid-cols-2">
        <Card
          title="Базовая карточка"
          content="Используется для текста и медиа."
        />
        <PriceCard
          title="Прогулка верхом"
          price="1 500 ₽"
          description="60 минут с инструктором"
          features={["Фото на память", "Важно: запись заранее"]}
        />
        <PersonCard
          name="Екатерина Петрова"
          role="Старший тренер"
          photo="/images/services/5.jpg"
          bioShort="Стаж 8 лет, специализация — выездка и работа с детьми."
        />
        <AnimalCard
          name="Пони Бонни"
          photo="/images/services/3.jpg"
          tags={["пони", "доброжелательная"]}
          description="Любит яблоки и прогулки с детьми."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <ReviewCard
          author="Светлана"
          text="Замечательная атмосфера и очень заботливые тренеры."
          source="VK"
          rating={5}
        />
        <FAQItem
          question="Нужна ли специальная экипировка?"
          answer="Для первых занятий достаточно удобной одежды и обуви на невысоком каблуке. Шлем выдаём на месте."
          defaultOpen
        />
      </section>

      <section>
        <h3 className="mb-3 font-serif text-2xl">Галерея</h3>
        <GalleryGrid
          items={[
            { src: "/images/home-img.jpg", alt: "Главная" },
            { src: "/images/services/1.jpg", alt: "Услуги" },
            { src: "/images/services/3.jpg", alt: "Пони" },
            { src: "/images/services/5.jpg", alt: "Тренер" },
          ]}
        />
      </section>

      <section>
        <h3 className="mb-3 font-serif text-2xl">Carousel</h3>
        <Carousel
          items={[
            {
              title: "Пакет «Начальный»",
              description: "3 занятия, знакомство с лошадьми",
            },
            {
              title: "Пакет «Спортивный»",
              description: "8 занятий, индивидуальная работа",
            },
          ]}
          renderItem={(item, idx) => (
            <Card
              title={item.title}
              content={item.description}
              key={idx}
              className="bg-[#fdfaf4]"
            />
          )}
        />
      </section>

      <section>
        <h3 className="mb-3 font-serif text-2xl">PriceList</h3>
        <PriceList
          items={[
            {
              title: "Прогулка верхом",
              price: "от 1 500 ₽",
              description: "Сопровождение инструктора",
              options: [
                { title: "30 минут", price: "1 000 ₽" },
                { title: "60 минут", price: "1 800 ₽" },
                { title: "Индивидуальное", price: "2 300 ₽" },
              ],
            },
          ]}
        />
      </section>

      <section>
        <h3 className="mb-3 font-serif text-2xl">DataTable</h3>
        <DataTable item={dataTableSample} />
      </section>
    </div>
  ),
};

