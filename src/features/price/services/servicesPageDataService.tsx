import {
    BreadcrumbsProps,
    HeroProps,
} from "@/ui";

import { ServicesGroupPageProps } from "../ui/ServicesGroupPage";

export const getServicesPageData = async (): Promise<ServicesGroupPageProps> => {
    const dataHero: HeroProps = {
        title: "Наши услуги",
        subtitle: "Александрова дача",
        description: "Конные прогулки и обучение верховой езде, аренда лошадей и пони, аренда экипажей и животных, спортивная аренда, постой, фотосессии. Контактная мини-ферма.",
        backgroundImage: {
            src: "/images/services/services.jpg",
            alt: "desc",
        },
    };

    const dataBreadcrumbs: BreadcrumbsProps = {
        items: [
            { name: "Главная", href: "/" },
            { name: "Услуги" },
        ],
        className: "-mt-9 px-6",
    };

    return {
        dataHero,
        dataBreadcrumbs,
    };
};