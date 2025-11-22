export type Service = {
  name: string;
  description?: string;
  image?: string;
  stickers?: string[];
  price?: number | string;
  subname?: Service[];
};

export type ServiceForCard = {
  name: string;
  description?: string;
  image?: string;
  stickers?: string[];
  price?: number | string;
  priceTable?: {
    head: { title: string; colspan: number }[][];
    body: { title: string | number; colspan: number }[];
  };
};

export type ServiceGroup = {
  id: string;
  groupName: string;
  services: Service[];
}[];

export type ServiceGroupForCards = {
  id: string;
  groupName: string;
  services: ServiceForCard[];
};

export type ServicesApi = {
  convertToServiceForCard: (service: Service) => ServiceForCard;
  getServiceGroup: (
    service: ServiceGroup,
    id: string
  ) => ServiceGroupForCards | undefined;
};
