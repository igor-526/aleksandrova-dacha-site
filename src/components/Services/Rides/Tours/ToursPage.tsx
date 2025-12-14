"use client";

import { AboutTeaser, Container, Hero, SafetyNotice } from "@/ui";
import {
  dataHero,
  dataSafetyNoticeRegistration,
  dataSafetyNoticeTimes,
  dataSafetyNoticeСloth,
  dataTextAboutTeaser,
} from "./dataTours";

import dataPrice from "./dataPriceApi";
import MyServicesList from "../../MyServicesList";
import { FeedbackForm } from "../../../../features/callBackRequest/ui/CallBackRequestModal";

const ToursPage = () => {
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
          items={dataPrice}
          mediaPosition="left"
          columns={2}
          gallery
        />

        <FeedbackForm triggerLabel="Заказать обратный звонок" />
      </Container>
    </div>
  );
};

export default ToursPage;
