import { AboutTeaser, Container, Hero } from "@/ui";
import { dataTextAboutTeaser, services } from "./dataPrice";
import { ServicesList } from "../ServicesList";

const ToursPage = () => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero
          title={"Конные прогулки"}
          subtitle="Александрова дача"
          backgroundImage={{
            src: "/images/services/rides/tours/tour.jpg",
            alt: "desc",
          }}
        />
        <AboutTeaser {...dataTextAboutTeaser}></AboutTeaser>
        <ServicesList items={services} />
      </Container>
    </div>
  );
};

export default ToursPage;
