import { Metadata } from "next";

import { EmptyPage } from "@/ui";
import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Команда",
    "Тренеры, инструктора и сотрудники клуба, которые помогают гостям и спортсменам."
  );

export default function TeamPage() {
  return <EmptyPage />;
}
