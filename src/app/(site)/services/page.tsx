import { Metadata } from "next";
import { Container } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { getAllPricePageData } from "@/features/price/services/allPricePageDataService";
import { AllPricePage } from "@/features/price/ui/AllPricePage";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Услуги в клубе Александрова дача",
      "Конные прогулки и обучение верховой езде, аренда лошадей и пони, аренда экипажей и животных, спортивная аренда, постой, фотосессии. Контактная мини-ферма.",
  );

export default async function Services() {
  const { dataHero, dataBreadcrumbs, dataAllQuickServices } = await getAllPricePageData();
  return (
     <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <AllPricePage dataHero={dataHero} dataBreadcrumbs={dataBreadcrumbs} dataAllQuickServices={dataAllQuickServices} />
      </Container>
    </div>
  );
};
