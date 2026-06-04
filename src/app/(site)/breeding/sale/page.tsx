import { Metadata } from "next";
import { buildPageMetadata } from "@/features/metadata/metadata";
// import { Container } from "@/ui";
import { Container, EmptyPage } from "@/ui";
// import { HorseListPage } from "@/features/horses/ui/HorseListPage";
//import { getSaleListPageData } from "@/features/horses/data/saleListPageData";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Продажа лошадей и пони в Александровой даче",
    "Возможна доставка в любой регион России и СНГ. Перевозим животных наземным транспортом или самолетом.",
  );

export default async function BreedingSalePage() {
  // const { dataHero, dataBreadcrumbs, dataHorseList } = await getSaleListPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        {/*<HorseListPage dataHero={dataHero} dataBreadcrumbs={dataBreadcrumbs} dataHorseList={dataHorseList} />*/}
        <EmptyPage />
      </Container>
    </div>
  );
}
