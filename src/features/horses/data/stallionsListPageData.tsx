import { HorseOutDto } from "@/types";
import { fetchHorseList } from "./horseService";
import { HorseListPageProps } from "../ui/HorseListPage";
import { ArticleProps, BreadcrumbsProps } from "@/ui";
import { HorseListProps } from "../ui/HorseList";

export const getStallionsListPageData = async (): Promise<HorseListPageProps> => {

  const getHorses = async (): Promise<HorseOutDto[]> => {
    const result = await fetchHorseList(["horse"]);
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const horses = await getHorses();

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Главная", href: "/" },
      { name: "Разведение", href: "/breeding" },
      { name: "Жеребцы для случки" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticles: ArticleProps = {
    title: "Жеребцы для случки",
    content: <div className="space-y-2 border border-[#d3c6aa] bg-[#f0e7cf] p-6 -mx-6 rounded-xl shadow-xl">
      <p>Наши жеребцы обладают отличными генетическими качествами и имеют многочисленное потомство.</p>
      <p>Мы будем рады помочь вам в выборе подходящего жеребца и обеспечить успешную случку.</p>
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