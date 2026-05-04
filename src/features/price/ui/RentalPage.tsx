import {
    Article,
    ArticleProps,
    Breadcrumbs,
    BreadcrumbsProps,
    Card,
    CardProps,
    Container,
    Hero,
    HeroProps,
    VisitStableCTA,
    VisitStableCTAProps,
} from "@/ui";
import Link from "next/link";

export type RentalPageProps = {
    dataHero?: HeroProps | null;
    dataBreadcrumbs?: BreadcrumbsProps | null;
    dataCards?: (CardProps & { href?: string })[] | null;
    dataVisiStableCTA?: VisitStableCTAProps | null;
    dataArticleRental?: ArticleProps | null;
};

export const RentalPage = ({
    dataHero,
    dataBreadcrumbs,
    dataCards,
    dataVisiStableCTA,
    dataArticleRental,
}: RentalPageProps) => {
    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <Container className="space-y-12">
                {dataHero && <Hero {...dataHero} />}
                {dataBreadcrumbs && (
                    <Breadcrumbs {...dataBreadcrumbs} storageKey="serviceBreadcrumbs" />
                )}
                {dataCards && (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {dataCards.map((card, index) => (
                            <Link key={index} href={card.href || "#"}><Card  {...card} /></Link>
                        ))}
                    </div>
                )}
                {dataVisiStableCTA && <VisitStableCTA {...dataVisiStableCTA} />}
                {dataArticleRental && <Article {...dataArticleRental} />}
            </Container>
        </div>
    );
};