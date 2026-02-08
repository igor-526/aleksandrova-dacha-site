import { Metadata } from "next";
import { Container } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { getRentalPageData } from "@/features/price/services/Rental/rentalPageDataService";
import { RentalPage } from "@/features/price/services/Rental/RentalPage";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Аренда экипажей и животных в Александровой даче",
    "Лошади, пони, северные олени и верблюды в аренду для катаний верхом, в экипажах и санях. Спортивные лошади и пони для участия в соревнованиях.",
  );

export default async function ServicesRental() {
  const { dataHero, dataBreadcrumbs, dataCards, dataVisiStableCTA, dataArticleRental } = await getRentalPageData();
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <RentalPage dataHero={dataHero} dataBreadcrumbs={dataBreadcrumbs} dataCards={dataCards} dataVisiStableCTA={dataVisiStableCTA} dataArticleRental={dataArticleRental} />
      </Container>
    </div>
  );
};