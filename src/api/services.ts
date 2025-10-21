import { Services } from "@/types/Services";
import services_bd from "./services_bd";

const services = {
  getServices: (): Services => {
    const data = services_bd;
    return data;
  },
};

export default services;
