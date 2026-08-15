import { horseDetail, horseList } from "@/api/horse";
import { horseBreedList } from "@/api/horseBreeds";
import { ApiResult, HorseOutDto, HorseListQueryParams, ApiListPaginatedResponseType, HorseBreedOutDto } from "@/types";

export type HorseListColumns = 1 | 2 | 3 | 5;

export const getBreedParts = (breedName?: string | null) => {
    const trimmedName = breedName?.trim() ?? "";

    if (!trimmedName) {
        return { groupName: "", privateName: "" };
    }

    const parts = trimmedName
        .split("|")
        .map((part) => part.trim())
        .filter(Boolean);

    if (parts.length <= 1) {
        return { groupName: trimmedName, privateName: trimmedName };
    }

    return {
        groupName: parts[0],
        privateName: parts[parts.length - 1],
    };
};

export const getBreedGroupName = (breedName?: string | null) => getBreedParts(breedName).groupName;

export const getPrivateBreedName = (breedName?: string | null) => {
    const { privateName, groupName } = getBreedParts(breedName);
    return privateName || groupName;
};

export const getBreedGroupKey = (breedName?: string | null) => getBreedGroupName(breedName).trim().toLocaleLowerCase();

export const getHorseListPageSize = (columns: HorseListColumns, visibleRows: number) => {
    const maxColumns = columns === 1 ? 1 : columns === 2 ? 2 : columns === 3 ? 3 : 5;
    return Math.max(1, maxColumns * visibleRows);
};

export const fetchHorseList = async (
    params: HorseListQueryParams = {},
    serviceNames?: string | string[]
): Promise<ApiResult<ApiListPaginatedResponseType<HorseOutDto>>> => {
    const normalizedParams: HorseListQueryParams = {
        this_stable: true,
        sort: ["-sex", "name"],
        pedigree: 1,
        limit: 10,
        offset: 0,
        ...params,
        ...(serviceNames ? { service_names: Array.isArray(serviceNames) ? serviceNames : [serviceNames] } : {}),
    };

    return await horseList(normalizedParams);
}

export const fetchHorseDetail = async (name: string): Promise<ApiResult<HorseOutDto>> => {
    const params = {
        pedigree: 3,
    };
    return await horseDetail(name, params);
}

export const fetchBreedList = async (kind?: "horse" | "pony", limit: number = 100) => {
    return await horseBreedList({ kind, limit, offset: 0 });
}

export type HorsesByBreed = {
    breed: HorseBreedOutDto;
    horses: HorseOutDto[];
    total: number;
};

export const fetchHorsesByBreeds = async (
    kind: "horse" | "pony",
    serviceNames?: string | string[]
): Promise<HorsesByBreed[]> => {
    const breedsResult = await fetchBreedList(kind);

    if (breedsResult.status !== "ok" || !breedsResult.data?.items) {
        return [];
    }

    const breeds = breedsResult.data.items;
    const groupedBreeds = new Map<string, { breed: HorseBreedOutDto; breedIds: string[] }>();

    for (const breed of breeds) {
        const groupKey = getBreedGroupKey(breed.name);
        const groupName = getBreedGroupName(breed.name);

        if (!groupKey) {
            continue;
        }

        const existingGroup = groupedBreeds.get(groupKey);
        const normalizedBreed = {
            ...breed,
            name: groupName,
            short_name: getPrivateBreedName(breed.short_name) || breed.short_name,
        };

        if (existingGroup) {
            existingGroup.breedIds.push(breed.id);
            continue;
        }

        groupedBreeds.set(groupKey, {
            breed: normalizedBreed,
            breedIds: [breed.id],
        });
    }

    const horsesByBreeds: HorsesByBreed[] = [];

    for (const entry of groupedBreeds.values()) {
        const horsesResult = await fetchHorseList(
            {
                breed_ids: entry.breedIds as HorseListQueryParams["breed_ids"],
                kind: [kind],
                limit: 100,
                offset: 0,
            },
            serviceNames
        );

        if (horsesResult.status === "ok" && horsesResult.data?.items) {
            horsesByBreeds.push({
                breed: entry.breed,
                horses: horsesResult.data.items,
                total: horsesResult.data.total,
            });
        }
    }

    return horsesByBreeds;
}
