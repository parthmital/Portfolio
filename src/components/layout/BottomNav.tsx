import { cn } from "@/lib/cn";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navSectionIds, navSections } from "@/site/navigation";

function scrollToSection(id: string) {
	const element = document.getElementById(id);
	if (!element) return;
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;
	element.scrollIntoView({
		behavior: prefersReducedMotion ? "auto" : "smooth",
	});
}

export function BottomNav() {
	const activeSection = useActiveSection(navSectionIds);

	return (
		<nav className="border-paper-edge bg-paper/95 safe-area-pb fixed right-0 bottom-0 left-0 z-50 border-t shadow-[0_-16px_36px_-28px_black] backdrop-blur md:hidden">
			<div className="flex items-center justify-around px-1 py-2">
				{navSections.map(({ id, shortLabel, icon: Icon }) => {
					const isActive = activeSection === id;
					return (
						<button
							type="button"
							key={id}
							onClick={() => scrollToSection(id)}
							className={cn(
								"flex min-w-[48px] flex-col items-center gap-1 rounded-md px-1.5 py-1.5 transition-colors",
								isActive
									? "text-paper bg-graphite"
									: "text-graphite-muted hover:text-graphite-soft",
							)}
							aria-label={`Go to ${shortLabel}`}
							aria-current={isActive ? "page" : undefined}
						>
							<Icon className="h-5 w-5" strokeWidth={isActive ? 2 : 1.5} />
							<span className="text-[10px] leading-tight font-medium">
								{shortLabel}
							</span>
						</button>
					);
				})}
			</div>
		</nav>
	);
}
