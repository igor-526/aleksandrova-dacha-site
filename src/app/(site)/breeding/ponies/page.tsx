import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata("Разведение: пони", "Пони хозяйства и племенная работа.");

export default function BreedingPoniesPage() {
  return <EmptyPage />;
}
