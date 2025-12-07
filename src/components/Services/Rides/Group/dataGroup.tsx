import { getImagesFromFolder } from "@/api/imagesFromFolder";
import { GalleryGridProps } from "@/ui";

export const dataTextAboutTeaser = {
  title: "Групповые занятия. Абонементы.",
  text: [
    "Наши опытные инструкторы помогут вам освоить верховую езду или просто провести время в компании этих великолепных животных. Независимо от вашего уровня подготовки, у нас найдется подходящий вариант для каждого.",
  ],
  ctaLabel: "Выбрать абонемент",
  ctaHref: "/",
};

export const imagesGroup: GalleryGridProps["items"] = getImagesFromFolder(
  "images/services/rides/group/images"
);
