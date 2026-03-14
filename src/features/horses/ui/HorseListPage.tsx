import {
    Article,
    ArticleProps,
    Breadcrumbs,
    BreadcrumbsProps,
    Container,
    Hero,
} from "@/ui";
import HorseList, { HorseListProps } from "./HorseList";

export type HorseListPageProps = {
    dataBreadcrumbs?: BreadcrumbsProps | null;
    dataArticles?: ArticleProps | null;
    dataHorseList?: HorseListProps | null;
};

export const HorseListPage = ({
    dataBreadcrumbs,
    dataArticles,
    dataHorseList
}: HorseListPageProps) => {
    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <Container className="space-y-12">
                <Hero
                    title="Разведение и продажа"
                    subtitle="Александрова дача"
                    description="Племенные лошади и пони, продажа жеребят и взрослых лошадей, жеребцы для случки"
                    backgroundImage={{
                        src: "/images/horses/horses.jpg",
                        alt: "Kонюшня Александровой дачи",
                    }}
                />
                {dataBreadcrumbs && (
                    <Breadcrumbs {...dataBreadcrumbs} storageKey="serviceBreadcrumbs" />
                )}
                {dataArticles && (
                    <Article {...dataArticles} />
                )}
                {dataHorseList && (
                    <HorseList {...dataHorseList} />
                )}
            </Container>
        </div>
    );
};