import { useState, useMemo } from "react";
import { projects } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
	const [selectedField, setSelectedField] = useState<string | null>(null);

	const fields = useMemo(
		() => Array.from(new Set(projects.flatMap((p) => p.fields))).sort(),
		[],
	);

	const filteredProjects = useMemo(
		() =>
			selectedField
				? projects.filter((p) => p.fields.includes(selectedField))
				: projects,
		[selectedField],
	);

	return (
		<PaperSheet id="projects">
			<SectionHeading
				eyebrow="// page 3"
				title="Selected Projects"
				annotation="Things I've built."
			/>

			{/* Field Filter */}
			<div className="mb-6 flex flex-wrap gap-2">
				<button
					onClick={() => setSelectedField(null)}
					className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
						selectedField === null
							? "bg-graphite-soft text-paper border-graphite-soft"
							: "text-graphite-soft border-paper-edge hover:border-graphite-muted hover:text-graphite bg-transparent"
					}`}
				>
					All
				</button>
				{fields.map((field) => (
					<button
						key={field}
						onClick={() => setSelectedField(field)}
						className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
							selectedField === field
								? "bg-graphite-soft text-paper border-graphite-soft"
								: "text-graphite-soft border-paper-edge hover:border-graphite-muted hover:text-graphite bg-transparent"
						}`}
					>
						{field}
					</button>
				))}
			</div>

			<div className="grid gap-5 sm:grid-cols-2">
				{filteredProjects.map((p, i) => (
					<ProjectCard key={p.id} project={p} index={i} />
				))}
			</div>
		</PaperSheet>
	);
}
