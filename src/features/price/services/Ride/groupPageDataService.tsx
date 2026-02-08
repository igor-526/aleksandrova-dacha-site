import {
  ArticleProps,
  BreadcrumbsProps,
  GallerySectionProps,
  HeroProps,
  MissionProps,
  PreparationTipsProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "../priceService";
import ServicesList, { ServicesListProps } from "../../ui/ServicesList";
import { ServicesGroupPageProps } from "../../ui/ServicesGroupPage";
import { ReactNode } from "react";
import { PriceGroupOutDto } from "@/types";

export const getGroupPageData = async (): Promise<ServicesGroupPageProps> => {
  const getGroup = async (): Promise<PriceGroupOutDto> => {
    const result = await fetchPriceGroup("0f2c3b90-3115-4dd0-9bd0-f05de5376df8")
    return result.status === "ok" && result.data ? result.data : null;
  };

  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Групповое обучение");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const getPricesRental = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Групповое обучение (аренда)");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const group = await getGroup();
  const prices = await getPrices();
  const pricesRental = await getPricesRental();

  const dataHero: HeroProps = {
    title: group?.name || "",
    subtitle: "Александрова дача",
    description: group?.description || "",
    backgroundImage: {
      src: "/images/services/rides/group.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Услуги", href: "/services" },
      { name: "Верховая езда", href: "/services/rides" },
      { name: "Групповое обучение" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticle: ArticleProps = {
    content: <div>
      <p className="mb-2">Группы формируются в зависимости от уровня подготовки участников.</p>
      <p className="mb-2">Набор в группы проводится ежегодно в сентябре.</p>
      <p className="mb-2">Для записи в уже сформированную группу в течение года у Вас должен быть минимальный опыт верховой езды, Вы должны уметь самостоятельно чистить лошадь (пони), седлать и выводить на манеж. Этому можно обучиться на индивидуальных занятиях.</p>
      <p ></p>
    </div>,
    className: "bg-[#f0e7cf] rounded-lg py-2 shadow-md",
  };

  const dataServicesList: ServicesListProps = {
    items: [],
    columns: 2,
    mediaPosition: "top",
    gallery: true,
  };

  const dataGallerySection: GallerySectionProps = {
    columns: 3,
    className: "w-full h-[150px] sm:h-[200px]",
    items: [
      {
        src: "/images/services/rides/group/group1.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/group2.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/group3.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/group4.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/group5.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/group6.jpg",
        alt: "group",
      },
    ],
  };

  const dataMission: MissionProps = {
    title: "Вас научат:",
    points: [
      {
        heading: "Группы начальной подготовки",
        text: "Для тех, кто только начинает знакомство с верховой ездой. На занятиях вы научитесь чистить, седлать лошадь (пони) и выводить ее на манеж. Освоите азы управления на шагу, рыси, галопе. Научитесь правильно держаться в седле и выполнять простые упражнения.",
      },
      {
        heading: "Оздоровительные группы",
        text: "Целью занятий является общение с лошадьми (пони) и получение положительных эмоций от верховой езды. Такие занятия способствуют улучшению осанки, координации движений и общего физического состояния.",
      },
      {
        heading: "Спортивные группы",
        text: "Имея первоначальный опыт верховой езды, Вы продолжите совершенствовать свои навыки движения на лошади (пони) разными аллюрами, научитесь уверенно держаться в седле, освоите элементы выездки и конкура, сможете принять участие в клубных соревнованиях и показательных выступлениях.",
      },
    ],
  };

  const dataPreparationTips: PreparationTipsProps = {
    title: "Как подготовиться к групповым занятиям",
    columns: 2,

    tips: [
      {
        heading: "Для занятий необходимо иметь:",
        text: "Щетки для чистки лошади (пони), хлыст, защитный шлем, бриджи, сапоги или ботинки для верховой езды. Желательно иметь: недоуздок с чумбуром, вальтрап и другую аммуницию",
      },
      {
        heading: "Требования к уровню подготовки:",
        text: "Для занятий в оздоровительных и спортивных группах необходимо знать теорию и технику безопасности, уметь чистить, седлать и выводить на манеж лошадь (пони), иметь минимальные навыки верховой езды.",
      },
      {
        heading: "Группы формируются",
        text: "из всадников, имеющих примерно одинаковые навыки верховой езды. Поэтому, записаться в группу не с начала учебного года возможно только по решению тренера (если Вы ранее занимались верховой ездой). Также можно взять несколько индивидуальных или разовых занятий, затем (по готовности) перейти в группу.",
      },
      {
        heading: "На занятия приходите заблаговременно",
        text: "К назначенному времени Вы должны переодеться, почистить и поседлать лошадь (пони), выйти на манеж. Опоздание сокращает время Вашего занятия. Если Вы или ребенок отсутствовали на занятии по уважительной причине, то пропущенное занятие переносится на другой день. По возможности, необходимо предупредить тренера.",
      },
    ],
  };

  const additionalSection: ReactNode = (
    <ServicesList items={pricesRental} columns={1} gallery={false} />
  );
  return {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
    dataPreparationTips,
    additionalSection,
  };
};
