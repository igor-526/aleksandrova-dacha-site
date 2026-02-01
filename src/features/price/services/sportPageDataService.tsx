import { ArticleProps, BreadcrumbsProps, HeroProps, Mission, MissionProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "./priceService";
import { ServicesListProps } from "../ui/ServicesList";
import { ReactNode } from "react";
import { ServiceGallery } from "../ui/ServiseGallery";
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
    description: group?.description || "",
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
    content: <div>
      <p className="mb-2">Для достижения высоких результатов в конном спорте важно достичь доверия, взаимопонимания, согласованности и гармонии между всадником и лошадью.</p>
      <p className="mb-2">Если вы являетесь владельцем лошади (пони), вы можете воспользоваться услугой постоя в нашем клубе и тренироваться самостоятельно или под руководством тренера.</p>
      <p >Если у вас нет своей лошади, вы можете арендовать лошадь (пони) в нашем клубе для тренировок и участия в соревнованиях по выездке, конкуру и другим видам спорта.</p>
    </div>,
    className: "bg-[#f0e7cf] rounded-lg py-2 shadow-md",
  };

  const dataMission = null;

  const dataServicesList: ServicesListProps = {
    items: [],
    columns: 1,
    gallery: false,
  };

  const dataGallerySection = null;

  const dataAdditionalSection: MissionProps = {
    points: [
      { heading: "Опытные тренеры", text: "Наши тренеры помогут вам развить навыки верховой езды и достичь ваших целей в конном спорте." },
      { heading: "Наши спортсмены", text: "Мы гордимся достижениями наших спортсменов на соревнованиях разного уровня." },
      { heading: "Лошади и пони", text: "У нас есть широкий выбор спортивных лошадей и пони для аренды и тренировок." },
    ]
  };

  const additionalSection: ReactNode = (<>
    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
      {typeSport.map((price, index) => <div key={index} className="h-96"><ServiceGallery price={price} columns={1} /></div>)}
    </div>
    <Mission {...dataAdditionalSection} />
  </>)

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
