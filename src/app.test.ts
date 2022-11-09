import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";
import App from "../src/app.vue";

describe("app", () => {
	it("renders as expected", () => {
		// eslint-disable-next-line @typescript-eslint/unbound-method
		const { getByText } = render(App, {
			slots: { default: "<p>My first blog post</p>" },
		});
		expect(getByText("My first blog post")).toBeTruthy();
	});
});
