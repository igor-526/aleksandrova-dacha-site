import { Metadata } from "next";

import { Container } from "@/ui";
import { getToursPageData } from "@/features/price/services/toursPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Конные прогулки",
    "Катания и конные прогулки: описание, продолжительность и цены."
  );

const ServicesRidesTours = async () => {
  const {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
    additionalSection,
  } = await getToursPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <ServicesGroupPage
          prices={prices}
          dataHero={dataHero}
          dataBreadcrumbs={dataBreadcrumbs}
          dataArticle={dataArticle}
          dataMission={dataMission}
          dataServicesList={dataServicesList}
          dataGallerySection={dataGallerySection}
          additionalSection={additionalSection}
        />
      </Container>
    </div>
  );
};

export default ServicesRidesTours;
