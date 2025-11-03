import { Hero } from "@/ui";
import {
  QuickServices,
  type QuickServicesProps,
} from "../../ui/quick-services/QuickServices";
import Icon from "@/components/Icon";

const sampleItems: QuickServicesProps["items"] = [
  {
    id: "riding",
    title: "Верховая езда",
    description: "Для любого уровня подготовки",
    href: "/horse_riding",
    icon: <Icon pathImage="/icons/ridding.ico" />,
  },
  {
    id: "zoo",
    title: "Мини-зоопарк",
    description: "Верблюж, козочки, овечки и другие дружелюбные животные.",
    href: "/zoo",
    icon: <Icon pathImage="/icons/farm.ico" />,
  },
  {
    id: "rent",
    title: "Аренда экипажей и животных",
    description:
      "На массовые мероприятия, праздники, свадьбу или для фотосессии",
    href: "/rent",
    icon: <Icon pathImage="/icons/rent.ico" />,
  },
  {
    id: "sale",
    title: "Разведение и продажа",
    description: "Продажа лошадей и пони. ",
    href: "/sale",
    icon: <Icon pathImage="/icons/sale.ico" />,
  },
];

const Home = () => {
  return (
    <div>
      <Hero
        title={"Александрова Дача"}
        backgroundImage={{ src: "/images/home-img.jpg", alt: "desc" }}
        subtitle={"конно-спортивный клуб"}
        description={
          "Санкт-Петербург, г. Павловск, ул. Матросова, 1А. Часы работы: с 9:00 до 19:30"
        }
        className="z-0"
      />
      <QuickServices items={sampleItems} className="z-1" />
    </div>
  );
};

export default Home;
