import { HorseOutDto } from "@/types";
import { cn, MediaImage } from "@/ui";

export type HorseCardProps = {
    horse: HorseOutDto
    className?: string;
};

const HorseCard = ({
    horse, className,
}: HorseCardProps) => {
    const articleClasses =
        "rounded-3xl p-2 text-[#2f3600] border border-[#bcc76e] flex flex-col justify-stretch items-stretch w-full h-full mx-auto";
    const cardColor = horse.sex === "male" ? "bg-[#8d784f]/25" : "bg-[#f0e7cf]";
    const content = horse.sex + ", " + horse.breed?.short_name + ", " + horse.coat_color?.short_name + ", " + horse.bdate_formatted;
    const pedigree = horse.pedigree && horse.pedigree.sire?.name + " + " + horse.pedigree.dam?.name;
    const media = horse.photos && horse.photos.length > 0
        ? (<MediaImage src="/images/horses/horse1.jpg" alt={horse.name || "Horse image"} ratio="4/3" className="w-full" />)
        : <MediaImage src="/images/horses/horse1.jpg" alt={horse.name || "Horse image"} ratio="4/3" className="w-full" />;

    return (
        <article className={cn(articleClasses, cardColor, className)}>
            <div className="w-full overflow-hidden rounded-2xl">
                {media}
            </div>
            <h3 className="mx-auto">{horse.name}</h3>
            <div className="mx-auto mt-2">{content}</div>
            {pedigree && <div className="mx-auto mt-1 italic text-[#2f3600]/80">{pedigree}</div>}
        </article>
    )
};
export default HorseCard;
