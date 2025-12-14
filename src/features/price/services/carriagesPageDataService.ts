import { AboutTeaserProps } from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";

export const getCarriagesPageData = async () => {
    const getPrices = async (): Promise<PriceOutDto[]> => {
        const result = await fetchPriceList("Аренда. Экипажи, кареты, сани");
        return result.status === "ok" && result.data ? result.data.items : [];
    };

    const prices = await getPrices();

    const dataTextAboutTeaser: AboutTeaserProps = {
        title: "Аренда экипажей",
        text: [
            "Аренда кареты, экипажа или санок запряженных одной, парой или тройкой лошадей или пони! Имеется парк в количестве 6-и экипажей, карет, и 10 саней разного размера и количества посадочных мест. Все кареты оборудованы ручными и ножными тормозами, сделаны в Германии, Польше, России - безопасные и качественные.",
        ],
    };

    return {
        prices,
        dataTextAboutTeaser,
    };
};
