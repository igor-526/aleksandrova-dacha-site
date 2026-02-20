import { Metadata } from "next";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { fetchHorseDetail } from "@/features/horses/data/horseService";
import { OneHorsePage } from "@/features/horses/ui/OneHorsePage";

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
        return buildPageMetadata("Лошадь", "Описание лошади недоступно.");
    }

    const title = result.data.name || "Лошадь";
    const description =
        result.data.description ||
        "Описание лошади, порода, пол, масть, родословная, потомки";

    return buildPageMetadata(title, description);
}

export default async function UslugiPage({ params }: HorsesPageProps) {
    const { slug } = await params;

    const result = await fetchHorseDetail(slug);

    if (result.status !== "ok" || !result.data) {
        return <h1>Услуга не найдена</h1>;
    }

    return <OneHorsePage horse={result.data} />;
}