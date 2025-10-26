import { Button } from "../button/Button";
import { Card } from "./Card";

export type PriceCardProps = {
  title: string;
  price: string;
  description?: string;
  features?: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function PriceCard({
  title,
  price,
  description,
  features = [],
  ctaLabel = "Выбрать",
  ctaHref = "#booking",
}: PriceCardProps) {
  return (
    <Card
      variant="outlined"
      className="h-full border-[#c9b585] bg-[#fdfaf4]"
      title={title}
      content={description}
      actions={
        <Button href={ctaHref} fullWidth>
          {ctaLabel}
        </Button>
      }
    >
      <div className="text-4xl font-semibold text-[#2f3600]">{price}</div>
      {features.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-[#4b4d2f]">
          {features.map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>
      )}
    </Card>
  );
}
