import { ServicesList } from "@/components/Services/Riding/ServicesList";
import { AboutTeaser, Container, Hero } from "@/ui";
import { dataTextAboutTeaser, services } from "./dataRiding";

const RidingPage = () => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero
          title={"Конные прогулки"}
          subtitle="Александрова дача"
          backgroundImage={{
            src: "/images/services/riding/riding.jpg",
            alt: "desc",
          }}
        />
        <AboutTeaser {...dataTextAboutTeaser}></AboutTeaser>
        <ServicesList items={services} />
      </Container>
    </div>
  );
};

export default RidingPage;
