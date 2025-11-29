import { AboutTeaser, Container, Hero } from "@/ui";

import { ServicesList } from "../ServicesList";
import { dataTextAboutTeaser, services } from "./dataPrice";
import { dataTheory } from "./dataIndividualPage";

const IndividualPage = () => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero
          title={"Обучение верховой езде"}
          subtitle="Александрова дача"
          description="(индивидуальные занятия и занятия в небольших группах)"
          backgroundImage={{
            src: "/images/services/riding/riding.jpg",
            alt: "desc",
          }}
        />
        <AboutTeaser {...dataTextAboutTeaser}></AboutTeaser>
        <ServicesList items={services} />
        <div className="mb-25">
          <h3>{dataTheory.title}</h3>
          {dataTheory.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mt2 text-base leading-relaxed text-[#4b4d2f]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default IndividualPage;
