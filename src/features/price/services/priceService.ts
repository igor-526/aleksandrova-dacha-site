import { priceList } from "@/api/price";
import { ApiResult, ApiListPaginatedResponseType } from "@/types";
import { PriceListQueryParams, PriceOutDto } from "@/types/prices";

export const fetchPriceList = async (pageName: string): Promise<ApiResult<ApiListPaginatedResponseType<PriceOutDto>>> => {
    const params: PriceListQueryParams = {
        groups: pageName,
        limit: 100,
        offset: 0,
    };
    return await priceList(params);
}