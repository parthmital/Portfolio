import { creativeSkillGroups, technicalSkillGroups } from "@/data";
import type { SkillGroup } from "@/data";
import { PaperSheet, SectionHeading } from "@/components/notebook";

type SkillGroupListProps = {
	groups: SkillGroup[];
	heading: "h3" | "h4";
	headingClassName: string;
	unit: string;
};

function SkillGroupList({
	groups,
	heading: Heading,
	headingClassName,
	unit,
}: SkillGroupListProps) {
	return (
		<div className="skill-list">
			{groups.map((group) => (
				<div key={group.label} className="skill-row">
					<div>
						<Heading className={`font-arch text-graphite ${headingClassName}`}>
							{group.label}
						</Heading>
						<div className="text-graphite-muted mt-1 text-xs">
							{group.items.length} {unit}
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
	);
}

export function Skills() {
	return (
		<PaperSheet id="skills">
			<SectionHeading
				eyebrow="// page 5"
				title="Skills"
				annotation="Technical stack from the resume, with creative tools kept visible."
			/>

			<SkillGroupList
				groups={technicalSkillGroups}
				heading="h3"
				headingClassName="text-xl"
				unit="items"
			/>

			<div className="mt-8">
				<div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
					<h3 className="font-arch text-graphite text-2xl">Creative tools</h3>
					<p className="annotation text-graphite-soft">
						Kept visible because craft quality matters.
					</p>
				</div>
				<SkillGroupList
					groups={creativeSkillGroups}
					heading="h4"
					headingClassName="text-lg"
					unit="tools"
				/>
			</div>
		</PaperSheet>
	);
}
