"use client";

import {
    cn,
    MediaImage,
} from "@/ui";
import { HorseOutDto } from "@/types";

type PedigreeProps = {
    horse: HorseOutDto;
}

export const Pedigree = ({
    horse
}: PedigreeProps) => {

    const pedigree = {
        s: {
            name: horse.pedigree?.sire?.name,
            color: horse.pedigree?.sire?.coat_color?.short_name,
            bdate: horse.pedigree?.sire?.bdate_formatted,
            photo: (horse.pedigree?.sire?.photos && horse.pedigree?.sire?.photos.length > 0) ?
                horse.pedigree?.sire?.photos[0]?.url :
                "/images/horses/horse2.jpg"
        },
        d: {
            name: horse.pedigree?.dam?.name,
            color: horse.pedigree?.dam?.coat_color?.short_name,
            bdate: horse.pedigree?.dam?.bdate_formatted,
            photo: (horse.pedigree?.dam?.photos && horse.pedigree?.dam?.photos.length > 0) ?
                horse.pedigree?.dam?.photos[0]?.url :
                "/images/horses/horse3.jpg"
        },
        ss: {
            name: horse.pedigree?.sire?.pedigree?.sire?.name,
            color: horse.pedigree?.sire?.pedigree?.sire?.coat_color?.short_name,
            bdate: horse.pedigree?.sire?.pedigree?.sire?.bdate_formatted,
            photo: (horse.pedigree?.sire?.pedigree?.sire?.photos && horse.pedigree?.sire?.pedigree?.sire?.photos.length > 0) ?
                horse.pedigree?.sire?.pedigree?.sire?.photos[0]?.url :
                "/images/horses/horse2.jpg"
        },
        sd: {
            name: horse.pedigree?.sire?.pedigree?.dam?.name,
            color: horse.pedigree?.sire?.pedigree?.dam?.coat_color?.short_name,
            bdate: horse.pedigree?.sire?.pedigree?.dam?.bdate_formatted,
            photo: (horse.pedigree?.sire?.pedigree?.dam?.photos && horse.pedigree?.sire?.pedigree?.dam?.photos.length > 0) ?
                horse.pedigree?.sire?.pedigree?.dam?.photos[0]?.url :
                "/images/horses/horse3.jpg"
        },
        ds: {
            name: horse.pedigree?.dam?.pedigree?.sire?.name,
            color: horse.pedigree?.dam?.pedigree?.sire?.coat_color?.short_name,
            bdate: horse.pedigree?.dam?.pedigree?.sire?.bdate_formatted,
            photo: (horse.pedigree?.dam?.pedigree?.sire?.photos && horse.pedigree?.dam?.pedigree?.sire?.photos.length > 0) ?
                horse.pedigree?.dam?.pedigree?.sire?.photos[0]?.url :
                "/images/horses/horse2.jpg"
        },
        dd: {
            name: horse.pedigree?.dam?.pedigree?.dam?.name,
            color: horse.pedigree?.dam?.pedigree?.dam?.coat_color?.short_name,
            bdate: horse.pedigree?.dam?.pedigree?.dam?.bdate_formatted,
            photo: (horse.pedigree?.dam?.pedigree?.dam?.photos && horse.pedigree?.dam?.pedigree?.dam?.photos.length > 0) ?
                horse.pedigree?.dam?.pedigree?.dam?.photos[0]?.url :
                "/images/horses/horse1.jpg"
        },
        sss: {
            name: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.name,
            color: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.coat_color?.short_name,
            bdate: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.bdate_formatted,
        },
        ssd: {
            name: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.name,
            color: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.coat_color?.short_name,
            bdate: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.bdate_formatted,
        },
        sds: {
            name: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.name,
            color: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.coat_color?.short_name,
            bdate: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.bdate_formatted,
        },
        sdd: {
            name: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.name,
            color: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.coat_color?.short_name,
            bdate: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.bdate_formatted,
        },
        dss: {
            name: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.name,
            color: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.coat_color?.short_name,
            bdate: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.bdate_formatted,
        },
        dsd: {
            name: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.name,
            color: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.coat_color?.short_name,
            bdate: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.bdate_formatted,
        },
        dds: {
            name: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.name,
            color: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.coat_color?.short_name,
            bdate: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.bdate_formatted,
        },
        ddd: {
            name: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.name,
            color: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.coat_color?.short_name,
            bdate: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.bdate_formatted,
        },
    }

    const blocks = {
        level1: {
            container: "row-span-4 flex flex-col items-center justify-center p-3 border border-[#2f3600]",
            image: "w-full max-w-[275px] h-200 rounded-xl"
        },
        level2: {
            container: "row-span-2 flex items-center justify-center p-3 border border-[#2f3600]",
            image: "h-full max-h-[275px] w-[150px] rounded-xl",
        },
        level3: {
            container: "row-span-1 flex items-center justify-start p-3 border border-[#2f3600]",
        },
        r1: (
            <div className="row-span-4 py-15">
                <div className="w-full h-full border border-[#2f3600] border-r-0"></div>
            </div>
        ),
        r2: (
            <div className="row-span-2 py-6">
                <div className="w-full h-full border border-[#2f3600] border-r-0"></div>
            </div>
        ),
        maleLeft: "bg-gradient-to-r from-[#8d784f] to-[#f6efe0]",
        femaleLeft: "bg-gradient-to-r from-[#f0e7cf] to-[#f6efe0]",
        maleRight: "bg-gradient-to-r from-[#f6efe0] to-[#8d784f]",
        femaleRight: "bg-gradient-to-r from-[#f6efe0] to-[#f0e7cf]",
        bgMale: "bg-[#8d784f]/25",
        bgFemale: "bg-[#f0e7cf]",
    }

    return (
        <div className="space-y-20 bg-[#f6efe0] pb-20 text-[#2f3600]">
            <h2 className="text-2xl font-bold mb-4">Родословная</h2>
            <div className="grid grid-cols-[1fr_20px_1fr_20px_1fr] grid-rows-8 gap-x-6 gap-y-6 w-full h-[500px]">
                <div className={cn(blocks.level1.container, blocks.bgMale, "border-r-0 border-b-0")}>
                    <MediaImage src={pedigree.s?.photo} alt={pedigree.s.name || ""} className={blocks.level1.image} />
                    <h3 className="text-xl font-bold">{pedigree.s?.name}</h3>
                    <p>{pedigree.s?.color + ", " + pedigree.s?.bdate}</p>
                </div>
                {blocks.r1}
                <div className={cn(blocks.level2.container, blocks.bgMale, "border-r-0 border-b-0")}>
                    <MediaImage src={pedigree.ss?.photo} alt={pedigree.ss.name || ""} className={blocks.level2.image} />
                    <div className="flex flex-col p-2.5">
                        <h3 className="text-md font-bold">{pedigree.ss?.name}</h3>
                        <p className="text-sm">{pedigree.ss?.color + ", " + pedigree.ss?.bdate}</p>
                    </div>
                </div>
                {blocks.r2}
                <div className={cn(blocks.level3.container, blocks.bgMale, "border-b-0")}>
                    <h3 className="text-sm font-bold mr-2">{pedigree.sss.name}</h3>
                    <p className="text-sm">{pedigree.sss?.color + ", " + pedigree.sss?.bdate}</p>
                </div>
                <div className={cn(blocks.level3.container, blocks.bgFemale, "border-t-0")}>
                    <h3 className="text-sm font-bold mr-2">{pedigree.ssd.name}</h3>
                    <p className="text-sm">{pedigree.ssd?.color + ", " + pedigree.ssd?.bdate}</p>
                </div>
                <div className={cn(blocks.level2.container, blocks.bgFemale, "border-r-0 border-t-0")}>
                    <MediaImage src={pedigree.sd?.photo} alt={pedigree.sd.name || ""} className={blocks.level2.image} />
                    <div className="flex flex-col p-2.5">
                        <h3 className="text-md font-bold">{pedigree.sd?.name}</h3>
                        <p className="text-sm">{pedigree.sd?.color + ", " + pedigree.sd?.bdate}</p>
                    </div>
                </div>
                {blocks.r2}
                <div className={cn(blocks.level3.container, blocks.bgMale, "border-b-0")}>
                    <h3 className="text-sm font-bold mr-2">{pedigree.sds.name}</h3>
                    <p className="text-sm">{pedigree.sds?.color + ", " + pedigree.sds?.bdate}</p>
                </div>
                <div className={cn(blocks.level3.container, blocks.bgFemale, "border-t-0")}>
                    <h3 className="text-sm font-bold mr-2">{pedigree.sdd.name}</h3>
                    <p className="text-sm">{pedigree.sdd?.color + ", " + pedigree.sdd?.bdate}</p>
                </div>
                <div className={cn(blocks.level1.container, blocks.bgFemale, "border-r-0 border-t-0")}>
                    <MediaImage src={pedigree.d?.photo} alt={pedigree.d.name || ""} className={blocks.level1.image} />
                    <h3 className="text-xl font-bold">{pedigree.d?.name}</h3>
                    <p>{pedigree.d?.color + ", " + pedigree.d?.bdate}</p>
                </div>
                {blocks.r1}
                <div className={cn(blocks.level2.container, blocks.bgMale, "border-r-0 border-b-0")}>
                    <MediaImage src={pedigree.ds?.photo} alt={pedigree.ds.name || ""} className={blocks.level2.image} />
                    <div className="flex flex-col p-2.5">
                        <h3 className="text-md font-bold">{pedigree.ds?.name}</h3>
                        <p className="text-sm">{pedigree.ds?.color + ", " + pedigree.ds?.bdate}</p>
                    </div>
                </div>
                {blocks.r2}
                <div className={cn(blocks.level3.container, blocks.bgMale, "border-b-0")}>
                    <h3 className="text-sm font-bold mr-2">{pedigree.dss.name}</h3>
                    <p className="text-sm">{pedigree.dss?.color + ", " + pedigree.dss?.bdate}</p>
                </div>
                <div className={cn(blocks.level3.container, blocks.bgFemale, "border-t-0")}>
                    <h3 className="text-sm font-bold mr-2">{pedigree.dsd.name}</h3>
                    <p className="text-sm">{pedigree.dsd?.color + ", " + pedigree.dsd?.bdate}</p>
                </div>
                <div className={cn(blocks.level2.container, blocks.bgFemale, "border-r-0 border-t-0")}>
                    <MediaImage src={pedigree.dd?.photo} alt={pedigree.dd.name || ""} className={blocks.level2.image} />
                    <div className="flex flex-col p-2.5">
                        <h3 className="text-md font-bold">{pedigree.dd?.name}</h3>
                        <p className="text-sm">{pedigree.dd?.color + ", " + pedigree.dd?.bdate}</p>
                    </div>
                </div>
                {blocks.r2}
                <div className={cn(blocks.level3.container, blocks.bgMale, "border-t-0")}>
                    <h3 className="text-sm font-bold mr-2">{pedigree.dds.name}</h3>
                    <p className="text-sm">{pedigree.dds?.color + ", " + pedigree.dds?.bdate}</p>
                </div>
                <div className={cn(blocks.level3.container, blocks.bgFemale, "border-t-0")}>
                    <h3 className="text-sm font-bold mr-2">{pedigree.ddd.name}</h3>
                    <p className="text-sm">{pedigree.ddd?.color + ", " + pedigree.ddd?.bdate}</p>
                </div>
            </div>
        </div>
    );
};
