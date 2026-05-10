import { describe, expect, it } from "vitest";
import { greet } from "./index";

describe("greet", () => {
  it("returns greeting message", () => {
    expect(greet("world")).toBe("Hello, world!");
  });
});
