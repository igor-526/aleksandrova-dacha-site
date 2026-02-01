import { BreadcrumbsProps, HeroProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "./priceService";
import { ServicesListProps } from "../ui/ServicesList";
import { PriceGroupOutDto } from "@/types";
import { ServicesCarouselData } from "../../../ui/data-display/ServicesCarousel";

export const getCarriagesPageData = async () => {
  const getGroup = async (): Promise<PriceGroupOutDto> => {
    const result = await fetchPriceGroup("7c3a489e-5ded-4a2f-ae7d-f30766f8e288")
    return result.status === "ok" && result.data ? result.data : null;
  };

  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Аренда экипажей");
    return result.status === "ok" && result.data ? result.data.items : [];
  };
  const group = await getGroup();
  const prices = await getPrices();

  const dataHero: HeroProps = {
    title: "Аренда экипажей",
    subtitle: "Александрова дача",
    description: group?.description || "",
    backgroundImage: {
      src: "/images/services/rental/carriages.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Услуги", href: "/services" },
      { name: "Аренда", href: "/services/rental" },
      { name: "Экипажи, кареты, сани" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticle = null

  const itemsCarousel: string[] = [
    "Огромный парк карет, экипажей и саней различного размера и вместимости.",
    "Все экипажи оборудованы ручными и ножными тормозами, надежны и безопасны.",
    "Для катаний можем запрячь одну, пару, тройку лошадей и даже северного оленя!",
    "Возможна доставка в любую точку Санкт-Петербурга и Ленинградской области.",
  ]

  const dataCarusel: ServicesCarouselData = {
    items: itemsCarousel,
    autoPlay: true,
    interval: 4000,
  };

  const dataMission = null;

  const dataServicesList: ServicesListProps = {
    heading: "Цены на аренду экипажей",
    content: <>
      <div className="mb-2">Продолжительность катания в экипажах: в парке клуба - <b>30 минут</b>, с выездом - <b>от 1 часа</b>.</div>
      <div className="mb-2">Минимальная цена указана для проведения катаний по г. Пушкину, г. Павловску и ближайшим окрестностям.</div>
      <div>Окончательная стоимость аренды зависит от <b>продолжительности катания</b> и <b>места доставки</b> экипажа и животных.</div>
    </>,
    items: [],
    columns: 1,
    mediaPosition: "left",
    minHeightCard: "300px",
    gallery: true,
  };
  const dataGallerySection = null;

  return {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataCarusel,
    dataMission,
    dataServicesList,
    dataGallerySection,
  };
};
