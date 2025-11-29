export type PricePhotoDto = {
  id: string;
  is_main: boolean;
  url: string;
};

export type PriceGroupDto = {
  id: string;
  name: string;
};

export type PriceTableCellDto = {
  value: string;
  annotation: string;
  cell_formatter: string[];
};

export type PriceTableRowDto = {
  cells: Record<string, PriceTableCellDto>;
};

export type PriceTableColumnDto = {
  key: string;
  title: string;
  annotation: string;
  cell_formatter: string[];
};

export type PriceTableDto = {
  columns: PriceTableColumnDto[];
  rows: PriceTableRowDto[];
};

export type PriceServiceDto = {
  id: string;
  name: string;
  slug: string;
  description: string;
  photos: PricePhotoDto[];
  groups: PriceGroupDto[];
  created_at: string;
  updated_at: string;
  page_data: string;
  price_tables: PriceTableDto[];
};

export type PriceServiceListDto = PriceServiceDto[];
