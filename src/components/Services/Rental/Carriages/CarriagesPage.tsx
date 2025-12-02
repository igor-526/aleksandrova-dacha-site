import { AboutTeaser, Container, Hero } from "@/ui";
import { dataTextAboutTeaser, services } from "./dataPrice";
import { ServicesList } from "../../ServicesList";

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
        <ServicesList
          items={services}
          mediaPosition="left"
          classNameMedia="relative w-1/3 h-full overflow-hidden rounded-2xl"
          columns={2}
        />
      </Container>
    </div>
  );
};

export default CarriagesPage;
