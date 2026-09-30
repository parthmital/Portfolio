/**
 * Anchor attributes that open any off-page destination (sites, files such as
 * the resume PDF) in a new, isolated tab. In-page anchors and mailto links
 * stay in the current tab.
 */
export function newTabLinkProps(href: string) {
	const inPlace = href.startsWith("#") || href.startsWith("mailto:");
	return {
		target: inPlace ? undefined : "_blank",
		rel: inPlace ? undefined : "noopener noreferrer",
	};
}
