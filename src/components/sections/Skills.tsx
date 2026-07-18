import { creativeSkillGroups, technicalSkillGroups } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

export function Skills() {
	return (
		<PaperSheet id="skills">
			<SectionHeading
				eyebrow="// page 5"
				title="Skills"
				annotation="Technical stack from the resume, with creative tools kept visible."
			/>

			<div className="skill-list">
				{technicalSkillGroups.map((group) => (
					<div key={group.label} className="skill-row">
						<div>
							<h3 className="font-arch text-graphite text-xl">{group.label}</h3>
							<div className="text-graphite-muted mt-1 text-xs">
								{group.items.length} items
							</div>
						</div>
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

			<div className="mt-8">
				<div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
					<h3 className="font-arch text-graphite text-2xl">Creative tools</h3>
					<p className="annotation text-graphite-soft">
						Kept visible because craft quality matters.
					</p>
				</div>
				<div className="skill-list">
					{creativeSkillGroups.map((group) => (
						<div key={group.label} className="skill-row">
							<div>
								<h4 className="font-arch text-graphite text-lg">
									{group.label}
								</h4>
								<div className="text-graphite-muted mt-1 text-xs">
									{group.items.length} tools
								</div>
							</div>
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
			</div>
		</PaperSheet>
	);
}
