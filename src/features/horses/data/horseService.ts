import { horseDetail, horseList } from "@/api/horse";
import { horseBreedList } from "@/api/horseBreeds";
import { ApiResult, HorseOutDto, HorseListQueryParams, ApiListPaginatedResponseType, HorseBreedOutDto } from "@/types";

export type HorseListColumns = 1 | 2 | 3 | 5;

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
    const horsesByBreeds: HorsesByBreed[] = [];

    for (const breed of breeds) {
        // Загружаем сразу большее количество лошадей, чтобы избежать проблем с pagination по breed_ids
        const horsesResult = await fetchHorseList(
            {
                breed_ids: [breed.id],
                kind: [kind],
                limit: 100,
                offset: 0,
            },
            serviceNames
        );

        if (horsesResult.status === "ok" && horsesResult.data?.items) {
            horsesByBreeds.push({
                breed,
                horses: horsesResult.data.items, // Загружаем все доступные элементы сразу
                total: horsesResult.data.total,
            });
        }
    }

    return horsesByBreeds;
}
