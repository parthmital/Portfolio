import { useState, useMemo } from "react";
import { projects } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";
import { FilterPill } from "@/components/notebook/FilterPill";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
	const [selectedField, setSelectedField] = useState<string | null>(null);

	const fields = useMemo(
		() => Array.from(new Set(projects.flatMap((p) => p.fields))).sort(),
		[],
	);

	const filteredProjects = useMemo(() => {
		if (!selectedField) return projects;

		return projects
			.filter((p) => p.fields.includes(selectedField))
			.sort((a, b) => {
				const rankA = a.fields.indexOf(selectedField);
				const rankB = b.fields.indexOf(selectedField);
				return rankA - rankB;
			});
	}, [selectedField]);

	return (
		<PaperSheet id="projects">
			<SectionHeading
				eyebrow="// page 4"
				title="Selected Projects"
				annotation="The resume projects first, plus a few fuller builds."
			/>

			<div className="border-paper-edge mb-6 border-b pb-5">
				<div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
					<div className="text-label">Filter projects</div>
					<div className="text-graphite-muted text-xs">
						{filteredProjects.length} shown
					</div>
				</div>

				<div className="flex flex-wrap gap-2">
					<FilterPill
						label="All"
						isActive={selectedField === null}
						onClick={() => setSelectedField(null)}
					/>
					{fields.map((field) => (
						<FilterPill
							key={field}
							label={field}
							isActive={selectedField === field}
							onClick={() => setSelectedField(field)}
						/>
					))}
				</div>
			</div>

			<div className="project-grid">
				{filteredProjects.map((p, i) => (
					<ProjectCard key={p.id} project={p} index={i} />
				))}
			</div>
		</PaperSheet>
	);
}
