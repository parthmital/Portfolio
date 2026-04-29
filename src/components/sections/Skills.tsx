import { skillGroups } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

export function Skills() {
	return (
		<PaperSheet id="skills" variant="alt">
			<SectionHeading
				eyebrow="// page 4"
				title="Skills"
				annotation="Things I use, sorted in a way that makes sense."
			/>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{skillGroups.map((group) => (
					<div key={group.label}>
						<h3 className="font-arch text-graphite mb-2 text-lg">
							{group.label}
						</h3>
						<div className="flex flex-wrap gap-1.5">
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
