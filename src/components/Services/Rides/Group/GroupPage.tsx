import { AboutTeaser, Container, GallerySection, Hero } from "@/ui";
import { dataTextAboutTeaser, imagesGroup } from "./dataGroup";
import dataPrice from "./dataPriceApi";
import MyServicesList from "../../MyServicesList";

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
        <MyServicesList
          items={dataPrice}
          mediaPosition="left"
          columns={2}
          gallery
        />
      </Container>
    </div>
  );
};

export default GroupPage;
