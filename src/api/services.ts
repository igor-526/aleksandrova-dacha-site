const BASE_URL = "https://apidev.aleksandrova-dacha.ru/api/";

export const services = {
  getServices: async () => {
    const res = await fetch(`${BASE_URL}price/`);
    const data = await res.json();
    return data;
  },

  getService: async (slug: string) => {
    const res = await fetch(`${BASE_URL}price/${slug}?tables=true`);
    const data = await res.json();
    return data;
  },
};
