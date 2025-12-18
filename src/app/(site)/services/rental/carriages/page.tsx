import { Metadata } from "next";

import { Container } from "@/ui";
import { getCarriagesPageData } from "@/features/price/services/carriagesPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { buildPageMetadata } from "@/lib/metadata";

export const dynamic = 'force-dynamic';

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Прокат карет и экипажей",
    "Аренда карет и экипажей для прогулок, свадеб и торжеств с ценами и условиями."
  );

const ServicesRentalCarriages = async () => {
  const {
    prices,
    dataHero,
    dataArticle,
    dataMission,
    dataGallerySection,
  } = await getCarriagesPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <ServicesGroupPage
          prices={prices}
          dataHero={dataHero}
          dataArticle={dataArticle}
          dataMission={dataMission}
          dataGallerySection={dataGallerySection}
        />

      </Container>
    </div>
  );
};

export default ServicesRentalCarriages;
