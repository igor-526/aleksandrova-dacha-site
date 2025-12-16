export type HorseType = {
  id: number;
  name: string;
  breed: {
    id: number;
    name: string;
  };
  sex: number;
  description: string;
  age: number;
  bdate_formatted: string;
  ddate_formatted: string | null;
  photos: Array<{
    image: string;
  }>;
  kind?: number;
  owner?: unknown;
  children?: HorseType[];
  pedigree?: {
    sire?: HorseType | null;
    dame?: HorseType | null;
  };
};


