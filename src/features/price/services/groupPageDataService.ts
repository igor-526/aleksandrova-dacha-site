import { AboutTeaserProps, GallerySectionProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";

export const getGroupPageData = async () => {
    const getPrices = async (): Promise<PriceOutDto[]> => {
        const result = await fetchPriceList("Групповое обучение");
        return result.status === "ok" && result.data ? result.data.items : [];
    };

    const prices = await getPrices();

    const dataAboutTeaser: AboutTeaserProps = {
        title: "Групповые занятия. Абонементы.",
        text: [
            "Наши опытные инструкторы помогут вам освоить верховую езду или просто провести время в компании этих великолепных животных. Независимо от вашего уровня подготовки, у нас найдется подходящий вариант для каждого.",
        ],
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

    return {
        prices,
        dataAboutTeaser,
        dataGallerySection,
    };
};
