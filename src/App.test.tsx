import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import App from "./App";
import { experience, profile, projects } from "@/data";
import { navSectionIds } from "@/site/navigation";

const html = renderToStaticMarkup(<App />);
const doc = new DOMParser().parseFromString(html, "text/html");
const text = doc.body.textContent ?? "";

describe("App", () => {
	it("renders one section for every navigation anchor", () => {
		for (const id of ["top", ...navSectionIds]) {
			expect(doc.querySelectorAll(`section#${id}`)).toHaveLength(1);
		}
	});

	it("links every in-page anchor to an existing section", () => {
		const anchors = doc.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
		expect(anchors.length).toBeGreaterThan(0);
		for (const a of anchors) {
			expect(
				doc.getElementById(a.getAttribute("href")!.slice(1)),
			).not.toBeNull();
		}
	});

	it("opens off-page links in an isolated new tab", () => {
		for (const a of doc.querySelectorAll<HTMLAnchorElement>("a[href]")) {
			const href = a.getAttribute("href")!;
			const inPlace = href.startsWith("#") || href.startsWith("mailto:");
			expect(a.getAttribute("target")).toBe(inPlace ? null : "_blank");
			expect(a.getAttribute("rel")).toBe(
				inPlace ? null : "noopener noreferrer",
			);
		}
	});

	it("renders every project and experience entry", () => {
		for (const project of projects) {
			expect(
				doc.querySelector(`a[href="${project.github}"] span`)?.textContent,
			).toBe(project.title);
		}
		for (const entry of experience) {
			expect(text).toContain(entry.role);
			expect(text).toContain(entry.summary);
		}
	});

	it("links the resume and contact details", () => {
		for (const href of [
			profile.resumeUrl,
			...profile.contacts.map((contact) => contact.href),
		]) {
			expect(doc.querySelector(`a[href="${href}"]`)).not.toBeNull();
		}
	});

	it("gives every image and icon-only control an accessible name", () => {
		for (const img of doc.querySelectorAll("img")) {
			expect(img.hasAttribute("alt")).toBe(true);
		}
		for (const button of doc.querySelectorAll("button")) {
			const name =
				button.getAttribute("aria-label") ?? button.textContent?.trim() ?? "";
			expect(name).not.toBe("");
		}
	});
});
