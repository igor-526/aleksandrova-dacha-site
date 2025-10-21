type Service = {
  service: string;
  description?: string;
  image?: string;
  price: string[] | Service[];
};

export type Price = {
  tableName: string;
  header: { row: { amoutCol: number; colName: string }[] }[];
  body: Service[];
}[];
