"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { cn, GalleryItem, GallerySection } from "@/ui"
import Link from "next/link";

export type PedigreeCardProps = {
    horse: {
        name?: string,
        id?: string,
        color?: string | null,
        bdate?: string | null,
        bdate_mode?: "y" | "ym" | "ymd" | "hide",
        this_stable?: boolean | null,
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

    const bd = horse.bdate_mode === "ymd" ? horse.bdate?.slice(6, 10) : horse.bdate;

    if (vertical) {
        switch (level) {
            case "level1":
                styleCard.container = "p-3 border border-[#2f3600]";
                break;
            case "level2":
                styleCard.container = "p-2 border border-[#2f3600]";
                break;
            case "level3":
                styleCard.container = "flex items-center justify-center p-2 border border-[#2f3600]";
                break
            default:
                break;
        }
    } else {
        switch (level) {
            case "level1":
                styleCard.container = "flex flex-col items-center justify-center gap-2 p-3 border border-[#2f3600]";
                break;
            case "level2":
                styleCard.container = "flex flex-col gap-2 p-3 border border-[#2f3600]";
                break;
            case "level3":
                styleCard.container = "flex items-center justify-start p-3 border border-[#2f3600]";
                break;
            default:
                break;
        }
    };

    styleCard.bg = horse.sex === "male" ? "bg-[#8d784f]/25" : "bg-[#f0e7cf]";

    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const update = () => setIsSmall(window.innerWidth <= 549);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const containerStyle = {
        ...style,
    } as CSSProperties;

    const textStyle = isSmall ? { fontSize: "10px" } : undefined;
    const textClass = "sm:text-sm";

    return (
        <div style={containerStyle} className={cn(styleCard.container, styleCard.bg, "font-serif pedigree-card", className)}>
            {level === "level1" &&
                <div className={"w-full h-full flex flex-col items-center justify-center"}>
                    <div className="mb-2 w-[100%]">
                        {horse.photo && horse.photo.length > 0 && <GallerySection
                            columns={1}
                            items={horse.photo}
                            ratio="4/3"
                        />}
                    </div>
                    {horse.this_stable ?
                        <Link href={`/horses/${horse.id}`} style={textStyle} className={cn("text-center underline underline-offset-2 text-bold font-bold", textClass)}>
                            {horse.name}
                        </Link>
                        : <p style={textStyle} className={cn("text-center text-bold font-bold", textClass)}>{horse.name}</p>
                    }
                    <p style={textStyle} className={cn("text-center", textClass)}>
                        {horse.color && horse.bdate && <span style={textStyle}>{horse.color}, {bd}</span>}
                        {horse.color && !horse.bdate && <span style={textStyle}>{horse.color}</span>}
                        {!horse.color && horse.bdate && <span style={textStyle}>{bd}</span>}
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
                    {horse.this_stable ?
                        <Link href={`/horses/${horse.id}`} style={textStyle} className={cn("text-center underline underline-offset-2 text-bold font-bold", textClass)}>
                            {horse.name}
                        </Link>
                        : <p style={textStyle} className={cn("text-center text-bold font-bold", textClass)}>{horse.name}</p>
                    }
                    <p style={textStyle} className={cn("text-center", textClass)}>
                        {horse.color && horse.bdate && <span style={textStyle}>{horse.color}, {bd}</span>}
                        {horse.color && !horse.bdate && <span style={textStyle}>{horse.color}</span>}
                        {!horse.color && horse.bdate && <span style={textStyle}>{bd}</span>}
                    </p>
                </div>
            }
            {(level === "level2" && !vertical) &&
                <div className="h-full flex flex-col items-center justify-center gap-2">
                    {horse.photo && horse.photo.length > 0 && <GallerySection
                        columns={1}
                        className="w-[70%] mx-auto"
                        items={horse.photo}
                        ratio="4/3"
                        rounded="lg"
                    />}
                    <div className="w-[60%] h-full flex flex-col items-center justify-center">
                        {horse.this_stable ?
                            <Link href={`/horses/${horse.id}`} style={textStyle} className={cn("text-center underline underline-offset-2 text-bold font-bold", textClass)}>
                                {horse.name}
                            </Link>
                            : <p style={textStyle} className={cn("text-center text-bold font-bold", textClass)}>{horse.name}</p>
                        }
                        <p style={textStyle} className={cn("text-center", textClass)}>
                            {horse.color && horse.bdate && <span style={textStyle}>{horse.color}, {bd}</span>}
                            {horse.color && !horse.bdate && <span style={textStyle}>{horse.color}</span>}
                            {!horse.color && horse.bdate && <span style={textStyle}>{bd}</span>}
                        </p>
                    </div>
                </div>
            }

            {(level === "level3" && !vertical) &&
                <div className="w-full flex items-center justify-center gap-2">
                    {horse.photo && horse.photo.length > 0 && <GallerySection
                        columns={1}
                        className="w-[80%]"
                        items={horse.photo}
                        ratio="4/3"
                        rounded="md"
                    />}
                    <div className="w-full flex flex-col items-center">
                        {horse.this_stable ?
                            <Link href={`/horses/${horse.id}`} style={textStyle} className={cn("text-center underline underline-offset-2 text-bold font-bold", textClass)}>
                                {horse.name}
                            </Link>
                            : <p style={textStyle} className={cn("text-center text-bold font-bold", textClass)}>{horse.name}</p>
                        }
                        <p style={textStyle} className={cn("text-center", textClass)}>
                            {horse.color && horse.bdate && <span style={textStyle}>{horse.color}, {bd}</span>}
                            {horse.color && !horse.bdate && <span style={textStyle}>{horse.color}</span>}
                            {!horse.color && horse.bdate && <span style={textStyle}>{bd}</span>}
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}