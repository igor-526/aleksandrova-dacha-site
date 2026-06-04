import { fetchHorsesByBreeds } from "./horseService";
import { HorseListPageProps } from "../ui/HorseListPage";
import { BreadcrumbsProps } from "@/ui";
import { HorseListProps } from "../ui/HorseList";

export const getPonyListPageData = async (): Promise<HorseListPageProps> => {
  const columns = 3;
  const visibleRows = 2;

  const horsesByBreeds = await fetchHorsesByBreeds("pony");

  const dataHero = {
    title: "Разведение и продажа",
    subtitle: "Александрова дача",
    description: "Племенные лошади и пони, продажа жеребят и взрослых лошадей, жеребцы для случки",
    backgroundImage: {
      src: "/images/horses/pony.jpg",
      alt: "Kонюшня Александровой дачи",
    }
  }

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Главная", href: "/" },
      { name: "Разведение", href: "/breeding" },
      { name: "Пони-ферма" },
    ],
    className: "-mt-9 px-6",
  };

  const dataHorseList: HorseListProps = {
    itemsByBreed: horsesByBreeds,
    columns,
    visibleRows,
    fetchParams: { kind: ["pony"] },
  }

  return {
    dataHero,
    dataBreadcrumbs,
    dataHorseList,
  };
}
