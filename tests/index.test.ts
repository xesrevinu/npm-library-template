import { describe, expect, it } from "vitest";
import { createGreeting } from "../src/index.ts";

describe("createGreeting", () => {
  it("uses the default punctuation", () => {
    expect(createGreeting({ name: "template" })).toBe("Hello, template!");
  });

  it("supports a custom punctuation mark", () => {
    expect(createGreeting({ name: "template", punctuation: "?" })).toBe("Hello, template?");
  });
});
