import { Horse, Horses } from "@/types/Horses";
import { get } from "./config";

const horses = {
  getHorses: async (): Promise<Horses> => {
    const data = await get<{ items: Horses }>("/horses/", { pedigree: 1 });
    return data.items;
  },

  getHorse: async (id: number): Promise<Horse> => {
    return get<Horse>(`/horses/${id}/`, { pedigree: 3 });
  },
};

export default horses;
