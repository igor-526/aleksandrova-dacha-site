import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import HorseCard from "./HorseCard";
import type { HorseOutDto } from "@/types";

describe("HorseCard", () => {
  it("renders parents from foal parents data", () => {
    const horse = {
      id: "1",
      slug: "test",
      name: "Ласточка",
      kind: "horse",
      sex: "female",
      this_stable: false,
      bdate_formatted: null,
      ddate_formatted: null,
      age: 3,
      photos: [],
      breed: { id: "breed-1", name: "Тяжеловоз", short_name: "Тяж." },
      coat_color: { id: "coat-1", name: "Гнедая", short_name: "гн." },
      parents: {
        sire: { id: "sire-1", name: "Сокол" },
        dam: { id: "dam-1", name: "Бурка" },
      },
    } as unknown as HorseOutDto;

    const html = renderToStaticMarkup(createElement(HorseCard, { horse }));

    expect(html).toContain("Сокол");
    expect(html).toContain("Бурка");
  });
});
