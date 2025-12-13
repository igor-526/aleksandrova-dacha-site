import { ContactFarm, Hero, Container, Mission, AboutTeaser } from "@/ui";
import { QuickServices } from "../../ui/quick-services/QuickServices";
import { dataHero, dataMission, itemsServices, news } from "./dataHomePage";
import { FeedbackForm } from "../Services/FeedbackForm";

const HomePage = () => {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero {...dataHero} />
        <QuickServices items={itemsServices} className="mb-10" />

        {news &&
          news.map((item, index) => (
            <AboutTeaser key={index} {...item}>
              <FeedbackForm triggerLabel="Узнать подробности" />
            </AboutTeaser>
          ))}

        <Mission {...dataMission} className="mb-10" />

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
