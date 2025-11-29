import { ServiceCardProps } from "../ServiceCard";

export const services: ServiceCardProps[] = [
  {
    id: 1,
    name: "Разовое занятие",
    description:
      "Обучение посадке, управлению на шагу, рыси, галопе. Не более 3-х всадников на одного тренера.",
    image: "/images/services/rides/individual/individual1.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "30 мин",
          weekday: "1 500 ₽",
          weekend: "1 700 ₽",
        },
        {
          service: "60 мин",
          weekday: "1 900 ₽",
          weekend: "2 200 ₽",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Индивидуальное занятие",
    description:
      "Обучение посадке, управлению на шагу, рыси, галопе. Все внимание только Вам.",
    image: "/images/services/rides/individual/individual2.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "30 мин",
          weekday: "1 700 ₽",
          weekend: "2 000 ₽",
        },
        {
          service: "60 мин",
          weekday: "2 500 ₽",
          weekend: "2 900 ₽",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Разовое спортивное занятие",
    description:
      "Повышение уровня спортивной подготовки. Не более 2-х всадников на одного тренера.",
    image: "/images/services/rides/individual/individual3.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "60 мин",
          weekday: "2 500 ₽",
          weekend: "3 000 ₽",
        },
      ],
    },
  },
  {
    id: 4,
    name: "Индивидуальное спортивное занятие",
    description:
      "Повышение уровня спортивной подготовки. Все внимание только Вам",
    image: "/images/services/rides/individual/individual4.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "60 мин",
          weekday: "3 000 ₽",
          weekend: "3 500 ₽",
        },
      ],
    },
  },
  {
    id: 5,
    name: "Теоретическое занятие",
    image: "/images/services/rides/individual/individual5.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "30 мин",
          weekday: "1 700 ₽",
          weekend: "2 000 ₽",
        },
        {
          service: "60 мин",
          weekday: "2 500 ₽",
          weekend: "2 900 ₽",
        },
      ],
    },
  },
  {
    id: 6,
    name: "Индивидуальное теоретическое занятие",
    image: "/images/services/rides/individual/individual6.jpg",

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "weekday", title: "Будни", align: "center" },
        { key: "weekend", title: "Выходные", align: "center" },
      ],
      rows: [
        {
          service: "30 мин",
          weekday: "1 700 ₽",
          weekend: "2 000 ₽",
        },
        {
          service: "60 мин",
          weekday: "2 500 ₽",
          weekend: "2 900 ₽",
        },
      ],
    },
  },
];

export const dataTextAboutTeaser = {
  title: "Обучение верховой езде",
  text: [
    "Обучим взрослых и детей, с нуля до спортивных разрядов.",
    "Всадникам, не имеющим начальных навыков верховой езды и детям до 6 лет рекомендуется брать индивидуальные занятия.",
  ],
  ctaLabel: "Записаться на занятие",
  ctaHref: "/",
};
