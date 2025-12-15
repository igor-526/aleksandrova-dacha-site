import { Container } from "@/ui";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";
import { getSportPageData } from "@/features/price/services/sportPageDataService";

const ServicesRidesSport = async () => {
  const { prices, dataHero, dataArticle, dataMission, dataGallerySection } =
    await getSportPageData();

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

export default ServicesRidesSport;
