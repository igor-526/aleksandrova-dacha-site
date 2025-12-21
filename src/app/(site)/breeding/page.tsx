import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Разведение",
    "Племенная работа. Разведение шетлендских, уэльских, аппалуза пони "
  );

export default function BreedingPage() {
  return <EmptyPage />;
}
