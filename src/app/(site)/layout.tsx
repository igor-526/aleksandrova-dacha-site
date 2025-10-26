import HeaderPage from "@/components/HeaderPage";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-0 m-auto">
      <header className="w-7xl m-auto mb-0 flex flex-col items-center justify-center">
        <HeaderPage />
      </header>
      <main className="w-7xl m-auto flex flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
}
