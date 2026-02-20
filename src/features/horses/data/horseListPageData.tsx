import { HorseOutDto } from "@/types";
import { fetchHorseList } from "./horseService";
import { HorseListPageProps } from "../ui/HorseListPage";

export const getHorseListPageData = async (): Promise<HorseListPageProps> => {

  const getHorses = async (): Promise<HorseOutDto[]> => {
    const result = await fetchHorseList(["horse", "pony"]);
    return result.status === "ok" && result.data ? result.data.items : [];
  };

  const horses = await getHorses();

  return {
    horses,
  };
}