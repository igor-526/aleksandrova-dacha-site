import { HeaderProps } from "@/ui";
import { FeedbackForm } from "../Services/FeedbackForm";
import { getSetting } from "../site_settings";

export const dataHeader: HeaderProps = {
  links: [
    {
      label: "Услуги",
      children: [
        {
          label: "Верховая езда",
          children: [
            {
              label: "Конные прогулки и катания",
              href: "/services/rides/tours",
            },
            {
              label: "Индивидуальное обучение",
              href: "/services/rides/individual",
            },
            { label: "Групповое обучение", href: "/services/rides/group" },
          ],
        },
        {
          label: "Аренда",
          children: [
            {
              label: "Экипажи, кареты, сани",
              href: "/services/rental/carriages",
            },
            { label: "Животные для катаний", href: "/services/rental/animals" },
            {
              label: "Животные для фотосессий",
              href: "/services/rental/photosessions",
            },
            {
              label: "Спортивные лошади и пони",
              href: "/services/rental/equestrian-sport",
            },
          ],
        },
        { label: "Мини-ферма", href: "/services/farm" },
      ],
    },
    {
      label: "Разведение",
      children: [
        { label: "Продажа лошадей и пони", href: "/breeding/sale" },
        { label: "Жеребцы на случку", href: "/breeding/stallions" },
        { label: "Коне-ферма", href: "/breeding/horses" },
        { label: "Пони-ферма", href: "/breeding/ponies" },
      ],
    },
    {
      label: "Персонал",
      href: "/team",
    },
    { label: "О нас", href: "/about" },
    { label: "Контакты", href: "/contacts" },
  ],
  mobileSocials: [
    { type: "vk", href: getSetting("vk"), label: "VK" },
    {
      type: "mail",
      href: `mailto:${getSetting("mail")}`,
      label: "Email",
    },
  ],
  phone: getSetting("tel"),
  brandName: "",
  brandLogoSrc: "/images/Logo.jpg",
  brandHref: "/",
  sticky: true,
  transparent: false,
  className: "",
  children: <FeedbackForm triggerLabel="Записаться" />,
};
