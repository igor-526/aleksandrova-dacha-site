import { Metadata } from "next";
import { Container } from "@/ui";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { getFotosessionPageData } from "@/features/price/services/Rental/fotosessionPageDataService";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Фотосессии с животными в Александровой даче",
    "Пони и лошади, вербдлюды и северные олени, козочки и барашки, а также другие животные для создания уникальных образов.",
  );

const ServicesRentalPhotosessions = async () => {
  const { prices, dataHero, dataBreadcrumbs, dataArticle, dataCarusel, dataMission, dataServicesList } = await getFotosessionPageData();

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

export default ServicesRentalPhotosessions;
