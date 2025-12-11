import { AboutTeaser, Container, Hero } from "@/ui";
import { dataTextAboutTeaser } from "./dataPrice";

import dataPrice from "./dataPriceApi";
import MyServicesList from "../../MyServicesList";

const CarriagesPage = () => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero
          title={"Аренда экипажей"}
          subtitle="Александрова дача"
          backgroundImage={{
            src: "/images/services/rental/carriages/carriages.jpg",
            alt: "desc",
          }}
        />
        <AboutTeaser {...dataTextAboutTeaser}></AboutTeaser>
        <MyServicesList
          items={dataPrice}
          mediaPosition="left"
          gallery={true}
          columns={2}
        />
      </Container>
    </div>
  );
};

export default CarriagesPage;
