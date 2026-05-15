"use client";

import { cn } from "@/ui";
import { PedigreeCard } from "./PedigreeCard";
import { HorseOutDto } from "@/types";
import { PedigreeSeparator } from "./PedigreeSeparator";

type PedigreeProps = {
  horse: HorseOutDto;
}

export const Pedigree = ({ horse }: PedigreeProps) => {
  const pedigree = {
    s: {
      name: horse.pedigree?.sire?.name,
      sex: horse.pedigree?.sire?.sex || "male",
      color: horse.pedigree?.sire?.coat_color?.short_name,
      bdate: horse.pedigree?.sire?.bdate_formatted,
      photo: (horse.pedigree?.sire?.photos && horse.pedigree?.sire?.photos.length > 0) &&
        horse.pedigree?.sire?.photos?.map(item => ({ src: item.url, alt: item.name })) || [{ src: "/images/horses/horse1.jpg", alt: "Изображение лошади" }],
    },
    d: {
      name: horse.pedigree?.dam?.name,
      sex: horse.pedigree?.dam?.sex,
      color: horse.pedigree?.dam?.coat_color?.short_name,
      bdate: horse.pedigree?.dam?.bdate_formatted,
      photo: (horse.pedigree?.dam?.photos && horse.pedigree?.dam?.photos.length > 0) &&
        horse.pedigree?.dam?.photos?.map(item => ({ src: item.url, alt: item.name })) || [{ src: "/images/horses/horse1.jpg", alt: "Изображение лошади" }],
    },
    ss: {
      name: horse.pedigree?.sire?.pedigree?.sire?.name,
      sex: horse.pedigree?.sire?.pedigree?.sire?.sex || "male",
      color: horse.pedigree?.sire?.pedigree?.sire?.coat_color?.short_name,
      bdate: horse.pedigree?.sire?.pedigree?.sire?.bdate_formatted,
      photo: (horse.pedigree?.sire?.pedigree?.sire?.photos && horse.pedigree?.sire?.pedigree?.sire?.photos.length > 0) &&
        horse.pedigree?.sire?.pedigree?.sire?.photos?.map(item => ({ src: item.url, alt: item.name })) || [],
    },
    sd: {
      name: horse.pedigree?.sire?.pedigree?.dam?.name,
      sex: horse.pedigree?.sire?.pedigree?.dam?.sex,
      color: horse.pedigree?.sire?.pedigree?.dam?.coat_color?.short_name,
      bdate: horse.pedigree?.sire?.pedigree?.dam?.bdate_formatted,
      photo: (horse.pedigree?.sire?.pedigree?.dam?.photos && horse.pedigree?.sire?.pedigree?.dam?.photos.length > 0) &&
        horse.pedigree?.sire?.pedigree?.dam?.photos?.map(item => ({ src: item.url, alt: item.name })) || [{ src: "/images/horses/horse1.jpg", alt: "Изображение лошади" }],
    },
    ds: {
      name: horse.pedigree?.dam?.pedigree?.sire?.name,
      sex: horse.pedigree?.dam?.pedigree?.sire?.sex || "male",
      color: horse.pedigree?.dam?.pedigree?.sire?.coat_color?.short_name,
      bdate: horse.pedigree?.dam?.pedigree?.sire?.bdate_formatted,
      photo: (horse.pedigree?.dam?.pedigree?.sire?.photos && horse.pedigree?.dam?.pedigree?.sire?.photos.length > 0) &&
        horse.pedigree?.dam?.pedigree?.sire?.photos?.map(item => ({ src: item.url, alt: item.name })) || [],
    },
    dd: {
      name: horse.pedigree?.dam?.pedigree?.dam?.name,
      sex: horse.pedigree?.dam?.pedigree?.dam?.sex,
      color: horse.pedigree?.dam?.pedigree?.dam?.coat_color?.short_name,
      bdate: horse.pedigree?.dam?.pedigree?.dam?.bdate_formatted,
      photo: horse.pedigree?.dam?.pedigree?.dam?.photos?.map(item => ({ src: item.url, alt: item.name })) || [{ src: "/images/horses/horse1.jpg", alt: "Изображение лошади" }],
    },
    sss: {
      name: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.name,
      sex: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.sex || "male",
      color: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.coat_color?.short_name,
      bdate: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.bdate_formatted,
      photo: (horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.photos && horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.photos.length > 0) &&
        horse.pedigree?.sire?.pedigree?.sire?.pedigree?.sire?.photos?.map(item => ({ src: item.url, alt: item.name })) || [{ src: "/images/horses/horse1.jpg", alt: "Изображение лошади" }],
    },
    ssd: {
      name: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.name,
      sex: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.sex,
      color: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.coat_color?.short_name,
      bdate: horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.bdate_formatted,
      photo: (horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.photos && horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.photos.length > 0) &&
        horse.pedigree?.sire?.pedigree?.sire?.pedigree?.dam?.photos?.map(item => ({ src: item.url, alt: item.name })) || [],
    },
    sds: {
      name: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.name,
      sex: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.sex || "male",
      color: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.coat_color?.short_name,
      bdate: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.bdate_formatted,
      photo: (horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.photos && horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.photos.length > 0) &&
        horse.pedigree?.sire?.pedigree?.dam?.pedigree?.sire?.photos?.map(item => ({ src: item.url, alt: item.name })) || [],
    },
    sdd: {
      name: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.name,
      sex: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.sex,
      color: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.coat_color?.short_name,
      bdate: horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.bdate_formatted,
      photo: (horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.photos && horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.photos.length > 0) &&
        horse.pedigree?.sire?.pedigree?.dam?.pedigree?.dam?.photos?.map(item => ({ src: item.url, alt: item.name })) || [],
    },
    dss: {
      name: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.name,
      sex: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.sex || "male",
      color: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.coat_color?.short_name,
      bdate: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.bdate_formatted,
      photo: (horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.photos && horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.photos.length > 0) &&
        horse.pedigree?.dam?.pedigree?.sire?.pedigree?.sire?.photos?.map(item => ({ src: item.url, alt: item.name })) || [{ src: "/images/horses/horse1.jpg", alt: "Изображение лошади" }],
    },
    dsd: {
      name: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.name,
      sex: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.sex,
      color: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.coat_color?.short_name,
      bdate: horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.bdate_formatted,
      photo: (horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.photos && horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.photos.length > 0) &&
        horse.pedigree?.dam?.pedigree?.sire?.pedigree?.dam?.photos?.map(item => ({ src: item.url, alt: item.name })) || [],
    },
    dds: {
      name: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.name,
      sex: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.sex || "male",
      color: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.coat_color?.short_name,
      bdate: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.bdate_formatted,
      photo: (horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.photos && horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.photos.length > 0) &&
        horse.pedigree?.dam?.pedigree?.dam?.pedigree?.sire?.photos?.map(item => ({ src: item.url, alt: item.name })) || [],
    },
    ddd: {
      name: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.name,
      sex: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.sex,
      color: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.coat_color?.short_name,
      bdate: horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.bdate_formatted,
      photo: (horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.photos && horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.photos.length > 0) &&
        horse.pedigree?.dam?.pedigree?.dam?.pedigree?.dam?.photos?.map(item => ({ src: item.url, alt: item.name })) || [],
    },
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
      className: ["h-[500px] w-full",
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
