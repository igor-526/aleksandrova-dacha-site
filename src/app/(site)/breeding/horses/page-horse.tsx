import { Metadata } from "next";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { Container } from "@/ui";
import { HorseListPage } from "@/features/horses/ui/HorseListPage";
import { getHorseListPageData } from "@/features/horses/data/horseListPageData";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Разведение племенных лошадей в Александровой даче",
    "У нас вы найдете лошадей тракененской, ганноверской, буденновской, забайкальской пород, а также советские и французские тяжеловозы",
  );

export default async function BreedingHorsesPage() {
  const { dataHero, dataBreadcrumbs, dataHorseList } = await getHorseListPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <HorseListPage dataHero={dataHero} dataBreadcrumbs={dataBreadcrumbs} dataHorseList={dataHorseList} />
      </Container>
    </div>
  );
}