import {
    ArticleProps,
    GallerySectionProps,
    HeroProps,
    MissionProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceList } from "./priceService";

export const getIndividualPageData = async () => {
    const getPrices = async (): Promise<PriceOutDto[]> => {
        const result = await fetchPriceList("Индивидуальное обучение");
        return result.status === "ok" && result.data ? result.data.items : [];
    };

    const prices = await getPrices();

    const dataHero: HeroProps = {
        title: "Обучение верховой езде",
        subtitle: "Александрова дача",
        description: "(индивидуальные занятия и занятия в небольших группах)",
        backgroundImage: {
            src: "/images/services/rides/individual/individual.jpg",
            alt: "desc",
        },
    };

    const dataArticle: ArticleProps = {
        title: "Обучение верховой езде",
        content:
            <div className="space-y-4">
                <p>Обучим взрослых и детей, с нуля до спортивных разрядов. 
                    Всадникам, не имеющим начальных навыков верховой езды и детям до 6 лет рекомендуется 
                    брать индивидуальные занятия.</p>
                <p><b>Указанные цены действуют только по предварительной записи.</b> Запись возможна не позднее, 
                    чем за день до приезда. Если вы приехали без записи, катание на лошади (пони) 
                    возможно только при наличии свободного тренера (инструктора), <b>стоимость услуги увеличится 
                    на 200 рублей.</b></p>
            </div>,
    };

    const dataMission: MissionProps = {
        title: "Вас научат:",
        points: [
            {
                heading: "Техника безопасности",
                text: "В этот курс входит: техника безопасности, правила поведения в конюшне, правила движения по манежу. Обязателен для всех новичков.",
            },
            {
                heading: "Подготовка лошади",
                text: "Затем Вас научат чистить и седлать лошадь, выводить ее на манеж, садиться на лошадь. Количество занятий зависит от Ваших способностей.",
            },
            {
                heading: "Управление лошадью",
                text: "Вы приобретете начальные навыки верховой езды: умение пользоваться средствами управления, правильная посадка, движение шагом, рысью, галопом, смена направления движения.",
            },
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
        dataHero,
        dataArticle,
        dataMission,
        dataGallerySection,
    };
};
