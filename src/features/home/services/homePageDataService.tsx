import {
  HeroProps,
  MissionProps,
  QuickServicesProps,
  ImageBlock,
  ContactsBlockProps,
} from "@/ui";
import { getSiteSettings } from "@/features/siteSettings";

export const getHomePageData = async () => {
  const settings = await getSiteSettings();

  const dataHero: HeroProps = {
    title: "Александрова Дача",
    backgroundImage: { src: "/images/home-img1.jpg", alt: "desc" },
    subtitle: "конно-спортивный клуб",
    description:
      "Проведите незабываемый день на нашей конюшне: познакомьтесь с животными, прокатитесь верхом и насладитесь природой.",
  };

  const itemsServices: QuickServicesProps["items"] = [
    {
      id: "riding",
      title: "Верховая езда для взрослых и детей",
      description:
        "Для любого возраста и уровня подготовки. Прогулки, обучение, спорт.",
      href: "/services/rides",
      icon: <ImageBlock pathImage="/icons/ridding.ico" alt="Верховая езда" />,
    },
    {
      id: "farm",
      title: "Контактная мини-ферма",
      description:
        "Верблюд, северные олени, козочки, овечки и другие дружелюбные животные.",
      href: "/services/farm",
      icon: (
        <ImageBlock pathImage="/icons/farm.ico" alt="Контактная мини-ферма" />
      ),
    },
    {
      id: "rental",
      title: "Аренда экипажей и животных",
      description:
        "На массовые мероприятия, праздники, свадьбу или для фотосессии.",
      href: "/services/rental",
      icon: (
        <ImageBlock
          pathImage="/icons/rent.ico"
          alt="Аренда экипажей и животных"
        />
      ),
    },
    {
      id: "breeding",
      title: "Разведение и продажа",
      description:
        "Племенное разведение. Продажа лошадей и пони. Жеребцы на случку. ",
      href: "/breeding",
      icon: (
        <ImageBlock pathImage="/icons/sale.ico" alt="Разведение и продажа" />
      ),
    },
  ];

  //  const news: AboutTeaserProps[] = [
  //    {
  //      title: "Зимние услуги",
  //      text: [
  //        "❄ Аренда животных на Новогодние мероприятия",

  //      gallerySection: {
  //        items: [
  //          { src: "/images/gallery/new-year1.jpg", alt: "Gallery Image 1" },
  //          { src: "/images/gallery/new-year2.jpg", alt: "Gallery Image 2" },
  //          { src: "/images/gallery/new-year3.jpg", alt: "Gallery Image 3" },
  //        ],
  //        position: "start",
  //      },
  //    },
  //  ];


  const dataMission: MissionProps = {
    title: "Наши преимущества",
    points: [
      {
        heading: "Лошади под любого всадника",
        text: "В хозяйстве содержатся более 150 лошадей и пони. Поможем подобрать для верховой езды именно Вашу лошадь (пони) - нужного роста, опыта и темперамента.",
      },
      {
        heading: "Работаем в любую погоду",
        text: "На территории клуба имеются открытый и крытый манежи, а также выход в парк. Катания и занятия проводятся ежедневно, без выходных, в любую погоду.",
      },
      {
        heading: "Комфортные условия",
        text: "Для наших гостей имеется бесплатная парковка на территории клуба, теплая раздевалка, шкафчики и уютное кафе.",
      },
    ],
    colorVariant: "f0e7cf",
  };

  const dataContactsBlock: ContactsBlockProps = {
    address: settings.address ?? "",
    phones: settings.phone ? [settings.phone] : [],
    hours: [
      settings.weekdayHours && { label: "Будни", value: settings.weekdayHours },
      settings.weekendHours && {
        label: "Выходные",
        value: settings.weekendHours,
      },
    ].filter((item): item is { label: string; value: string } => Boolean(item)),
    socials: settings.socials,
    map:
      settings.addressLatitude && settings.addressLongitude
        ? {
          lat: settings.addressLatitude,
          lng: settings.addressLongitude,
          zoom: 13,
          provider: "yandex",
          markerLabel: settings.siteName,
        }
        : undefined,
  };

  return {
    getApiSetting: settings.getSetting,
    dataHero,
    itemsServices,
    dataMission,
    dataContactsBlock,
  };
};
