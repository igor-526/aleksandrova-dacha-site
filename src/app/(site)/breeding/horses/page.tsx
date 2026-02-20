import { Metadata } from "next";
import { Container } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { HorseListPage } from "@/features/horses/ui/HorseListPage";
import { getHorseListPageData } from "@/features/horses/data/horseListPageData";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Разведение: лошади",
    "Каталог племенных лошадей хозяйства."
  );

export default async function BreedingHorsesPage() {
  const { horses } = await getHorseListPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <h1>Лошади</h1>
        <HorseListPage horses={horses} />
      </Container>
    </div>
  );
}
