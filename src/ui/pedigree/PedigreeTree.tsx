"use client";

import Image from "next/image";
import { useMemo } from "react";
import type { HorseOutDto } from "@/types/horse";
import { cn } from "../utils/cn";

const MAX_GENERATIONS = 3;

const KIND_LABEL: Record<HorseOutDto["kind"], string> = {
  horse: "Лошадь",
  pony: "Пони",
};

const clampGenerations = (value: number | undefined) => {
  if (!value) return MAX_GENERATIONS;
  return Math.min(Math.max(1, value), MAX_GENERATIONS);
};

const getPhoto = (horse?: HorseOutDto | null) =>
  horse?.photos?.[0]?.url ?? "/images/services/5.jpg";

type PedigreeCardProps = {
  horse: HorseOutDto | null;
  role?: "ancestor" | "child";
  onGalleryOpen?: (horse: HorseOutDto, startIndex: number) => void;
};

const PedigreeCard = ({
  horse,
  role = "ancestor",
  onGalleryOpen,
}: PedigreeCardProps) => {
  const showGalleryButton =
    horse && (horse.photos?.length ?? 0) > 1 && onGalleryOpen;
  const photoSrc = getPhoto(horse);

  return (
    <div
      className={cn(
        "flex min-w-[200px] max-w-[220px] flex-col overflow-hidden rounded-3xl border border-[#d3c6aa] bg-white shadow-lg",
        role === "child" && "bg-[#fdfaf4]",
        !horse && "opacity-50"
      )}
    >
      <div className="relative h-32 w-full bg-[#e2d6bc]">
        <Image
          src={photoSrc}
          alt={horse?.name ?? "РќРµС‚ РґР°РЅРЅС‹С…"}
          fill
          className="object-cover"
          sizes="240px"
        />
      </div>
      <div className="flex flex-col gap-2 px-4 py-3 text-sm text-[#2f3600]">
        <h3 className="text-lg font-semibold leading-tight">
          {horse?.name ?? "РќРµРёР·РІРµСЃС‚РЅРѕ"}
        </h3>
        {horse?.breed?.name && (
          <p className="text-xs text-[#4b4d2f]">РџРѕСЂРѕРґР°: {horse.breed.name}</p>
        )}
        {horse?.kind !== undefined && (
          <p className="text-xs text-[#4b4d2f]">
            РўРёРї: {KIND_LABEL[horse.kind] ?? "вЂ”"}
          </p>
        )}
        {horse?.bdate_formatted && (
          <p className="text-xs text-[#4b4d2f]">
            Р РѕР¶РґРµРЅР°: {horse.bdate_formatted}
          </p>
        )}
        {horse?.ddate_formatted && (
          <p className="text-xs text-[#4b4d2f]">
            РЈРјРµСЂР»Р°: {horse.ddate_formatted}
          </p>
        )}
        {showGalleryButton && (
          <button
            type="button"
            onClick={() => horse && onGalleryOpen?.(horse, 0)}
            className="mt-2 self-start rounded-full bg-[#f0e7cf] px-3 py-1 text-xs font-medium text-[#2f3600] hover:bg-[#e4d8bd]"
          >
            РЎРјРѕС‚СЂРµС‚СЊ С„РѕС‚Рѕ
          </button>
        )}
      </div>
    </div>
  );
};

type AncestorRows = Array<Array<HorseOutDto | null>>;

const buildRows = (
  pedigree: HorseOutDto["pedigree"],
  generations: number
): AncestorRows => {
  const rows: AncestorRows = [];
  if (!pedigree) return rows;

  let current: Array<HorseOutDto | null> = [
    pedigree.sire ?? null,
    pedigree.dam ?? null,
  ];

  for (let level = 0; level < generations; level += 1) {
    rows.push(current);

    const next: Array<HorseOutDto | null> = [];
    current.forEach((node) => {
      next.push(node?.pedigree?.sire ?? null, node?.pedigree?.dam ?? null);
    });

    if (next.every((node) => !node)) break;
    current = next;
  }

  return rows;
};

const RowGrid = ({
  entries,
  onGalleryOpen,
}: {
  entries: Array<HorseOutDto | null>;
  onGalleryOpen?: (horse: HorseOutDto, startIndex: number) => void;
}) => (
  <div
    className="grid gap-3"
    style={{
      gridTemplateColumns: `repeat(${entries.length}, minmax(210px, 1fr))`,
    }}
  >
    {entries.map((horse, index) => (
      <div
        key={`${index}-${horse?.id ?? "null"}`}
        className="flex justify-center"
      >
        <PedigreeCard horse={horse} onGalleryOpen={onGalleryOpen} />
      </div>
    ))}
  </div>
);

export type PedigreeTreeProps = {
  pedigree?: HorseOutDto["pedigree"];
  generations?: number;
  onGalleryOpen?: (horse: HorseOutDto, startIndex: number) => void;
  className?: string;
};

export function PedigreeTree({
  pedigree,
  generations,
  onGalleryOpen,
  className,
}: PedigreeTreeProps) {
  const rows = useMemo(
    () => buildRows(pedigree, clampGenerations(generations)),
    [pedigree, generations]
  );

  return (
    <div
      className={cn(
        "overflow-x-auto overflow-y-visible rounded-[32px] border border-[#d3c6aa] bg-white/70 p-6",
        className
      )}
    >
      {rows.length > 0 ? (
        <div className="flex w-fit flex-col gap-6">
          {rows.map((entries, index) => (
            <RowGrid
              key={index}
              entries={entries}
              onGalleryOpen={onGalleryOpen}
            />
          ))}
        </div>
      ) : (
        <div className="w-64 text-xs text-[#4b4d2f]">
          Р”Р°РЅРЅС‹Рµ Рѕ СЂРѕРґРѕСЃР»РѕРІРЅРѕР№ РЅРµРґРѕСЃС‚СѓРїРЅС‹
        </div>
      )}
    </div>
  );
}
