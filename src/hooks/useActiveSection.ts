import { useEffect, useState } from "react";

/**
 * Id of the section currently crossing the middle of the viewport.
 * Pass a stable (module-level) array so the observer is created once.
 */
export function useActiveSection(ids: readonly string[]) {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActiveSection(entry.target.id);
				});
			},
			{ rootMargin: "-40% 0px -40% 0px", threshold: 0 },
		);

		ids.forEach((id) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, [ids]);

	return activeSection;
}
