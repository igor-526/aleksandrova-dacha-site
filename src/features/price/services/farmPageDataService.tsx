import {
  ArticleProps,
  BreadcrumbsProps,
  GallerySectionProps,
  HeroProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "./priceService";
import { ServicesListProps } from "../ui/ServicesList";
import { ServicesGroupPageProps } from "../ui/ServicesGroupPage";
import { PriceGroupOutDto } from "@/types";

export const getFarmPageData = async (): Promise<ServicesGroupPageProps> => {
  const getGroup = async (): Promise<PriceGroupOutDto> => {
    const result = await fetchPriceGroup("57b058fd-df75-4676-b5f0-f607b79bdd9c")
    return result.status === "ok" && result.data ? result.data : null;
  };

  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Контактная мини-ферма");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const group = await getGroup();
  const prices = await getPrices();

  const dataHero: HeroProps = {
    title: group?.name || "",
    subtitle: "Александрова дача",
    description: group?.description || "",
    backgroundImage: {
      src: "/images/services/farm/01.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Услуги", href: "/services" },
      { name: "Мини-ферма" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticle: ArticleProps = {
    content: <div>
      <p className="mb-2">Наши животные привыкли к общению с людьми, они дружелюбны и ласковы.</p>
      <p className="mb-2">Во время экскурсии вы сможете погладить и покормить животных, узнать много интересного о их повадках и образе жизни.</p>
      <p >После экскурсии все желающие смогут прокатиться на пони или лошади, верхом или в экипаже (санях).</p>
    </div>,
    className: "bg-[#f0e7cf] rounded-lg py-2 shadow-md",
  };

  const dataMission = null;

  const dataServicesList: ServicesListProps = {
    items: [],
    columns: 2,
    mediaPosition: "top",
    gallery: true
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
