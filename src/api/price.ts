import { Service, ServiceForCard, ServicesApi } from "@/types/ServicesType";
import services_bd from "./lib/serviсes";

const price: ServicesApi = {
  convertToServiceForCard(service: Service): ServiceForCard {
    if (service.subname) {
      const priceTable = { head: [], body: [] };
    }
  },
};
export default price;
