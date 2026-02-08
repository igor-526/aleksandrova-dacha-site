import {
  ArticleProps,
  BreadcrumbsProps,
  GallerySectionProps,
  HeroProps,
  MissionProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "../priceService";
import { ServicesListProps } from "../../ui/ServicesList";
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
    description: group?.description || "",
    backgroundImage: {
      src: "/images/services/rides/individual.jpg",
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
    content: <div>
      <p className="mb-2">Приглашаем на занятия по верховой езде взрослых и детей с 5 лет. Тренер занимается только с одним всадником.</p>
      <p className="mb-2">Вы приобретете базовые навыки взаимодействия с лошадью (пони), научитесь правильной посадке и управлению на шагу, рыси, галопе.</p>
      <p className="mb-2">Для начала занятий не требуется особой спортивной подготовки.</p>
      <p >Опытные всадники смогут на индивидуальных занятиях улучшить свои навыки и подготовиться к соревнованиям.</p>
    </div>,
    className: "bg-[#f0e7cf] rounded-lg py-2 shadow-md",
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
        src: "/images/services/rides/individual/individual1.jpg",
        alt: "individual",
      },
      {
        src: "/images/services/rides/individual/individual2.jpg",
        alt: "individual",
      },
      {
        src: "/images/services/rides/individual/individual3.jpg",
        alt: "individual",
      },
      {
        src: "/images/services/rides/individual/individual4.jpg",
        alt: "individual",
      },
      {
        src: "/images/services/rides/individual/individual5.jpg",
        alt: "individual",
      },
      {
        src: "/images/services/rides/individual/individual6.jpg",
        alt: "individual",
      }
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
