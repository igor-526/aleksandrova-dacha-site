import { Metadata } from "next";

import { fetchPriceDetail } from "@/features/price/services/priceService";
import { OneServicePage } from "@/features/price/ui/OneServicePage";
import { buildPageMetadata } from "@/lib/metadata";

type UslugiPageProps = {
  params: {
    slug: string;
  };
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: UslugiPageProps): Promise<Metadata> {
  const { slug } = params;
  const result = await fetchPriceDetail(slug);

  if (result.status !== "ok" || !result.data) {
    return buildPageMetadata("Услуга", "Описание услуги недоступно.");
  }

  const title = result.data.name || "Услуга";
  const description = result.data.description || "Описание услуги, ее стоимость и детали программы.";

  return buildPageMetadata(title, description);
}

export default async function UslugiPage({ params }: UslugiPageProps) {
  const { slug } = params;

  const result = await fetchPriceDetail(slug);

  if (result.status !== "ok" || !result.data) {
    return <h1>Услуга не найдена</h1>;
  }

  return <OneServicePage price={result.data} />;
}
