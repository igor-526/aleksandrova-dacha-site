import { Metadata } from "next";
import { Container } from "@/ui";
import { getCarriagesPageData } from "@/features/price/services/carriagesPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Прокат карет, саней и экипажей",
    "Аренда карет и экипажей для катаний, прогулок, свадеб и торжеств. Можно запрячь одну, пару или тройку лошадей.",
  );

const ServicesRentalCarriages = async () => {
  const { prices, dataHero, dataBreadcrumbs, dataArticle, dataCarusel, dataMission, dataServicesList } = await getCarriagesPageData();

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

export default ServicesRentalCarriages;
