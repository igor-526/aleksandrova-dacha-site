import { Metadata } from "next";

import { Container } from "@/ui";
import { getToursPageData } from "@/features/price/services/Ride/toursPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Конные прогулки",
    "Катания и конные прогулки: описание, продолжительность и цены."
  );

export default async function ServicesRidesTours() {
  const {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
    dataPreparationTips,
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
          dataPreparationTips={dataPreparationTips}
          additionalSection={additionalSection}
        />
      </Container>
    </div>
  );
};
