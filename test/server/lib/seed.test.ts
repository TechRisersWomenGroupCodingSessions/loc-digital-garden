import { it, expect } from "vitest";
import { exampleSeed } from "../../../src/server/lib/seed";

it("word should be  letters long", () => {
  expect(exampleSeed).toEqual("Some really awesome insight");
});
