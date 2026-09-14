import { projects } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
	return (
		<PaperSheet id="projects">
			<SectionHeading
				eyebrow="// page 4"
				title="Selected Projects"
				annotation="The resume projects first, plus a few fuller builds."
			/>

			<div className="project-grid">
				{projects.map((p, i) => (
					<ProjectCard key={p.id} project={p} index={i} />
				))}
			</div>
		</PaperSheet>
	);
}
