import {
    ArticleProps,
    HeroProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";

export const getToursPageData = async () => {
    const getPrices = async (): Promise<PriceOutDto[]> => {
        const result = await fetchPriceList("Конные прогулки и катания");
        return result.status === "ok" && result.data ? result.data.items : [];
    };

    const prices = await getPrices();

    const dataHero: HeroProps = {
        title: "Конные прогулки",
        subtitle: "Александрова дача",
        backgroundImage: {
            src: "/images/services/rides/tours/tour.jpg",
            alt: "desc",
        },
    };

    const dataArticle: ArticleProps = {
        title: "Верховая езда для взрослых и детей",
        content:
            <div className="space-y-4">
                <p>
                    Наши опытные инструкторы помогут вам освоить верховую езду или просто 
                    провести время в компании этих великолепных животных. Независимо от 
                    вашего уровня подготовки, у нас найдется подходящий вариант для каждого.
                </p>
                <div className="font-bold">Предварительная запись</div>
                <ul className="list-disc list-inside">
                    <li>Запись возможна не позднее, чем за день до приезда</li>
                    <li>Указанные цены действуют только по предварительной записи</li>
                    <li>Без записи, катание возможно только при наличии свободного тренера (инструктора)</li>
                    <li>Без записи стоимость услуги увеличится на 200 рублей</li>
                </ul>
            </div>,
    };

    const dataMission = null;
    const dataGallerySection = null;

    return {
        prices,
        dataHero,
        dataArticle,
        dataMission,
        dataGallerySection,
    };
};
