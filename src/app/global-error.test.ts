// @vitest-environment jsdom

import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import GlobalError from "./global-error";
import { captureErrorOnce } from "../lib/observability/sentry";

vi.mock("../lib/observability/sentry", () => ({
  captureErrorOnce: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("GlobalError", () => {
  it("renders a stable fallback, captures once and invokes retry", () => {
    const error = new Error("controlled test error");
    const reset = vi.fn();
    const view = render(React.createElement(GlobalError, { error, reset }));

    expect(screen.getByRole("alert").textContent).toContain("Что-то пошло не так");
    expect(captureErrorOnce).toHaveBeenCalledTimes(1);

    view.rerender(React.createElement(GlobalError, { error, reset }));
    expect(captureErrorOnce).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole("button", { name: "Повторить" }));
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
