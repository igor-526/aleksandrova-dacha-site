import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import type { HorseOutDto } from "@/types/horse";
import { PedigreeTree } from "../pedigree/PedigreeTree";

const now = "2025-01-01T00:00:00Z";

const makeUuid = (seed: number): `${string}-${string}-${string}-${string}-${string}` =>
  `00000000-0000-4000-8000-${seed.toString().padStart(12, "0")}`;

const createHorse = (
  seed: number,
  name: string,
  overrides: Partial<HorseOutDto> = {}
): HorseOutDto => ({
  id: makeUuid(seed),
  slug: overrides.slug ?? `horse-${seed}`,
  name,
  kind: overrides.kind ?? "horse",
  sex: overrides.sex ?? "female",
  this_stable: overrides.this_stable ?? true,
  bdate_formatted: overrides.bdate_formatted ?? "2019",
  ddate_formatted: overrides.ddate_formatted ?? null,
  age: overrides.age ?? 6,
  created_at: overrides.created_at ?? now,
  updated_at: overrides.updated_at ?? null,
  photos: overrides.photos ?? [],
  pedigree: overrides.pedigree,
});

const buildMockHorse = (): HorseOutDto => {
  const greatGrandParents = Array.from({ length: 8 }).map((_, index) =>
    createHorse(100 + index, `GG ${index + 1}`)
  );

  const grandparents = [
    createHorse(20, "Grand Sire 1", {
      pedigree: { sire: greatGrandParents[0], dam: greatGrandParents[1], foals: [] },
    }),
    createHorse(21, "Grand Dam 1", {
      pedigree: { sire: greatGrandParents[2], dam: greatGrandParents[3], foals: [] },
    }),
    createHorse(22, "Grand Sire 2", {
      pedigree: { sire: greatGrandParents[4], dam: greatGrandParents[5], foals: [] },
    }),
    createHorse(23, "Grand Dam 2", {
      pedigree: { sire: greatGrandParents[6], dam: greatGrandParents[7], foals: [] },
    }),
  ];

  const parents = {
    sire: createHorse(10, "Sire", {
      sex: "male",
      pedigree: { sire: grandparents[0], dam: grandparents[1], foals: [] },
    }),
    dam: createHorse(11, "Dam", {
      sex: "female",
      pedigree: { sire: grandparents[2], dam: grandparents[3], foals: [] },
    }),
    foals: [],
  };

  return createHorse(1, "Main Horse", {
    pedigree: parents,
    sex: "female",
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
