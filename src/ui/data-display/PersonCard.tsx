import Image from "next/image";
import { Card } from "./Card";

export type PersonCardProps = {
  name: string;
  role: string;
  photo: string;
  bioShort?: string;
};

export function PersonCard({ name, role, photo, bioShort }: PersonCardProps) {
  return (
    <Card
      variant="default"
      media={
        <div className="relative h-56 overflow-hidden rounded-2xl">
          <Image src={photo} alt={name} fill sizes="(min-width:768px) 220px, 100vw" className="object-cover" />
        </div>
      }
    >
      <div className="space-y-2">
        <h3 className="font-serif text-2xl">{name}</h3>
        <p className="text-sm text-[#8d784f]">{role}</p>
        {bioShort && <p className="text-sm text-[#4b4d2f]">{bioShort}</p>}
      </div>
    </Card>
  );
}
