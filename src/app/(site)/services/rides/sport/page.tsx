import { Metadata } from "next";

import { Container } from "@/ui";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { getSportPageData } from "@/features/price/services/sportPageDataService";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Спортивные тренировки",
    "Подготовка к соревнованиям и спортивные программы по верховой езде. Аренда лошадей и пони."
  );

const ServicesRidesSport = async () => {
  const {
    prices,
    dataHero,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
  } = await getSportPageData();

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

export default ServicesRidesSport;
