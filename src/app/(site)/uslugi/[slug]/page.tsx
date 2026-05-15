import { Metadata } from "next";

import { buildPageMetadata } from "@/features/metadata/metadata";
import { fetchPriceDetail } from "@/features/price/services/priceService";
import { OneServicePage } from "@/features/price/ui/OneServicePage";
import { Container } from "@/ui";

type UslugiPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: UslugiPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await fetchPriceDetail(slug);

  if (result.status !== "ok" || !result.data) {
    return buildPageMetadata("РЈСЃР»СѓРіР°", "РћРїРёСЃР°РЅРёРµ СѓСЃР»СѓРіРё РЅРµРґРѕСЃС‚СѓРїРЅРѕ.");
  }

  const title = result.data.name || "РЈСЃР»СѓРіР°";
  const description =
    result.data.description ||
    "РћРїРёСЃР°РЅРёРµ СѓСЃР»СѓРіРё, РµРµ СЃС‚РѕРёРјРѕСЃС‚СЊ Рё РґРµС‚Р°Р»Рё РїСЂРѕРіСЂР°РјРјС‹.";

  return buildPageMetadata(title, description);
}

export default async function UslugiPage({ params }: UslugiPageProps) {
  const { slug } = await params;

  const result = await fetchPriceDetail(slug);

  if (result.status !== "ok" || !result.data) {
    return (
      <Container className="pb-20 pt-8">
        <h1>РЈСЃР»СѓРіР° РЅРµ РЅР°Р№РґРµРЅР°</h1>
      </Container>
    );
  }

  return <OneServicePage price={result.data} />;
}
