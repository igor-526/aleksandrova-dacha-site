import { Metadata } from "next";

import { Container } from "@/ui";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { getGroupPageData } from "@/features/price/services/groupPageDataService";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Групповые занятия",
    "Групповые уроки верховой езды: стоимость и условия записи."
  );

export default async function ServicesRidesGroupPage() {
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
  } = await getGroupPageData();

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
}
