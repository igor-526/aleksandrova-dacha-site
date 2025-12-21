import { Metadata } from "next";
import { buildPageMetadata } from "@/features/metadata/metadata";
import { getContactsPageData } from "@/features/contacts/data/contactsPageDataService";
import ContactsPage from "@/features/contacts/ui/ContactsPage";

export const generateMetadata = async (): Promise<Metadata> =>
  buildPageMetadata(
    "Контакты",
    "Адрес, телефон, соцсети и схема проезда в клуб, а также часы работы."
  );

export default async function Contacts() {
  const { dataHero, dataContactsBlock } = await getContactsPageData();

  return (
    <ContactsPage dataHero={dataHero} dataContactsBlock={dataContactsBlock} />
  );
}
