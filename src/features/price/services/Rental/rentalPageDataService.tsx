import {
    ArticleProps,
    BreadcrumbsProps,
    Button,
    CardProps,
    HeroProps,
    MediaImage,
    MediaImageProps,
    VisitStableCTAProps,
} from "@/ui";
import { RentalPageProps } from "./RentalPage";

export const getRentalPageData = async (): Promise<RentalPageProps> => {
    const dataHero: HeroProps = {
        title: "Аренда экипажей и животных",
        subtitle: "Александрова дача",
        description: "Лошади, пони, северные олени и верблюды в аренду для катаний верхом, в экипажах и санях. Спортивные лошади и пони для участия в соревнованиях.",
        backgroundImage: {
            src: "/images/services/rental/rental.jpg",
            alt: "desc",
        },
    };

    const dataBreadcrumbs: BreadcrumbsProps = {
        items: [
            { name: "Главная", href: "/" },
            { name: "Услуги", href: "/services/" },
            { name: "Аренда экипажей и животных" },
        ],
        className: "-mt-9 px-6",
    };

    const dataCards: (CardProps & { href?: string })[] = [{
        title: "Экипажи, кареты и сани",
        content: "Доставим кареты, сани и экипажи на ваше мероприятие.\n Прокатимся с ветерком по городским улицам или живописным аллеям.\n Ухоженные лошади, пушистые пони, рогатые северные олени! \n Опытные кучера обеспечат комфорт и безопасность. \n Веселье и незабываемые впечатления гарантированы!",
        media: (
            <div
                className="h-40 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url(/images/services/rental/carriages.jpg)" }}
            />
        ),
        href: "/services/rental/carriages",
    },
    {
        title: "Животные для катаний",
        content: "Пригласите на свое мероприятие наших лошадей, пони, северных оленей и верблюдов. \n Подарите ребенку на день рождения незабываемое приключение с настоящим единорогом или пегасом! \n Пони в нарядной аммуниции создадут атмосферу сказки и волшебства. \n Все наши животные ухожены и дружелюбны.",
        media: (
            <div
                className="h-40 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url(/images/services/rental/animals.jpg)" }}
            />
        ),
        href: "/services/rental/animals",
    }];

    const dataVisiStableCTA: VisitStableCTAProps = {
        title: "Спортивные лошади и пони",
        text: "Приглашаем спортсменов и любителей верховой езды арендовать наших лошадей и пони для тренировок и соревнований. \n Поможем подобрать идеального партнера для ваших целей. \n Давайте вместе достигать новых вершин в мире конного спорта!",
        image: { src: "/images/services/rental/sport.jpg", alt: "Спортивные лошади и пони" },
        ctaLabel: "Выбрать лошадь",
        ctaHref: "/services/rental/equestrian-sport",
        secondaryCtaLabel: "Цены и условия",
        secondaryCtaHref: "/services/rides/sport",
        secondaryCtaVariant: "secondary",

    }

    const dataMediaImage: MediaImageProps = {
        src: "/images/services/rental/fotosession.jpg",
        alt: "Аренда лошадей, пони и другихживотных для фотосессий",
        ratio: "landscape",
    };

    const dataArticleRental: ArticleProps = {
        title: "Животные для фотосессий",
        content: (
            <div className="space-y-2">
                <div className="rounded-2xl overflow-hidden mb-4">
                    <MediaImage {...dataMediaImage} />
                </div>
                <p>Профессиональные фотографы и стилисты помогут вам создать незабываемые кадры с нашими животными!</p>
                <p>Вас ждут трюковые лошади, пегасы и единороги, нарядные верблюды и олени, а также пушистые кролики, очаровательные барашки и козочки и другие милые животные.</p>
                <p>Фотосессии проводятся в живописном парке или в оборудованной фотостудии на территории клуба. Возможна доставка животных в любую точку города и области.</p>
                <p className="mb-4">Большой выбор костюмов и аксессуаров для фотосессий!</p>
                <p><Button variant="primary" href="/services/rental/fotosession">Запланировать фотосессию</Button></p>
            </div>

        ),
        className: "bg-white/70 p-6 rounded-3xl",
    }

    return {
        dataHero,
        dataBreadcrumbs,
        dataCards,
        dataVisiStableCTA,
        dataArticleRental,
    };
};