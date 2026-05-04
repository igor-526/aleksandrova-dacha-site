import { horseDetail, horseList } from "@/api/horse";
import { ApiResult, HorseOutDto, HorseListQueryParams, ApiListPaginatedResponseType } from "@/types";

export type HorseListColumns = 1 | 2 | 3 | 5;

export const getHorseListPageSize = (columns: HorseListColumns, visibleRows: number) => {
    const maxColumns = columns === 1 ? 1 : columns === 2 ? 2 : columns === 3 ? 3 : 5;
    return Math.max(1, maxColumns * visibleRows);
};

export const fetchHorseList = async (
    params: HorseListQueryParams = {}
): Promise<ApiResult<ApiListPaginatedResponseType<HorseOutDto>>> => {
    const normalizedParams: HorseListQueryParams = {
        pedigree: 1,
        limit: 10,
        offset: 0,
        ...params,
    };

    return await horseList(normalizedParams);
}

export const fetchHorseDetail = async (name: string): Promise<ApiResult<HorseOutDto>> => {
    const params = {
        pedigree: 3,
    };
    return await horseDetail(name, params);
}
