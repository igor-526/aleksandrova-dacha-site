import { BreadcrumbsProps, HeroProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "../priceService";
import { ServicesListProps } from "../../ui/ServicesList";
import { PriceGroupOutDto } from "@/types";
import { ServicesCarouselData } from "@/ui/data-display/ServicesCarousel";

export const getAnimalsPageData = async () => {
    const getGroup = async (): Promise<PriceGroupOutDto> => {
        const result = await fetchPriceGroup("d6c95b30-c4ca-4aac-9c92-425858fc1180")
        return result.status === "ok" && result.data ? result.data : null;
    };

    const getPrices = async (): Promise<PriceOutDto[]> => {
        const result = await fetchPriceList("Животные для катаний");
        return result.status === "ok" && result.data ? result.data.items : [];
    };
    const group = await getGroup();
    const prices = await getPrices();

    const dataHero: HeroProps = {
        title: "Животные для катаний",
        subtitle: "Александрова дача",
        description: group?.description || "",
        backgroundImage: {
            src: "/images/services/rental/animals.jpg",
            alt: "desc"
        },
    };

    const dataBreadcrumbs: BreadcrumbsProps = {
        items: [
            { name: "Услуги", href: "/services" },
            { name: "Аренда", href: "/services/rental" },
            { name: "Животные для катаний" },
        ],
        className: "-mt-9 px-6",
    };

    const dataArticle = null

    const itemsCarousel: string[] = [
        "Ухоженные и обученные животные в красивой амуниции.",
        "Северные олени и верблюды - редкость для Санкт-Петербурга.",
        "Опытные инструкторы обеспечат безопасность и комфорт катаний.",
        "Возможна доставка в любую точку Санкт-Петербурга и Ленинградской области.",
    ]

    const dataCarusel: ServicesCarouselData = {
        items: itemsCarousel,
        autoPlay: true,
        interval: 4000,
    };

    const dataMission = null;

    const dataServicesList: ServicesListProps = {
        heading: "Цены на аренду животных для катаний",
        content: <>
            <div className="mb-2">Продолжительность катания на лошадях и пони - <b>1 час</b>.</div>
            <div className="mb-2">Продолжительность катания на верблюдах и северных оленях: в парке клуба - <b>15 минут (1 человек)</b>, с выездом - <b>1 час (группа)</b>.</div>
            <div className="mb-2">Минимальная цена указана для проведения катаний по г. Пушкину, г. Павловску и ближайшим окрестностям.</div>
            <div>Окончательная стоимость аренды зависит от <b>продолжительности катания</b> и <b>места доставки</b> животных.</div>
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
