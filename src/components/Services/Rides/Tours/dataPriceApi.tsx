import { PriceOutDto } from "@/types/prices";

const dataPrice: PriceOutDto[] = [
  {
    id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d719",
    name: "Разовое катание на лошади (пони)",
    slug: "razovoe-katanie-na-loshadi-poni",
    description:
      "В поводу по манежу или парку. Не более 3-х всадников на одного тренера.",
    photos: [
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d712",
        is_main: true,
        url: "/images/services/rides/tours/tour1.jpg",
      },
    ],
    groups: [
      {
        id: "aeda5ae6-b380-4e6c-a8c7-a9894e55739b",
        name: "Конные прогулки и катания",
      },
    ],
    created_at: "2025-11-30T14:12:17.957457+00:00",
    updated_at: "2025-11-30T14:12:17.957465+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          {
            key: "service",
            title: " ",
            annotation: "",
            cell_formatter: [],
          },
          {
            key: "weekday",
            title: "Будни",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
          {
            key: "weekend",
            title: "Выходные",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
        ],
        rows: [
          {
            cells: {
              service: {
                value: "30 мин",
                annotation: "",
                cell_formatter: [],
              },
              weekday: {
                value: "1000",
                annotation: "По предварительной записи",
                cell_formatter: [],
              },
              weekend: {
                value: "1200",
                annotation: "По предварительной записи",
                cell_formatter: [],
              },
            },
          },
          {
            cells: {
              service: {
                value: "1 час",
                annotation: "",
                cell_formatter: [],
              },
              weekday: {
                value: "1500",
                annotation: "",
                cell_formatter: [],
              },
              weekend: {
                value: "1800",
                annotation: "",
                cell_formatter: [],
              },
            },
          },
        ],
      },
    ],
  },
  {
    id: "a15127eb-2720-4522-bc2d-095a5ceeea1b",
    name: "Индивидуальное катание на лошади (пони)",
    slug: "individualnoe-katanie-na-loshadi-poni",
    description: "В поводу по манежу или парку. Все внимание только Вам.",
    photos: [
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d710",
        is_main: true,
        url: "/images/services/rides/tours/tour2.jpg",
      },
    ],
    groups: [
      {
        id: "aeda5ae6-b380-4e6c-a8c7-a9894e55739b",
        name: "Конные прогулки и катания",
      },
    ],
    created_at: "2025-11-30T14:17:24.986470+00:00",
    updated_at: "2025-11-30T14:17:24.986478+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          { key: "service", title: " ", annotation: "", cell_formatter: [] },
          {
            key: "weekday",
            title: "Будни",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
          {
            key: "weekend",
            title: "Выходные",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
        ],
        rows: [
          {
            cells: {
              service: { value: "30 мин", annotation: "", cell_formatter: [] },
              weekday: { value: "1200", annotation: "", cell_formatter: [] },
              weekend: { value: "1400", annotation: "", cell_formatter: [] },
            },
          },
          {
            cells: {
              service: { value: "1 час", annotation: "", cell_formatter: [] },
              weekday: { value: "1800", annotation: "", cell_formatter: [] },
              weekend: { value: "2000", annotation: "", cell_formatter: [] },
            },
          },
        ],
      },
    ],
  },
  {
    id: "205ea81d-7393-4f38-b3a2-8d0df0cff638",
    name: "Разовое занятие с прогулкой",
    slug: "razovoe-zanyatie-s-progulkoy",
    description:
      "Обучение посадке, управлению на шагу / рыси – 30 мин. Прогулка по манежу или парку – 30 мин. Не более 3-х всадников на одного тренера.",
    photos: [
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d713",
        is_main: true,
        url: "/images/services/rides/tours/tour3.jpg",
      },
    ],
    groups: [
      {
        id: "aeda5ae6-b380-4e6c-a8c7-a9894e55739b",
        name: "Конные прогулки и катания",
      },
    ],
    created_at: "2025-12-02T14:30:48.647418+00:00",
    updated_at: "2025-12-02T14:30:48.647427+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          {
            key: "service",
            title: " ",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
          {
            key: "weekday",
            title: "Будни",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
          {
            key: "weekend",
            title: "Выходные",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
        ],
        rows: [
          {
            cells: {
              service: { value: "1 час", annotation: "", cell_formatter: [] },
              weekday: { value: "1700", annotation: "", cell_formatter: [] },
              weekend: { value: "2000", annotation: "", cell_formatter: [] },
            },
          },
        ],
      },
    ],
  },
  {
    id: "2d216b4b-6926-460f-af55-631b6f75312b",
    name: "Конная прогулка в полях",
    slug: "konnaya-progulka-v-polyah",
    description: "Не менее 2-х всадников. Шаг, рысь, галоп (по готовности).",
    photos: [
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d714",
        is_main: true,
        url: "/images/services/rides/tours/tour4.jpg",
      },
    ],
    groups: [
      {
        id: "aeda5ae6-b380-4e6c-a8c7-a9894e55739b",
        name: "Конные прогулки и катания",
      },
    ],
    created_at: "2025-12-02T14:36:59.609287+00:00",
    updated_at: "2025-12-02T14:36:59.609297+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          {
            key: "service",
            title: " ",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
          {
            key: "weekday",
            title: "Будни",
            annotation: "Только по предварительной записи",
            cell_formatter: ["text_bold"],
          },
          {
            key: "weekend",
            title: "Выходные",
            annotation: "Только по предварительной записи",
            cell_formatter: ["text_bold"],
          },
        ],
        rows: [
          {
            cells: {
              service: { value: "1 час", annotation: "", cell_formatter: [] },
              weekday: { value: "2000", annotation: "", cell_formatter: [] },
              weekend: { value: "2500", annotation: "", cell_formatter: [] },
            },
          },
          {
            cells: {
              service: { value: "2 часа", annotation: "", cell_formatter: [] },
              weekday: { value: "3000", annotation: "", cell_formatter: [] },
              weekend: { value: "3500", annotation: "", cell_formatter: [] },
            },
          },
        ],
      },
    ],
  },
  {
    id: "457e9dd8-cb42-45cb-92c0-7a0e9286bf51",
    name: "Маршрут для опытных всадников",
    slug: "marshrut-dlya-opytnyh-vsadnikov",
    description:
      "Не менее 2-х всадников. Шаг, рысь, галоп, преодоление канав и водных препятствий.",
    photos: [
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d715",
        is_main: true,
        url: "/images/services/rides/tours/tour5.jpg",
      },
    ],
    groups: [
      {
        id: "aeda5ae6-b380-4e6c-a8c7-a9894e55739b",
        name: "Конные прогулки и катания",
      },
    ],
    created_at: "2025-12-02T15:57:20.321803+00:00",
    updated_at: "2025-12-02T15:57:20.321814+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          {
            key: "service",
            title: " ",
            annotation: "",
            cell_formatter: ["text_bold"],
          },
          {
            key: "weekday",
            title: "Выходные",
            annotation: "",
            cell_formatter: [],
          },
          {
            key: "weekend",
            title: "Выходные",
            annotation: "",
            cell_formatter: [],
          },
        ],
        rows: [
          {
            cells: {
              service: { value: "3 часа", annotation: "", cell_formatter: [] },
              weekday: { value: "4000", annotation: "", cell_formatter: [] },
              weekend: { value: "4500", annotation: "", cell_formatter: [] },
            },
          },
        ],
      },
    ],
  },
  {
    id: "a530e88d-e532-47a8-bfb8-5e035e26f1d1",
    name: "Выезд на финский залив",
    slug: "vyezd-na-finskiy-zaliv",
    description:
      "Прогулка, купание, фотосессия. В стоимость входит аренда и доставка лошади, услуги инструктора.",
    photos: [
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d716",
        is_main: true,
        url: "/images/services/rides/tours/tour6.jpg",
      },
    ],
    groups: [
      {
        id: "aeda5ae6-b380-4e6c-a8c7-a9894e55739b",
        name: "Конные прогулки и катания",
      },
    ],
    created_at: "2025-12-02T16:02:14.330079+00:00",
    updated_at: "2025-12-02T16:02:14.330088+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          { key: "service", title: " ", annotation: "", cell_formatter: [] },
          {
            key: "weekday",
            title: "Будни",
            annotation: "",
            cell_formatter: [],
          },
          {
            key: "weekend",
            title: "Выходные",
            annotation: "",
            cell_formatter: [],
          },
        ],
        rows: [
          {
            cells: {
              service: {
                value: "1 лошадь",
                annotation: "",
                cell_formatter: [],
              },
              weekday: { value: "15000", annotation: "", cell_formatter: [] },
              weekend: { value: "18000", annotation: "", cell_formatter: [] },
            },
          },
          {
            cells: {
              service: {
                value: "доп. лошадь",
                annotation: "",
                cell_formatter: [],
              },
              weekday: { value: "5000", annotation: "", cell_formatter: [] },
              weekend: { value: "6000", annotation: "", cell_formatter: [] },
            },
          },
        ],
      },
    ],
  },
];
export default dataPrice;
