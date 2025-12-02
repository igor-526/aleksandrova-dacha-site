import fs from "fs";
import path from "path";
import { ServiceCardProps } from "../../ServiceCard";
import { GalleryGridProps } from "@/ui";

export function getImages(folderPath: string): GalleryGridProps["items"] {
  const normalizedFolder = folderPath
    .replace(/^[\\/]+/, "")
    .replace(/\\/g, "/");
  const directoryPath = path.join(process.cwd(), "public", normalizedFolder);

  if (!fs.existsSync(directoryPath)) return [];

  return fs
    .readdirSync(directoryPath)
    .filter((fileName) => /\.(avif|gif|jpe?g|png|webp)$/i.test(fileName))
    .sort()
    .map((fileName) => ({
      src: path.posix.join("/", normalizedFolder, fileName),
      alt: fileName
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]+/g, " ")
        .trim(),
    }));
}

export const services: ServiceCardProps[] = [
  {
    id: 1,
    name: "Экипаж Виктория",
    description:
      "Прогулочный изумрудный экипаж'Виктория', с одной или парой лошадей в упряжке. 4-х местный. Откидной капюшон.",
    images: getImages(
      "images/services/rental/carriages/carriage-with-one-horse"
    ),

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "onsite", title: "в клубе", align: "center" },
        { key: "outside", title: "с выездом", align: "center" },
      ],
      rows: [
        {
          service: "30 мин",
          onsite: "1 200 ₽",
          outside: "1 300 ₽",
        },
      ],
    },
  },
  {
    id: 2,
    name: "VIP карета",
    description:
      "Белая VIP-карету 'Glass Lando' в упряжке пары белых лошадей. Карета-кабриолет с откидной крышей. Салон - кожа. Немецкое качество. 4-х местный.",
    images: getImages(
      "images/services/rental/carriages/lux-white-carriage-with-two-horses"
    ),

    tablePrice: {
      columns: [
        { key: "service", title: "" },
        { key: "onsite", title: "в клубе", align: "center" },
        { key: "outside", title: "с выездом", align: "center" },
      ],
      rows: [
        {
          service: "30 мин",
          onsite: "1 200 ₽",
          outside: "1 300 ₽",
        },
      ],
    },
  },
];

export const dataTextAboutTeaser = {
  title: "Аренда экипажей",
  text: [
    "Аренда кареты, экипажа или санок запряженных одной, парой или тройкой лошадей или пони! Имеется парк в количестве 6-и экипажей, карет, и 10 саней разного размера и количества посадочных мест. Все кареты оборудованы ручными и ножными тормозами, сделаны в Германии, Польше, России - безопасные и качественные.",
  ],
  ctaLabel: "Заказать",
  ctaHref: "/",
};
