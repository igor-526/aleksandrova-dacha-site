import {
    Article,
    ArticleProps,
    Breadcrumbs,
    BreadcrumbsProps,
    Container,
    Hero,
    HeroProps,
    Mission,
    MissionProps,
    QuickServices,
    QuickServicesProps,
    VisitStableCTA,
    VisitStableCTAProps,
} from "@/ui";

export type RidePageProps = {
    dataHero?: HeroProps | null;
    dataBreadcrumbs?: BreadcrumbsProps | null;
    dataArticleRide?: ArticleProps | null;
    dataQuickServices?: QuickServicesProps | null;
    dataVisiStableCTA?: VisitStableCTAProps | null;
    dataMission?: MissionProps | null;
};

export const RidePage = ({
    dataHero,
    dataBreadcrumbs,
    dataArticleRide,
    dataQuickServices,
    dataVisiStableCTA,
    dataMission,
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
                {dataMission && <Mission {...dataMission} />}
                {dataVisiStableCTA && <VisitStableCTA {...dataVisiStableCTA} />}
            </Container>
        </div>
    );
};