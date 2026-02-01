import { Metadata } from "next";
import { Container } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { ServicePage } from "@/features/price/ui/ServicePage";
import { getRidePageData } from "@/features/price/services/ridePageDataService";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Конные прогулки и обучение верховой езде в Александровой даче",
    "Катания на лошадях и конные прогулки, обучение верховой езде детей и взрослых, групповые абонементы и спортивные тренировки. А также контактная мини-ферма.",
  );

export default async function ServicesRides() {
  const { dataHero, dataBreadcrumbs, dataArticle, itemsServices } = await getRidePageData();
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <ServicePage dataHero={dataHero} dataArticle={dataArticle} dataBreadcrumbs={dataBreadcrumbs} itemsServices={itemsServices} />
      </Container>
    </div>
  );
};