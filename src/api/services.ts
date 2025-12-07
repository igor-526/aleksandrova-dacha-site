import { PriceOutDto } from "@/types/prices";

const BASE_URL = "https://apidev.aleksandrova-dacha.ru/api/";

export const services = {
  getServices: async (group: string): Promise<PriceOutDto[]> => {
    const res = await fetch(`${BASE_URL}prices?group=${group}`);
    const data: { items: PriceOutDto[] } = await res.json();
    return data.items;
  },

  getService: async (slug: string): Promise<PriceOutDto> => {
    const res = await fetch(`${BASE_URL}prices/${slug}?tables=true`);
    const data: PriceOutDto = await res.json();

    return data;
  },

  getServicesWithTables: async () => {
    const dataServices: PriceOutDto[] = await services.getServices("");

    const servicesWithTables = dataServices.map(
      async (service) => await services.getService(service.slug)
    );
    return await Promise.all(servicesWithTables);
  },
};
