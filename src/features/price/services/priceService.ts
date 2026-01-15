import { priceDetail, priceList } from "@/api/price";
import { priceGroupDetail } from "@/api/priceGroups";
import { ApiResult, ApiListPaginatedResponseType, PriceGroupOutDto } from "@/types";
import { PriceListQueryParams, PriceOutDto } from "@/types/prices";
import { UUID } from "crypto";

export const fetchPriceGroup = async (priceGroupId: UUID): Promise<ApiResult<PriceGroupOutDto>> => {
    return await priceGroupDetail(priceGroupId);
}

export const fetchPriceList = async (pageName: string): Promise<ApiResult<ApiListPaginatedResponseType<PriceOutDto>>> => {
    const params: PriceListQueryParams = {
        groups: pageName,
        limit: 100,
        offset: 0,
    };
    return await priceList(params);
}

export const fetchPriceDetail = async (slug: string): Promise<ApiResult<PriceOutDto>> => {
    const params = {
        page_data: true,
        tables: true,
    };
    return await priceDetail(slug, params);
}