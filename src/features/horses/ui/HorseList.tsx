import { HorseOutDto } from "@/types";
import { cn } from "@/ui";
import { ReactNode } from "react";
import Link from "next/link";
import HorseCard from "./HorseCard";
export type HorseListProps = {
    heading?: string;
    content?: ReactNode;
    items: HorseOutDto[];
    columns?: 1 | 2 | 3 | 5;
    className?: string;
};

const HorseList = ({
    heading,
    content,
    items = [],
    columns = 3,
    className,
}: HorseListProps) => {
    return (
        <section className={cn("space-y-6 mx-auto font-serif", className)}>
            {heading && (
                <div className="px-6">
                    <h2 className="font-serif text-3xl text-[#2f3600] sm:text-4xl">
                        {heading}
                    </h2>
                </div>
            )}
            {content && (
                <div className="px-6 font-serif text-sm md:text-md lg:text-lg text-[#2f3600]">
                    {content}
                </div>
            )}
            <div
                className={cn(
                    "grid gap-6 items-stretch justify-items-stretch",
                    columns === 1 && "grid-cols-1",
                    columns === 2 && "sm:grid-cols-1 md:grid-cols-2",
                    columns === 3 && "grid-cols-2 md:grid-cols-3",
                    columns === 5 && "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
                    className
                )}
            >
                {items.map((item, index) => {
                    return <Link key={index} href={`/horses/${item.slug}`}><HorseCard horse={item} className="h-full" /></Link>;
                })}
            </div>
        </section >
    );
};

export default HorseList;