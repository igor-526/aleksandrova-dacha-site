import type { Metadata } from "next";
import "./globals.css";

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
      <body className="max-w-7xl m-auto p-0">{children}</body>
    </html>
  );
}
