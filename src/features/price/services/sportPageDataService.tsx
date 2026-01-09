import { ArticleProps, BreadcrumbsProps, HeroProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";
import { ServicesListProps } from "../ui/ServicesList";
import { ReactNode } from "react";
import { OneServiceGallery } from "../ui/OneServiseGallery";

export const getSportPageData = async () => {
  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Конный спорт (аренда)");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const getTypeSport = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Конный спорт");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const prices = await getPrices();
  const typeSport = await getTypeSport();

  const dataHero: HeroProps = {
    title: "Конный спорт",
    subtitle: "Александрова дача",
    description: "спортивные тренировки по выездке, конкуру",
    backgroundImage: {
      src: "/images/services/rides/equestrian-sport/04.jpg",
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

    content: (
      <div className="space-y-4">
        <p>
          Для достижения высоких результатов в конном спорте важно достичь доверия, взаимопонимания, согласованности и гармонии между всадником и лошадью.
        </p>
        <p>Если вы являетесь владельцем лошади (пони), вы можете воспользоваться услугой постоя в нашем клубе и тренироваться самостоятельно или под руководством тренера.</p>
        <p>Если у вас нет своей лошади, вы можете арендовать лошадь (пони) в нашем клубе для тренировок и участия в соревнованиях по выездке, конкуру и другим видам конного спорта.</p>
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
