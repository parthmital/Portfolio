import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const storageKey = "portfolio-theme";
const themeColors: Record<Theme, string> = {
	light: "#f2f2f2",
	dark: "#000000",
};

// Storage can throw when blocked (private browsing, disabled cookies); the
// theme then still works for the visit but is not remembered.
function readStoredTheme(): Theme {
	try {
		return window.localStorage.getItem(storageKey) === "light"
			? "light"
			: "dark";
	} catch {
		return "dark";
	}
}

function storeTheme(theme: Theme) {
	try {
		window.localStorage.setItem(storageKey, theme);
	} catch {
		// Not persisted; see readStoredTheme.
	}
}

/** Persisted light/dark theme applied to the document root. */
export function useTheme() {
	const [theme, setTheme] = useState<Theme>(() =>
		typeof window === "undefined" ? "dark" : readStoredTheme(),
	);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		storeTheme(theme);
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute("content", themeColors[theme]);
	}, [theme]);

	const toggleTheme = () =>
		setTheme((current) => (current === "dark" ? "light" : "dark"));

	return { theme, toggleTheme };
}
