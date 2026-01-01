import {
  ArticleProps,
  BreadcrumbsProps,
  GallerySectionProps,
  HeroProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";
import ServicesList, { ServicesListProps } from "../ui/ServicesList";
import { ServicesGroupPageProps } from "../ui/ServicesGroupPage";
import { ReactNode } from "react";

export const getGroupPageData = async (): Promise<ServicesGroupPageProps> => {
  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Групповое обучение");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const getPricesRental = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Групповое обучение (аренда)");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const prices = await getPrices();
  const pricesRental = await getPricesRental();

  const dataHero: HeroProps = {
    title: "Групповые занятия",
    subtitle: "Александрова дача",
    backgroundImage: {
      src: "/images/services/rides/group/group.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { label: "Главная", href: "/" },
      { label: "Услуги", href: "/services" },
      { label: "Верховая езда", href: "/services/rides" },
      { label: "Групповое обучение" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticle: ArticleProps = {
    title: "Групповые занятия. Абонементы.",
    content: (
      <div className="space-y-4">
        <p>
          Наши опытные инструкторы помогут вам освоить верховую езду или просто
          провести время в компании этих великолепных животных. Независимо от
          вашего уровня подготовки, у нас найдется подходящий вариант для
          каждого.
        </p>
      </div>
    ),
  };

  const dataMission = null;

  const dataServicesList: ServicesListProps = {
    items: [],
    columns: 2,
    mediaPosition: "left",
    gallery: false,
  };

  const dataGallerySection: GallerySectionProps = {
    columns: 3,
    className: "w-full h-[150px] sm:h-[200px]",
    items: [
      {
        src: "/images/services/rides/group/images/group1.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/images/group2.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/images/group3.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/images/group4.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/images/group5.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/images/group6.jpg",
        alt: "group",
      },
      {
        src: "/images/services/rides/group/images/group7.jpg",
        alt: "group",
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
    additionalSection,
  };
};
