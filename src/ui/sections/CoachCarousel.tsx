import { Carousel } from "../data-display/Carousel";
import { PersonCard, type PersonCardProps } from "../data-display/PersonCard";

export type CoachCarouselProps = {
  coaches: PersonCardProps[];
};

export function CoachCarousel({ coaches }: CoachCarouselProps) {
  return (
    <Carousel
      items={coaches}
      renderItem={(coach) => <PersonCard {...coach} />}
      autoPlay
      interval={7000}
    />
  );
}
