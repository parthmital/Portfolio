import { cn } from "@/lib/cn";
import { navSections } from "@/site/navigation";

type Props = { activeSection: string };

export function BottomNav({ activeSection }: Props) {
	return (
		<nav
			aria-label="Sections"
			className="border-paper-edge bg-paper/95 safe-area-pb fixed right-0 bottom-0 left-0 z-50 border-t shadow-[0_-16px_36px_-28px_var(--shadow-ink)] backdrop-blur md:hidden"
		>
			<div className="flex items-center justify-around px-1 py-2">
				{navSections.map(({ id, shortLabel, icon: Icon }) => {
					const isActive = activeSection === id;
					return (
						<a
							key={id}
							href={`#${id}`}
							aria-current={isActive ? "location" : undefined}
							className={cn(
								"flex min-h-11 min-w-12 flex-col items-center justify-center gap-1 rounded-md px-1.5 py-1.5 transition-colors",
								isActive
									? "text-paper bg-graphite"
									: "text-graphite-muted hover:text-graphite-soft active:bg-paper-2",
							)}
						>
							<Icon className="h-5 w-5" strokeWidth={isActive ? 2 : 1.5} />
							<span className="text-[11px] leading-tight font-medium">
								{shortLabel}
							</span>
						</a>
					);
				})}
			</div>
		</nav>
	);
}
