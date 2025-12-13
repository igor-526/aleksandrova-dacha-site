import type { Metadata } from "next";
import "./globals.css";
import HeaderPage from "@/components/HeaderPage/HeaderPage";
import FooterPage from "@/components/FooterPage/FooterPage";

export const metadata: Metadata = {
  title: "Александрова дача",
  description: "Конно-спортивный клуб",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="p-0">
        <HeaderPage />
        {children}
        <FooterPage />
      </body>
    </html>
  );
}
