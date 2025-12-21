import { getSiteSettings } from "@/features/siteSettings";
import { ContactsBlockProps, HeroProps } from "@/ui";

export const getContactsPageData = async () => {
  const settings = await getSiteSettings();

  const dataHero: HeroProps = {
    title: "Александрова Дача",
    backgroundImage: { src: "/images/home-img1.jpg", alt: "desc" },
    subtitle: "конно-спортивный клуб",
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
    dataHero,
    dataContactsBlock,
  };
};
