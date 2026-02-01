import {
    BreadcrumbsProps,
    HeroProps,
    ImageBlock,
    QuickServicesProps,
} from "@/ui";
import { AllPricePageProps } from "../ui/AllPricePage";

export const getAllPricePageData = async (): Promise<AllPricePageProps> => {
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

    const rideServices: QuickServicesProps = {
        heading: "Верховая езда",
        items: [
            {
                id: "tour",
                title: "Конные прогулки и катания",
                description:
                    "Приглашаем взрослых и детей на прогулки и катания на лошадях и пони.",
                href: "/services/rides/tours",
                icon: <ImageBlock pathImage="/icons/tour.ico" alt="Конные прогулки" />,
            },
            {
                id: "individual",
                title: "Индивидуальные занятия",
                description:
                    "Опытные инструкторы помогут освоить верховую езду с нуля или улучшить навыки.",
                href: "/services/rides/individual",
                icon: (
                    <ImageBlock pathImage="/icons/individual.ico" alt="Индивидуальные занятия" />
                ),
            },
            {
                id: "group",
                title: "Групповые занятия и абонементы",
                description:
                    "Группы для детей и взрослых. Гибкие абонементы на занятия верховой ездой.",
                href: "/services/rides/group",
                icon: (
                    <ImageBlock
                        pathImage="/icons/group.ico"
                        alt="Групповые занятия и абонементы"
                    />
                ),
            },
            {
                id: "sport",
                title: "Спортивные тренировки",
                description:
                    "Конкур, выездка и другие виды конного спорта. Подготовка к соревнованиям.",
                href: "/services/rides/sport",
                icon: (
                    <ImageBlock pathImage="/icons/sport.ico" alt="Спортивные тренировки" />
                ),
            },
        ]
    };

    const dataAllQuickServices: QuickServicesProps[] = [
        rideServices
    ];

    return {
        dataHero,
        dataBreadcrumbs,
        dataAllQuickServices,
    };
};