import type {ApiListPaginatedResponseType} from "./api";
import type {HorseBreedsType} from "./horseBreed";
import type {HorseOwnerType} from "./horseOwner";
import type {GalleryPhotoType} from "./gallery";
import { FilterListDataType } from "./filters";


type HorseSexType = 0 | 1 | 2;
type HorseKindType = 0 | 1;

export type HorsePedigree = {
    sire: HorseType | null,
    dame: HorseType | null,
}

export type HorseType = {
    id: number
    name: string
    breed: HorseBreedsType | null
    sex: HorseSexType,
    description: string
    age: number | null
    bdate_formatted: string | null
    ddate_formatted: string | null
    photos: GalleryPhotoType[]
    kind?: HorseKindType
    owner?: HorseOwnerType | null
    children?: HorseType[]
    pedigree?: HorsePedigree
}

export type HorseListQueryParamsType = {
    pedigree?: number
    limit?: number
    offset?: number
    name?: string | undefined
    description?: string | undefined
    breed?: number[]
    sex?: number[]
    kind?: number[]
}

export type HorseListResponseType = ApiListPaginatedResponseType<HorseType>

export type HorsePageMetadataType = {
    breedList: FilterListDataType[]
    kindList: FilterListDataType[]
    sexList: FilterListDataType[]
}
