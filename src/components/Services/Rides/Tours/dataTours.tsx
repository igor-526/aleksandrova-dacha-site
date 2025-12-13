import {
  AboutTeaserProps,
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

export const dataSafetyNoticeRegistration: SafetyNoticeProps = {
  title: "Предварительная запись",
  items: [
    "Запись возможна не позднее, чем за день до приезда",
    "Указанные цены действуют только по предварительной записи",
    "Без записи, катание возможно только при наличии свободного тренера (инструктора)",
    "Без записи с тоимость услуги увеличится на 200 рублей",
  ],
};

export const dataSafetyNoticeСloth: SafetyNoticeProps = {
  title: "Одежда",
  items: [
    "Штаны не стесняющие движения",
    "Ботинки или сапоги с маленьким каблуком",
    "Верхняя одежда - по погоде",
    "Защитный шлем выдаем",
    "Не забудьте взять хорошее настроение",
  ],
};

export const dataSafetyNoticeTimes: SafetyNoticeProps = {
  title: "Время приезда за 15 минут",
  items: [
    "Уведомить администрацию клуба о своем приезде",
    "Ознакомиться с техникой безопасности",
    "Оплатить услугу в кассе",
    "Подобрать шлем, переодеться",
    "Познакомится с тренером и угостить лошадь",
  ],
};

export const dataBookingSection: BookingSectionProps = {
  image: { src: "/images/home-img.jpg", alt: "" },
};
