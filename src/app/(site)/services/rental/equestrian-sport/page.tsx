import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Конный спорт: прокат",
    "Прокат спортивных лошадей и пони, сопровождение для участия в конноспортивных соревнованиях."
  );

export default function ServicesRentalEquestrianPage() {
  return <EmptyPage />;
}
