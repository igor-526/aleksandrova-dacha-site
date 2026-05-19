import { Metadata } from "next";
import { Container } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { RentalPage } from "@/features/price/ui/RentalPage";
import { getBreedingPageData } from "@/features/horses/data/breedingPageData";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Разведение племенных лошадей и пони в Александровой даче",
    `У нас вы найдете лошадей тракененской, ганноверской, буденновской, забайкальской пород, а также советские и французские тяжеловозы. \n Пони-ферма "Александрова Дача" - самая крупная ферма по разведению пони в России. \n В нашем хозяйстве представлены породы: Шетлендский и Уэльские пони, Аппалуза пони.`,
  );

export default async function Breeding() {
  const { dataHero, dataBreadcrumbs, dataCards, dataArticleRental } = await getBreedingPageData();
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <RentalPage dataHero={dataHero} dataBreadcrumbs={dataBreadcrumbs} dataCards={dataCards} dataArticleRental={dataArticleRental} />
      </Container>
    </div>
  );
};
