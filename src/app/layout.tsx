import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/ui";
import { dataHeader } from "@/components/dataHeader";
import { CallBackRequestModal } from "@/features/callBackRequest/ui/CallBackRequestModal";
import { getSiteSettings } from "@/features/siteSettings";

export const metadata: Metadata = {
  title: "Александрова дача",
  description: "Конно-спортивный клуб",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  const mobileSocials = [
    settings.vk && { type: "vk" as const, href: settings.vk, label: "VK" },
    settings.mail && {
      type: "mail" as const,
      href: `mailto:${settings.mail}`,
      label: "Email",
    },
  ].filter((item): item is { type: "vk" | "mail"; href: string; label: string } => Boolean(item));

  return (
    <html lang="ru">
      <body className="p-0">
        <Header
          {...dataHeader}
          mobileSocials={mobileSocials}
          phone={settings.phone}
          brandName=""
        />
        {children}
        <Footer
          brandName={settings.siteName}
          brandLogoSrc="/images/Logo.jpg"
          brandHref="/"
          address={settings.address}
          phones={settings.phone ? [settings.phone] : []}
          socials={settings.socials}
          schedule={{
            weekday: { label: "По будням", hours: settings.weekdayHours?.replace(" - ", " – ") },
            weekend: { label: "Выходные", hours: settings.weekendHours?.replace(" - ", " – ") },
          }}
          navLinks={dataHeader.links}
          feedbackSlot={<CallBackRequestModal triggerLabel="Связаться" />}
        />
      </body>
    </html>
  );
}
