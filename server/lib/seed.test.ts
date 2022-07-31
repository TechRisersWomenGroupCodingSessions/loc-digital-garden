import { it, expect } from "vitest";
import { exampleSeed } from "./seed"

it("word should be 4 letters long", () => {
    expect(exampleSeed.length > 1).toBe(true);
})
