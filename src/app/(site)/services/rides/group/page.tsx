import { AboutTeaser, Container, GallerySection, Hero } from "@/ui";
import MyServicesList from "@/features/price/ui/MyServicesList";
import { getGroupPageData } from "@/features/price/services/groupPageDataService";

export default async function ServicesRidesGroupPage() {
  const { prices, dataAboutTeaser, dataGallerySection } = await getGroupPageData();

  return (
    <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
      <Container className="space-y-12">
        <Hero
          title={"Групповые занятия"}
          subtitle="Александрова дача"
          backgroundImage={{
            src: "/images/services/rides/group/group.jpg",
            alt: "desc",
          }}
        />
        <AboutTeaser {...dataAboutTeaser}></AboutTeaser>

        <MyServicesList items={prices} columns={2} />
        <GallerySection {...dataGallerySection} />
      </Container>
    </div>
  );
}
