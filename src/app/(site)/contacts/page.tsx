import ContactsPage from "@/components/ContactsPage/ContactsPage";
import { getSiteSettings } from "@/features/siteSettings";

export default async function Contacts() {
  const settings = await getSiteSettings();
  return <ContactsPage settings={settings} />;
}
