import { HorseOutDto } from "@/types";
import { fetchHorseList } from "./horseService";
import { HorseListPageProps } from "../ui/HorseListPage";
import { ArticleProps, BreadcrumbsProps } from "@/ui";
import { HorseListProps } from "../ui/HorseList";

export const getPonyListPageData = async (): Promise<HorseListPageProps> => {

  const getHorses = async (): Promise<HorseOutDto[]> => {
    const result = await fetchHorseList(["pony"]);
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const horses = await getHorses();

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Главная", href: "/" },
      { name: "Разведение", href: "/breeding" },
      { name: "Пони-ферма" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticles: ArticleProps = {
    title: "Пони-ферма",
    content: <div className="space-y-2 border border-[#d3c6aa] bg-[#f0e7cf] p-6 -mx-6 rounded-xl shadow-xl">
      <p>Мы занимаемся разведением пони уже более 20 лет и имеем богатый опыт в этой области.</p>
      <p>Наше племенное хозяйство разводит и продает Шетлендских, Уэльских и Аппалуза пони.</p>
    </div>
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