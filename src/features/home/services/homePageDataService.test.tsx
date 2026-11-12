import { expect, it, vi } from "vitest";
import { getHomePageData } from "./homePageDataService";

vi.mock("@/features/siteSettings", () => ({ getSiteSettings: async () => ({}) }));

it("PR-01 preserves all original text, order and hrefs without icons", async () => {
  const data = await getHomePageData();
  expect(data.itemsServices).toEqual([
  {
    "id": "riding",
    "title": "Верховая езда для взрослых и детей",
    "description": "Для любого возраста и уровня подготовки. Прогулки, обучение, спорт.",
    "href": "/services/rides"
  },
  {
    "id": "farm",
    "title": "Контактная мини-ферма",
    "description": "Верблюд, северные олени, козочки, овечки и другие дружелюбные животные.",
    "href": "/services/farm"
  },
  {
    "id": "rental",
    "title": "Аренда экипажей и животных",
    "description": "На массовые мероприятия, праздники, свадьбу или для фотосессии.",
    "href": "/services/rental"
  },
  {
    "id": "breeding",
    "title": "Разведение и продажа",
    "description": "Племенное разведение. Продажа лошадей и пони. Жеребцы на случку. ",
    "href": "/breeding"
  }
]);
  expect(data.itemsServices.every((item) => !("icon" in item))).toBe(true);
  expect(data.dataContactsBlock.phones).toEqual([]);
});
