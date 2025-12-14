import { AboutTeaser, Container, Hero, SafetyNotice } from "@/ui";
import MyServicesList from "@/features/price/ui/MyServicesList";
import { FeedbackForm } from "@/features/callBackRequest/ui/CallBackRequestModal";
import { getToursPageData } from "@/features/price/services/toursPageDataService";

const ServicesRidesTours = async () => {
  const {
    prices,
    dataHero,
    dataTextAboutTeaser,
    dataSafetyNoticeRegistration,
    dataSafetyNoticeTimes,
    dataSafetyNoticeСloth,
  } = await getToursPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero {...dataHero} />

        <AboutTeaser
          {...dataTextAboutTeaser}
          className="col-span-2 row-span-2"
        ></AboutTeaser>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <SafetyNotice
            {...dataSafetyNoticeRegistration}
            withInnerShadow={true}
            colorVariant="f0e7cf"
            className="md:col-span-2 lg:col-span-1"
          />
          <SafetyNotice {...dataSafetyNoticeTimes} colorVariant="f6efe0" />
          <SafetyNotice {...dataSafetyNoticeСloth} colorVariant="f6efe0" />
        </div>

        <MyServicesList
          items={prices}
          mediaPosition="left"
          columns={2}
          gallery
        />

        <FeedbackForm triggerLabel="Заказать обратный звонок" />
      </Container>
    </div>
  );
};

export default ServicesRidesTours;
