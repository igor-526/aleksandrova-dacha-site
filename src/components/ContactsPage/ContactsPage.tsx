import { ContactFarm, Hero, Container, HeroProps } from "@/ui";
import { getSetting } from "../site_settings";

const dataHero: HeroProps = {
  title: "Александрова Дача",
  backgroundImage: { src: "/images/home-img1.jpg", alt: "desc" },
  subtitle: "конно-спортивный клуб",
};

const ContactsPage = () => {
  const address = getSetting("address");
  const phone = getSetting("tel");
  const siteName = getSetting("site_name");
  const weekdayHours =
    getSetting("start_weekday") && getSetting("end_weekday")
      ? `${getSetting("start_weekday")} - ${getSetting("end_weekday")}`
      : undefined;
  const weekendHours =
    getSetting("start_weekend") && getSetting("end_weekend")
      ? `${getSetting("start_weekend")} - ${getSetting("end_weekend")}`
      : undefined;
  const vk = getSetting("vk");
  const mail = getSetting("mail");
  const socials = [
    vk && { label: "VK", href: vk, type: "vk" as const },
    mail && { label: "Email", href: `mailto:${mail}`, type: "mail" as const },
  ].filter(
    (item): item is { label: string; href: string; type: "vk" | "mail" } =>
      Boolean(item)
  );

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero {...dataHero} />

        <ContactFarm
          address={address}
          phones={phone ? [phone] : []}
          hours={[
            weekdayHours && { label: "Будни", value: weekdayHours },
            weekendHours && { label: "Выходные", value: weekendHours },
          ].filter((item): item is { label: string; value: string } =>
            Boolean(item)
          )}
          socials={socials}
          map={{
            lat: 59.676168,
            lng: 30.424075,
            zoom: 13,
            provider: "yandex",
            markerLabel: siteName,
          }}
        />
      </Container>
    </div>
  );
};

export default ContactsPage;
