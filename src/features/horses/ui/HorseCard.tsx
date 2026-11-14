import { HorseOutDto } from "@/types";
import { cn, MediaImage } from "@/ui";

export type HorseCardProps = {
    horse: HorseOutDto
    withDetails?: boolean;
    withSalePrice?: boolean;
    className?: string;
};

const HorseCard = ({
    horse, withDetails, withSalePrice, className,
}: HorseCardProps) => {
    const articleClasses =
        "rounded-3xl p-2 text-[#2f3600] border border-[#bcc76e] flex flex-col justify-stretch items-stretch w-full h-full mx-auto";
    const cardColor = horse.sex === "male" ? "bg-[#8d784f]/25" : "bg-[#f0e7cf]";
    const sex = horse.sex === "male" ? "ж" : horse.sex === "female" ? "к" : horse.sex === "geld" ? "м" : "";
    const bd = horse.bdate_mode === "ymd" ? horse.bdate_formatted?.slice(6, 10) : horse.bdate_formatted;
    const content = sex + ", " + horse.breed?.short_name + ", " + horse.coat_color?.short_name + ", " + bd;

    const horseWithParents = horse as HorseOutDto & {
        parents?: {
            sire?: { name?: string | null } | null;
            dam?: { name?: string | null } | null;
        };
    };

    const sireName = horseWithParents.parents?.sire?.name ?? horse.pedigree?.sire?.name;
    const damName = horseWithParents.parents?.dam?.name ?? horse.pedigree?.dam?.name;
    const pedigree = [sireName, damName].filter((name): name is string => Boolean(name)).join(" + ");
    const media = horse.photos && horse.photos.length > 0
        ? (<MediaImage src={horse.photos.find((item) => item.is_main)?.url || horse.photos[0].url} alt={horse.name || "Horse image"} ratio="4/3" className="w-full" />)
        : <MediaImage src="/images/horses/horse1.jpg" alt={horse.name || "Horse image"} ratio="4/3" className="w-full" />;
    const saleService = horse.services?.find((service) => service.name === "Продается");
    const servicesDescription = horse.services ? (
        <ul>
            {horse.services.map((service) => (
                <li key={service.id}>{service.name}: {service.price}</li>
            ))}
        </ul>
    ) : null;


    return (
        <article className={cn(articleClasses, cardColor, className)}>
            <div className="w-full overflow-hidden rounded-2xl">
                {media}
            </div>
            <h3 className="mx-auto">{horse.name}</h3>
            <div className="mx-auto mt-2">{content}</div>
            {pedigree && <div className="mx-auto mt-1 italic text-[#2f3600]/80">{pedigree}</div>}
            {withSalePrice && saleService && (
                <div className="mt-3 border-t border-[#d3c6aa] pt-2 text-center font-semibold text-[#9f5830]">
                    Цена: {saleService.price.toLocaleString("ru-RU")} руб.
                </div>
            )}
            {withDetails && <div className="mx-auto mt-1 text-[#2f3600]/80">{servicesDescription}</div>}
        </article>
    )
};
export default HorseCard;
