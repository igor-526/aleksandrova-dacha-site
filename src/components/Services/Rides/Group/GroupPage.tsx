import { AboutTeaser, Container, GallerySection, Hero } from "@/ui";
import { dataTextAboutTeaser, imagesGroup } from "./dataGroup";
import dataPrice from "./dataPriceApi";
import { ServicesList } from "../../ServicesList";

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
      </Container>
    </div>
  );
};

export default GroupPage;
