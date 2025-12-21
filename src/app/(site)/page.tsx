import { Metadata } from "next";

import { CallBackRequestModal } from "@/features/callBackRequest/ui/CallBackRequestModal";
import { getHomePageData } from "@/features/home/services/homePageDataService";
import { buildPageMetadata } from "@/features/metadata/metadata";
import {
  ContactsBlock,
  Hero,
  Container,
  Mission,
  AboutTeaser,
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
    news,
    dataMission,
    dataContactsBlock,
    // address,
    // phone,
    // siteName,
    // weekdayHours,
    // weekendHours,
    // socials,
    // addressLatitude,
    // addressLongitude,
  } = await getHomePageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero {...dataHero} />
        <QuickServices items={itemsServices} className="mb-10" />

        {news &&
          news.map((item, index) => (
            <AboutTeaser key={index} {...item}>
              <CallBackRequestModal triggerLabel="Узнать подробности" />
            </AboutTeaser>
          ))}

        <Mission {...dataMission} className="mb-10" />
        <ContactsBlock {...dataContactsBlock} />
      </Container>
    </div>
  );
};

export default HomePage;
