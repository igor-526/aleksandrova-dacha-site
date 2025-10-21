import { Horse, Horses } from "@/types/Horses";
import { BASE_URL } from "./config";

const horses = {
  getHorses: async (): Promise<Horses> => {
    const url = `${BASE_URL}/horses/?pedigree=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items;
  },

  getHorse: async (id: number): Promise<Horse> => {
    const url = `${BASE_URL}/horses/${id}/?pedigree=3`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
};

export default horses;
