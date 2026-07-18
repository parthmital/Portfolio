import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
	User,
	BriefcaseBusiness,
	FolderKanban,
	Wrench,
	GraduationCap,
	Mail,
} from "lucide-react";

const navItems = [
	{ id: "about", label: "About", icon: User },
	{ id: "experience", label: "Work", icon: BriefcaseBusiness },
	{ id: "projects", label: "Projects", icon: FolderKanban },
	{ id: "skills", label: "Skills", icon: Wrench },
	{ id: "education", label: "Education", icon: GraduationCap },
	{ id: "contact", label: "Contact", icon: Mail },
];

export function BottomNav() {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ rootMargin: "-40% 0px -40% 0px", threshold: 0 },
		);

		navItems.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const prefersReducedMotion = window.matchMedia(
				"(prefers-reduced-motion: reduce)",
			).matches;
			element.scrollIntoView({
				behavior: prefersReducedMotion ? "auto" : "smooth",
			});
		}
	};

	return (
		<nav className="border-paper-edge bg-paper/95 safe-area-pb fixed right-0 bottom-0 left-0 z-50 border-t shadow-[0_-16px_36px_-28px_black] backdrop-blur md:hidden">
			<div className="flex items-center justify-around px-1 py-2">
				{navItems.map(({ id, label, icon: Icon }) => {
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
							aria-label={`Go to ${label}`}
							aria-current={isActive ? "page" : undefined}
						>
							<Icon className="h-5 w-5" strokeWidth={isActive ? 2 : 1.5} />
							<span className="text-[10px] leading-tight font-medium">
								{label}
							</span>
						</button>
					);
				})}
			</div>
		</nav>
	);
}
