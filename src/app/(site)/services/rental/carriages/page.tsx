import { Container } from "@/ui";
import { getCarriagesPageData } from "@/features/price/services/carriagesPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";

const ServicesRentalCarriages = async () => {
  const {
    prices,
    dataHero,
    dataArticle,
    dataMission,
    dataGallerySection,
  } = await getCarriagesPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <ServicesGroupPage
          prices={prices}
          dataHero={dataHero}
          dataArticle={dataArticle}
          dataMission={dataMission}
          dataGallerySection={dataGallerySection}
        />

      </Container>
    </div>
  );
};

export default ServicesRentalCarriages;
