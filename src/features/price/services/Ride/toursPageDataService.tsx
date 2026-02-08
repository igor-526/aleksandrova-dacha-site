import {
  BreadcrumbsProps,
  HeroProps,
  MissionProps,
  PreparationTipsProps,
} from "@/ui";
import { PriceOutDto } from "@/types/prices";
import { fetchPriceGroup, fetchPriceList } from "../priceService";
import { ServicesListProps } from "../../ui/ServicesList";
import { ServicesGroupPageProps } from "../../ui/ServicesGroupPage";
import { PriceGroupOutDto } from "@/types";

export const getToursPageData = async (): Promise<ServicesGroupPageProps> => {
  const getGroup = async (): Promise<PriceGroupOutDto> => {
    const result = await fetchPriceGroup("95f58d8a-ca02-4008-a732-c2e4760a8cf5")
    return result.status === "ok" && result.data ? result.data : null;
  };

  const getPrices = async (): Promise<PriceOutDto[]> => {
    const result = await fetchPriceList("Конные прогулки и катания");
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const group = await getGroup();
  const prices = await getPrices();
  const dataHero: HeroProps = {
    title: group?.name || "",
    subtitle: "Александрова дача",
    description: group?.description || "",
    backgroundImage: {
      src: "/images/services/rides/tour.jpg",
      alt: "desc",
    },
  };

  const dataBreadcrumbs: BreadcrumbsProps = {
    items: [
      { name: "Услуги", href: "/services" },
      { name: "Верховая езда", href: "/services/rides" },
      { name: "Конные прогулки" },
    ],
    className: "-mt-9 px-6",
  };

  const dataArticle = null

  const dataMission: MissionProps = {
    title: "Конные прогулки для всех уровней подготовки",
    points: [
      {
        heading: "Для детей и новичков",
        text: "Если Вы никогда не сидели в седле, но у Вас есть огромное желание прокатиться верхом, инструктор составит Вам компанию, ведя лошадь в поводу. Верховые прогулки проводятся в зависимости от погодных условий на открытом или закрытом манежах. Также Вы сможете прогуляться верхом по территории клуба.",
      },
      {
        heading: "Для начинающих всадников",
        text: "На разовом занятии в прогулкой опытный инструктор объяснит все секреты общения с лошадьми, научат держаться в седле и управлять лошадью на шагу и рыси. В нашем пони-клубе возможно обучение детей с 5 лет.",
      },
      {
        heading: "Для опытных всадников",
        text: "Более опытные всадники смогут получить массу удовольствия от поездок по пригородам Санкт-Петербурга - поля, лесные дорожки, водные препятствия и незабываемые впечатления!",
      },
    ],
  };
  const dataServicesList: ServicesListProps = {
    heading: "Услуги и цены",
    content: (
      <p>
        <b> Указанные цены действуют только по предварительной записи. </b>
        Запись возможна не позднее, чем за день до приезда. Если вы приехали без
        записи, катание на лошади (пони) возможно только при наличии свободного
        тренера (инструктора),
        <b> стоимость услуги увеличится на 200 рублей.</b>
      </p>
    ),
    items: [],
    mediaPosition: "top",
    gallery: true,
  };

  const dataGallerySection = null;

  const dataPreparationTips: PreparationTipsProps = {
    title: "Как подготовиться",
    tips: [
      {
        heading: "Удобная одежда:",
        text: "Верх - по погоде, без скользких тканей. Штаны не стесняющие движения. Ботинки или сапоги с маленьким каблуком.",
      },
      {
        heading: "Время приезда:",
        text: "Приходите за 15 минут, чтобы подобрать шлем, переодеться и пройти инструктаж, а также познакомиться с тренером и лошадью (пони).",
      },
      {
        heading: "Что взять с собой:",
        text: "Возьмите угощение для лошади (пони). Они с удовольствием полакомятся морковкой или яблоком. Не забудьте взять хорошее настроение!",
      },
      {
        heading: "В клубе имеется:",
        text: "Раздевалка со шкафчиками, туалет, комната отдыха, парковка для машин на территории клуба, конный магазин, уютное кафе. ",
      },
    ],
    columns: 2,
  };

  const additionalSection = null;

  return {
    prices,
    dataHero,
    dataBreadcrumbs,
    dataArticle,
    dataMission,
    dataServicesList,
    dataGallerySection,
    dataPreparationTips,
    additionalSection,
  };
};
