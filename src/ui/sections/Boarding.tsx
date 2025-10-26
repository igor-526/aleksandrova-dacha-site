import { Card } from "../data-display/Card";
import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type BoardingOption = {
  title: string;
  price: string;
  description: string;
};

export type BoardingProps = {
  options: BoardingOption[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

export function Boarding({ options, ctaLabel = "Оставить заявку", ctaHref = "#booking", className }: BoardingProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="grid gap-6 md:grid-cols-2">
        {options.map((option) => (
          <Card key={option.title} title={option.title} content={option.description}>
            <div className="text-2xl font-semibold text-[#2f3600]">{option.price}</div>
          </Card>
        ))}
      </div>
      <Button size="lg" href={ctaHref}>
        {ctaLabel}
      </Button>
    </section>
  );
}
