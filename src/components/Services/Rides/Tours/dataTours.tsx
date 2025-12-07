import {
  AboutTeaserProps,
  ArticleProps,
  BookingSectionProps,
  HeroProps,
  SafetyNoticeProps,
} from "@/ui";

export const dataHero: HeroProps = {
  title: "Конные прогулки",
  subtitle: "Александрова дача",
  backgroundImage: {
    src: "/images/services/rides/tours/tour.jpg",
    alt: "desc",
  },
};

export const dataTextAboutTeaser: AboutTeaserProps = {
  title: "Верховая езда для взрослых и детей",
  text: [
    "Наши опытные инструкторы помогут вам освоить верховую езду или просто провести время в компании этих великолепных животных. Независимо от вашего уровня подготовки, у нас найдется подходящий вариант для каждого.",
  ],
  ctaLabel: "Записаться на прогулку",
  ctaHref: "/",
};

export const dataArticle: ArticleProps = {
  title: "Услуги и цены",
  content:
    "Указанные цены действуют только по предварительной записи. Запись возможна не позднее, чем за день до приезда. Если вы приехали без записи, катание на лошади (пони) возможно только при наличии свободного тренера (инструктора), стоимость услуги увеличится на 200 рублей.",
};

export const dataSafetyNoticeItems: SafetyNoticeProps[] = [
  {
    title: "Одежда для катания",
    items: [
      "штаны не стесняющие движения",
      "ботинки или сапоги с маленьким каблуком",
      "Верхняя одежда - по погоде",
      "Защитный шлем выдаем",
    ],
  },
  {
    title: "Приехать надо за 15-20 мин",
    items: [
      "уведомить администрацию клуба о своем приезде",
      "ознакомиться с техникой безопасности",
      "оплатить услугу в кассе",
      "подобрать шлем, переодеться",
      "познакомится с тренером и лошадью",
    ],
  },
];

export const dataBookingSection: BookingSectionProps = {
  image: { src: "/images/home-img.jpg", alt: "" },
};
