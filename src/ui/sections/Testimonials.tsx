import { Carousel } from "../data-display/Carousel";
import { ReviewCard, type ReviewCardProps } from "../data-display/ReviewCard";
import { cn } from "../utils/cn";

export type TestimonialsProps = {
  items: ReviewCardProps[];
  asCarousel?: boolean;
  className?: string;
};

export function Testimonials({ items, asCarousel = true, className }: TestimonialsProps) {
  if (asCarousel) {
    return (
      <Carousel
        items={items}
        renderItem={(item) => <ReviewCard {...item} />}
        autoPlay
        interval={6000}
        className={className}
      />
    );
  }

  return (
    <section className={cn("grid gap-6 md:grid-cols-2", className)}>
      {items.map((item, index) => (
        <ReviewCard key={index} {...item} />
      ))}
    </section>
  );
}
