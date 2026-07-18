import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/data";
import { Button } from "@/components/notebook/Button";

const links = [
	{ href: "#about", label: "About" },
	{ href: "#experience", label: "Experience" },
	{ href: "#projects", label: "Projects" },
	{ href: "#skills", label: "Skills" },
	{ href: "#education", label: "Education" },
	{ href: "#contact", label: "Contact" },
];

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
	if (typeof window === "undefined") return "dark";
	const storedTheme = window.localStorage.getItem("portfolio-theme");
	return storedTheme === "light" ? "light" : "dark";
}

export function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [theme, setTheme] = useState<Theme>(getInitialTheme);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		window.localStorage.setItem("portfolio-theme", theme);
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute("content", theme === "light" ? "#f2f2f2" : "#000000");
	}, [theme]);

	const toggleTheme = () => {
		setTheme((current) => (current === "dark" ? "light" : "dark"));
	};

	const ThemeIcon = theme === "dark" ? Sun : Moon;
	const nextTheme = theme === "dark" ? "light" : "dark";

	return (
		<nav
			className={cn(
				"border-paper-edge fixed top-0 right-0 left-0 z-50 w-full border-b transition-colors",
				scrolled
					? "bg-paper/90 shadow-[0_10px_30px_-24px_black] backdrop-blur"
					: "bg-paper/[0.35] backdrop-blur-sm",
			)}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
				<a
					href="#top"
					className="font-arch text-graphite retrace flex items-center gap-2.5 text-xl"
				>
					<img
						src="/Portfolio Website.svg"
						alt="Portfolio Logo"
						className="theme-logo h-5 w-auto select-none"
					/>
					<span>{profile.name.split(" ")[0]}.</span>
				</a>
				<div className="text-graphite-soft hidden items-center gap-1 text-sm md:flex">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="retrace hover:text-graphite rounded-md px-3 py-2"
						>
							{l.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={toggleTheme}
						aria-label={`Switch to ${nextTheme} mode`}
						aria-pressed={theme === "light"}
						className="border-paper-edge bg-paper/60 text-graphite-soft hover:border-graphite-muted hover:text-graphite inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border transition-colors"
					>
						<ThemeIcon className="h-4 w-4" />
					</button>
					<Button variant="outline" size="sm" href={profile.resumeUrl}>
						Resume
					</Button>
				</div>
			</div>
		</nav>
	);
}
