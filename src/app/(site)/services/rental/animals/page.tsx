import { Metadata } from "next";
import { Container } from "@/ui";
import { getAnimalsPageData } from "@/features/price/services/animalsPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Катание на верблюдах, оленях и лошадях",
    "Аренда животных для катаний и прогулок в Александровой даче. Верблюды, северные олени, лошади и пони.",
  );

const ServicesRentalAnimals = async () => {
  const { prices, dataHero, dataBreadcrumbs, dataArticle, dataCarusel, dataMission, dataServicesList } = await getAnimalsPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <ServicesGroupPage
          prices={prices}
          dataHero={dataHero}
          dataBreadcrumbs={dataBreadcrumbs}
          dataArticle={dataArticle}
          dataCarusel={dataCarusel}
          dataMission={dataMission}
          dataServicesList={dataServicesList}
        />
      </Container>
    </div>
  );
};

export default ServicesRentalAnimals;
