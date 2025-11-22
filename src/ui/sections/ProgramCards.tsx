import { Card } from "../data-display/Card";
import { Button } from "../button/Button";
import { cn } from "../utils/cn";

export type ProgramCard = {
  title: string;
  level: string;
  description: string;
  duration: string;
  price: string;
  ctaHref?: string;
};

export type ProgramCardsProps = {
  programs: ProgramCard[];
  className?: string;
};

export function ProgramCards({ programs, className }: ProgramCardsProps) {
  return (
    <section
      className={cn("grid gap-6 md:grid-cols-2 xl:grid-cols-3", className)}
    >
      {programs.map((program) => (
        <Card
          key={program.title}
          title={program.title}
          content={program.description}
          actions={
            <Button href={program.ctaHref ?? "#booking"} fullWidth>
              Записаться
            </Button>
          }
        >
          <div className="space-y-2 text-sm text-[#4b4d2f]">
            <div>
              <strong>Уровень:</strong> {program.level}
            </div>
            <div>
              <strong>Длительность:</strong> {program.duration}
            </div>
            <div className="text-lg font-semibold text-[#2f3600]">
              {program.price}
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
}
