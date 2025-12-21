import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { TableType } from "@/types/table";
import { Container } from "../foundations/Container";
import { Highlights } from "../sections/Highlights";
import { PopularOffers } from "../sections/PopularOffers";
import { Testimonials } from "../sections/Testimonials";
import { AboutTeaser } from "../sections/AboutTeaser";
import { Mission } from "../sections/Mission";
import { TeamGrid } from "../sections/TeamGrid";
import { HorsesShowcase } from "../sections/HorsesShowcase";
import { ContactsBlock } from "../sections/ContactsBlock";
import { GallerySection } from "../sections/GallerySection";
import { ProgramsIntro } from "../sections/ProgramsIntro";
import { ProgramCards } from "../sections/ProgramCards";
import { PricingTable } from "../sections/PricingTable";
import { CoachCarousel } from "../sections/CoachCarousel";
import { SafetyNotice } from "../sections/SafetyNotice";
import { BookingSection } from "../sections/BookingSection";
import { RoutesHero } from "../sections/RoutesHero";
import { RouteTypes } from "../sections/RouteTypes";
import { RoutesMap } from "../sections/RoutesMap";
import { PhotoGallery } from "../sections/PhotoGallery";
import { WeatherNotice } from "../sections/WeatherNotice";
import { PhotoHero } from "../sections/PhotoHero";
import { PortfolioGrid } from "../sections/PortfolioGrid";
import { PreparationTips } from "../sections/PreparationTips";
import { Packages } from "../sections/Packages";
import { Boarding } from "../sections/Boarding";
import { BreedingSale } from "../sections/BreedingSale";
import { VisitStableCTA } from "../sections/VisitStableCTA";
import { BlogList } from "../sections/BlogList";
import { Article } from "../sections/Article";
import { RelatedPosts } from "../sections/RelatedPosts";

const meta: Meta = {
  title: "UI/Sections/Overview",
  parameters: {
    layout: "fullscreen",
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj;

const pricingTable: TableType = {
  columns: [
    { key: "service", title: "Услуга", annotation: "Что входит", cell_formatter: [] },
    { key: "weekday", title: "Будни", annotation: "Пн–Пт", cell_formatter: [] },
    { key: "weekend", title: "Выходные", annotation: "Сб–Вс", cell_formatter: [] },
  ],
  rows: [
    {
      cells: {
        service: { value: "Катание 30 минут", annotation: "Прогулка шагом", cell_formatter: [] },
        weekday: { value: "1 000 ₽", annotation: "Базовая цена", cell_formatter: ["text_bold"] },
        weekend: { value: "1 200 ₽", annotation: "Выходные", cell_formatter: [] },
      },
    },
    {
      cells: {
        service: { value: "Катание 60 минут", annotation: "Тренировка", cell_formatter: [] },
        weekday: { value: "1 500 ₽", annotation: "", cell_formatter: ["text_bold"] },
        weekend: { value: "1 800 ₽", annotation: "", cell_formatter: [] },
      },
    },
  ],
};

const team = [
  {
    name: "Анна Петрова",
    role: "Старший тренер",
    photo: "/images/services/5.jpg",
    bioShort: "10 лет в спорте, сертифицированный инструктор, специализация — подготовка новичков.",
  },
  {
    name: "Дмитрий Орлов",
    role: "Берейтор",
    photo: "/images/services/3.jpg",
    bioShort: "Работает с лошадьми разных пород, ведёт занятия для детей и взрослых.",
  },
  {
    name: "Екатерина Смирнова",
    role: "Руководитель конного клуба",
    photo: "/images/services/1.jpg",
    bioShort: "Координирует маршруты, мероприятия и безопасность на территории клуба.",
  },
];

const animals = [
  {
    name: "Граф",
    photo: "/images/services/3.jpg",
    tags: ["Спокойный", "Подходит новичкам"],
    description: "Надёжный партнёр для первых прогулок в седле.",
  },
  {
    name: "Искра",
    photo: "/images/home-img.jpg",
    tags: ["Энергичная"],
    description: "Любит быстрый темп, подойдёт уверенным наездникам.",
  },
  {
    name: "Луна",
    photo: "/images/services/1.jpg",
    tags: ["Детский пони"],
    description: "Ласковая и спокойная, идеальна для знакомства детей с конным спортом.",
  },
];

export const AllSections: Story = {
  render: () => (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Highlights
          items={[
            {
              title: "150+ довольных гостей в месяц",
              description: "Прогулки, тренировки, праздники на природе и экскурсии по ферме.",
              icon: "leaf",
            },
            {
              title: "Опытные тренеры и берейторы",
              description: "Команда следит за безопасностью, обучает и поддерживает на маршруте.",
              icon: "horse",
            },
            {
              title: "Удобное расположение",
              description: "Мы в 30 минутах от города, рядом парковка и навигация по локации.",
              icon: "location",
            },
          ]}
        />

        <PopularOffers
          offers={[
            {
              title: "Прогулка 60 минут",
              price: "1 500 ₽",
              description: "Маршрут по лесу или полям с сопровождением инструктора.",
            },
            {
              title: "Знакомство с конюшней",
              price: "800 ₽",
              description: "Кормление лошадей, фото и короткое катание для детей.",
              features: ["20 минут в седле", "Фото на локациях"],
            },
            {
              title: "Индивидуальное занятие",
              price: "3 500 ₽",
              description: "Работа в манеже: посадка, управление, первые аллюры.",
            },
          ]}
        />

        <Testimonials
          asCarousel={false}
          items={[
            {
              author: "Мария",
              text: "Отличное место, спокойные лошади и внимательные тренеры. Удобно добираться!",
              rating: 5,
              source: "Google",
            },
            {
              author: "Иван",
              text: "Брали прогулку выходного дня. Маршрут красивый, детям понравилось кормить пони.",
              rating: 4,
              source: "VK",
            },
          ]}
        />

        <AboutTeaser
          title="О нас"
          text="Мы семейный конный клуб в пригороде. Проводим прогулки, занятия для детей и взрослых, фотосессии, корпоративные выезды."
        />

        <Mission
          title="Наша миссия"
          points={[
            {
              heading: "Безопасность",
              text: "Готовим лошадей и снаряжение, даём инструктаж и сопровождаем на маршруте.",
            },
            {
              heading: "Доступность",
              text: "Маршруты для разного уровня, гибкое расписание и прозрачные цены.",
            },
            {
              heading: "Забота о животных",
              text: "Следим за здоровьем и комфортом лошадей, работаем только в щадящем режиме.",
            },
          ]}
        />

        <TeamGrid members={team} />
        <HorsesShowcase animals={animals} />

        <ContactsBlock
          address="деревня Александрова, ул. Центральная, 5"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          map={{
            lat: 59.727,
            lng: 30.411,
            zoom: 13,
            provider: "yandex",
            markerLabel: "Конный клуб Александрова дача",
          }}
          hours={[
            { label: "Будни", value: "10:00 – 19:00" },
            { label: "Выходные", value: "10:00 – 21:00" },
          ]}
          socials={[
            { type: "vk", label: "ВКонтакте", href: "https://vk.com" },
            { type: "mail", label: "Email", href: "mailto:info@example.com" },
          ]}
        />

        <GallerySection
          title="Фото с маршрутов"
          items={[
            { src: "/images/home-img.jpg", alt: "Прогулка в поле" },
            { src: "/images/services/1.jpg", alt: "Манежевая тренировка" },
            { src: "/images/services/3.jpg", alt: "Фотосессия с пони" },
            { src: "/images/services/5.jpg", alt: "Закат на маршруте" },
          ]}
        />

        <ProgramsIntro
          title="Программы для разного уровня"
          description="Начните с уверенной посадки и шаговых прогулок, затем переходите к рыси и галопу с поддержкой тренера."
          stats={[
            { label: "Участников в год", value: "10К" },
            { label: "Лошадей в работе", value: "15" },
            { label: "Маршрутов", value: "20" },
          ]}
        />

        <ProgramCards
          programs={[
            {
              title: "Старт",
              level: "0–1",
              description: "Три занятия в манеже: посадка, управление, уверенный шаг.",
              duration: "3 недели",
              price: "6 000 ₽",
            },
            {
              title: "Прогресс",
              level: "2–3",
              description: "Осваиваем рысь, работаем на равновесие и мягкие переходы.",
              duration: "5 недель",
              price: "12 000 ₽",
            },
          ]}
        />

        <PricingTable item={pricingTable} />

        <CoachCarousel coaches={team} />

        <SafetyNotice
          title="Правила безопасности"
          items={[
            "Минимальный возраст для прогулок — 6 лет в сопровождении родителя.",
            "Шлем обязателен, выдаём защитную экипировку на месте.",
            "Не подходим к лошадям сзади и не кормим без инструктора.",
          ]}
        />

        <BookingSection
          title="Записаться на прогулку"
          description="Выберите формат катания и оставьте контакты — менеджер подтвердит время и подскажет по снаряжению."
          image={{ src: "/images/services/1.jpg", alt: "Катание на лошади" }}
        />

        <RoutesHero
          title="Маршруты по лесу и полям"
          subtitle="Красивые виды и безопасные тропы"
          description="Составляем маршрут под ваш уровень и погоду, следим за темпом и комфортом лошадей."
          image={{ src: "/images/services/5.jpg", alt: "Маршрут выходного дня" }}
        />

        <RouteTypes
          routes={[
            {
              title: "Прогулка по лесу",
              duration: "60 минут",
              distance: "4 км",
              description: "Спокойный маршрут по хвойному лесу, подойдёт новичкам.",
            },
            {
              title: "Закат в поле",
              duration: "45 минут",
              distance: "3 км",
              description: "Ровные тропы, красивые виды, комфортный темп с инструктором.",
            },
          ]}
        />

        <RoutesMap
          description="Стартуем от конюшни, далее двигаемся по размеченным тропам без автомобильного движения."
          tips={[
            "Одевайтесь по погоде и берите перчатки — хват будет надёжнее.",
            "Летом берите воду, зимой — тёплые носки и слой под шлем.",
          ]}
          map={{
            lat: 59.727,
            lng: 30.411,
            zoom: 13,
            markerLabel: "Александрова дача",
          }}
        />

        <PhotoGallery
          title="Галерея"
          description="Кадры с маршрутов, тренировок и семейных выходных на конюшне."
          items={[
            { src: "/images/services/5.jpg", alt: "Прогулка 1" },
            { src: "/images/services/1.jpg", alt: "Прогулка 2" },
            { src: "/images/services/3.jpg", alt: "Прогулка 3" },
          ]}
        />

        <WeatherNotice
          message="В сильный снег или грозу переносим занятия"
          details={[
            "Мы заранее предупредим по телефону и предложим новое время.",
            "При -20°C и ниже прогулки переносим в закрытый манеж.",
          ]}
        />

        <PhotoHero
          title="Зимние прогулки на лошадях"
          subtitle="Красивые кадры в лесу и на полянах"
          description="Соберём команду, подготовим лошадей и дадим рекомендации по тёплой экипировке."
          backgroundImage={{ src: "/images/services/5.jpg", alt: "Зимний маршрут" }}
        />

        <PortfolioGrid
          items={[
            { src: "/images/services/5.jpg", title: "Фотосессия на закате" },
            { src: "/images/services/3.jpg", title: "Семейная прогулка" },
            { src: "/images/home-img.jpg", title: "Зимний марш-бросок" },
            { src: "/images/services/1.jpg", title: "Детский клуб" },
          ]}
        />

        <PreparationTips
          title="Как подготовиться"
          tips={[
            {
              heading: "Удобная одежда",
              text: "Без скользких тканей, с закрытыми коленями и локтями. Обувь — без каблука.",
            },
            {
              heading: "Приходите за 15 минут",
              text: "Успеете получить шлем, перчатки и пройти короткий инструктаж.",
            },
            {
              heading: "Слушайте тренера",
              text: "Вопросы и дискомфорт сразу озвучивайте — подберём темп и настрой лошади.",
            },
          ]}
        />

        <Packages
          title="Готовые пакеты"
          packages={[
            {
              title: "Семейный",
              price: "3 000 ₽",
              description: "30 минут катания + кормление лошадей и фото.",
            },
            {
              title: "День рождения",
              price: "5 500 ₽",
              description: "Прогулка на двух лошадях, фотосъёмка и чай в тёплой зоне.",
            },
          ]}
        />

        <Boarding
          options={[
            {
              title: "Постоял на месяц",
              price: "25 000 ₽/месяц",
              description: "Уход, кормление, выгул и базовые тренировки.",
            },
            {
              title: "Премиум постой",
              price: "32 000 ₽/месяц",
              description: "Индивидуальный рацион, работа с тренером, массаж и ветеринарный контроль.",
            },
          ]}
        />

        <BreedingSale
          animals={animals}
          description="Подбор лошадей для покупки и помощь с документами. Показываем здоровье и характер каждой лошади."
        />

        <VisitStableCTA
          title="Приезжайте на экскурсию"
          text="Покажем конюшню, познакомим с лошадьми и расскажем о маршрутах."
          image={{ src: "/images/services/1.jpg", alt: "Экскурсия по конюшне" }}
        />

        <BlogList
          posts={[
            {
              title: "Как подготовиться к первой прогулке",
              excerpt: "Шлем, обувь, одежда — короткий чек-лист для новичков.",
              date: "12 марта 2025",
              href: "/blog/preparation",
              image: "/images/home-img.jpg",
            },
            {
              title: "Чем порадовать детей на ферме",
              excerpt: "Идеи для семейных выходных: пони, кормление, фотозоны.",
              date: "3 февраля 2025",
              href: "/blog/family",
              image: "/images/services/3.jpg",
            },
          ]}
        />

        <Article
          title="Как выбрать маршрут для прогулки"
          date="25 апреля 2025"
          hero={
            <img
              src="/images/home-img1.jpg"
              alt="Маршрут выходного дня"
              className="w-full rounded-3xl object-cover"
            />
          }
          content={
            <>
              <p>
                Начните с шага: это лучший способ освоить посадку и управление поводом. Когда чувствуете
                баланс, пробуйте рысь в манеже с тренером.
              </p>
              <p>
                Для фотосессий подойдёт закатный маршрут по полям, а для активного отдыха — лесная тропа.
                Мы подскажем, какой темп комфортен вашей лошади и безопасен для вас.
              </p>
            </>
          }
        />

        <RelatedPosts
          posts={[
            { title: "10 идей для фотосессии с лошадьми", date: "20 мая 2025", href: "/blog/photos" },
            { title: "Частые вопросы новичков", date: "5 июня 2025", href: "/blog/faq" },
          ]}
        />
      </Container>
    </div>
  ),
};
