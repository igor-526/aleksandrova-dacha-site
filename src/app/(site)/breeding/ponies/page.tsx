import { Metadata } from "next";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { Container } from "@/ui";
import { HorseListPage } from "@/features/horses/ui/HorseListPage";
import { getPonyListPageData } from "@/features/horses/data/ponyListPageData";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Пони-ферма Александровой дачи",
    "Шетлендские, уэльские, аппалуза пони",
  );

export default async function BreedingPoniesPage() {
  const { dataBreadcrumbs, dataArticles, dataHorseList } = await getPonyListPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <HorseListPage dataBreadcrumbs={dataBreadcrumbs} dataArticles={dataArticles} dataHorseList={dataHorseList} />
      </Container>
    </div>
  );
}
