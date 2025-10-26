import { PriceCard } from "../data-display/PriceCard";
import { cn } from "../utils/cn";

export type PopularOffer = {
  title: string;
  price: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type PopularOffersProps = {
  offers: PopularOffer[];
  className?: string;
};

export function PopularOffers({ offers, className }: PopularOffersProps) {
  return (
    <section className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}>
      {offers.map((offer) => (
        <PriceCard key={offer.title} {...offer} />
      ))}
    </section>
  );
}
