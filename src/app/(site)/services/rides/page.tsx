import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Верховая езда",
    "Конные прогулки, обучение верховой езде, групповые абонементы, конный спорт"
  );

export default function RidesPage() {
  return <EmptyPage />;
}
