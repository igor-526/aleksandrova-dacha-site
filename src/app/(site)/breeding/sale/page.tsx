import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Продажа лошадей",
    "Актуальные лошади и пони на продажу, условия приобретения и консультации."
  );

export default function BreedingSalePage() {
  return <EmptyPage />;
}
