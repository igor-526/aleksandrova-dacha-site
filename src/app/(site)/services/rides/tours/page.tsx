import { Container } from "@/ui";
import { getToursPageData } from "@/features/price/services/toursPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";

export const dynamic = 'force-dynamic';

const ServicesRidesTours = async () => {
  const {
    prices,
    dataHero,
    dataArticle,
    dataMission,
    dataGallerySection,
  } = await getToursPageData();

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

export default ServicesRidesTours;
