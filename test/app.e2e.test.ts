import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";
import { load } from "cheerio";

describe("My test", async () => {
  await setup({});

  it("displays expected content", async () => {
    const html = await $fetch("/");
    const elements = load(html);
    const titles = elements("h1").text();
    expect(titles).toBe("LoC Digital Garden");
  });
});
