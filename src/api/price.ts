import { Price } from "@/types/Price";
import { get, MOCK_BASE_URL } from "./config";

const price = {
  getPrice: async (): Promise<Price> => {
    const url = `${MOCK_BASE_URL}/mock_price.json`;
    return get<Price>(url);
  },
};

export default price;
