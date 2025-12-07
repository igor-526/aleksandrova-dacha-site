import {
  AboutTeaser,
  Article,
  BookingSection,
  Container,
  Hero,
  SafetyNotice,
} from "@/ui";
import {
  dataArticle,
  dataBookingSection,
  dataHero,
  dataSafetyNoticeItems,
  dataTextAboutTeaser,
} from "./dataTours";
import { ServicesList } from "../../ServicesList";
import dataPrice from "./dataPriceApi";

const ToursPage = () => {
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

        <ServicesList
          items={dataPrice}
          mediaWidth={"full"}
          mediaHeight={"150px"}
          maxCardWidth={"450px"}
        />

        <BookingSection {...dataBookingSection} />
      </Container>
    </div>
  );
};

export default ToursPage;
