import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata("Прокат", "Прокат экипажей, лошадей и других животных.");

export default function ServicesRentalPage() {
  return <EmptyPage />;
}
