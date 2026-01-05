import { Metadata } from "next";

import { Container } from "@/ui";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { getFarmPageData } from "@/features/price/services/farmPageDataService";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Контактная мини-ферма и экскурсии",
    "Экскурсии по ферме, знакомство с животными и программы для гостей."
  );

export default async function ServicesFarmPage() {
  const {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
    additionalSection,
  } = await getFarmPageData();

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
}
