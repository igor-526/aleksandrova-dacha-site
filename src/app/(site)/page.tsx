import { CallBackRequestModal } from "@/features/callBackRequest/ui/CallBackRequestModal";
import { getHomePageData } from "@/features/home/services/homePageDataService";
import { ContactBlock, Hero, Container, Mission, AboutTeaser, QuickServices } from "@/ui";

export const dynamic = 'force-dynamic';

const HomePage = async () => {

  const {
    dataHero,
    itemsServices,
    news,
    dataMission,
    address,
    phone,
    siteName,
    weekdayHours,
    weekendHours,
    socials,
    addressLatitude,
    addressLongitude,
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

        <ContactBlock
          address={address ?? ""}
          phones={phone ? [phone] : []}
          hours={
            [
              weekdayHours && { label: "Будни", value: weekdayHours },
              weekendHours && { label: "Выходные", value: weekendHours },
            ].filter((item): item is { label: string; value: string } => Boolean(item))
          }
          socials={socials}
          map={ addressLatitude && addressLongitude ? {
            lat: addressLatitude,
            lng: addressLongitude,
            zoom: 13,
            provider: "yandex",
            markerLabel: siteName,
          } : undefined}
        />
      </Container>
    </div>
  );
};

export default HomePage;
