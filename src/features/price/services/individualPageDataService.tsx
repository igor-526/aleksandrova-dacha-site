import {
  ArticleProps,
  BreadcrumbsProps,
  GallerySectionProps,
  HeroProps,
  MissionProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "./priceService";
import { ServicesListProps } from "../ui/ServicesList";
import { PriceGroupOutDto } from "@/types";

export const getIndividualPageData = async () => {
  const getGroup = async (): Promise<PriceGroupOutDto> => {
    const result = await fetchPriceGroup("8d9651fe-6b98-4f31-9c7f-f314d4a6b990")
    return result.status === "ok" && result.data ? result.data : null;
  };

  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Индивидуальное обучение");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const group = await getGroup();

  const prices = await getPrices();

  const dataHero: HeroProps = {
    title: group?.name || "",
    subtitle: "Александрова дача",
    description: "обучение верховой езде с опытным инструктором",
    backgroundImage: {
      src: "/images/services/rides/individual/individual.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Услуги", href: "/services" },
      { name: "Верховая езда", href: "/services/rides" },
      { name: "Индивидуальное обучение" },
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

  const dataMission: MissionProps = {
    title: "Вас научат:",
    points: [
      {
        heading: "Техника безопасности",
        text: "В этот курс входит: техника безопасности, правила поведения в конюшне, правила движения по манежу. Обязателен для всех новичков.",
      },
      {
        heading: "Подготовка лошади",
        text: "Затем Вас научат чистить и седлать лошадь, выводить ее на манеж, садиться на лошадь. Количество занятий зависит от Ваших способностей.",
      },
      {
        heading: "Управление лошадью",
        text: "Вы приобретете начальные навыки верховой езды: умение пользоваться средствами управления, правильная посадка, движение шагом, рысью, галопом, смена направления движения.",
      },
    ],
  };

  const dataServicesList: ServicesListProps = {
    heading: "Услуги и цены",
    items: [],
    content: (
      <p>
        <b> Указанные цены действуют только по предварительной записи. </b>
        Запись возможна не позднее, чем за день до приезда. Если вы приехали без
        записи, катание на лошади (пони) возможно только при наличии свободного
        тренера (инструктора),
        <b> стоимость услуги увеличится на 200 рублей.</b>
      </p>
    ),
    columns: 2,
    mediaPosition: "left",
    gallery: true,
  };

  const dataGallerySection: GallerySectionProps = {
    columns: 3,
    className: "w-full h-[150px] sm:h-[200px]",
    items: [
      {
        src: "/images/services/rides/individual/individual.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/individual/individual1.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/individual/3.jpg",
        alt: "group",
      }, {
        src: "/images/services/rides/individual/4.jpg",
        alt: "group",
      }, {
        src: "/images/services/rides/individual/5.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/individual/individual2.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/individual/individual3.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/individual/individual4.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/individual/individual5.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/individual/individual6.jpg",
        alt: "group",
      },
    ],
  };

  return {
    prices,
    dataBreadcrumbs,
    dataHero,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
  };
};
