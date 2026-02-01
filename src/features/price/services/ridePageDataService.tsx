import {
    ArticleProps,
    BreadcrumbsProps,
    HeroProps,
    ImageBlock,
    QuickServiceItem,
} from "@/ui";
import { ServicePageProps } from "../ui/ServicePage";

export const getRidePageData = async (): Promise<ServicePageProps> => {
    const dataHero: HeroProps = {
        title: "Верховая езда",
        subtitle: "Александрова дача",
        backgroundImage: {
            src: "/images/services/rides/ride.jpg",
            alt: "desc",
        },
    };

    const dataBreadcrumbs: BreadcrumbsProps = {
        items: [
            { name: "Главная", href: "/" },
            { name: "Услуги", href: "/services/" },
            { name: "Верховая езда" },
        ],
        className: "-mt-9 px-6",
    };

    const dataArticle: ArticleProps = {
        content: (
            <div className="space-y-4 whitespace-break-spaces">
                <p>Верховая езда для взрослых и детей, для новичков и опытных всадников. В любую погоду в крытом манеже или на открытом воздухе.</p>
            </div>
        ),
    };

    const itemsServices: QuickServiceItem[] = [
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
    ];

    return {
        dataHero,
        dataBreadcrumbs,
        dataArticle,
        itemsServices,
    };
};