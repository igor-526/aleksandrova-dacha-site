import {
  ArticleProps,
  BreadcrumbsProps,
  GallerySectionProps,
  HeroProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";
import { ServicesListProps } from "../ui/ServicesList";
import { ServicesGroupPageProps } from "../ui/ServicesGroupPage";

export const getFarmPageData = async (): Promise<ServicesGroupPageProps> => {
  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Экскурсии");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const prices = await getPrices();

  const dataHero: HeroProps = {
    title: "Контактная мини-ферма",
    subtitle: "Александрова дача",
    backgroundImage: {
      src: "/images/services/farm/01.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { label: "Главная", href: "/" },
      { label: "Услуги", href: "/services" },
      { label: "Мини-ферма" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticle: ArticleProps = {
    content: (
      <div className="space-y-4">
        <p>
          Знакомство с животными из мини-фермы нашего клуба носит добрый,
          познавательный характер. У нас живут около 110 лошадей и пони, а также
          верблюды, северные олени, козы, кролики, гуси и другие животные.
        </p>
      </div>
    ),
  };

  const dataMission = null;

  const dataServicesList: ServicesListProps = {
    items: [],
    columns: 2,
    mediaPosition: "top",
  };

  const dataGallerySection: GallerySectionProps = {
    columns: 3,
    className: "w-full h-[150px] sm:h-[200px]",
    items: [
      {
        src: "/images/services/farm/05.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/04.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/12.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/07.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/01.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/06.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/02.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/03.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/09.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/10.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/11.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/08.jpg",
        alt: "farm",
      },
      {
        src: "/images/services/farm/13.jpg",
        alt: "farm",
      },
    ],
  };

  const additionalSection = null;

  return {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
    additionalSection,
  };
};
