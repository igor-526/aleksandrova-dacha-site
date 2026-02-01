import {
    Breadcrumbs,
    BreadcrumbsProps,
    Container,
    Hero,
    HeroProps,
    QuickServices,
    QuickServicesProps,
} from "@/ui";

export type AllPricePageProps = {
    dataHero?: HeroProps | null;
    dataBreadcrumbs?: BreadcrumbsProps | null;
    dataAllQuickServices?: QuickServicesProps[] | null;
};

export const AllPricePage = ({
    dataHero,
    dataBreadcrumbs,
    dataAllQuickServices,
}: AllPricePageProps) => {

    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <Container className="space-y-12">
                {dataHero && <Hero {...dataHero} />}
                {dataBreadcrumbs && (
                    <Breadcrumbs {...dataBreadcrumbs} storageKey="serviceBreadcrumbs" />
                )}

                {dataAllQuickServices && (<div className="space-y-16">
                    {dataAllQuickServices.map((quickServiceSection, index) => (
                        <QuickServices key={index} {...quickServiceSection} />
                    ))}
                </div>)}
            </Container>
        </div>
    );
};