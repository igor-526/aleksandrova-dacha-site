import { ArticleProps, BreadcrumbsProps, HeroProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { ReactNode } from "react";
import { PriceGroupOutDto } from "@/types";
import { fetchPriceGroup, fetchPriceList } from "../priceService";
import ServicesList, { ServicesListProps } from "../../ui/ServicesList";
import { ServiceGallery } from "../../ui/ServiseGallery";

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

  const getSportRent = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Лошади и пони в аренду");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const group = await getGroup();
  const prices = await getPrices();
  const typeSport = await getTypeSport();
  const sportRent = await getSportRent();

  const dataHero: HeroProps = {
    title: group?.name || "",
    subtitle: "Александрова дача",
    description: group?.description || "",
    backgroundImage: {
      src: "/images/services/rides/sport.jpg",
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
    title: "Спортивные тренировки",
    content: <div>
      <div className="mb-4 bg-[#fdfaf4] p-4">
        <ul className="list-disc ml-4 space-y-2">
          <li>Для достижения высоких результатов в конном спорте важно достичь доверия, взаимопонимания, согласованности и гармонии между всадником и лошадью.</li>
          <li>Если вы являетесь владельцем лошади (пони), вы можете воспользоваться услугой постоя в нашем клубе и тренироваться самостоятельно или под руководством тренера.</li>
          <li>Если у вас нет своей лошади, вы можете арендовать лошадь (пони) в нашем клубе для тренировок и участия в соревнованиях по выездке, конкуру и другим видам спорта.</li>
        </ul>
      </div>
      <div className="grid gap-x-8 gap-y-6 grid-cols-2 sm:grid-cols-4 mb-4">
        {typeSport.map((price, index) => <div key={index} className="w-full"><ServiceGallery price={price} columns={1} ratio="4/3" /></div>)}
      </div>
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



  const additionalSection: ReactNode = (
    <ServicesList heading="Лошади и пони в аренду" items={sportRent} columns={2} gallery={true} />
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
