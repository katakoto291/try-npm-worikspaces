import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Page from "./page";

describe("Page", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders message returned by backend", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify({ message: "Hello, frontend!" }), {
        headers: { "content-type": "application/json" }
      })
    );

    const ui = await Page();
    render(ui);

    expect(screen.getByText("Hello, frontend!")).toBeInTheDocument();
  });

  it("falls back when backend is unreachable", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("boom"));

    const ui = await Page();
    render(ui);

    expect(screen.getByText(/backend unreachable/)).toBeInTheDocument();
  });
});
