import { PriceOutDto } from "@/types/prices";

const dataPrice: PriceOutDto[] = [
  {
    id: "5b21eca1-b27e-4067-a9fc-f251517f514d",
    name: "1-й уровень подготовки",
    slug: "1-y-uroven-podgotovki",
    description:
      "Обучение верховой езде в группе 5-12 человек. Подойдет для начинающих всадников.",
    photos: [],
    groups: [
      { id: "4f26d20a-1aeb-4306-b5d4-5db139dcb077", name: "Групповые занятия" },
    ],
    created_at: "2025-12-02T19:27:11.990823+00:00",
    updated_at: "2025-12-02T19:27:11.990833+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          {
            key: "amount",
            title: "Занятий в месяц",
            annotation: "",
            cell_formatter: [],
          },
          {
            key: "price",
            title: "Стоимость",
            annotation: "",
            cell_formatter: [],
          },
        ],
        rows: [
          {
            cells: {
              price: { value: "6000", annotation: "", cell_formatter: [] },
              amount: {
                value: "4 занятия (будни)",
                annotation: "",
                cell_formatter: [],
              },
            },
          },
          {
            cells: {
              price: { value: "7000", annotation: "", cell_formatter: [] },
              amount: {
                value: "4 занятия (выходные)",
                annotation: "",
                cell_formatter: [],
              },
            },
          },
          {
            cells: {
              price: { value: "13000", annotation: "", cell_formatter: [] },
              amount: {
                value: "8 занятий",
                annotation: "",
                cell_formatter: [],
              },
            },
          },
          {
            cells: {
              price: { value: "15000", annotation: "", cell_formatter: [] },
              amount: {
                value: "12 занятий",
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
    id: "4b8f367a-38b6-4321-8fd9-1c0ff2888410",
    name: "2-й уровень подготовки",
    slug: "2-y-uroven-podgotovki",
    description:
      "Спортивная подготовка (конкур, выездка). Не более 10  человек в группе. Участия в соревнованиях клубного значения, участие в показательных выступлениях.",
    photos: [],
    groups: [
      { id: "4f26d20a-1aeb-4306-b5d4-5db139dcb077", name: "Групповые занятия" },
    ],
    created_at: "2025-12-02T19:34:59.511181+00:00",
    updated_at: "2025-12-02T19:34:59.511192+00:00",
    page_data: "<div></div>",
    price_tables: [
      {
        columns: [
          {
            key: "amount",
            title: "Занятий в месяц",
            annotation: "",
            cell_formatter: [],
          },
          {
            key: "price",
            title: "Стоимость",
            annotation: "",
            cell_formatter: [],
          },
        ],
        rows: [
          {
            cells: {
              price: { value: "15000", annotation: "", cell_formatter: [] },
              amount: {
                value: "8 занятий",
                annotation: "",
                cell_formatter: [],
              },
            },
          },
        ],
      },
    ],
  },
];
export default dataPrice;
