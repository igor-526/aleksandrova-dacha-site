import { Metadata } from "next";

import { buildPageMetadata } from "@/features/metadata/metadata";
import { Container } from "@/ui";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Архив",
    "Подборка материалов и фотографий мероприятий клуба для гостей и учеников."
  );

export default function ArchiveHome() {
  return (
    <Container className="pb-20">
      <div className="h-250 w-full bg-[url(/images/home-img.jpg)] bg-cover bg-center bg-no-repeat"></div>
    </Container>
  );
}
