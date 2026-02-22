import { Metadata } from "next";
import { Container } from "@/ui";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { getAnimalsPageData } from "@/features/price/services/Rental/animalsPageDataService";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Аренда животных для катаний",
    "Аренда животных для катаний в Александровой даче. Верблюды, северные олени, лошади и пони.",
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
