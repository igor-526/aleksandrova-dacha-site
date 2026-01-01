import { ArticleProps, BreadcrumbsProps, HeroProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";
import { ServicesListProps } from "../ui/ServicesList";

export const getSportPageData = async () => {
  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Конный спорт");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const prices = await getPrices();

  const dataHero: HeroProps = {
    title: "Конный спорт",
    subtitle: "Александрова дача",
    description: "(выездка, конкур)",
    backgroundImage: {
      src: "/images/services/rides/individual/individual.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { label: "Главная", href: "/" },
      { label: "Услуги", href: "/services" },
      { label: "Верховая езда", href: "/services/rides" },
      { label: "Конный спорт" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticle: ArticleProps = {
    title: "Конный спорт",
    content: (
      <div className="space-y-4">
        <p>
          Для достижения высоких результатов в спорте желающие могут взять в
          аренду лошадь (пони)
        </p>
      </div>
    ),
  };

  const dataMission = null;

  const dataServicesList: ServicesListProps = {
    items: [],
    columns: 1,
    gallery: false,
  };

  const dataGallerySection = null;

  return {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
  };
};
