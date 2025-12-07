import fs from "fs";
import path from "path";
import { GalleryGridProps } from "@/ui";

export function getImagesFromFolder(
  folderPath: string
): GalleryGridProps["items"] {
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
