import {
  AboutTeaser,
  Article,
  Container,
  GallerySection,
  Hero,
  Highlights,
  SafetyNotice,
} from "@/ui";
import { dataTextAboutTeaser, imagesGroup } from "./dataGroup";
import dataPrice from "./dataPriceApi";
import { ServicesList } from "../../ServicesList";
import { ComponentsGrid } from "../../ComponentList";

const GroupPage = () => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero
          title={"Групповые занятия"}
          subtitle="Александрова дача"
          backgroundImage={{
            src: "/images/services/rides/group/group.jpg",
            alt: "desc",
          }}
        />
        <AboutTeaser {...dataTextAboutTeaser}></AboutTeaser>
        <GallerySection items={imagesGroup} columns={3} />
        <ServicesList items={dataPrice} columns={2} />
        <Article title="Article" content={<div>Контент</div>} />

        <Highlights items={[{ title: "Highlight", description: "string" }]} />
        <ComponentsGrid components={[]} />
        <SafetyNotice
          title="SafetyNotice"
          items={["jhgjhgjh", "jhgjhgjhg", "khgjhghjgjh"]}
        />
        <SafetyNotice
          title="SafetyNotice"
          items={["jhgjhgjh", "jhgjhgjhg", "khgjhghjgjh"]}
        />
        <SafetyNotice
          title="SafetyNotice"
          items={["jhgjhgjh", "jhgjhgjhg", "khgjhghjgjh"]}
        />
      </Container>
    </div>
  );
};

export default GroupPage;
