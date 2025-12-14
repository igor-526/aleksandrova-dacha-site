import { ArticleProps, HeroProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";

export const getCarriagesPageData = async () => {
    const getPrices = async (): Promise<PriceOutDto[]> => {
        const result = await fetchPriceList("Аренда. Экипажи, кареты, сани");
        return result.status === "ok" && result.data ? result.data.items : [];
    };

    const prices = await getPrices();

    const dataHero: HeroProps = {
        title: "Аренда экипажей",
        subtitle: "Александрова дача",
        backgroundImage: {
            src: "/images/services/rental/carriages/carriages.jpg",
            alt: "desc",
          },
    };

    const dataArticle: ArticleProps = {
        title: "Аренда экипажей",
        content:
            <div className="space-y-4">
                <p>Аренда кареты, экипажа или санок запряженных одной, парой или 
                    тройкой лошадей или пони! Имеется парк в количестве 6-и экипажей, 
                    карет, и 10 саней разного размера и количества посадочных мест. 
                    Все кареты оборудованы ручными и ножными тормозами, сделаны в 
                    Германии, Польше, России - безопасные и качественные.</p>
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
