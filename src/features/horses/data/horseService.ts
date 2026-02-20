import { horseDetail, horseList } from "@/api/horse";
import { ApiResult, HorseOutDto, HorseListQueryParams, ApiListPaginatedResponseType } from "@/types";

export const fetchHorseList = async (kind: ("horse" | "pony")[]): Promise<ApiResult<ApiListPaginatedResponseType<HorseOutDto>>> => {
    const params: HorseListQueryParams = {
        kind: kind,
        pedigree: 1,
        limit: 10,
        offset: 0,
    };
    return await horseList(params);
}

export const fetchHorseDetail = async (name: string): Promise<ApiResult<HorseOutDto>> => {
    const params = {
        pedigree: 3,
    };
    return await horseDetail(name, params);
}