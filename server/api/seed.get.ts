import { exampleSeed } from "../lib/seed"

export default defineEventHandler((event) => {
    return {
        seed: exampleSeed
    }
});