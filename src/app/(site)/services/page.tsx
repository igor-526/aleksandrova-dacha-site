import { Metadata } from "next";
import { Container } from "@/ui";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { RentalPage } from "@/features/price/ui/RentalPage";
import { getRentalPageData } from "@/features/price/services/Rental/rentalPageDataService";
import { getRidePageData } from "@/features/price/services/Ride/ridePageDataService";
import { RidePage } from "@/features/price/ui/RidePage";
import { getServicesPageData } from "@/features/price/services/servicesPageDataService";
import { ServicesGroupPage } from "@/features/price/ui/ServicesGroupPage";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "РЈСЃР»СѓРіРё РІ РєР»СѓР±Рµ РђР»РµРєСЃР°РЅРґСЂРѕРІР° РґР°С‡Р°",
    "РљРѕРЅРЅС‹Рµ РїСЂРѕРіСѓР»РєРё Рё РѕР±СѓС‡РµРЅРёРµ РІРµСЂС…РѕРІРѕР№ РµР·РґРµ, Р°СЂРµРЅРґР° Р»РѕС€Р°РґРµР№ Рё РїРѕРЅРё, Р°СЂРµРЅРґР° СЌРєРёРїР°Р¶РµР№ Рё Р¶РёРІРѕС‚РЅС‹С…, СЃРїРѕСЂС‚РёРІРЅР°СЏ Р°СЂРµРЅРґР°, РїРѕСЃС‚РѕР№, С„РѕС‚РѕСЃРµСЃСЃРёРё. РљРѕРЅС‚Р°РєС‚РЅР°СЏ РјРёРЅРё-С„РµСЂРјР°."
  );

export default async function Services() {
  const { dataHero, dataBreadcrumbs } = await getServicesPageData();
  const { dataArticleRide, dataQuickServices } = await getRidePageData();
  const { dataCards, dataVisiStableCTA, dataArticleRental } =
    await getRentalPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container>
        <ServicesGroupPage
          dataHero={dataHero}
          dataBreadcrumbs={dataBreadcrumbs}
        />
        <h2 className="mb-6 px-8">Р’РµСЂС…РѕРІР°СЏ РµР·РґР°</h2>
        <RidePage
          dataArticleRide={dataArticleRide}
          dataQuickServices={dataQuickServices}
        />
        <h2 className="mb-6 px-8">РђСЂРµРЅРґР° СЌРєРёРїР°Р¶РµР№ Рё Р¶РёРІРѕС‚РЅС‹С…</h2>
        <RentalPage
          dataCards={dataCards}
          dataVisiStableCTA={dataVisiStableCTA}
          dataArticleRental={dataArticleRental}
        />
      </Container>
    </div>
  );
}
