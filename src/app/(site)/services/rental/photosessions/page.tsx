import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Фотосессии",
    "Организация фотосессий с лошадьми, костюмами и площадками клуба."
  );

export default function ServicesRentalPhotosessionsPage() {
  return <EmptyPage />;
}
