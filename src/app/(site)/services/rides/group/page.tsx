import { Container } from "@/ui";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { getGroupPageData } from "@/features/price/services/groupPageDataService";

export default async function ServicesRidesGroupPage() {
  const {
    prices,
    dataHero,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
  } = await getGroupPageData();

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
}
