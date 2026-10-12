import { describe, expect, it } from "vitest";
import { newTabLinkProps } from "./links";

describe("newTabLinkProps", () => {
	it("keeps in-page anchors and mail links in the current tab", () => {
		for (const href of ["#projects", "mailto:someone@example.com"]) {
			expect(newTabLinkProps(href)).toEqual({
				target: undefined,
				rel: undefined,
			});
		}
	});

	it("opens sites and files in an isolated new tab", () => {
		for (const href of [
			"https://github.com/parthmital",
			"/Parth_Mital_Resume.pdf",
		]) {
			expect(newTabLinkProps(href)).toEqual({
				target: "_blank",
				rel: "noopener noreferrer",
			});
		}
	});
});
