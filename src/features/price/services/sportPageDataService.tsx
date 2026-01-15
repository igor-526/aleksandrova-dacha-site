import { ArticleProps, BreadcrumbsProps, HeroProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "./priceService";
import { ServicesListProps } from "../ui/ServicesList";
import { ReactNode } from "react";
import { OneServiceGallery } from "../ui/OneServiseGallery";
import { PriceGroupOutDto } from "@/types";

export const getSportPageData = async () => {
  const getGroup = async (): Promise<PriceGroupOutDto> => {
    const result = await fetchPriceGroup("bf92ecc7-221e-4a79-b479-5559701ec0e9")
    return result.status === "ok" && result.data ? result.data : null;
  };

  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Конный спорт");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const getTypeSport = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Конный спорт (конкур, выездка)");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const group = await getGroup();
  const prices = await getPrices();
  const typeSport = await getTypeSport();

  const dataHero: HeroProps = {
    title: group?.name || "",
    subtitle: "Александрова дача",
    description: "спортивные тренировки по выездке, конкуру",
    backgroundImage: {
      src: "/images/services/rides/equestrian-sport/04.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Услуги", href: "/services" },
      { name: "Верховая езда", href: "/services/rides" },
      { name: "Конный спорт" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticle: ArticleProps = {

    content: (
      <div className="space-y-4 whitespace-break-spaces">
        {group?.description}
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

  const additionalSection: ReactNode = (
    <div className="grid gap-8 md:grid-cols-2">
      {typeSport.map((price, index) => <div key={index} className="h-96"><OneServiceGallery price={price} columns={1} /></div>)}
    </div>
  )


  return {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
    additionalSection
  };
};
