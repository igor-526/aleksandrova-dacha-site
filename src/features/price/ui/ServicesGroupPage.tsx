import {
  Article,
  ArticleProps,
  Breadcrumbs,
  BreadcrumbsProps,
  Container,
  GallerySection,
  GallerySectionProps,
  Hero,
  HeroProps,
  Mission,
  MissionProps,
  PreparationTips,
  PreparationTipsProps,
} from "@/ui";
import ServicesList, {
  ServicesListProps,
} from "@/features/price/ui/ServicesList";
import { PriceOutDto } from "@/types";
import { ReactNode } from "react";

export type ServicesGroupPageProps = {
  prices?: PriceOutDto[] | null;
  dataHero?: HeroProps | null;
  dataBreadcrumbs?: BreadcrumbsProps | null;
  dataArticle?: ArticleProps | null;
  dataMission?: MissionProps | null;
  dataServicesList?: ServicesListProps | null;
  dataGallerySection?: GallerySectionProps | null;
  dataPreparationTips?: PreparationTipsProps | null;
  additionalSection?: ReactNode | null;
};

export const ServicesGroupPage = ({
  prices,
  dataHero,
  dataBreadcrumbs,
  dataArticle,
  dataMission,
  dataServicesList,
  dataGallerySection,
  dataPreparationTips,
  additionalSection,
}: ServicesGroupPageProps) => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        {dataHero && <Hero {...dataHero} />}

        {dataBreadcrumbs && (
          <Breadcrumbs {...dataBreadcrumbs} storageKey="serviceBreadcrumbs" />
        )}

        {dataArticle && <Article {...dataArticle} />}

        {prices && prices.length > 0 && (
          <ServicesList {...dataServicesList} items={prices} />
        )}

        {dataMission && <Mission {...dataMission} />}

        {dataGallerySection && <GallerySection {...dataGallerySection} />}

        {dataPreparationTips && <PreparationTips {...dataPreparationTips} />}

        {additionalSection}
      </Container>
    </div>
  );
};
