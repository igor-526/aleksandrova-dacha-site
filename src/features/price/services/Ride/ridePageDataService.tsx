import {
    ArticleProps,
    BreadcrumbsProps,
    GallerySection,
    GallerySectionProps,
    HeroProps,
    ImageBlock,
    MissionProps,
    QuickServicesProps,
    VisitStableCTAProps,
} from "@/ui";
import { RidePageProps } from "../../ui/RidePage";
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
            <GallerySection {...dataGallerySection} />
            <ul className="list-disc ml-6 space-y-2">
                <li>Верховая езда для взрослых и детей, для новичков и опытных всадников.</li>
                <li>В любую погоду в крытом манеже или на открытом воздухе.</li>
                <li>Профессиональные тренеры. Лошади и пони под любого всадника.</li>
                <li>Комфортные условия: теплая раздевалка, шкафчики для вещей, бесплатная парковка, уютное кафе.</li>
            </ul>
            <FeedbackForm triggerLabel="Записаться на занятие" />
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

    const dataMission: MissionProps = {
        points: [
            { heading: "Опытные тренеры", text: "Наши тренеры помогут вам развить навыки верховой езды и достичь ваших целей в конном спорте." },
            { heading: "Наши спортсмены", text: "Мы гордимся достижениями наших спортсменов на соревнованиях разного уровня." },
            { heading: "Лошади и пони", text: "У нас есть широкий выбор спортивных лошадей и пони для аренды и тренировок." },
        ]
    };

    const dataVisiStableCTA: VisitStableCTAProps = {
        title: "Спортивные лошади и пони в аренду",
        text: "Приглашаем спортсменов и любителей верховой езды арендовать наших лошадей и пони для тренировок и соревнований. \n Поможем подобрать идеального партнера для ваших целей. \n Давайте вместе достигать новых вершин в мире конного спорта!",
        image: { src: "/images/services/rental/sport.jpg", alt: "Спортивные лошади и пони" },
        ctaLabel: "Выбрать лошадь",
        ctaHref: "/services/rides/sport",
    }

    return {
        dataHero,
        dataBreadcrumbs,
        dataArticleRide,
        dataQuickServices,
        dataVisiStableCTA,
        dataMission
    };
};