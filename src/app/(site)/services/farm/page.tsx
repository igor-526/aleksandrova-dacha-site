import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Контактная мини-ферма и экскурсии",
    "Экскурсии по ферме, знакомство с животными и программы для гостей."
  );

export default function ServicesFarmPage() {
  return <EmptyPage />;
}
