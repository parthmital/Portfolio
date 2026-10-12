import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";
import { profile } from "@/data";
import { ButtonLink } from "@/components/notebook";
import { useScrolled } from "@/hooks/useScrolled";
import { useTheme } from "@/hooks/useTheme";
import { logoUrl, navSections } from "@/site/navigation";

type Props = { activeSection: string };

export function TopNav({ activeSection }: Props) {
	const scrolled = useScrolled(12);
	const { theme, toggleTheme } = useTheme();

	const ThemeIcon = theme === "dark" ? Sun : Moon;
	const nextTheme = theme === "dark" ? "light" : "dark";

	return (
		<nav
			aria-label="Sections"
			className={cn(
				"border-paper-edge fixed top-0 right-0 left-0 z-50 w-full border-b transition-colors",
				scrolled
					? "bg-paper/90 shadow-[0_10px_30px_-24px_var(--shadow-ink)] backdrop-blur"
					: "bg-paper/[0.35] backdrop-blur-sm",
			)}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
				<a
					href="#top"
					className="font-arch text-graphite retrace flex min-h-11 items-center gap-2.5 text-xl"
				>
					<img
						src={logoUrl}
						alt=""
						className="theme-logo h-5 w-auto select-none"
					/>
					<span>{profile.name.split(" ")[0]}.</span>
				</a>
				<div className="text-graphite-soft hidden items-center gap-1 text-sm md:flex">
					{navSections.map(({ id, label }) => (
						<a
							key={id}
							href={`#${id}`}
							aria-current={activeSection === id ? "location" : undefined}
							className="retrace hover:text-graphite aria-[current]:text-graphite flex min-h-11 items-center rounded-md px-3 decoration-2 underline-offset-8 aria-[current]:underline"
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
						className="border-paper-edge bg-paper/60 text-graphite-soft hover:border-graphite-muted hover:text-graphite active:bg-paper-2 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border transition-colors"
					>
						<ThemeIcon className="h-4 w-4" strokeWidth={1.5} />
					</button>
					<ButtonLink href={profile.resumeUrl}>Resume</ButtonLink>
				</div>
			</div>
		</nav>
	);
}
