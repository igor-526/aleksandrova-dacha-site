import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "../foundations/Container";
import { Highlights } from "../sections/Highlights";
import { PopularOffers } from "../sections/PopularOffers";
import { Testimonials } from "../sections/Testimonials";
import { AboutTeaser } from "../sections/AboutTeaser";
import { Mission } from "../sections/Mission";
import { TeamGrid } from "../sections/TeamGrid";
import { HorsesShowcase } from "../sections/HorsesShowcase";
import { ContactFarm } from "../sections/ContactFarm";
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

const team = [
  {
    name: "Николай Смирнов",
    role: "Главный тренер",
    photo: "/images/services/5.jpg",
    bioShort: "20 лет в конном спорте, подготовка к соревнованиям.",
  },
  {
    name: "Алина Орлова",
    role: "Инструктор по пони-клубу",
    photo: "/images/services/3.jpg",
    bioShort: "Дипломированный педагог, работает с детьми 4-12 лет.",
  },
  {
    name: "Мария Коваль",
    role: "Ветеринар",
    photo: "/images/services/1.jpg",
    bioShort: "Следит за здоровьем лошадей и консультирует владельцев.",
  },
];

const animals = [
  {
    name: "Бонни",
    photo: "/images/services/3.jpg",
    tags: ["пони", "доброжелательная"],
    description: "Терпелива и дружелюбна к детям.",
  },
  {
    name: "Мавр",
    photo: "/images/home-img.jpg",
    tags: ["верховая езда"],
    description: "Спокойный жеребец для прогулок.",
  },
  {
    name: "Лютик",
    photo: "/images/services/1.jpg",
    tags: ["спорт"],
    description: "Идеален для тренировок выездки.",
  },
];

export const AllSections: Story = {
  render: () => (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Highlights
          items={[
            {
              title: "150+ животных",
              description: "Мини-зоопарк с пони, ламами, козочками.",
              icon: "leaf",
            },
            {
              title: "Опытные тренеры",
              description: "Индивидуальные занятия для взрослых и детей.",
              icon: "horse",
            },
            {
              title: "Природа рядом",
              description: "Маршруты по паркам Царского Села.",
              icon: "location",
            },
          ]}
        />

        <PopularOffers
          offers={[
            {
              title: "Прогулка 60 мин",
              price: "1 500 ₽",
              description: "Маршрут по парку с инструктором.",
            },
            {
              title: "Мини-зоопарк",
              price: "800 ₽",
              description: "Кормление и фотосессия с животными.",
              features: ["Сопровождение сотрудника"],
            },
            {
              title: "Фотосессия",
              price: "3 500 ₽",
              description: "Съемка с профессиональным фотографом.",
            },
          ]}
        />

        <Testimonials
          asCarousel={false}
          items={[
            {
              author: "Анна",
              text: "Дети в восторге от пони-клуба!",
              rating: 5,
              source: "Google",
            },
            {
              author: "Иван",
              text: "Спокойные лошади и опытные тренеры.",
              rating: 4,
              source: "Яндекс",
            },
          ]}
        />

        <AboutTeaser
          title="О клубе"
          text="Мы заботимся о каждом питомце и создаём комфорт для гостей. Вас ждут прогулки, фотосессии и семейный отдых."
        />

        <Mission
          title="Наша миссия"
          points={[
            {
              heading: "Забота",
              text: "Комфортные условия содержания животных.",
            },
            { heading: "Обучение", text: "Помогаем всадникам развиваться." },
            {
              heading: "Отдых",
              text: "Создаём пространство для семейного досуга.",
            },
          ]}
        />

        <TeamGrid members={team} />
        <HorsesShowcase animals={animals} />

        <ContactFarm
          address="Санкт-Петербург, пос. Александрова Дача"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          map={{
            lat: 59.727,
            lng: 30.411,
            zoom: 13,
            provider: "yandex",
            markerLabel: "КСК Александрова дача",
          }}
        />

        <GallerySection
          title="Галерея"
          items={[
            { src: "/images/home-img.jpg", alt: "Прогулка" },
            { src: "/images/services/1.jpg", alt: "Обучение" },
            { src: "/images/services/3.jpg", alt: "Пони" },
            { src: "/images/services/5.jpg", alt: "Тренер" },
          ]}
        />

        <ProgramsIntro
          title="Программы обучения"
          description="Подберём программу под ваш уровень подготовки — от первых шагов до спортивных стартов."
          stats={[
            { label: "гостей в год", value: "10K" },
            { label: "лошадей", value: "150" },
            { label: "лет опыта", value: "20" },
          ]}
        />

        <ProgramCards
          programs={[
            {
              title: "Новичок",
              level: "0-1",
              description: "Основы посадки и управления.",
              duration: "4 занятия",
              price: "6 000 ₽",
            },
            {
              title: "Спорт",
              level: "2-3",
              description: "Подготовка к соревнованиям.",
              duration: "8 занятий",
              price: "12 000 ₽",
            },
          ]}
        />

        <PricingTable
          columns={[
            { key: "service", title: "Услуга" },
            { key: "weekday", title: "Будни", align: "right" },
            { key: "weekend", title: "Выходные", align: "right" },
          ]}
          rows={[
            {
              service: "Прогулка 30 мин",
              weekday: "1 000 ₽",
              weekend: "1 200 ₽",
            },
            {
              service: "Прогулка 60 мин",
              weekday: "1 500 ₽",
              weekend: "1 800 ₽",
            },
            {
              service: "Индив. занятие",
              weekday: "2 000 ₽",
              weekend: "2 300 ₽",
            },
          ]}
        />

        <CoachCarousel coaches={team} />

        <SafetyNotice
          title="Правила безопасности"
          items={[
            "Приходите за 15 минут до начала, чтобы подготовиться.",
            "Соблюдайте указания тренера во время занятия.",
            "Используйте шлем и подходящую обувь.",
          ]}
        />

        <BookingSection
          title="Запишитесь прямо сейчас"
          description="Выберите услугу и оставьте контакты — администратор свяжется для подтверждения."
          image={{ src: "/images/services/1.jpg", alt: "Запись" }}
        />

        <RoutesHero
          title="Маршруты выходного дня"
          subtitle="Конные прогулки"
          description="Живописные направления по лесам, паркам и сельским дорогам."
          image={{ src: "/images/services/5.jpg", alt: "Маршрут" }}
        />

        <RouteTypes
          routes={[
            {
              title: "Лесной",
              duration: "60 мин",
              distance: "4 км",
              description: "Тропа вдоль озера и леса.",
            },
            {
              title: "Парковый",
              duration: "45 мин",
              distance: "3 км",
              description: "Исторические дорожки Царского Села.",
            },
          ]}
        />

        <RoutesMap
          description="Отправная точка находится у главного манежа. В маршрут включены остановки для фото."
          tips={[
            "В дождливую погоду выбираем альтернативные пути.",
            "Пожалуйста, предупреждайте об опозданиях.",
          ]}
          map={{ lat: 59.727, lng: 30.411, zoom: 13, markerLabel: "Маршрут" }}
        />

        <PhotoGallery
          title="Фотосессии"
          description="Несколько кадров из недавних съемок."
          items={[
            { src: "/images/services/5.jpg", alt: "Фото 1" },
            { src: "/images/services/1.jpg", alt: "Фото 2" },
            { src: "/images/services/3.jpg", alt: "Фото 3" },
          ]}
        />

        <WeatherNotice
          message="Следите за погодой"
          details={[
            "При сильном ветре прогулки могут переноситься.",
            "Зимой возможны изменения маршрутов.",
          ]}
        />

        <PhotoHero
          title="Фотосессии с лошадьми"
          subtitle="Подарите себе воспоминания"
          description="Профессиональная съемка в живописных локациях клуба."
          backgroundImage={{ src: "/images/services/5.jpg", alt: "Фотосессия" }}
        />

        <PortfolioGrid
          items={[
            { src: "/images/services/5.jpg", title: "Семейная съемка" },
            { src: "/images/services/3.jpg", title: "Детская фотосессия" },
            { src: "/images/home-img.jpg", title: "Маршрут на закате" },
            { src: "/images/services/1.jpg", title: "Плюшевые пони" },
          ]}
        />

        <PreparationTips
          title="Как подготовиться"
          tips={[
            {
              heading: "Одежда",
              text: "Возьмите удобные брюки и обувь без каблуков.",
            },
            {
              heading: "Время",
              text: "Приезжайте на 15 минут раньше, чтобы подготовиться.",
            },
            {
              heading: "Настрой",
              text: "Хорошее настроение и желание общаться с лошадьми!",
            },
          ]}
        />

        <Packages
          title="Пакеты услуг"
          packages={[
            {
              title: "Стандарт",
              price: "3 000 ₽",
              description: "Прогулка 60 мин + фотосессия",
            },
            {
              title: "Семейный",
              price: "5 500 ₽",
              description: "Два участника + мини-зоопарк",
            },
          ]}
        />

        <Boarding
          options={[
            {
              title: "Постоялые услуги",
              price: "25 000 ₽/мес",
              description: "Уход, кормление, выгул.",
            },
            {
              title: "Спортивный пакет",
              price: "32 000 ₽/мес",
              description: "Тренировки и подготовка к стартам.",
            },
          ]}
        />

        <BreedingSale
          animals={animals}
          description="Питомцы доступны для аренды или покупки."
        />

        <VisitStableCTA
          title="Приезжайте в гости"
          text="Запланируйте визит, мы подготовим программу для всей семьи."
          image={{ src: "/images/services/1.jpg", alt: "Визит" }}
        />

        <BlogList
          posts={[
            {
              title: "Как подготовиться к первой прогулке",
              excerpt:
                "Советы по экипировке, поведению в седле и технике безопасности.",
              date: "12 марта 2025",
              href: "/blog/preparation",
              image: "/images/home-img.jpg",
            },
            {
              title: "Знакомство с мини-зоопарком",
              excerpt:
                "Рассказываем о наших животных и правилах общения с ними.",
              date: "3 февраля 2025",
              href: "/blog/zoo",
              image: "/images/services/3.jpg",
            },
          ]}
        />

        <Article
          title="История клуба Александрова Дача"
          date="25 января 2025"
          hero={
            <img
              src="/images/home-img1.jpg"
              alt="Клуб"
              className="w-full rounded-3xl object-cover"
            />
          }
          content={
            <>
              <p>
                Клуб основан энтузиастами верховой езды в начале 2000-х. С тех
                пор мы превратились в крупнейший центр отдыха с лошадьми в
                Ленинградской области.
              </p>
              <p>
                Мы развиваем направления прогулок, обучения, спортивной
                подготовки и взаимодействия с животными. Уютная атмосфера и
                природа делают отдых незабываемым.
              </p>
            </>
          }
        />

        <RelatedPosts
          posts={[
            {
              title: "10 фактов о наших лошадях",
              date: "20 января 2025",
              href: "/blog/horses",
            },
            {
              title: "Как проходят занятия в пони-клубе",
              date: "5 января 2025",
              href: "/blog/pony-club",
            },
          ]}
        />
      </Container>
    </div>
  ),
};
