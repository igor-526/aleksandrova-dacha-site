export type StaticInformationAvailableAsType = "string" | "number" | "float" | "boolean" | "json" | "date" | "time" | "datetime"

export type StaticInformationListQueryParamsType = {
    admin?: boolean,
    as_type?: StaticInformationAvailableAsType[]
    name?: string
    title?: string
}