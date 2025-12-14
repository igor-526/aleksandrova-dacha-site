import {
  AboutTeaser,
  Article,
  BookingSection,
  Container,
  Hero,
  Mission,
  SafetyNotice,
} from "@/ui";
import MyServicesList from "@/features/price/ui/MyServicesList";
import { getIndividualPageData } from "@/features/price/services/individualPageDataService";

const ServicesRidesIndividual = async () => {
  const {
    prices,
    dataHero,
    dataTextAboutTeaser,
    dataSafetyNoticeItems,
    dataArticle,
    dataMission,
    dataBookingSection,
  } = await getIndividualPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero {...dataHero} />

        <div className="grid gap-4 lg:grid-cols-4">
          <AboutTeaser
            {...dataTextAboutTeaser}
            className="col-span-2"
          ></AboutTeaser>
          <div className="grid gap-4 col-span-2 sm:grid-cols-2">
            {dataSafetyNoticeItems.map((item, index) => (
              <SafetyNotice key={index} {...item} />
            ))}
          </div>
        </div>

        <Article {...dataArticle} />

        <MyServicesList
          items={prices}
          mediaPosition="left"
          columns={2}
          gallery
        />

        <Mission {...dataMission} />

        <BookingSection {...dataBookingSection} />
      </Container>
    </div>
  );
};

export default ServicesRidesIndividual;
