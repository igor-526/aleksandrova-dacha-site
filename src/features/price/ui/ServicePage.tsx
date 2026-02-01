import {
  Article,
  ArticleProps,
  Breadcrumbs,
  BreadcrumbsProps,
  Container,
  Hero,
  HeroProps,
  QuickServiceItem,
  QuickServices,
} from "@/ui";

export type ServicePageProps = {
  dataHero?: HeroProps | null;
  dataBreadcrumbs?: BreadcrumbsProps | null;
  dataArticle?: ArticleProps | null;
  itemsServices?: QuickServiceItem[];
};

export const ServicePage = ({
  dataHero,
  dataBreadcrumbs,
  dataArticle,
  itemsServices,
}: ServicePageProps) => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        {dataHero && <Hero {...dataHero} />}
        {dataBreadcrumbs && (
          <Breadcrumbs {...dataBreadcrumbs} storageKey="serviceBreadcrumbs" />
        )}
        {dataArticle && <Article {...dataArticle} />}
        {itemsServices && (<QuickServices items={itemsServices} />)}
      </Container>
    </div>
  );
};