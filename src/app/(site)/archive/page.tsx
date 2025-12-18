import { Metadata } from "next";

import { buildPageMetadata } from "@/lib/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Архив",
    "Подборка материалов и фотографий мероприятий клуба для гостей и учеников."
  );

export default function ArchiveHome() {
  return (
    <div className="w-7xl">
      <div className="w-full h-250 bg-no-repeat bg-[url(/images/home-img.jpg)] bg-cover object-center"></div>
    </div>
  );
}
