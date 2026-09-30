import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

const storageKey = "portfolio-theme";
const themeColors: Record<Theme, string> = {
	light: "#f2f2f2",
	dark: "#000000",
};

function getInitialTheme(): Theme {
	if (typeof window === "undefined") return "dark";
	return window.localStorage.getItem(storageKey) === "light" ? "light" : "dark";
}

/** Persisted light/dark theme applied to the document root. */
export function useTheme() {
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		window.localStorage.setItem(storageKey, theme);
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute("content", themeColors[theme]);
	}, [theme]);

	const toggleTheme = () =>
		setTheme((current) => (current === "dark" ? "light" : "dark"));

	return { theme, toggleTheme };
}
