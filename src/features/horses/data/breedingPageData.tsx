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
import { BreedingPageProps } from "../ui/BreedingPage";

export const getBreedingPageData = async (): Promise<BreedingPageProps> => {
    const dataHero: HeroProps = {
        title: "Разведение и продажа",
        subtitle: "Александрова дача",
        description: "Племенные лошади и пони, продажа жеребят и взрослых лошадей, жеребцы для случки",
        backgroundImage: {
            src: "/images/horses/breeding.jpg",
            alt: "Kонюшня Александровой дачи",
        }
    }

    const dataBreadcrumbs: BreadcrumbsProps = {
        items: [
            { name: "Главная", href: "/" },
            { name: "Разведение и продажа" },
        ],
        className: "-mt-9 px-6",
    };

    const dataCards: (CardProps & { href?: string })[] = [{
        title: "Коне-ферма",
        content: "Мы занимаемся разведением лошадей с 2001 года и имеем богатый опыт в этой области.\n Ведется племенная работа с лошадьми Тракененской, Ганноверской, Буденновской, Забайкальской, Советской и Французской тяжелoвозной (першерон) пород.",
        media: (
            <div
                className="h-40 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url(/images/horses/horse.jpg)" }}
            />
        ),
        href: "/breeding/horses",
    },
    {
        title: "Пони-ферма",
        content: `Пони-ферма "Александрова Дача" - самая крупная ферма по разведению пони в России. \n В нашем хозяйстве представлены породы: Шетлендский и Уэльские пони, Аппалуза пони. `,
        media: (
            <div
                className="h-40 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: "url(/images/horses/pony.jpg)" }}
            />
        ),
        href: "/breeding/ponies",
    }];

    const dataVisiStableCTA: VisitStableCTAProps = {
        title: "Жеребцы для случки",
        text: "Шетлендские, уэльские, аппалуза пони. Советский и французский тяжеловоз, жеребцы забайкальской и ганноверской породы. Наши жеребцы обладают отличными генетическими качествами и имеют многочисленное потомство. Возможна живая случка или замороженное семя для искуственного осеменения. Мы будем рады помочь вам в выборе подходящего жеребца и обеспечить успешную случку.",
        image: { src: "/images/horses/stallion.jpg", alt: "Жеребцы для случки" },
        ctaLabel: "Узнать больше",
        ctaHref: "/breeding/stallions",
    }

    const dataMediaImage: MediaImageProps = {
        src: "/images/horses/sale.jpg",
        alt: "Продажа лошадей и пони",
        ratio: "landscape",
    };

    const dataArticleRental: ArticleProps = {
        title: "Продажа лошадей и пони",
        content: (
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="rounded-2xl overflow-hidden w-full lg:w-[50%]">
                    <MediaImage {...dataMediaImage} />
                </div>
                <div className="w-full lg:w-[50%] flex flex-col gap-4 justify-between">
                    <div className="space-y-2">
                        <p>Всегда актуальные предложения по продаже лошадей и пони.</p>
                        <p>Возможна доставка в любой регион России и СНГ. Перевозим животных наземным транспортом или самолетом.</p>
                        <p>Консультации по содержанию и уходу за животными.</p>
                    </div>
                    <div>
                        <Button variant="primary" href="/services/rental/photosessions" size="md" className="text-sm sm:px-6 sm:py-2.5 sm:text-base">Посмотреть животных</Button>
                    </div>
                </div>

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