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
        "rounded-3xl px-6 py-5 text-[#2f3600] border border-[#bcc76e] flex flex-col justify-stretch items-stretch w-full h-full mx-auto";

    const content = horse.sex + ", " + horse.breed?.short_name + ", " + horse.coat_color?.short_name + ", " + horse.bdate_formatted;
    const pedigree = horse.pedigree && horse.pedigree.sire?.name + " + " + horse.pedigree.dam?.name;
    const media = horse.photos && horse.photos.length > 0
        ? (<MediaImage src="/images/horses/horse1.jpg" alt={horse.name || "Horse image"} className="w-full h-full" />)
        : <MediaImage src="/images/horses/horse1.jpg" alt={horse.name || "Horse image"} className="w-full h-full" />;

    return (
        <article className={cn(articleClasses, className)}>
            <div className="w-full h-48 overflow-hidden rounded-2xl">
                {media}</div>
            <h3 className="text-2xl font-bold mt-4">{horse.name}</h3>
            <div className="text-sm mt-2">{content}</div>
            {pedigree && <div className="text-sm mt-1 italic text-[#2f3600]/80">{pedigree}</div>}
        </article>
    )
};
export default HorseCard;
