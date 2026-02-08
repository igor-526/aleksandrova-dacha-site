import {
    ArticleProps,
    BreadcrumbsProps,
    GallerySection,
    GallerySectionProps,
    HeroProps,
    ImageBlock,
    QuickServicesProps,
} from "@/ui";
import { RidePageProps } from "./RidePage";
import { FeedbackForm } from "@/features/callBackRequest/ui/CallBackRequestModal";

export const getRidePageData = async (): Promise<RidePageProps> => {
    const dataHero: HeroProps = {
        title: "Верховая езда",
        subtitle: "Александрова дача",
        description: "Катания на лошадях и конные прогулки, обучение верховой езде, групповые абонементы и спортивные тренировки",
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

    const dataGallerySection: GallerySectionProps = {
        items: [
            {
                src: "/images/services/rides/ride/ride1.jpg",
                alt: "ride",
            },
            {
                src: "/images/services/rides/ride/ride2.jpg",
                alt: "ride",
            },
            {
                src: "/images/services/rides/ride/ride3.jpg",
                alt: "ride",
            },
            {
                src: "/images/services/rides/ride/ride4.jpg",
                alt: "ride",
            },
            {
                src: "/images/services/rides/ride/ride5.jpg",
                alt: "ride",
            },
        ],
        columns: 3,
        className: "w-full h-[250px] sm:h-[200px]",
    };

    const dataArticleRide: ArticleProps = {
        title: "Обучение и прокат",
        content: (<div className="space-y-8">
            <div className="space-y-2">
                <p>Верховая езда для взрослых и детей, для новичков и опытных всадников.</p>
                <p>В любую погоду в крытом манеже или на открытом воздухе.</p>
                <p>Профессиональные тренеры. Лошади и пони под любого всадника.</p>
                <p>Комфортные условия: теплая раздевалка, шкафчики для вещей, бесплатная парковка, уютное кафе.</p>
            </div>
            <FeedbackForm triggerLabel="Записаться на занятие" />
            <GallerySection {...dataGallerySection} />
        </div>
        ),
        className: "bg-white/70 p-6 rounded-3xl",
    };

    const dataQuickServices: QuickServicesProps = {
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

    return {
        dataHero,
        dataBreadcrumbs,
        dataArticleRide,
        dataQuickServices,
    };
};