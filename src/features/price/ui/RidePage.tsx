import {
    Article,
    ArticleProps,
    Breadcrumbs,
    BreadcrumbsProps,
    Container,
    Hero,
    HeroProps,
    QuickServices,
    QuickServicesProps,
} from "@/ui";

export type RidePageProps = {
    dataHero?: HeroProps | null;
    dataBreadcrumbs?: BreadcrumbsProps | null;
    dataArticleRide?: ArticleProps | null;
    dataQuickServices?: QuickServicesProps | null;
};

export const RidePage = ({
    dataHero,
    dataBreadcrumbs,
    dataArticleRide,
    dataQuickServices,
}: RidePageProps) => {

    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <Container className="space-y-12">
                {dataHero && <Hero {...dataHero} />}
                {dataBreadcrumbs && (
                    <Breadcrumbs {...dataBreadcrumbs} storageKey="serviceBreadcrumbs" />
                )}
                {dataQuickServices && <QuickServices {...dataQuickServices} />}
                {dataArticleRide && <Article {...dataArticleRide} />}
            </Container>
        </div>
    );
};