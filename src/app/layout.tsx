import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/ui";
import { dataHeader } from "@/features/header/data/dataHeader";
import { CallBackRequestModal } from "@/features/callBackRequest/ui/CallBackRequestModal";
import { getSiteSettings } from "@/features/siteSettings";

export const metadata: Metadata = {
  title: "Александрова дача",
  description: "Конно-спортивный клуб",
  other: {
    "yandex-verification": "7d127ba5492caaec",
  },
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
        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105850153', 'ym');

              ym(105850153, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105850153"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
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
