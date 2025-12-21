import {
  ContactsBlock,
  ContactsBlockProps,
  Container,
  Hero,
  HeroProps,
} from "@/ui";

export type ContactsPageProps = {
  dataHero: HeroProps;
  dataContactsBlock: ContactsBlockProps;
};
export default function ContactsPage({
  dataHero,
  dataContactsBlock,
}: ContactsPageProps) {
  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        {dataHero && <Hero {...dataHero} />}
        {dataContactsBlock && <ContactsBlock {...dataContactsBlock} />}
      </Container>
    </div>
  );
}
