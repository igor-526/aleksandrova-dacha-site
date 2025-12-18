import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Разведение: производители",
    "Жеребцы-производители клуба, родословные и потомство."
  );

export default function BreedingStallionsPage() {
  return <EmptyPage />;
}
