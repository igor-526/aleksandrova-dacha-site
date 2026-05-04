import { cn, GalleryItem, GallerySection } from "@/ui"

export type PedigreeCardProps = {
    horse: {
        name?: string,
        color?: string | null,
        bdate?: string | null,
        photo?: GalleryItem[] | [],
        sex?: "male" | "female" | "geld"
    },
    vertical?: boolean,
    level: "level1" | "level2" | "level3",
    style: { gridArea: string },
    className?: string
}

export const PedigreeCard = ({ horse, vertical = false, level, style, className }: PedigreeCardProps) => {

    const styleCard = {
        container: "",
        h3: "",
        image: "",
        bg: "",
    }

    if (vertical) {
        switch (level) {
            case "level1":
                styleCard.container = "p-3 border border-[#2f3600]";
                styleCard.h3 = "font-bold";
                break;
            case "level2":
                styleCard.container = "p-2 border border-[#2f3600]";
                styleCard.h3 = "font-bold";
                break;
            case "level3":
                styleCard.container = "flex items-center justify-center p-2 border border-[#2f3600]";
                styleCard.h3 = "font-bold";
                break
            default:
                break;
        }
    } else {
        switch (level) {
            case "level1":
                styleCard.container = "flex flex-col items-center justify-center gap-2 p-3 border border-[#2f3600]";
                styleCard.h3 = "font-bold";
                break;
            case "level2":
                styleCard.container = "flex flex-col gap-2 p-3 border border-[#2f3600]";
                styleCard.h3 = "font-bold";
                break;
            case "level3":
                styleCard.container = "flex items-center justify-start p-3 border border-[#2f3600]";
                styleCard.h3 = "font-bold";
                break;
            default:
                break;
        }
    };

    styleCard.bg = horse.sex === "male" ? "bg-[#8d784f]/25" : "bg-[#f0e7cf]";


    return (
        <div style={style} className={cn(styleCard.container, styleCard.bg, "font-serif text-[10px] sm:text-sm", className)}>
            {level === "level1" &&
                <div className={"w-full h-full flex flex-col items-center justify-center"}>
                    <div className="mb-2 w-[100%] md:w-[80%] lg:w-[70%]">
                        {horse.photo && horse.photo.length > 0 && <GallerySection
                            columns={1}
                            items={horse.photo}
                            ratio="4/3"
                        />}
                    </div>
                    <h3 className={cn(styleCard.h3, "text-center")}>{horse.name}</h3>
                    <p className="text-center">
                        {horse.color && horse.bdate && <span>{horse.color}, {horse.bdate}</span>}
                        {horse.color && !horse.bdate && <span>{horse.color}</span>}
                        {!horse.color && horse.bdate && <span>{horse.bdate}</span>}
                    </p>
                </div>
            }
            {(level != "level1" && vertical) &&
                <div className={"w-full flex flex-col items-center justify-center"}>
                    <div className="hidden min-[500px]:block w-full">
                        {horse.photo && horse.photo.length > 0 && <GallerySection
                            columns={1}
                            className="w-full mx-auto mb-1"
                            items={horse.photo}
                            ratio="4/3"
                            rounded="md"
                        />}
                    </div>
                    <h3 className={cn(styleCard.h3, "text-center")}>{horse.name}</h3>
                    <p className="text-center">
                        {horse.color && horse.bdate && <span>{horse.color}, {horse.bdate}</span>}
                        {horse.color && !horse.bdate && <span>{horse.color}</span>}
                        {!horse.color && horse.bdate && <span>{horse.bdate}</span>}
                    </p>
                </div>
            }
            {(level === "level2" && !vertical) &&
                <div className="h-full flex items-center justify-center gap-2">
                    {horse.photo && horse.photo.length > 0 && <GallerySection
                        columns={1}
                        className="w-[40%] mx-auto"
                        items={horse.photo}
                        ratio="4/3"
                        rounded="lg"
                    />}
                    <div className="w-[60%] h-full flex flex-col items-center justify-center">
                        <h3 className={cn(styleCard.h3, "text-center")}>{horse.name}</h3>
                        <p className="text-center">
                            {horse.color && horse.bdate && <span>{horse.color}, {horse.bdate}</span>}
                            {horse.color && !horse.bdate && <span>{horse.color}</span>}
                            {!horse.color && horse.bdate && <span>{horse.bdate}</span>}
                        </p>
                    </div>
                </div>
            }

            {(level === "level3" && !vertical) &&
                <div className="h-full flex items-center justify-center gap-2">
                    {horse.photo && horse.photo.length > 0 && <GallerySection
                        columns={1}
                        className="w-[70px]"
                        items={horse.photo}
                        ratio="4/3"
                        rounded="md"
                    />}
                    <div className="w-full flex items-center gap-2.5">
                        <h3 className={cn(styleCard.h3, "text-center")}>{horse.name}</h3>
                        <p className="text-center">
                            {horse.color && horse.bdate && <span>{horse.color}, {horse.bdate}</span>}
                            {horse.color && !horse.bdate && <span>{horse.color}</span>}
                            {!horse.color && horse.bdate && <span>{horse.bdate}</span>}
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}