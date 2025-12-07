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

const pricingTable: TableType = {
  columns: [
    { key: "service", title: "Service", annotation: "Что включено", cell_formatter: [] },
    { key: "weekday", title: "Будни", annotation: "Пн–Пт", cell_formatter: [] },
    { key: "weekend", title: "Выходные", annotation: "Сб–Вс", cell_formatter: [] },
  ],
  rows: [
    {
      cells: {
        service: { value: "Катание 30 минут", annotation: "Легкая прогулка", cell_formatter: [] },
        weekday: { value: "1 000 ₽", annotation: "Базовая цена", cell_formatter: ["text_bold"] },
        weekend: { value: "1 200 ₽", annotation: "Наценка выходных", cell_formatter: [] },
      },
    },
    {
      cells: {
        service: { value: "Катание 60 минут", annotation: "", cell_formatter: [] },
        weekday: { value: "1 500 ₽", annotation: "", cell_formatter: ["text_bold"] },
        weekend: { value: "1 800 ₽", annotation: "", cell_formatter: [] },
      },
    },
    {
      cells: {
        service: { value: "Прогулка. заездка", annotation: "", cell_formatter: [] },
        weekday: { value: "2 000 ₽", annotation: "", cell_formatter: ["text_bold"] },
        weekend: { value: "2 300 ₽", annotation: "", cell_formatter: [] },
      },
    },
  ],
};

const team = [
  {
    name: "╨Э╨╕╨║╨╛╨╗╨░╨╣ ╨б╨╝╨╕╤А╨╜╨╛╨▓",
    role: "╨У╨╗╨░╨▓╨╜╤Л╨╣ ╤В╤А╨╡╨╜╨╡╤А",
    photo: "/images/services/5.jpg",
    bioShort: "20 ╨╗╨╡╤В ╨▓ ╨║╨╛╨╜╨╜╨╛╨╝ ╤Б╨┐╨╛╤А╤В╨╡, ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨░ ╨║ ╤Б╨╛╤А╨╡╨▓╨╜╨╛╨▓╨░╨╜╨╕╤П╨╝.",
  },
  {
    name: "╨Р╨╗╨╕╨╜╨░ ╨Ю╤А╨╗╨╛╨▓╨░",
    role: "╨Ш╨╜╤Б╤В╤А╤Г╨║╤В╨╛╤А ╨┐╨╛ ╨┐╨╛╨╜╨╕-╨║╨╗╤Г╨▒╤Г",
    photo: "/images/services/3.jpg",
    bioShort: "╨Ф╨╕╨┐╨╗╨╛╨╝╨╕╤А╨╛╨▓╨░╨╜╨╜╤Л╨╣ ╨┐╨╡╨┤╨░╨│╨╛╨│, ╤А╨░╨▒╨╛╤В╨░╨╡╤В ╤Б ╨┤╨╡╤В╤М╨╝╨╕ 4-12 ╨╗╨╡╤В.",
  },
  {
    name: "╨Ь╨░╤А╨╕╤П ╨Ъ╨╛╨▓╨░╨╗╤М",
    role: "╨Т╨╡╤В╨╡╤А╨╕╨╜╨░╤А",
    photo: "/images/services/1.jpg",
    bioShort: "╨б╨╗╨╡╨┤╨╕╤В ╨╖╨░ ╨╖╨┤╨╛╤А╨╛╨▓╤М╨╡╨╝ ╨╗╨╛╤И╨░╨┤╨╡╨╣ ╨╕ ╨║╨╛╨╜╤Б╤Г╨╗╤М╤В╨╕╤А╤Г╨╡╤В ╨▓╨╗╨░╨┤╨╡╨╗╤М╤Ж╨╡╨▓.",
  },
];

const animals = [
  {
    name: "╨С╨╛╨╜╨╜╨╕",
    photo: "/images/services/3.jpg",
    tags: ["╨┐╨╛╨╜╨╕", "╨┤╨╛╨▒╤А╨╛╨╢╨╡╨╗╨░╤В╨╡╨╗╤М╨╜╨░╤П"],
    description: "╨в╨╡╤А╨┐╨╡╨╗╨╕╨▓╨░ ╨╕ ╨┤╤А╤Г╨╢╨╡╨╗╤О╨▒╨╜╨░ ╨║ ╨┤╨╡╤В╤П╨╝.",
  },
  {
    name: "╨Ь╨░╨▓╤А",
    photo: "/images/home-img.jpg",
    tags: ["╨▓╨╡╤А╤Е╨╛╨▓╨░╤П ╨╡╨╖╨┤╨░"],
    description: "╨б╨┐╨╛╨║╨╛╨╣╨╜╤Л╨╣ ╨╢╨╡╤А╨╡╨▒╨╡╤Ж ╨┤╨╗╤П ╨┐╤А╨╛╨│╤Г╨╗╨╛╨║.",
  },
  {
    name: "╨Ы╤О╤В╨╕╨║",
    photo: "/images/services/1.jpg",
    tags: ["╤Б╨┐╨╛╤А╤В"],
    description: "╨Ш╨┤╨╡╨░╨╗╨╡╨╜ ╨┤╨╗╤П ╤В╤А╨╡╨╜╨╕╤А╨╛╨▓╨╛╨║ ╨▓╤Л╨╡╨╖╨┤╨║╨╕.",
  },
];

export const AllSections: Story = {
  render: () => (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Highlights
          items={[
            {
              title: "150+ ╨╢╨╕╨▓╨╛╤В╨╜╤Л╤Е",
              description: "╨Ь╨╕╨╜╨╕-╨╖╨╛╨╛╨┐╨░╤А╨║ ╤Б ╨┐╨╛╨╜╨╕, ╨╗╨░╨╝╨░╨╝╨╕, ╨║╨╛╨╖╨╛╤З╨║╨░╨╝╨╕.",
              icon: "leaf",
            },
            {
              title: "╨Ю╨┐╤Л╤В╨╜╤Л╨╡ ╤В╤А╨╡╨╜╨╡╤А╤Л",
              description: "╨Ш╨╜╨┤╨╕╨▓╨╕╨┤╤Г╨░╨╗╤М╨╜╤Л╨╡ ╨╖╨░╨╜╤П╤В╨╕╤П ╨┤╨╗╤П ╨▓╨╖╤А╨╛╤Б╨╗╤Л╤Е ╨╕ ╨┤╨╡╤В╨╡╨╣.",
              icon: "horse",
            },
            {
              title: "╨Я╤А╨╕╤А╨╛╨┤╨░ ╤А╤П╨┤╨╛╨╝",
              description: "╨Ь╨░╤А╤И╤А╤Г╤В╤Л ╨┐╨╛ ╨┐╨░╤А╨║╨░╨╝ ╨ж╨░╤А╤Б╨║╨╛╨│╨╛ ╨б╨╡╨╗╨░.",
              icon: "location",
            },
          ]}
        />

        <PopularOffers
          offers={[
            {
              title: "╨Я╤А╨╛╨│╤Г╨╗╨║╨░ 60 ╨╝╨╕╨╜",
              price: "1 500 тВ╜",
              description: "╨Ь╨░╤А╤И╤А╤Г╤В ╨┐╨╛ ╨┐╨░╤А╨║╤Г ╤Б ╨╕╨╜╤Б╤В╤А╤Г╨║╤В╨╛╤А╨╛╨╝.",
            },
            {
              title: "╨Ь╨╕╨╜╨╕-╨╖╨╛╨╛╨┐╨░╤А╨║",
              price: "800 тВ╜",
              description: "╨Ъ╨╛╤А╨╝╨╗╨╡╨╜╨╕╨╡ ╨╕ ╤Д╨╛╤В╨╛╤Б╨╡╤Б╤Б╨╕╤П ╤Б ╨╢╨╕╨▓╨╛╤В╨╜╤Л╨╝╨╕.",
              features: ["╨б╨╛╨┐╤А╨╛╨▓╨╛╨╢╨┤╨╡╨╜╨╕╨╡ ╤Б╨╛╤В╤А╤Г╨┤╨╜╨╕╨║╨░"],
            },
            {
              title: "╨д╨╛╤В╨╛╤Б╨╡╤Б╤Б╨╕╤П",
              price: "3 500 тВ╜",
              description: "╨б╤К╨╡╨╝╨║╨░ ╤Б ╨┐╤А╨╛╤Д╨╡╤Б╤Б╨╕╨╛╨╜╨░╨╗╤М╨╜╤Л╨╝ ╤Д╨╛╤В╨╛╨│╤А╨░╤Д╨╛╨╝.",
            },
          ]}
        />

        <Testimonials
          asCarousel={false}
          items={[
            {
              author: "╨Р╨╜╨╜╨░",
              text: "╨Ф╨╡╤В╨╕ ╨▓ ╨▓╨╛╤Б╤В╨╛╤А╨│╨╡ ╨╛╤В ╨┐╨╛╨╜╨╕-╨║╨╗╤Г╨▒╨░!",
              rating: 5,
              source: "Google",
            },
            {
              author: "╨Ш╨▓╨░╨╜",
              text: "╨б╨┐╨╛╨║╨╛╨╣╨╜╤Л╨╡ ╨╗╨╛╤И╨░╨┤╨╕ ╨╕ ╨╛╨┐╤Л╤В╨╜╤Л╨╡ ╤В╤А╨╡╨╜╨╡╤А╤Л.",
              rating: 4,
              source: "╨п╨╜╨┤╨╡╨║╤Б",
            },
          ]}
        />

        <AboutTeaser
          title="╨Ю ╨║╨╗╤Г╨▒╨╡"
          text="╨Ь╤Л ╨╖╨░╨▒╨╛╤В╨╕╨╝╤Б╤П ╨╛ ╨║╨░╨╢╨┤╨╛╨╝ ╨┐╨╕╤В╨╛╨╝╤Ж╨╡ ╨╕ ╤Б╨╛╨╖╨┤╨░╤С╨╝ ╨║╨╛╨╝╤Д╨╛╤А╤В ╨┤╨╗╤П ╨│╨╛╤Б╤В╨╡╨╣. ╨Т╨░╤Б ╨╢╨┤╤Г╤В ╨┐╤А╨╛╨│╤Г╨╗╨║╨╕, ╤Д╨╛╤В╨╛╤Б╨╡╤Б╤Б╨╕╨╕ ╨╕ ╤Б╨╡╨╝╨╡╨╣╨╜╤Л╨╣ ╨╛╤В╨┤╤Л╤Е."
        />

        <Mission
          title="╨Э╨░╤И╨░ ╨╝╨╕╤Б╤Б╨╕╤П"
          points={[
            {
              heading: "╨Ч╨░╨▒╨╛╤В╨░",
              text: "╨Ъ╨╛╨╝╤Д╨╛╤А╤В╨╜╤Л╨╡ ╤Г╤Б╨╗╨╛╨▓╨╕╤П ╤Б╨╛╨┤╨╡╤А╨╢╨░╨╜╨╕╤П ╨╢╨╕╨▓╨╛╤В╨╜╤Л╤Е.",
            },
            { heading: "╨Ю╨▒╤Г╤З╨╡╨╜╨╕╨╡", text: "╨Я╨╛╨╝╨╛╨│╨░╨╡╨╝ ╨▓╤Б╨░╨┤╨╜╨╕╨║╨░╨╝ ╤А╨░╨╖╨▓╨╕╨▓╨░╤В╤М╤Б╤П." },
            {
              heading: "╨Ю╤В╨┤╤Л╤Е",
              text: "╨б╨╛╨╖╨┤╨░╤С╨╝ ╨┐╤А╨╛╤Б╤В╤А╨░╨╜╤Б╤В╨▓╨╛ ╨┤╨╗╤П ╤Б╨╡╨╝╨╡╨╣╨╜╨╛╨│╨╛ ╨┤╨╛╤Б╤Г╨│╨░.",
            },
          ]}
        />

        <TeamGrid members={team} />
        <HorsesShowcase animals={animals} />

        <ContactFarm
          address="╨б╨░╨╜╨║╤В-╨Я╨╡╤В╨╡╤А╨▒╤Г╤А╨│, ╨┐╨╛╤Б. ╨Р╨╗╨╡╨║╤Б╨░╨╜╨┤╤А╨╛╨▓╨░ ╨Ф╨░╤З╨░"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          map={{
            lat: 59.727,
            lng: 30.411,
            zoom: 13,
            provider: "yandex",
            markerLabel: "╨Ъ╨б╨Ъ ╨Р╨╗╨╡╨║╤Б╨░╨╜╨┤╤А╨╛╨▓╨░ ╨┤╨░╤З╨░",
          }}
        />

        <GallerySection
          title="╨У╨░╨╗╨╡╤А╨╡╤П"
          items={[
            { src: "/images/home-img.jpg", alt: "╨Я╤А╨╛╨│╤Г╨╗╨║╨░" },
            { src: "/images/services/1.jpg", alt: "╨Ю╨▒╤Г╤З╨╡╨╜╨╕╨╡" },
            { src: "/images/services/3.jpg", alt: "╨Я╨╛╨╜╨╕" },
            { src: "/images/services/5.jpg", alt: "╨в╤А╨╡╨╜╨╡╤А" },
          ]}
        />

        <ProgramsIntro
          title="╨Я╤А╨╛╨│╤А╨░╨╝╨╝╤Л ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П"
          description="╨Я╨╛╨┤╨▒╨╡╤А╤С╨╝ ╨┐╤А╨╛╨│╤А╨░╨╝╨╝╤Г ╨┐╨╛╨┤ ╨▓╨░╤И ╤Г╤А╨╛╨▓╨╡╨╜╤М ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨╕ тАФ ╨╛╤В ╨┐╨╡╤А╨▓╤Л╤Е ╤И╨░╨│╨╛╨▓ ╨┤╨╛ ╤Б╨┐╨╛╤А╤В╨╕╨▓╨╜╤Л╤Е ╤Б╤В╨░╤А╤В╨╛╨▓."
          stats={[
            { label: "╨│╨╛╤Б╤В╨╡╨╣ ╨▓ ╨│╨╛╨┤", value: "10K" },
            { label: "╨╗╨╛╤И╨░╨┤╨╡╨╣", value: "150" },
            { label: "╨╗╨╡╤В ╨╛╨┐╤Л╤В╨░", value: "20" },
          ]}
        />

        <ProgramCards
          programs={[
            {
              title: "╨Э╨╛╨▓╨╕╤З╨╛╨║",
              level: "0-1",
              description: "╨Ю╤Б╨╜╨╛╨▓╤Л ╨┐╨╛╤Б╨░╨┤╨║╨╕ ╨╕ ╤Г╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П.",
              duration: "4 ╨╖╨░╨╜╤П╤В╨╕╤П",
              price: "6 000 тВ╜",
            },
            {
              title: "╨б╨┐╨╛╤А╤В",
              level: "2-3",
              description: "╨Я╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨░ ╨║ ╤Б╨╛╤А╨╡╨▓╨╜╨╛╨▓╨░╨╜╨╕╤П╨╝.",
              duration: "8 ╨╖╨░╨╜╤П╤В╨╕╨╣",
              price: "12 000 тВ╜",
            },
          ]}
        />

        <PricingTable item={pricingTable} />

        <CoachCarousel coaches={team} />

        <SafetyNotice
          title="╨Я╤А╨░╨▓╨╕╨╗╨░ ╨▒╨╡╨╖╨╛╨┐╨░╤Б╨╜╨╛╤Б╤В╨╕"
          items={[
            "╨Я╤А╨╕╤Е╨╛╨┤╨╕╤В╨╡ ╨╖╨░ 15 ╨╝╨╕╨╜╤Г╤В ╨┤╨╛ ╨╜╨░╤З╨░╨╗╨░, ╤З╤В╨╛╨▒╤Л ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨╕╤В╤М╤Б╤П.",
            "╨б╨╛╨▒╨╗╤О╨┤╨░╨╣╤В╨╡ ╤Г╨║╨░╨╖╨░╨╜╨╕╤П ╤В╤А╨╡╨╜╨╡╤А╨░ ╨▓╨╛ ╨▓╤А╨╡╨╝╤П ╨╖╨░╨╜╤П╤В╨╕╤П.",
            "╨Ш╤Б╨┐╨╛╨╗╤М╨╖╤Г╨╣╤В╨╡ ╤И╨╗╨╡╨╝ ╨╕ ╨┐╨╛╨┤╤Е╨╛╨┤╤П╤Й╤Г╤О ╨╛╨▒╤Г╨▓╤М.",
          ]}
        />

        <BookingSection
          title="╨Ч╨░╨┐╨╕╤И╨╕╤В╨╡╤Б╤М ╨┐╤А╤П╨╝╨╛ ╤Б╨╡╨╣╤З╨░╤Б"
          description="╨Т╤Л╨▒╨╡╤А╨╕╤В╨╡ ╤Г╤Б╨╗╤Г╨│╤Г ╨╕ ╨╛╤Б╤В╨░╨▓╤М╤В╨╡ ╨║╨╛╨╜╤В╨░╨║╤В╤Л тАФ ╨░╨┤╨╝╨╕╨╜╨╕╤Б╤В╤А╨░╤В╨╛╤А ╤Б╨▓╤П╨╢╨╡╤В╤Б╤П ╨┤╨╗╤П ╨┐╨╛╨┤╤В╨▓╨╡╤А╨╢╨┤╨╡╨╜╨╕╤П."
          image={{ src: "/images/services/1.jpg", alt: "╨Ч╨░╨┐╨╕╤Б╤М" }}
        />

        <RoutesHero
          title="╨Ь╨░╤А╤И╤А╤Г╤В╤Л ╨▓╤Л╤Е╨╛╨┤╨╜╨╛╨│╨╛ ╨┤╨╜╤П"
          subtitle="╨Ъ╨╛╨╜╨╜╤Л╨╡ ╨┐╤А╨╛╨│╤Г╨╗╨║╨╕"
          description="╨Ц╨╕╨▓╨╛╨┐╨╕╤Б╨╜╤Л╨╡ ╨╜╨░╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П ╨┐╨╛ ╨╗╨╡╤Б╨░╨╝, ╨┐╨░╤А╨║╨░╨╝ ╨╕ ╤Б╨╡╨╗╤М╤Б╨║╨╕╨╝ ╨┤╨╛╤А╨╛╨│╨░╨╝."
          image={{ src: "/images/services/5.jpg", alt: "╨Ь╨░╤А╤И╤А╤Г╤В" }}
        />

        <RouteTypes
          routes={[
            {
              title: "╨Ы╨╡╤Б╨╜╨╛╨╣",
              duration: "60 ╨╝╨╕╨╜",
              distance: "4 ╨║╨╝",
              description: "╨в╤А╨╛╨┐╨░ ╨▓╨┤╨╛╨╗╤М ╨╛╨╖╨╡╤А╨░ ╨╕ ╨╗╨╡╤Б╨░.",
            },
            {
              title: "╨Я╨░╤А╨║╨╛╨▓╤Л╨╣",
              duration: "45 ╨╝╨╕╨╜",
              distance: "3 ╨║╨╝",
              description: "╨Ш╤Б╤В╨╛╤А╨╕╤З╨╡╤Б╨║╨╕╨╡ ╨┤╨╛╤А╨╛╨╢╨║╨╕ ╨ж╨░╤А╤Б╨║╨╛╨│╨╛ ╨б╨╡╨╗╨░.",
            },
          ]}
        />

        <RoutesMap
          description="╨Ю╤В╨┐╤А╨░╨▓╨╜╨░╤П ╤В╨╛╤З╨║╨░ ╨╜╨░╤Е╨╛╨┤╨╕╤В╤Б╤П ╤Г ╨│╨╗╨░╨▓╨╜╨╛╨│╨╛ ╨╝╨░╨╜╨╡╨╢╨░. ╨Т ╨╝╨░╤А╤И╤А╤Г╤В ╨▓╨║╨╗╤О╤З╨╡╨╜╤Л ╨╛╤Б╤В╨░╨╜╨╛╨▓╨║╨╕ ╨┤╨╗╤П ╤Д╨╛╤В╨╛."
          tips={[
            "╨Т ╨┤╨╛╨╢╨┤╨╗╨╕╨▓╤Г╤О ╨┐╨╛╨│╨╛╨┤╤Г ╨▓╤Л╨▒╨╕╤А╨░╨╡╨╝ ╨░╨╗╤М╤В╨╡╤А╨╜╨░╤В╨╕╨▓╨╜╤Л╨╡ ╨┐╤Г╤В╨╕.",
            "╨Я╨╛╨╢╨░╨╗╤Г╨╣╤Б╤В╨░, ╨┐╤А╨╡╨┤╤Г╨┐╤А╨╡╨╢╨┤╨░╨╣╤В╨╡ ╨╛╨▒ ╨╛╨┐╨╛╨╖╨┤╨░╨╜╨╕╤П╤Е.",
          ]}
          map={{ lat: 59.727, lng: 30.411, zoom: 13, markerLabel: "╨Ь╨░╤А╤И╤А╤Г╤В" }}
        />

        <PhotoGallery
          title="╨д╨╛╤В╨╛╤Б╨╡╤Б╤Б╨╕╨╕"
          description="╨Э╨╡╤Б╨║╨╛╨╗╤М╨║╨╛ ╨║╨░╨┤╤А╨╛╨▓ ╨╕╨╖ ╨╜╨╡╨┤╨░╨▓╨╜╨╕╤Е ╤Б╤К╨╡╨╝╨╛╨║."
          items={[
            { src: "/images/services/5.jpg", alt: "╨д╨╛╤В╨╛ 1" },
            { src: "/images/services/1.jpg", alt: "╨д╨╛╤В╨╛ 2" },
            { src: "/images/services/3.jpg", alt: "╨д╨╛╤В╨╛ 3" },
          ]}
        />

        <WeatherNotice
          message="╨б╨╗╨╡╨┤╨╕╤В╨╡ ╨╖╨░ ╨┐╨╛╨│╨╛╨┤╨╛╨╣"
          details={[
            "╨Я╤А╨╕ ╤Б╨╕╨╗╤М╨╜╨╛╨╝ ╨▓╨╡╤В╤А╨╡ ╨┐╤А╨╛╨│╤Г╨╗╨║╨╕ ╨╝╨╛╨│╤Г╤В ╨┐╨╡╤А╨╡╨╜╨╛╤Б╨╕╤В╤М╤Б╤П.",
            "╨Ч╨╕╨╝╨╛╨╣ ╨▓╨╛╨╖╨╝╨╛╨╢╨╜╤Л ╨╕╨╖╨╝╨╡╨╜╨╡╨╜╨╕╤П ╨╝╨░╤А╤И╤А╤Г╤В╨╛╨▓.",
          ]}
        />

        <PhotoHero
          title="╨д╨╛╤В╨╛╤Б╨╡╤Б╤Б╨╕╨╕ ╤Б ╨╗╨╛╤И╨░╨┤╤М╨╝╨╕"
          subtitle="╨Я╨╛╨┤╨░╤А╨╕╤В╨╡ ╤Б╨╡╨▒╨╡ ╨▓╨╛╤Б╨┐╨╛╨╝╨╕╨╜╨░╨╜╨╕╤П"
          description="╨Я╤А╨╛╤Д╨╡╤Б╤Б╨╕╨╛╨╜╨░╨╗╤М╨╜╨░╤П ╤Б╤К╨╡╨╝╨║╨░ ╨▓ ╨╢╨╕╨▓╨╛╨┐╨╕╤Б╨╜╤Л╤Е ╨╗╨╛╨║╨░╤Ж╨╕╤П╤Е ╨║╨╗╤Г╨▒╨░."
          backgroundImage={{ src: "/images/services/5.jpg", alt: "╨д╨╛╤В╨╛╤Б╨╡╤Б╤Б╨╕╤П" }}
        />

        <PortfolioGrid
          items={[
            { src: "/images/services/5.jpg", title: "╨б╨╡╨╝╨╡╨╣╨╜╨░╤П ╤Б╤К╨╡╨╝╨║╨░" },
            { src: "/images/services/3.jpg", title: "╨Ф╨╡╤В╤Б╨║╨░╤П ╤Д╨╛╤В╨╛╤Б╨╡╤Б╤Б╨╕╤П" },
            { src: "/images/home-img.jpg", title: "╨Ь╨░╤А╤И╤А╤Г╤В ╨╜╨░ ╨╖╨░╨║╨░╤В╨╡" },
            { src: "/images/services/1.jpg", title: "╨Я╨╗╤О╤И╨╡╨▓╤Л╨╡ ╨┐╨╛╨╜╨╕" },
          ]}
        />

        <PreparationTips
          title="╨Ъ╨░╨║ ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨╕╤В╤М╤Б╤П"
          tips={[
            {
              heading: "╨Ю╨┤╨╡╨╢╨┤╨░",
              text: "╨Т╨╛╨╖╤М╨╝╨╕╤В╨╡ ╤Г╨┤╨╛╨▒╨╜╤Л╨╡ ╨▒╤А╤О╨║╨╕ ╨╕ ╨╛╨▒╤Г╨▓╤М ╨▒╨╡╨╖ ╨║╨░╨▒╨╗╤Г╨║╨╛╨▓.",
            },
            {
              heading: "╨Т╤А╨╡╨╝╤П",
              text: "╨Я╤А╨╕╨╡╨╖╨╢╨░╨╣╤В╨╡ ╨╜╨░ 15 ╨╝╨╕╨╜╤Г╤В ╤А╨░╨╜╤М╤И╨╡, ╤З╤В╨╛╨▒╤Л ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨╕╤В╤М╤Б╤П.",
            },
            {
              heading: "╨Э╨░╤Б╤В╤А╨╛╨╣",
              text: "╨е╨╛╤А╨╛╤И╨╡╨╡ ╨╜╨░╤Б╤В╤А╨╛╨╡╨╜╨╕╨╡ ╨╕ ╨╢╨╡╨╗╨░╨╜╨╕╨╡ ╨╛╨▒╤Й╨░╤В╤М╤Б╤П ╤Б ╨╗╨╛╤И╨░╨┤╤М╨╝╨╕!",
            },
          ]}
        />

        <Packages
          title="╨Я╨░╨║╨╡╤В╤Л ╤Г╤Б╨╗╤Г╨│"
          packages={[
            {
              title: "╨б╤В╨░╨╜╨┤╨░╤А╤В",
              price: "3 000 тВ╜",
              description: "╨Я╤А╨╛╨│╤Г╨╗╨║╨░ 60 ╨╝╨╕╨╜ + ╤Д╨╛╤В╨╛╤Б╨╡╤Б╤Б╨╕╤П",
            },
            {
              title: "╨б╨╡╨╝╨╡╨╣╨╜╤Л╨╣",
              price: "5 500 тВ╜",
              description: "╨Ф╨▓╨░ ╤Г╤З╨░╤Б╤В╨╜╨╕╨║╨░ + ╨╝╨╕╨╜╨╕-╨╖╨╛╨╛╨┐╨░╤А╨║",
            },
          ]}
        />

        <Boarding
          options={[
            {
              title: "╨Я╨╛╤Б╤В╨╛╤П╨╗╤Л╨╡ ╤Г╤Б╨╗╤Г╨│╨╕",
              price: "25 000 тВ╜/╨╝╨╡╤Б",
              description: "╨г╤Е╨╛╨┤, ╨║╨╛╤А╨╝╨╗╨╡╨╜╨╕╨╡, ╨▓╤Л╨│╤Г╨╗.",
            },
            {
              title: "╨б╨┐╨╛╤А╤В╨╕╨▓╨╜╤Л╨╣ ╨┐╨░╨║╨╡╤В",
              price: "32 000 тВ╜/╨╝╨╡╤Б",
              description: "╨в╤А╨╡╨╜╨╕╤А╨╛╨▓╨║╨╕ ╨╕ ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨░ ╨║ ╤Б╤В╨░╤А╤В╨░╨╝.",
            },
          ]}
        />

        <BreedingSale
          animals={animals}
          description="╨Я╨╕╤В╨╛╨╝╤Ж╤Л ╨┤╨╛╤Б╤В╤Г╨┐╨╜╤Л ╨┤╨╗╤П ╨░╤А╨╡╨╜╨┤╤Л ╨╕╨╗╨╕ ╨┐╨╛╨║╤Г╨┐╨║╨╕."
        />

        <VisitStableCTA
          title="╨Я╤А╨╕╨╡╨╖╨╢╨░╨╣╤В╨╡ ╨▓ ╨│╨╛╤Б╤В╨╕"
          text="╨Ч╨░╨┐╨╗╨░╨╜╨╕╤А╤Г╨╣╤В╨╡ ╨▓╨╕╨╖╨╕╤В, ╨╝╤Л ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨╕╨╝ ╨┐╤А╨╛╨│╤А╨░╨╝╨╝╤Г ╨┤╨╗╤П ╨▓╤Б╨╡╨╣ ╤Б╨╡╨╝╤М╨╕."
          image={{ src: "/images/services/1.jpg", alt: "╨Т╨╕╨╖╨╕╤В" }}
        />

        <BlogList
          posts={[
            {
              title: "╨Ъ╨░╨║ ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨╕╤В╤М╤Б╤П ╨║ ╨┐╨╡╤А╨▓╨╛╨╣ ╨┐╤А╨╛╨│╤Г╨╗╨║╨╡",
              excerpt:
                "╨б╨╛╨▓╨╡╤В╤Л ╨┐╨╛ ╤Н╨║╨╕╨┐╨╕╤А╨╛╨▓╨║╨╡, ╨┐╨╛╨▓╨╡╨┤╨╡╨╜╨╕╤О ╨▓ ╤Б╨╡╨┤╨╗╨╡ ╨╕ ╤В╨╡╤Е╨╜╨╕╨║╨╡ ╨▒╨╡╨╖╨╛╨┐╨░╤Б╨╜╨╛╤Б╤В╨╕.",
              date: "12 ╨╝╨░╤А╤В╨░ 2025",
              href: "/blog/preparation",
              image: "/images/home-img.jpg",
            },
            {
              title: "╨Ч╨╜╨░╨║╨╛╨╝╤Б╤В╨▓╨╛ ╤Б ╨╝╨╕╨╜╨╕-╨╖╨╛╨╛╨┐╨░╤А╨║╨╛╨╝",
              excerpt:
                "╨а╨░╤Б╤Б╨║╨░╨╖╤Л╨▓╨░╨╡╨╝ ╨╛ ╨╜╨░╤И╨╕╤Е ╨╢╨╕╨▓╨╛╤В╨╜╤Л╤Е ╨╕ ╨┐╤А╨░╨▓╨╕╨╗╨░╤Е ╨╛╨▒╤Й╨╡╨╜╨╕╤П ╤Б ╨╜╨╕╨╝╨╕.",
              date: "3 ╤Д╨╡╨▓╤А╨░╨╗╤П 2025",
              href: "/blog/zoo",
              image: "/images/services/3.jpg",
            },
          ]}
        />

        <Article
          title="╨Ш╤Б╤В╨╛╤А╨╕╤П ╨║╨╗╤Г╨▒╨░ ╨Р╨╗╨╡╨║╤Б╨░╨╜╨┤╤А╨╛╨▓╨░ ╨Ф╨░╤З╨░"
          date="25 ╤П╨╜╨▓╨░╤А╤П 2025"
          hero={
            <img
              src="/images/home-img1.jpg"
              alt="╨Ъ╨╗╤Г╨▒"
              className="w-full rounded-3xl object-cover"
            />
          }
          content={
            <>
              <p>
                ╨Ъ╨╗╤Г╨▒ ╨╛╤Б╨╜╨╛╨▓╨░╨╜ ╤Н╨╜╤В╤Г╨╖╨╕╨░╤Б╤В╨░╨╝╨╕ ╨▓╨╡╤А╤Е╨╛╨▓╨╛╨╣ ╨╡╨╖╨┤╤Л ╨▓ ╨╜╨░╤З╨░╨╗╨╡ 2000-╤Е. ╨б ╤В╨╡╤Е
                ╨┐╨╛╤А ╨╝╤Л ╨┐╤А╨╡╨▓╤А╨░╤В╨╕╨╗╨╕╤Б╤М ╨▓ ╨║╤А╤Г╨┐╨╜╨╡╨╣╤И╨╕╨╣ ╤Ж╨╡╨╜╤В╤А ╨╛╤В╨┤╤Л╤Е╨░ ╤Б ╨╗╨╛╤И╨░╨┤╤М╨╝╨╕ ╨▓
                ╨Ы╨╡╨╜╨╕╨╜╨│╤А╨░╨┤╤Б╨║╨╛╨╣ ╨╛╨▒╨╗╨░╤Б╤В╨╕.
              </p>
              <p>
                ╨Ь╤Л ╤А╨░╨╖╨▓╨╕╨▓╨░╨╡╨╝ ╨╜╨░╨┐╤А╨░╨▓╨╗╨╡╨╜╨╕╤П ╨┐╤А╨╛╨│╤Г╨╗╨╛╨║, ╨╛╨▒╤Г╤З╨╡╨╜╨╕╤П, ╤Б╨┐╨╛╤А╤В╨╕╨▓╨╜╨╛╨╣
                ╨┐╨╛╨┤╨│╨╛╤В╨╛╨▓╨║╨╕ ╨╕ ╨▓╨╖╨░╨╕╨╝╨╛╨┤╨╡╨╣╤Б╤В╨▓╨╕╤П ╤Б ╨╢╨╕╨▓╨╛╤В╨╜╤Л╨╝╨╕. ╨г╤О╤В╨╜╨░╤П ╨░╤В╨╝╨╛╤Б╤Д╨╡╤А╨░ ╨╕
                ╨┐╤А╨╕╤А╨╛╨┤╨░ ╨┤╨╡╨╗╨░╤О╤В ╨╛╤В╨┤╤Л╤Е ╨╜╨╡╨╖╨░╨▒╤Л╨▓╨░╨╡╨╝╤Л╨╝.
              </p>
            </>
          }
        />

        <RelatedPosts
          posts={[
            {
              title: "10 ╤Д╨░╨║╤В╨╛╨▓ ╨╛ ╨╜╨░╤И╨╕╤Е ╨╗╨╛╤И╨░╨┤╤П╤Е",
              date: "20 ╤П╨╜╨▓╨░╤А╤П 2025",
              href: "/blog/horses",
            },
            {
              title: "╨Ъ╨░╨║ ╨┐╤А╨╛╤Е╨╛╨┤╤П╤В ╨╖╨░╨╜╤П╤В╨╕╤П ╨▓ ╨┐╨╛╨╜╨╕-╨║╨╗╤Г╨▒╨╡",
              date: "5 ╤П╨╜╨▓╨░╤А╤П 2025",
              href: "/blog/pony-club",
            },
          ]}
        />
      </Container>
    </div>
  ),
};




