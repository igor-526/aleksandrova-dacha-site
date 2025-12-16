import { fetchPriceDetail } from "@/features/price/services/priceService";
import { OneServicePage } from "@/features/price/ui/OneServicePage";

type UslugiPageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamic = 'force-dynamic';

export default async function UslugiPage({ params }: UslugiPageProps) {
  const { slug } = await params;

  const result = await fetchPriceDetail(slug);

  if (result.status !== "ok" || !result.data) {
    return <h1>Услуга не найдена</h1>;
  }

  const price = result.data;

  return (
    <OneServicePage price={price} />
  );
}