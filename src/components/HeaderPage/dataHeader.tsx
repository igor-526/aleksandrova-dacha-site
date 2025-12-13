import { HeaderProps } from "@/ui";
import { FeedbackForm } from "../Services/FeedbackForm";

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
    { type: "whatsapp", href: "https://wa.me/79811555444", label: "WhatsApp" },
    {
      type: "telegram",
      href: "https://t.me/aleksandrova_dacha",
      label: "Telegram",
    },
    { type: "vk", href: "https://vk.com/aleksandrova_dacha", label: "VK" },
    {
      type: "mail",
      href: "mailto:hello@aleksandrova-dacha.ru",
      label: "Email",
    },
  ],
  brandName: "",
  brandLogoSrc: "/images/Logo.jpg",
  brandHref: "/",
  phone: "+7 (123) 456-78-90",
  sticky: true,
  transparent: false,
  className: "",
  children: <FeedbackForm triggerLabel="Записаться" />,
};
