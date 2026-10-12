import { useActiveSection } from "@/hooks/useActiveSection";
import { navSectionIds } from "@/site/navigation";
import { BottomNav } from "./BottomNav";
import { TopNav } from "./TopNav";

/** Page chrome: skip link, desktop top bar, and mobile bottom bar, sharing one section observer. */
export function SiteNavigation() {
	const activeSection = useActiveSection(navSectionIds);

	return (
		<>
			<a href="#main" className="skip-link">
				Skip to content
			</a>
			<TopNav activeSection={activeSection} />
			<BottomNav activeSection={activeSection} />
		</>
	);
}
