import {
  Article,
  ArticleProps,
  Container,
  GallerySection,
  GallerySectionProps,
  Hero,
  HeroProps,
  Mission,
  MissionProps,
} from "@/ui";
import ServicesList from "@/features/price/ui/ServicesList";
import { PriceOutDto } from "@/types";

type ServicesGroupPageProps = {
  prices?: PriceOutDto[] | null;
  dataHero?: HeroProps | null;
  dataArticle?: ArticleProps | null;
  dataMission?: MissionProps | null;
  dataGallerySection?: GallerySectionProps | null;
};

export const ServicesGroupPage = ({
  prices,
  dataHero,
  dataArticle,
  dataMission,
  dataGallerySection,
}: ServicesGroupPageProps) => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        {dataHero && <Hero {...dataHero} />}

        {dataArticle && <Article {...dataArticle} />}

        {prices && prices.length > 0 && (
          <ServicesList
            items={prices}
            mediaPosition="left"
            columns={2}
            gallery
          />
        )}

        {dataMission && <Mission {...dataMission} />}

        {dataGallerySection && <GallerySection {...dataGallerySection} />}
      </Container>
    </div>
  );
};
