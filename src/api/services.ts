import { Services } from "@/types/Services";
import { get, MOCK_BASE_URL } from "./config";

const services = {
  getServices: async (): Promise<Services> => {
    const url = `${MOCK_BASE_URL}/mock_services.json`;
    return get<Services>(url);
  },
};

export default services;
