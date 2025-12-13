import { SiteSettingMiniDto } from "@/types";

export const getSetting = (key: string): string => {
  const result = site_settings.find((item) => item.key === key);
  if (result) return result.value;
  return "";
};

export const site_settings: SiteSettingMiniDto[] = [
  { key: "site_name", value: "Александрова Дача", type: "string" },
  {
    key: "address",
    value: "улица Александра Матросова, 1А, Павловск",
    type: "string",
  },
  { key: "vk", value: "https://vk.com/horsedacha", type: "string" },
  { key: "mail", value: "olga_genetika@list.ru", type: "string" },
  { key: "start_weekday", value: "11:00", type: "time" },
  { key: "end_weekday", value: "19:30", type: "time" },
  { key: "start_weekend", value: "10:00", type: "time" },
  { key: "end_weekend", value: "20:00", type: "time" },
  { key: "tel", value: "+7 (981) 155-54-44", type: "string" },
];
