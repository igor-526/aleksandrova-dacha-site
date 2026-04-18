import { HorseOutDto } from "@/types";
import { fetchHorseList } from "./horseService";
import { HorseListPageProps } from "../ui/HorseListPage";
import { ArticleProps, BreadcrumbsProps } from "@/ui";
import { HorseListProps } from "../ui/HorseList";

export const getHorseListPageData = async (): Promise<HorseListPageProps> => {

  const getHorses = async (): Promise<HorseOutDto[]> => {
    const result = await fetchHorseList(["horse"]);
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const horses = await getHorses();

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Главная", href: "/" },
      { name: "Разведение", href: "/breeding" },
      { name: "Коне-ферма" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticles: ArticleProps = {
    title: "Коне-ферма",
    content: <div className="-mx-6 flex justify-items-stretch items-stretch flex-col sm:flex-row gap-2">
      <p className="border border-[#d3c6aa] bg-[#f0e7cf] p-6 rounded-xl">Мы занимаемся разведением лошадей с 2001 года и имеем богатый опыт в этой области.</p>
      <p className="border border-[#d3c6aa] bg-[#f0e7cf] p-6 rounded-xl">Ведется племенная работа с лошадьми Тракененской, Ганноверской, Буденновской, Забайкальской, Советской и Французской тяжелoвозной (першерон) пород.</p>
    </div>,
  }

  const dataHorseList: HorseListProps = {
    items: horses,
    columns: 3,
  }

  return {
    dataBreadcrumbs,
    dataArticles,
    dataHorseList,
  };
}