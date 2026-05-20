import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/data";
import { Button } from "@/components/notebook/Button";

const links = [
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "#skills", label: "Skills" },
	{ href: "#education", label: "Education" },
	{ href: "#contact", label: "Contact" },
];

export function Nav() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={cn(
				"border-paper-edge sticky top-0 z-30 w-full border-b transition-colors",
				scrolled ? "bg-paper/85 backdrop-blur" : "bg-transparent",
			)}
		>
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 sm:px-10">
				<a
					href="#top"
					className="font-arch text-graphite retrace flex items-center gap-2.5 text-xl"
				>
					<img
						src="/Portfolio Website.svg"
						alt="Portfolio Logo"
						className="h-5 w-auto select-none"
					/>
					<span>{profile.name.split(" ")[0]}.</span>
				</a>
				<div className="text-graphite-soft hidden items-center gap-6 text-sm md:flex">
					{links.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="retrace hover:text-graphite"
						>
							{l.label}
						</a>
					))}
				</div>
				<div className="hidden items-center gap-2 md:flex">
					<Button variant="ghost" size="sm" href={profile.resumes.ai}>
						Machine Learning
					</Button>
					<span className="text-graphite/30">|</span>
					<Button variant="outline" size="sm" href={profile.resumes.swe}>
						Software Engineering
					</Button>
				</div>
			</div>
		</nav>
	);
}
