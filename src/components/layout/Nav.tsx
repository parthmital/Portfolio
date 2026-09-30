import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import { profile } from "@/data";
import { Button } from "@/components/notebook";
import { useTheme } from "@/hooks/useTheme";
import { logoUrl, navSections } from "@/site/navigation";

export function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

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
						src={logoUrl}
						alt="Portfolio Logo"
						className="theme-logo h-5 w-auto select-none"
					/>
					<span>{profile.name.split(" ")[0]}.</span>
				</a>
				<div className="text-graphite-soft hidden items-center gap-1 text-sm md:flex">
					{navSections.map(({ id, label }) => (
						<a
							key={id}
							href={`#${id}`}
							className="retrace hover:text-graphite rounded-md px-3 py-2"
						>
							{label}
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
