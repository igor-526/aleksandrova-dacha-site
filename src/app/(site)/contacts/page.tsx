import { Metadata } from "next";

import { ContactBlock, Hero, Container, HeroProps } from "@/ui";
import { getSiteSettings } from "@/features/siteSettings";
import { buildPageMetadata } from "@/lib/metadata";

const dataHero: HeroProps = {
  title: "Александрова Дача",
  backgroundImage: { src: "/images/home-img1.jpg", alt: "desc" },
  subtitle: "конно-спортивный клуб",
};

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Контакты",
    "Адрес, телефон, соцсети и схема проезда в клуб, а также часы работы."
  );

export default async function Contacts() {
  const settings = await getSiteSettings();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero {...dataHero} />

        <ContactBlock
          address={settings.address ?? ""}
          phones={settings.phone ? [settings.phone] : []}
          hours={[
            settings.weekdayHours && { label: "Будни", value: settings.weekdayHours },
            settings.weekendHours && { label: "Выходные", value: settings.weekendHours },
          ].filter((item): item is { label: string; value: string } =>
            Boolean(item)
          )}
          socials={settings.socials}
          map={settings.addressLatitude && settings.addressLongitude ? {
            lat: settings.addressLatitude,
            lng: settings.addressLongitude,
            zoom: 13,
            provider: "yandex",
            markerLabel: settings.siteName,
          } : undefined}
        />
      </Container>
    </div>
  );
}
