import { Metadata } from "next";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { Container } from "@/ui";
import { HorseListPage } from "@/features/horses/ui/HorseListPage";
import { getStallionsListPageData } from "@/features/horses/data/stallionsListPageData";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Жеребцы для случки в Александровой даче",
    "Поможем подобрать жеребца и обеспечить успешную случку.",
  );

export default async function BreedingStallionsPage() {
  const { dataBreadcrumbs, dataArticles, dataHorseList } = await getStallionsListPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <HorseListPage dataBreadcrumbs={dataBreadcrumbs} dataArticles={dataArticles} dataHorseList={dataHorseList} />
      </Container>
    </div>
  );
}
