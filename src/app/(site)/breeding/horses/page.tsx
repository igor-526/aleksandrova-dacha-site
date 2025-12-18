import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Разведение: лошади",
    "Каталог племенных лошадей хозяйства."
  );

export default function BreedingHorsesPage() {
  return <EmptyPage />;
}
