import {
    Breadcrumbs,
    BreadcrumbsProps,
    Container,
    Hero,
    HeroProps,
} from "@/ui";
import HorseList, { HorseListProps } from "./HorseList";

export type HorseListPageProps = {
    dataHero?: HeroProps | null;
    dataBreadcrumbs?: BreadcrumbsProps | null;
    dataHorseList?: HorseListProps | null;
};

export const HorseListPage = ({
    dataHero,
    dataBreadcrumbs,
    dataHorseList
}: HorseListPageProps) => {
    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <Container className="space-y-12">
                {dataHero && (
                    <Hero {...dataHero} />
                )}
                {dataBreadcrumbs && (
                    <Breadcrumbs {...dataBreadcrumbs} storageKey="serviceBreadcrumbs" />
                )}
                {dataHorseList && (
                    <HorseList {...dataHorseList} />
                )}
            </Container>
        </div>
    );
};