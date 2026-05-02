import { creativeSkillGroups } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

export function Skills() {
	return (
		<PaperSheet id="skills" variant="alt">
			<SectionHeading
				eyebrow="// page 4"
				title="My Creative Side"
				annotation="Tools and skills outside of coding."
			/>

			<div className="grid gap-6 sm:grid-cols-2">
				{creativeSkillGroups.map((group) => (
					<div key={group.label}>
						<h3 className="font-arch text-graphite mb-2 text-lg">
							{group.label}
						</h3>
						<div className="flex flex-wrap gap-2">
							{group.items.map((item) => (
								<span key={item} className="tag">
									{item}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</PaperSheet>
	);
}
