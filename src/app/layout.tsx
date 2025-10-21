import type { Metadata } from "next";
import "./globals.css";
import HeaderPage from "@/components/HeaderPage";

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
    <html lang="en">
      <body>
        <div className="p-0 m-auto">
          <header className="w-7xl m-auto mb-0 flex flex-col items-center justify-center">
            <HeaderPage />
          </header>
          <main className="w-7xl m-auto flex flex-col items-center justify-center">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
