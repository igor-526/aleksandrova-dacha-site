import Image from "next/image";
import { Button } from "../button/Button";
import { Card } from "./Card";

export type AnimalCardProps = {
  name: string;
  photo: string;
  tags?: string[];
  description?: string;
  ctaLabel?: string;
  onClick?: () => void;
};

export function AnimalCard({ name, photo, tags = [], description, ctaLabel = "Подробнее", onClick }: AnimalCardProps) {
  return (
    <Card
      media={
        <div className="relative h-56 overflow-hidden rounded-2xl">
          <Image src={photo} alt={name} fill sizes="(min-width:768px) 240px, 100vw" className="object-cover" />
        </div>
      }
      actions={
        <Button variant="secondary" onClick={onClick}>
          {ctaLabel}
        </Button>
      }
    >
      <div className="space-y-3">
        <h3 className="font-serif text-2xl">{name}</h3>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[#8d784f]">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-[#f0e7cf] px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        )}
        {description && <p className="text-sm text-[#4b4d2f]">{description}</p>}
      </div>
    </Card>
  );
}
