import { Metadata } from "next";

import { fetchHorseDetail } from "@/features/horses/data/horseService";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { OneHorsePage } from "@/features/horses/ui/OneHorsePage";
import { Container } from "@/ui";

type HorsesPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: HorsesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await fetchHorseDetail(slug);

  if (result.status !== "ok" || !result.data) {
    return buildPageMetadata("Р›РѕС€Р°РґСЊ", "РћРїРёСЃР°РЅРёРµ Р»РѕС€Р°РґРё РЅРµРґРѕСЃС‚СѓРїРЅРѕ.");
  }

  const title = result.data.name || "Р›РѕС€Р°РґСЊ";
  const description =
    result.data.description ||
    "РћРїРёСЃР°РЅРёРµ Р»РѕС€Р°РґРё, РїРѕСЂРѕРґР°, РїРѕР», РјР°СЃС‚СЊ, СЂРѕРґРѕСЃР»РѕРІРЅР°СЏ, РїРѕС‚РѕРјРєРё";

  return buildPageMetadata(title, description);
}

export default async function HorsesPage({ params }: HorsesPageProps) {
  const { slug } = await params;

  const result = await fetchHorseDetail(slug);

  if (result.status !== "ok" || !result.data) {
    return (
      <Container className="pb-20 pt-8">
        <h1>Р›РѕС€Р°РґСЊ РЅРµ РЅР°Р№РґРµРЅР°</h1>
      </Container>
    );
  }

  return <OneHorsePage horse={result.data} />;
}
