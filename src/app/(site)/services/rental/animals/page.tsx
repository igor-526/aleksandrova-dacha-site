import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Аренда животных",
    "Лошади и пони и другие животные для съемок, праздников и выездных мероприятий."
  );

export default function ServicesRentalAnimalsPage() {
  return <EmptyPage />;
}
