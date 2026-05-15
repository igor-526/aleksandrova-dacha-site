import { Metadata } from "next";
import { getHomePageData } from "@/features/home/services/homePageDataService";
import { buildPageMetadata } from "@/features/metadata/metadata";
import {
  ContactsBlock,
  Hero,
  Container,
  Mission,
  QuickServices,
} from "@/ui";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Главная",
    "Конный клуб «Александрова Дача»: занятия верховой ездой, прогулки, прокат лошадей и пони, племенная работа и контактная мини-ферма."
  );

const HomePage = async () => {
  const {
    dataHero,
    itemsServices,
    dataMission,
    dataContactsBlock,
  } = await getHomePageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero {...dataHero} />
        <QuickServices items={itemsServices} className="mb-10" />
        <Mission {...dataMission} className="mb-10" />
        <ContactsBlock {...dataContactsBlock} />
      </Container>
    </div>
  );
};

export default HomePage;
