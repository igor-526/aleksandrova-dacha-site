import apiFetch, { addQueryParamsToUrl } from "./client";
import { UUID } from "crypto";
import { ApiResult, ApiListPaginatedResponseType, PriceListQueryParams, PriceOutDto } from "@/types";

export const priceList = (
    params: PriceListQueryParams = {},
    options?: RequestInit,
): Promise<ApiResult<ApiListPaginatedResponseType<PriceOutDto>>> => {
    const paramtrizedUrl = addQueryParamsToUrl("/prices", params);
    return apiFetch<ApiListPaginatedResponseType<PriceOutDto>>(paramtrizedUrl, options);
};

export const priceDetail = (
    priceId: UUID,
    params?: { tables?: boolean; page_data?: boolean },
): Promise<ApiResult<PriceOutDto>> => {
    const paramtrizedUrl = addQueryParamsToUrl(`/prices/${priceId}`, params || {});
    return apiFetch<PriceOutDto>(paramtrizedUrl, {
        method: "GET",
    });
};