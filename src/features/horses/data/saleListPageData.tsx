import { fetchHorsesByBreeds } from "./horseService";
import { HorseListPageProps } from "../ui/HorseListPage";
import { BreadcrumbsProps } from "@/ui";
import { HorseListProps } from "../ui/HorseList";

export const getSaleListPageData = async (): Promise<HorseListPageProps> => {
  const columns = 3;
  const visibleRows = 2;
  const horsesByService = await fetchHorsesByBreeds("pony", "Продается", { sort: ["bdate"] });

  const dataHero = {
    title: "Разведение и продажа",
    subtitle: "Александрова дача",
    description: "Племенные лошади и пони, продажа жеребят и взрослых лошадей, жеребцы для случки",
    backgroundImage: {
      src: "/images/horses/sale.jpg",
      alt: "Kонюшня Александровой дачи",
    }
  }

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Главная", href: "/" },
      { name: "Разведение", href: "/breeding" },
      { name: "Продажа лошадей и пони" },
    ],
    className: "-mt-9 px-6",
  };

  const dataHorseList: HorseListProps = {
    itemsByBreed: horsesByService,
    columns,
    visibleRows,
    withSalePrice: true,
    fetchParams: { kind: ["pony"], sort: ["bdate"] },
    withDetails: false,
  }

  return {
    dataHero,
    dataBreadcrumbs,
    dataHorseList,
  };
}
