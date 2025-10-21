type Pedigree = {
  id: number;
  name: string;
  breed: {
    id: number;
    name: string;
  };
  sex: number;
  description: string;
  age: number;
  kind: number;
  owner: null;
  bdate_formatted: string;
  ddate_formatted: null;
  photos: {
    id: number;
    image: string;
  }[];
  sire?: Pedigree;
  dame?: Pedigree;
};

export type Horse = {
  id: number;
  name: string;
  breed: {
    id: number;
    name: string;
  };
  sex: number;
  description: string;
  age: number;
  kind: number;
  owner: null;
  bdate_formatted: string;
  ddate_formatted: null;
  photos: {
    id: number;
    image: string;
  }[];
  pedigree?: {
    sire: Pedigree;
    dame: Pedigree;
  };
  children?: Horse[];
};

export type Horses = Horse[];
