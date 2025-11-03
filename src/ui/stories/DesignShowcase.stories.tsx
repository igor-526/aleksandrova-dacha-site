import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "../foundations/Container";
import { Hero } from "../hero/Hero";
import { QuickServices } from "../quick-services/QuickServices";
import { Highlights } from "../sections/Highlights";
import { PopularOffers } from "../sections/PopularOffers";
import { Testimonials } from "../sections/Testimonials";
import { AboutTeaser } from "../sections/AboutTeaser";
import { ContactFarm } from "../sections/ContactFarm";
import { BookingSection } from "../sections/BookingSection";
import { Footer } from "../navigation/Footer";
import { Button } from "../button/Button";

const meta = {
  tags: ["autodocs"],
  title: "UI/Showcase/Landing",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const Landing: Story = {
  render: () => (
    <div className="space-y-20 bg-[#f6efe0] pb-20">
      <header>
        <Container className="py-6">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-[#8d784f]">
            <span>Александрова Дача</span>
            <span>+7 812 345-67-89</span>
          </div>
        </Container>
      </header>
      <Container>
        <Hero
          title="Конные прогулки и зоопарк"
          subtitle="Александрова дача"
          description="Проведите незабываемый день на нашей конюшне: прокатитесь верхом по живописным тропам, познакомьтесь с пони и другими питомцами, насладитесь свежим воздухом."
          backgroundImage={{
            src: "/images/home-img.jpg",
            alt: "Лошадь на поле",
          }}
          cta={<Button>Записаться на прогулку</Button>}
        />
      </Container>
      <Container>
        <QuickServices
          items={[
            {
              id: "riding",
              title: "Конные прогулки",
              description:
                "Маршруты для новичков и опытных всадников с инструкторами.",
              href: "/horse_riding",
            },
            {
              id: "zoo",
              title: "Мини-зоопарк",
              description:
                "Пони, козочки, верблюды и другие дружелюбные животные.",
              href: "/about/zoo",
            },
            {
              id: "ponies",
              title: "Покупка пони",
              description: "Редкие породы пони и лошадей по доступным ценам.",
              href: "/service/breeding",
            },
          ]}
        />
      </Container>
      <Container className="space-y-12 text-center">
        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#2f3600]">О нас</h2>
          <p className="text-base text-[#4b4d2f]">
            Александрова Дача — одно из самых уютных мест в Ленинградской
            области. Мы собрали лучших тренеров и самых дружелюбных животных,
            чтобы вы могли провести время с пользой и удовольствием.
          </p>
        </section>
        <Highlights
          items={[
            {
              title: "150+ животных",
              description:
                "Мини-зоопарк с пони, козочками, ламами и даже верблюдами.",
              icon: "leaf",
            },
            {
              title: "Опытные тренеры",
              description:
                "Индивидуальные и групповые занятия для всадников любого уровня.",
              icon: "horse",
            },
            {
              title: "Живописная территория",
              description: "Маршруты по паркам, полям и лесам Царского Села.",
              icon: "location",
            },
          ]}
        />
      </Container>
      <Container>
        <PopularOffers
          offers={[
            {
              title: "Прогулка верхом",
              price: "от 1 500 ₽",
              description: "Индивидуальный маршрут на лошади с инструктором.",
              features: [
                "60 минут",
                "Маршрут по парку",
                "Фотосессия в подарок",
              ],
            },
            {
              title: "Посещение мини-зоопарка",
              price: "от 800 ₽",
              description: "Знакомство, кормление и фотосессия с животными.",
              features: [
                "Сопровождение сотрудника",
                "Корм для животных",
                "Фото зона",
              ],
            },
            {
              title: "Семейная фотосессия",
              price: "от 3 500 ₽",
              description: "Профессиональная съемка с лошадьми и пони.",
              features: ["Подбор образа", "Опытный фотограф", "Обработка фото"],
            },
          ]}
        />
      </Container>
      <Container>
        <Testimonials
          items={[
            {
              author: "Анна",
              text: "Потрясающее место! Приезжали всей семьей: дети в восторге от пони, а мы с мужем впервые прокатились верхом.",
              rating: 5,
              source: "Google",
            },
            {
              author: "Игорь",
              text: "Уютная атмосфера, внимательный персонал и очень ухоженные лошади. Обязательно вернемся летом!",
              rating: 5,
              source: "Яндекс",
            },
          ]}
        />
      </Container>
      <Container>
        <BookingSection
          title="Запишитесь на прогулку"
          description="Выберите удобное время, а мы подготовим лошадей и маршрут. Менеджер свяжется с вами для подтверждения."
          image={{ src: "/images/services/1.jpg", alt: "Прогулка верхом" }}
          formProps={{
            options: [
              { value: "riding", label: "Конная прогулка" },
              { value: "zoo", label: "Мини-зоопарк" },
              { value: "lesson", label: "Обучение верховой езде" },
            ],
          }}
        />
      </Container>
      <Container>
        <AboutTeaser
          title="Честная забота о лошадях"
          text="Мы создаем комфортные условия для наших животных и гостей. Команда заботится о каждом питомце, а территории клуба поддерживаются в порядке круглый год."
          ctaHref="/about"
          ctaLabel="Узнать подробнее"
        />
      </Container>
      <Container>
        <ContactFarm
          address="Санкт-Петербург, посёлок Александрова Дача"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          map={{
            lat: 59.727,
            lng: 30.411,
            zoom: 13,
            provider: "yandex",
            markerLabel: "Александрова Дача",
          }}
        />
      </Container>
      <Footer
        address="Санкт-Петербург, Александрова Дача"
        phones={["+7 (812) 345-67-89"]}
        socials={[
          { label: "VK", href: "https://vk.com" },
          { label: "Telegram", href: "https://t.me" },
          { label: "Instagram", href: "https://instagram.com" },
        ]}
        menus={[
          {
            title: "Навигация",
            links: [
              { label: "Разведение", href: "/service/breeding" },
              { label: "О нас", href: "/about" },
              { label: "Фотографии", href: "/photosession" },
            ],
          },
          {
            title: "Дополнительно",
            links: [
              { label: "Контакты", href: "/about/contacts" },
              { label: "Блог", href: "/blog" },
              { label: "Политика", href: "/policy" },
            ],
          },
        ]}
      />
    </div>
  ),
};
