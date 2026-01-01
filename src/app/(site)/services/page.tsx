import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Услуги",
    "Верховая езда, контактная мини-ферма, аренда экипажей и животных"
  );

export default function ServicesPage() {
  return <EmptyPage />;
}
