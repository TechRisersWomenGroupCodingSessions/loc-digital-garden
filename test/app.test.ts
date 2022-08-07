import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";

describe("My test", async () => {
  await setup({});

  it("displays expected content", async () => {
    const html = await $fetch("/");
    expect(html).toContain(
      "<h1>LoC Digital Garden</h1><p>An aggregated list of technical learning from the community</p>"
    );
  });
});
