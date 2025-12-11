import {
  ContactFarm,
  Hero,
  Container,
  Button,
  GallerySection,
  Mission,
} from "@/ui";
import { QuickServices } from "../../ui/quick-services/QuickServices";
import {
  dataGallerySection,
  dataHero,
  dataMission,
  dataText,
  itemsServices,
} from "./dataHomePage";

const HomePage = () => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero {...dataHero} />
        <QuickServices items={itemsServices} className="mb-25" />

        <GallerySection {...dataGallerySection} />

        <div className="mb-25">
          {dataText.map((paragraph, index) => (
            <p
              key={index}
              className="mt-4 text-base leading-relaxed text-[#4b4d2f]"
            >
              {paragraph}
            </p>
          ))}
          <Button variant="primary" className="mt-6" href={"/"}>
            Подробнее...
          </Button>
        </div>

        <Mission {...dataMission} className="mb-25" />

        <ContactFarm
          address="Санкт-Петербург, пос. Александрова Дача"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          map={{
            lat: 51.727,
            lng: 30.411,
            zoom: 13,
            provider: "yandex",
            markerLabel: "КСК Александрова дача",
          }}
        />
      </Container>
    </div>
  );
};

export default HomePage;
