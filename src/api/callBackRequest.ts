import apiFetch from "./client";
import { ApiResult } from "@/types";
import { CallBackRequestInDto } from "@/types/callBackRequest";

export const callBackRequestCreate = (
    data: CallBackRequestInDto,
    options?: RequestInit,
): Promise<ApiResult<void>> => {
    return apiFetch<void>("/call_back_requests", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
        ...options,
    });
};
