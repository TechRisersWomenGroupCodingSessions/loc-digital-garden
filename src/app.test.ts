import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import App from "../src/app.vue";

describe("app", () => {
  it("renders as expected", () => {
    const wrapper = shallowMount(App, {
      slots: { default: `<p>My first blog post</p>` }
    });
    expect(wrapper.find('[data-testid="slot-content"]').text()).toBe(
      "My first blog post"
    );
  });
});
