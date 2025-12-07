import apiFetch, { addQueryParamsToUrl } from "./client";
import { UUID } from "crypto";
import { ApiResult, ApiListPaginatedResponseType, SiteSettingListQueryParams, SiteSettingOutDto } from "@/types";

export const siteSettingList = (
    params: SiteSettingListQueryParams = {},
    options?: RequestInit,
): Promise<ApiResult<ApiListPaginatedResponseType<SiteSettingOutDto>>> => {
    const paramtrizedUrl = addQueryParamsToUrl("/site_settings", params);
    return apiFetch<ApiListPaginatedResponseType<SiteSettingOutDto>>(paramtrizedUrl, options);
};

export const siteSettingDetail = (
    siteSettingId: UUID,
): Promise<ApiResult<SiteSettingOutDto>> => {
    return apiFetch<SiteSettingOutDto>(`/site_settings/${siteSettingId}`, {
        method: "GET",
    });
};