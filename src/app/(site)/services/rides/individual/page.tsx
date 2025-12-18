import { Metadata } from "next";

import { Container } from "@/ui";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { getIndividualPageData } from "@/features/price/services/individualPageDataService";
import { buildPageMetadata } from "@/lib/metadata";

export const dynamic = 'force-dynamic';

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Индивидуальные занятия",
    "Персональные тренировки по верховой езде с учетом целей всадника."
  );

const ServicesRidesIndividual = async () => {
  const {
    prices,
    dataHero,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
  } = await getIndividualPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <ServicesGroupPage
          prices={prices}
          dataHero={dataHero}
          dataArticle={dataArticle}
          dataMission={dataMission}
          dataServicesList={dataServicesList}
          dataGallerySection={dataGallerySection}
        />
      </Container>
    </div>
  );
};

export default ServicesRidesIndividual;
