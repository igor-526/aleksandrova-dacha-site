// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { QuickServices } from "./QuickServices";

afterEach(cleanup);
it("PR-01 has four text links and no empty icon circles", () => {
  const items = ["rides", "farm", "rental", "breeding"].map((id) => ({ id, title: id, description: `text ${id}`, href: `/${id}` }));
  const { container } = render(<QuickServices items={items} />);
  expect(screen.getAllByRole("link")).toHaveLength(4);
  expect(container.querySelectorAll(".h-12.w-12.rounded-full")).toHaveLength(0);
  for (const item of items) expect(screen.getByRole("link", { name: `${item.title} ${item.description}` }).getAttribute("href")).toBe(item.href);
});
it("preserves optional icons for rides and the four original ride assets", () => {
  const { container } = render(<QuickServices items={[{ id: "ride", title: "Ride", description: "Ride text", icon: <svg data-testid="ride" /> }]} />);
  expect(container.querySelectorAll(".h-12.w-12.rounded-full")).toHaveLength(1);
  const source = readFileSync("src/features/price/services/Ride/ridePageDataService.tsx", "utf8");
  for (const name of ["tour", "individual", "group", "sport"]) {
    const path = `/icons/${name}.ico`;
    expect(source).toContain(path);
    expect(existsSync(`public${path}`)).toBe(true);
  }
});
