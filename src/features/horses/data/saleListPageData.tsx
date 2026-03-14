import { HorseOutDto } from "@/types";
import { fetchHorseList } from "./horseService";
import { HorseListPageProps } from "../ui/HorseListPage";
import { ArticleProps, BreadcrumbsProps } from "@/ui";
import { HorseListProps } from "../ui/HorseList";

export const getSaleListPageData = async (): Promise<HorseListPageProps> => {

  const getHorses = async (): Promise<HorseOutDto[]> => {
    const result = await fetchHorseList(["horse"]);
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const horses = await getHorses();

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Главная", href: "/" },
      { name: "Продажа", href: "/breeding" },
      { name: "Продажа лошадей и пони" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticles: ArticleProps = {
    title: "Продажа лошадей и пони",
    content: <div className="space-y-2 border border-[#d3c6aa] bg-[#f0e7cf] p-6 -mx-6 rounded-xl shadow-xl">
      <p>Возможна доставка в любой регион России и СНГ.</p>
      <p>Перевозим животных наземным транспортом или самолетом.</p>
    </div>
  }

  const dataHorseList: HorseListProps = {
    items: horses,
    columns: 1,
  }

  return {
    dataBreadcrumbs,
    dataArticles,
    dataHorseList,
  };
}