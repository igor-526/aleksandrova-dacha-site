"use client";

import { cn } from "@/ui";
import { PedigreeCard } from "./PedigreeCard";
import { HorseOutDto } from "@/types";
import { PedigreeSeparator } from "./PedigreeSeparator";

type PedigreeProps = {
  horse: HorseOutDto;
}

export const Pedigree = ({ horse }: PedigreeProps) => {

  const getHorseCardData = (horse: HorseOutDto | null) => {
    return {
      name: horse?.name,
      id: horse?.id,
      code: horse?.code,
      sex: horse?.sex || "male",
      breed: horse?.breed?.short_name,
      color: horse?.coat_color?.short_name,
      bdate_mode: horse?.bdate_mode,
      bdate: horse?.bdate_formatted,
      this_stable: horse?.this_stable,
      photo: (horse?.photos && horse?.photos.length > 0) &&
        horse?.photos?.sort((a, b) => {
          if (a.is_main === b.is_main) return 0;
          return a.is_main ? -1 : 1
        }).map(item => ({ src: item.url, alt: "Изображение лошади" })) || [],
    }
  };

  const pedigree = {
    s: getHorseCardData(horse.pedigree?.sire || null),
    d: getHorseCardData(horse.pedigree?.dam || null),
    ss: getHorseCardData(horse.pedigree?.sire?.pedigree?.sire || null),
    sd: getHorseCardData(horse.pedigree?.sire?.pedigree?.dam || null),
    ds: getHorseCardData(horse.pedigree?.dam?.pedigree?.sire || null),
    dd: getHorseCardData(horse.pedigree?.dam?.pedigree?.dam || null),
    sss: getHorseCardData(horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire || null),
    ssd: getHorseCardData(horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam || null),
    sds: getHorseCardData(horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire || null),
    sdd: getHorseCardData(horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam || null),
    dss: getHorseCardData(horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire || null),
    dsd: getHorseCardData(horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam || null),
    dds: getHorseCardData(horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire || null),
    ddd: getHorseCardData(horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam || null),
  }

  const Horizotal = {
    style: {
      gridTemplateAreas: `
        "s rs ss rss sss"
        "s rs ss rss ssd"
        "s rs sd rsd sds"
        "s rs sd rsd sdd"
        "d rd ds rds dss"
        "d rd ds rds dsd"
        "d rd dd rdd dds"
        "d rd dd rdd ddd"  
      `,
      className: ["h-[1000px] w-full",
        "grid gap-2",
        "grid-cols-[minmax(120px,1fr)_20px_minmax(120px,1fr)_20px_minmax(120px,1fr)]",
        "grid-rows-8"
      ]
    }
  };

  const Vertical = {
    style: {
      gridTemplateAreas: `
        "s s s s d d d d"
        "rs rs rs rs rd rd rd rd"
        "ss ss sd sd ds ds dd dd"
        "rss sss rsd sds rds dss rdd dds"
        "rss ssd rsd sdd rds dsd rdd ddd"
      `,
      className: ["w-full sm:max-w-[768px]",
        "grid gap-x-2 gap-y-2",
        "grid-cols-[10px_minmax(50px,1fr)_10px_minmax(50px,1fr)_10px_minmax(50px,1fr)_10px_minmax(50px,1fr)]",
        "grid-rows-[minmax(50px,2fr)_10px_minmax(50px,1fr)_minmax(50px,1fr)_minmax(50px,1fr)]"
      ]
    }
  };

  return (
    <div className="bg-[#f6efe0] text-[#2f3600]">
      <h2 className="mb-4">Родословная</h2>
      <div
        style={Horizotal.style}
        className={cn(...Horizotal.style.className, "hidden md:grid")}
      >
        <PedigreeCard horse={pedigree.s} level="level1" style={{ gridArea: "s" }} className="border-r-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.ss} level="level2" style={{ gridArea: "ss" }} className="border-r-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.sd} level="level2" style={{ gridArea: "sd" }} className="border-r-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.sss} level="level3" style={{ gridArea: "sss" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.ssd} level="level3" style={{ gridArea: "ssd" }} className="border-t-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.sds} level="level3" style={{ gridArea: "sds" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.sdd} level="level3" style={{ gridArea: "sdd" }} className="border-t-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.d} level="level1" style={{ gridArea: "d" }} className="border-r-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.ds} level="level2" style={{ gridArea: "ds" }} className="border-r-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.dd} level="level2" style={{ gridArea: "dd" }} className="border-r-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.dss} level="level3" style={{ gridArea: "dss" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.dsd} level="level3" style={{ gridArea: "dsd" }} className="border-t-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.dds} level="level3" style={{ gridArea: "dds" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.ddd} level="level3" style={{ gridArea: "ddd" }} className="border-t-[#d3c6aa]" />
        <PedigreeSeparator level="level12" style={{ gridArea: "rs" }} />
        <PedigreeSeparator level="level23" style={{ gridArea: "rss" }} />
        <PedigreeSeparator level="level23" style={{ gridArea: "rsd" }} />
        <PedigreeSeparator level="level12" style={{ gridArea: "rd" }} />
        <PedigreeSeparator level="level23" style={{ gridArea: "rds" }} />
        <PedigreeSeparator level="level23" style={{ gridArea: "rdd" }} />
      </div>
      <div
        style={Vertical.style}
        className={cn(...Vertical.style.className, "grid md:hidden")}
      >
        <PedigreeCard horse={pedigree.s} level="level1" vertical style={{ gridArea: "s" }} className=" border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.ss} level="level2" vertical style={{ gridArea: "ss" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.sd} level="level2" vertical style={{ gridArea: "sd" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.sss} level="level3" vertical style={{ gridArea: "sss" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.ssd} level="level3" vertical style={{ gridArea: "ssd" }} className="border-t-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.sds} level="level3" vertical style={{ gridArea: "sds" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.sdd} level="level3" vertical style={{ gridArea: "sdd" }} className="border-t-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.d} level="level1" vertical style={{ gridArea: "d" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.ds} level="level2" vertical style={{ gridArea: "ds" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.dd} level="level2" vertical style={{ gridArea: "dd" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.dss} level="level3" vertical style={{ gridArea: "dss" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.dsd} level="level3" vertical style={{ gridArea: "dsd" }} className="border-t-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.dds} level="level3" vertical style={{ gridArea: "dds" }} className="border-b-[#d3c6aa]" />
        <PedigreeCard horse={pedigree.ddd} level="level3" vertical style={{ gridArea: "ddd" }} className="border-t-[#d3c6aa]" />
        <PedigreeSeparator level="level12" vertical style={{ gridArea: "rs" }} />
        <PedigreeSeparator level="level23" vertical style={{ gridArea: "rss" }} />
        <PedigreeSeparator level="level23" vertical style={{ gridArea: "rsd" }} />
        <PedigreeSeparator level="level12" vertical style={{ gridArea: "rd" }} />
        <PedigreeSeparator level="level23" vertical style={{ gridArea: "rds" }} />
        <PedigreeSeparator level="level23" vertical style={{ gridArea: "rdd" }} />
      </div>
    </div>
  );
};
