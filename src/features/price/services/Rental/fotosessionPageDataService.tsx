import { BreadcrumbsProps, HeroProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "../priceService";
import { ServicesListProps } from "../../ui/ServicesList";
import { PriceGroupOutDto } from "@/types";
import { ServicesCarouselData } from "@/ui/data-display/ServicesCarousel";

export const getFotosessionPageData = async () => {
    const getGroup = async (): Promise<PriceGroupOutDto> => {
        const result = await fetchPriceGroup("8a044071-d8d3-4119-9d12-f2156bff24b3")
        return result.status === "ok" && result.data ? result.data : null;
    };

    const getPrices = async (): Promise<PriceOutDto[]> => {
        const result = await fetchPriceList("Животные для фотосессий");
        return result.status === "ok" && result.data ? result.data.items : [];
    };
    const group = await getGroup();
    const prices = await getPrices();

    const dataHero: HeroProps = {
        title: "Животные для фотосессий",
        subtitle: "Александрова дача",
        description: group?.description || "",
        backgroundImage: {
            src: "/images/services/rental/fotosession.jpg",
            alt: "desc"
        },
    };

    const dataBreadcrumbs: BreadcrumbsProps = {
        items: [
            { name: "Услуги", href: "/services" },
            { name: "Аренда", href: "/services/rental" },
            { name: "Животные для фотосессий" },
        ],
        className: "-mt-9 px-6",
    };

    const dataArticle = null

    const itemsCarousel: string[] = [
        "Пони, лошади, северные олени и верблюды - идеальные модели для фотосессий.",
        "Костюмы и реквизиты для создания уникальных образов с животными.",
        "Фотостудия и живописные площадки клуба для проведения фотосессий.",
        "Возможна доставка в любую точку Санкт-Петербурга и Ленинградской области.",
    ]

    const dataCarusel: ServicesCarouselData = {
        items: itemsCarousel,
        autoPlay: true,
        interval: 4000,
    };

    const dataMission = null;

    const dataServicesList: ServicesListProps = {
        heading: "Цены на аренду животных для фотосессий",
        items: [],
        columns: 2,
        mediaPosition: "top",
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
