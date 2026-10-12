import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";
import { Highlights } from "./Highlights";

// Tells React this environment supports act().
Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });

const container = document.body.appendChild(document.createElement("div"));
const root = createRoot(container);

afterEach(() => act(() => root.render(null)));

describe("Highlights", () => {
	it("shows the summary and toggles the points", () => {
		act(() =>
			root.render(<Highlights summary="Intro" items={["One", "Two"]} />),
		);

		const button = container.querySelector("button")!;
		const list = container.querySelector("ul")!;
		expect(container.querySelector("p")?.textContent).toBe("Intro");
		expect(button.getAttribute("aria-controls")).toBe(list.id);
		expect(button.getAttribute("aria-expanded")).toBe("false");
		expect(button.textContent).toBe("Show 2 highlights");
		expect(list.hidden).toBe(true);

		act(() => button.click());
		expect(button.getAttribute("aria-expanded")).toBe("true");
		expect(button.textContent).toBe("Hide highlights");
		expect(list.hidden).toBe(false);

		act(() => button.click());
		expect(list.hidden).toBe(true);
	});
});
