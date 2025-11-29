import { ServiceCardProps } from "../ServiceCard";

export const services: ServiceCardProps[] = [
  {
    id: 1,
    name: "Разовое катание на лошади (пони)",
    description:
      "В поводу по манежу или парку. Не более 3-х всадников на одного тренера.",
    image: "/images/services/rides/tours/tour1.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "30 мин",
          weekday: "1 200 ₽",
          weekend: "1 300 ₽",
        },
        {
          service: "60 мин",
          weekday: "1 700 ₽",
          weekend: "2 000 ₽",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Индивидуальное катание на лошади (пони)",
    description: "В поводу по манежу или парку. Все внимание только Вам.",
    image: "/images/services/rides/tours/tour2.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "30 мин",
          weekday: "1 400 ₽",
          weekend: "1 500 ₽",
        },
        {
          service: "60 мин",
          weekday: "2 000 ₽",
          weekend: "2 200 ₽",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Разовое занятие с прогулкой",
    description:
      "Обучение посадке, управлению на шагу / рыси – 30 мин. Прогулка по манежу или парку – 30 мин. Не более 3-х всадников на одного тренера.",
    image: "/images/services/rides/tours/tour3.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "60 мин",
          weekday: "1 900 ₽",
          weekend: "2 200 ₽",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Конная прогулка в полях",
    description: "Не менее 2-х всадников. Шаг, рысь, галоп (по готовности)",
    image: "/images/services/rides/tours/tour4.jpg",
    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "1 час",
          weekday: "2 000 ₽",
          weekend: "2 500 ₽",
        },
        {
          service: "2 часа",
          weekday: "3 000 ₽",
          weekend: "3 500 ₽",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Конная прогулка в полях",
    description:
      "Не менее 2-х всадников. Шаг, рысь, галоп, преодоление канав и водных препятствий",
    image: "/images/services/rides/tours/tour5.jpg",
    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "3 часа",
          weekday: "4 000 ₽",
          weekend: "4 500 ₽",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Выезд на финский залив",
    description:
      "Прогулка, купание, фотосессия. В стоимость входит аренда и доставка лошади, услуги инструктора.",
    image: "/images/services/rides/tours/tour6.jpg",
    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "1 лошадь",
          weekday: "15 000 ₽",
          weekend: "18 500 ₽",
        },
        {
          service: "Доп. лошадь",
          weekday: "5 000 ₽",
          weekend: "6 000 ₽",
        },
      ],
    },
  },
];

export const dataTextAboutTeaser = {
  title: "Верховая езда для взрослых и детей",
  text: [
    "Наши опытные инструкторы помогут вам освоить верховую езду или просто провести время в компании этих великолепных животных.",
    "Независимо от вашего уровня подготовки, у нас найдется подходящий вариант для каждого.",
  ],
  ctaLabel: "Записаться на прогулку",
  ctaHref: "/",
};
