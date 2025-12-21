import { Metadata } from "next";

import AboutText from "@/features/about/ui/AboutText";
import { buildPageMetadata } from "@/features/metadata/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "О клубе",
    "История конного клуба, главные направления работы и возможности для гостей."
  );

export default function AboutPage() {
  return (
    <div className="pb-20">
      <div className="container mx-auto">
        <AboutText />
      </div>
    </div>
  );
}
