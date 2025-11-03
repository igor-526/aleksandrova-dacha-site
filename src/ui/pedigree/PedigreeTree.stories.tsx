import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PedigreeTree } from "./PedigreeTree";
import type { HorseType } from "@/types/horse";

const createHorse = (
  id: number,
  name: string,
  overrides: Partial<HorseType> = {}
): HorseType => ({
  id,
  name,
  breed: overrides.breed ?? { id: id, name: "Порода" },
  sex: overrides.sex ?? 0,
  description: overrides.description ?? "Описание лошади",
  age: overrides.age ?? 5,
  bdate_formatted: overrides.bdate_formatted ?? "2019",
  ddate_formatted: overrides.ddate_formatted ?? null,
  photos: overrides.photos ?? [],
  kind: overrides.kind,
  owner: overrides.owner,
  children: overrides.children,
  pedigree: overrides.pedigree,
});

const buildMockHorse = (): HorseType => {
  const greatGrandParents = Array.from({ length: 8 }).map((_, index) =>
    createHorse(100 + index, `ГП ${index + 1}`, { description: "Предок" })
  );

  const grandparents = [
    createHorse(20, "Дед 1", {
      pedigree: { sire: greatGrandParents[0], dame: greatGrandParents[1] },
    }),
    createHorse(21, "Бабушка 1", {
      pedigree: { sire: greatGrandParents[2], dame: greatGrandParents[3] },
    }),
    createHorse(22, "Дед 2", {
      pedigree: { sire: greatGrandParents[4], dame: greatGrandParents[5] },
    }),
    createHorse(23, "Бабушка 2", {
      pedigree: { sire: greatGrandParents[6], dame: greatGrandParents[7] },
    }),
  ];

  const parents = {
    sire: createHorse(10, "Отец", {
      pedigree: { sire: grandparents[0], dame: grandparents[1] },
    }),
    dame: createHorse(11, "Мать", {
      pedigree: { sire: grandparents[2], dame: grandparents[3] },
    }),
  };

  return createHorse(1, "Глория", {
    pedigree: parents,
    children: [
      createHorse(2, "Грация"),
      createHorse(3, "Грейс"),
      createHorse(4, "Грета"),
    ],
  });
};

const mockHorse = buildMockHorse();

const meta: Meta<typeof PedigreeTree> = {
  parameters: { layout: "docs" },
  tags: ["autodocs"],
  title: "UI/Pedigree/PedigreeTree",
  component: PedigreeTree,
  args: {
    pedigree: mockHorse.pedigree,
    generations: 3,
    onGalleryOpen: (horse) => console.log("Gallery open", horse.name),
  },
};

export default meta;

type Story = StoryObj<typeof PedigreeTree>;

export const Default: Story = {};

export const WithoutChildren: Story = {
  args: {
    pedigree: undefined,
  },
};
