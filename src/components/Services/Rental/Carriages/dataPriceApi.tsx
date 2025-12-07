import { PriceOutDto } from "@/types/prices";

const dataPrice: PriceOutDto[] = [
  {
    id: "893ab671-786a-4bb2-a4a7-a5aa52bb6d11",
    name: "Экипаж Виктория",
    slug: "ekipag-viktoriya",
    description:
      "Прогулочный изумрудный экипаж'Виктория', с одной или парой лошадей в упряжке. 4-х местный. Откидной капюшон.",
    photos: [
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d911",
        is_main: true,
        url: "/images/services/rental/carriages/lux-white-carriage-with-two-horses/lux1.jpg",
      },
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d912",
        is_main: true,
        url: "/images/services/rental/carriages/lux-white-carriage-with-two-horses/lux2.jpg",
      },
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d913",
        is_main: true,
        url: "/images/services/rental/carriages/lux-white-carriage-with-two-horses/lux3.jpg",
      },
    ],
    groups: [
      {
        id: "df97aade-2fc9-40ff-8617-5e137e4587a9",
        name: "Аренда экипажей",
      },
    ],
    created_at: "2025-12-02T16:06:51.434470+00:00",
    updated_at: "2025-12-02T16:06:51.434479+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          { key: "service", title: " ", annotation: "", cell_formatter: [] },
          {
            key: "onsite",
            title: "В клубе",
            annotation: "",
            cell_formatter: [],
          },
          {
            key: "outside",
            title: "С выездом",
            annotation: "",
            cell_formatter: [],
          },
        ],
        rows: [
          {
            cells: {
              service: {
                value: "1 час",
                annotation: "",
                cell_formatter: [],
              },
              onsite: { value: "30000", annotation: "", cell_formatter: [] },
              outside: { value: "40000", annotation: "", cell_formatter: [] },
            },
          },
        ],
      },
    ],
  },
  {
    id: "893ab671-786a-4bb2-a4a7-a5aa52bb6d16",
    name: "Экипаж Виктория",
    slug: "ekipag-viktoriya",
    description:
      "Прогулочный изумрудный экипаж'Виктория', с одной или парой лошадей в упряжке. 4-х местный. Откидной капюшон.",
    photos: [
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d911",
        is_main: true,
        url: "/images/services/rental/carriages/lux-white-carriage-with-two-horses/lux1.jpg",
      },
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d912",
        is_main: true,
        url: "/images/services/rental/carriages/lux-white-carriage-with-two-horses/lux2.jpg",
      },
      {
        id: "e2c82029-f1f2-4fd9-9eee-9fee89b8d913",
        is_main: true,
        url: "/images/services/rental/carriages/lux-white-carriage-with-two-horses/lux3.jpg",
      },
    ],
    groups: [
      {
        id: "df97aade-2fc9-40ff-8617-5e137e4587a9",
        name: "Аренда экипажей",
      },
    ],
    created_at: "2025-12-02T16:06:51.434470+00:00",
    updated_at: "2025-12-02T16:06:51.434479+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          { key: "service", title: " ", annotation: "", cell_formatter: [] },
          {
            key: "onsite",
            title: "В клубе",
            annotation: "",
            cell_formatter: [],
          },
          {
            key: "outside",
            title: "С выездом",
            annotation: "",
            cell_formatter: [],
          },
        ],
        rows: [
          {
            cells: {
              service: {
                value: "1 час",
                annotation: "",
                cell_formatter: [],
              },
              onsite: { value: "30000", annotation: "", cell_formatter: [] },
              outside: { value: "40000", annotation: "", cell_formatter: [] },
            },
          },
        ],
      },
    ],
  },
];
export default dataPrice;
