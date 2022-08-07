import { exampleSeed } from "../lib/seed";

export default defineEventHandler(() => {
  return {
    seed: exampleSeed,
  };
});
