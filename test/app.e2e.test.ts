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

  it("includes basic metadata in template", async () => {
    const html = await $fetch("/template");
    const elements = load(html);
    const titles = elements("h2").text();
    const paragraphs = elements("p").text();

    expect(titles).toBe("Title of the page");
    expect(paragraphs).toContain("Boaty McBoatface2022-11-30T00:00:00.000Z2022-11-30T00:00:00.000ZExample entry content");
  });
});
