import { Footer } from "@/ui";
import { FeedbackForm } from "../Services/FeedbackForm";
import { dataHeader } from "../HeaderPage/dataHeader";
import { getSetting } from "../site_settings";

const normalizeHours = (start?: string, end?: string) =>
  start && end ? `${start} – ${end}` : undefined;

export default function FooterPage() {
  const weekdayHours = normalizeHours(
    getSetting("start_weekday"),
    getSetting("end_weekday")
  );
  const weekendHours = normalizeHours(
    getSetting("start_weekend"),
    getSetting("end_weekend")
  );
  const phone = getSetting("tel");
  const vk = getSetting("vk");
  const mail = getSetting("mail");
  const socials = [
    vk && { label: "VK", href: vk, type: "vk" as const },
    mail && { label: "Email", href: `mailto:${mail}`, type: "mail" as const },
  ].filter((item): item is { label: string; href: string; type: "vk" | "mail" } => Boolean(item));

  return (
    <Footer
      brandName={getSetting("site_name")}
      brandLogoSrc="/images/Logo.jpg"
      brandHref="/"
      address={getSetting("address")}
      phones={phone ? [phone] : []}
      socials={socials}
      schedule={{
        weekday: { label: "По будням", hours: weekdayHours },
        weekend: { label: "Выходные", hours: weekendHours },
      }}
      navLinks={dataHeader.links}
      feedbackSlot={<FeedbackForm triggerLabel="Заказать обратный звонок" />}
    />
  );
}
