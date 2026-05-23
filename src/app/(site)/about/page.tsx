import { Metadata } from "next";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { Container } from "@/ui";
import { getAboutPageData } from "@/features/about/data/aboutPageData";
import { AboutPage } from "@/features/about/ui/AboutPage";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "О клубе",
    "О кооно-спортивном клубе Александрова Дача"
  );

export default async function About() {

  const {
    dataHero,
    dataBreadcrumbs,
  } = await getAboutPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <AboutPage
        dataHero={dataHero}
        dataBreadcrumbs={dataBreadcrumbs}
      />
    </div>
  );
}
