import { Metadata } from "next";
import { Container } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { RentalPage } from "@/features/price/ui/RentalPage";
import { getRentalPageData } from "@/features/price/services/Rental/rentalPageDataService";
import { getRidePageData } from "@/features/price/services/Ride/ridePageDataService";
import { RidePage } from "@/features/price/ui/RidePage";
import { getServicesPageData } from "@/features/price/services/servicesPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Услуги верховой езды, аренды экипажей иживотных в Александровой даче",
    "Конные прогулки и обучение верховой езде, аренда лошадей и пони, аренда конных экипажей, спортивная аренда, постой, фотосессии. Контактная мини-ферма."
  );

export default async function Services() {
  const { dataHero, dataBreadcrumbs } = await getServicesPageData();
  const { dataArticleRide, dataQuickServices } = await getRidePageData();
  const { dataCards, dataArticleRental } =
    await getRentalPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container>
        <ServicesGroupPage
          dataHero={dataHero}
          dataBreadcrumbs={dataBreadcrumbs}
        />
        <h2 className="mb-6 px-8">Верховая езда</h2>
        <RidePage
          dataArticleRide={dataArticleRide}
          dataQuickServices={dataQuickServices}
        />
        <h2 className="mb-6 px-8">Аренда экипажей и животных</h2>
        <RentalPage
          dataCards={dataCards}
          dataArticleRental={dataArticleRental}
        />
      </Container>
    </div>
  );
}
