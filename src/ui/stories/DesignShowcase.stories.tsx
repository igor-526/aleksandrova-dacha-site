import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Container } from "../foundations/Container";
import { Hero } from "../hero/Hero";
import { QuickServices } from "../quick-services/QuickServices";
import { Highlights } from "../sections/Highlights";
import { PopularOffers } from "../sections/PopularOffers";
import { Testimonials } from "../sections/Testimonials";
import { AboutTeaser } from "../sections/AboutTeaser";
import { ContactFarm } from "../sections/ContactFarm";
import { BookingSection } from "../sections/BookingSection";
import { Footer } from "../navigation/Footer";
import { Button } from "../button/Button";

const meta = {
  tags: ["autodocs"],
  title: "UI/Showcase/Landing",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const Landing: Story = {
  render: () => (
    <div className="space-y-20 bg-[#f6efe0] pb-20">
      <header>
        <Container className="py-6">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-[#8d784f]">
            <span>РђР»РµРєСЃР°РЅРґСЂРѕРІР° Р”Р°С‡Р°</span>
            <span>+7 812 345-67-89</span>
          </div>
        </Container>
      </header>
      <Container>
        <Hero
          title="РљРѕРЅРЅС‹Рµ РїСЂРѕРіСѓР»РєРё Рё Р·РѕРѕРїР°СЂРє"
          subtitle="РђР»РµРєСЃР°РЅРґСЂРѕРІР° РґР°С‡Р°"
          description="РџСЂРѕРІРµРґРёС‚Рµ РЅРµР·Р°Р±С‹РІР°РµРјС‹Р№ РґРµРЅСЊ РЅР° РЅР°С€РµР№ РєРѕРЅСЋС€РЅРµ: РїСЂРѕРєР°С‚РёС‚РµСЃСЊ РІРµСЂС…РѕРј РїРѕ Р¶РёРІРѕРїРёСЃРЅС‹Рј С‚СЂРѕРїР°Рј, РїРѕР·РЅР°РєРѕРјСЊС‚РµСЃСЊ СЃ РїРѕРЅРё Рё РґСЂСѓРіРёРјРё РїРёС‚РѕРјС†Р°РјРё, РЅР°СЃР»Р°РґРёС‚РµСЃСЊ СЃРІРµР¶РёРј РІРѕР·РґСѓС…РѕРј."
          backgroundImage={{
            src: "/images/home-img.jpg",
            alt: "Р›РѕС€Р°РґСЊ РЅР° РїРѕР»Рµ",
          }}
          cta={<Button>Р—Р°РїРёСЃР°С‚СЊСЃСЏ РЅР° РїСЂРѕРіСѓР»РєСѓ</Button>}
        />
      </Container>
      <Container>
        <QuickServices
          items={[
            {
              id: "riding",
              title: "РљРѕРЅРЅС‹Рµ РїСЂРѕРіСѓР»РєРё",
              description:
                "РњР°СЂС€СЂСѓС‚С‹ РґР»СЏ РЅРѕРІРёС‡РєРѕРІ Рё РѕРїС‹С‚РЅС‹С… РІСЃР°РґРЅРёРєРѕРІ СЃ РёРЅСЃС‚СЂСѓРєС‚РѕСЂР°РјРё.",
              href: "/horse_riding",
            },
            {
              id: "zoo",
              title: "РњРёРЅРё-Р·РѕРѕРїР°СЂРє",
              description:
                "РџРѕРЅРё, РєРѕР·РѕС‡РєРё, РІРµСЂР±Р»СЋРґС‹ Рё РґСЂСѓРіРёРµ РґСЂСѓР¶РµР»СЋР±РЅС‹Рµ Р¶РёРІРѕС‚РЅС‹Рµ.",
              href: "/about/zoo",
            },
            {
              id: "ponies",
              title: "РџРѕРєСѓРїРєР° РїРѕРЅРё",
              description: "Р РµРґРєРёРµ РїРѕСЂРѕРґС‹ РїРѕРЅРё Рё Р»РѕС€Р°РґРµР№ РїРѕ РґРѕСЃС‚СѓРїРЅС‹Рј С†РµРЅР°Рј.",
              href: "/service/breeding",
            },
          ]}
        />
      </Container>
      <Container className="space-y-12 text-center">
        <section className="space-y-6">
          <h2 className="font-serif text-3xl text-[#2f3600]">Рћ РЅР°СЃ</h2>
          <p className="text-base text-[#4b4d2f]">
            РђР»РµРєСЃР°РЅРґСЂРѕРІР° Р”Р°С‡Р° вЂ” РѕРґРЅРѕ РёР· СЃР°РјС‹С… СѓСЋС‚РЅС‹С… РјРµСЃС‚ РІ Р›РµРЅРёРЅРіСЂР°РґСЃРєРѕР№
            РѕР±Р»Р°СЃС‚Рё. РњС‹ СЃРѕР±СЂР°Р»Рё Р»СѓС‡С€РёС… С‚СЂРµРЅРµСЂРѕРІ Рё СЃР°РјС‹С… РґСЂСѓР¶РµР»СЋР±РЅС‹С… Р¶РёРІРѕС‚РЅС‹С…,
            С‡С‚РѕР±С‹ РІС‹ РјРѕРіР»Рё РїСЂРѕРІРµСЃС‚Рё РІСЂРµРјСЏ СЃ РїРѕР»СЊР·РѕР№ Рё СѓРґРѕРІРѕР»СЊСЃС‚РІРёРµРј.
          </p>
        </section>
        <Highlights
          items={[
            {
              title: "150+ Р¶РёРІРѕС‚РЅС‹С…",
              description:
                "РњРёРЅРё-Р·РѕРѕРїР°СЂРє СЃ РїРѕРЅРё, РєРѕР·РѕС‡РєР°РјРё, Р»Р°РјР°РјРё Рё РґР°Р¶Рµ РІРµСЂР±Р»СЋРґР°РјРё.",
              icon: "leaf",
            },
            {
              title: "РћРїС‹С‚РЅС‹Рµ С‚СЂРµРЅРµСЂС‹",
              description:
                "РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Рµ Рё РіСЂСѓРїРїРѕРІС‹Рµ Р·Р°РЅСЏС‚РёСЏ РґР»СЏ РІСЃР°РґРЅРёРєРѕРІ Р»СЋР±РѕРіРѕ СѓСЂРѕРІРЅСЏ.",
              icon: "horse",
            },
            {
              title: "Р–РёРІРѕРїРёСЃРЅР°СЏ С‚РµСЂСЂРёС‚РѕСЂРёСЏ",
              description: "РњР°СЂС€СЂСѓС‚С‹ РїРѕ РїР°СЂРєР°Рј, РїРѕР»СЏРј Рё Р»РµСЃР°Рј Р¦Р°СЂСЃРєРѕРіРѕ РЎРµР»Р°.",
              icon: "location",
            },
          ]}
        />
      </Container>
      <Container>
        <PopularOffers
          offers={[
            {
              title: "РџСЂРѕРіСѓР»РєР° РІРµСЂС…РѕРј",
              price: "РѕС‚ 1 500 в‚Ѕ",
              description: "РРЅРґРёРІРёРґСѓР°Р»СЊРЅС‹Р№ РјР°СЂС€СЂСѓС‚ РЅР° Р»РѕС€Р°РґРё СЃ РёРЅСЃС‚СЂСѓРєС‚РѕСЂРѕРј.",
              features: [
                "60 РјРёРЅСѓС‚",
                "РњР°СЂС€СЂСѓС‚ РїРѕ РїР°СЂРєСѓ",
                "Р¤РѕС‚РѕСЃРµСЃСЃРёСЏ РІ РїРѕРґР°СЂРѕРє",
              ],
            },
            {
              title: "РџРѕСЃРµС‰РµРЅРёРµ РјРёРЅРё-Р·РѕРѕРїР°СЂРєР°",
              price: "РѕС‚ 800 в‚Ѕ",
              description: "Р—РЅР°РєРѕРјСЃС‚РІРѕ, РєРѕСЂРјР»РµРЅРёРµ Рё С„РѕС‚РѕСЃРµСЃСЃРёСЏ СЃ Р¶РёРІРѕС‚РЅС‹РјРё.",
              features: [
                "РЎРѕРїСЂРѕРІРѕР¶РґРµРЅРёРµ СЃРѕС‚СЂСѓРґРЅРёРєР°",
                "РљРѕСЂРј РґР»СЏ Р¶РёРІРѕС‚РЅС‹С…",
                "Р¤РѕС‚Рѕ Р·РѕРЅР°",
              ],
            },
            {
              title: "РЎРµРјРµР№РЅР°СЏ С„РѕС‚РѕСЃРµСЃСЃРёСЏ",
              price: "РѕС‚ 3 500 в‚Ѕ",
              description: "РџСЂРѕС„РµСЃСЃРёРѕРЅР°Р»СЊРЅР°СЏ СЃСЉРµРјРєР° СЃ Р»РѕС€Р°РґСЊРјРё Рё РїРѕРЅРё.",
              features: ["РџРѕРґР±РѕСЂ РѕР±СЂР°Р·Р°", "РћРїС‹С‚РЅС‹Р№ С„РѕС‚РѕРіСЂР°С„", "РћР±СЂР°Р±РѕС‚РєР° С„РѕС‚Рѕ"],
            },
          ]}
        />
      </Container>
      <Container>
        <Testimonials
          items={[
            {
              author: "РђРЅРЅР°",
              text: "РџРѕС‚СЂСЏСЃР°СЋС‰РµРµ РјРµСЃС‚Рѕ! РџСЂРёРµР·Р¶Р°Р»Рё РІСЃРµР№ СЃРµРјСЊРµР№: РґРµС‚Рё РІ РІРѕСЃС‚РѕСЂРіРµ РѕС‚ РїРѕРЅРё, Р° РјС‹ СЃ РјСѓР¶РµРј РІРїРµСЂРІС‹Рµ РїСЂРѕРєР°С‚РёР»РёСЃСЊ РІРµСЂС…РѕРј.",
              rating: 5,
              source: "Google",
            },
            {
              author: "РРіРѕСЂСЊ",
              text: "РЈСЋС‚РЅР°СЏ Р°С‚РјРѕСЃС„РµСЂР°, РІРЅРёРјР°С‚РµР»СЊРЅС‹Р№ РїРµСЂСЃРѕРЅР°Р» Рё РѕС‡РµРЅСЊ СѓС…РѕР¶РµРЅРЅС‹Рµ Р»РѕС€Р°РґРё. РћР±СЏР·Р°С‚РµР»СЊРЅРѕ РІРµСЂРЅРµРјСЃСЏ Р»РµС‚РѕРј!",
              rating: 5,
              source: "РЇРЅРґРµРєСЃ",
            },
          ]}
        />
      </Container>
      <Container>
        <BookingSection
          title="Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° РїСЂРѕРіСѓР»РєСѓ"
          description="Р’С‹Р±РµСЂРёС‚Рµ СѓРґРѕР±РЅРѕРµ РІСЂРµРјСЏ, Р° РјС‹ РїРѕРґРіРѕС‚РѕРІРёРј Р»РѕС€Р°РґРµР№ Рё РјР°СЂС€СЂСѓС‚. РњРµРЅРµРґР¶РµСЂ СЃРІСЏР¶РµС‚СЃСЏ СЃ РІР°РјРё РґР»СЏ РїРѕРґС‚РІРµСЂР¶РґРµРЅРёСЏ."
          image={{ src: "/images/services/1.jpg", alt: "РџСЂРѕРіСѓР»РєР° РІРµСЂС…РѕРј" }}
          formProps={{
            options: [
              { value: "riding", label: "РљРѕРЅРЅР°СЏ РїСЂРѕРіСѓР»РєР°" },
              { value: "zoo", label: "РњРёРЅРё-Р·РѕРѕРїР°СЂРє" },
              { value: "lesson", label: "РћР±СѓС‡РµРЅРёРµ РІРµСЂС…РѕРІРѕР№ РµР·РґРµ" },
            ],
          }}
        />
      </Container>
      <Container>
        <AboutTeaser
          title="РќРµР¶РЅР°СЏ Р·Р°Р±РѕС‚Р° Рё С‡РµСЃС‚РЅРѕСЃС‚СЊ"
          text="РњС‹ СЃРѕР·РґР°РµРј РєРѕРјС„РѕСЂС‚РЅС‹Рµ СѓСЃР»РѕРІРёСЏ Рё РєРѕРјР°РЅРґР° Р·Р°Р±РѕС‚РёС‚СЃСЏ Рѕ РєР°Р¶РґРѕРј РїРёС‚РѕРјС†Рµ, Р° С‚РµСЂСЂРёС‚РѕСЂРёРё РєР»СѓР±Р° РїРѕРґРґРµСЂР¶РёРІР°СЋС‚СЃСЏ С‡РёСЃС‚С‹РјРё Рё СѓС…РѕР¶РµРЅРЅС‹РјРё РєСЂСѓРіР»С‹Р№ РіРѕРґ."
        >
          <Button href="/about" variant="primary">
            РЈР·РЅР°С‚СЊ РїРѕРґСЂРѕР±РЅРµРµ
          </Button>
        </AboutTeaser>
      </Container>
      <Container>
        <ContactFarm
          address="РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі, РїРѕСЃС‘Р»РѕРє РђР»РµРєСЃР°РЅРґСЂРѕРІР° Р”Р°С‡Р°"
          phones={["+7 (812) 345-67-89", "+7 (981) 155-54-44"]}
          map={{
            lat: 59.727,
            lng: 30.411,
            zoom: 13,
            provider: "yandex",
            markerLabel: "РђР»РµРєСЃР°РЅРґСЂРѕРІР° Р”Р°С‡Р°",
          }}
        />
      </Container>
      <Footer
        address="РЎР°РЅРєС‚-РџРµС‚РµСЂР±СѓСЂРі, РђР»РµРєСЃР°РЅРґСЂРѕРІР° Р”Р°С‡Р°"
        phones={["+7 (812) 345-67-89"]}
        socials={[
          { label: "VK", href: "https://vk.com" },
          { label: "Telegram", href: "https://t.me" },
          { label: "Instagram", href: "https://instagram.com" },
        ]}
        menus={[
          {
            title: "РќР°РІРёРіР°С†РёСЏ",
            links: [
              { label: "Р Р°Р·РІРµРґРµРЅРёРµ", href: "/service/breeding" },
              { label: "Рћ РЅР°СЃ", href: "/about" },
              { label: "Р¤РѕС‚РѕРіСЂР°С„РёРё", href: "/photosession" },
            ],
          },
          {
            title: "Р”РѕРїРѕР»РЅРёС‚РµР»СЊРЅРѕ",
            links: [
              { label: "РљРѕРЅС‚Р°РєС‚С‹", href: "/about/contacts" },
              { label: "Р‘Р»РѕРі", href: "/blog" },
              { label: "РџРѕР»РёС‚РёРєР°", href: "/policy" },
            ],
          },
        ]}
      />
    </div>
  ),
};

