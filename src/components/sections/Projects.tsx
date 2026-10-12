import { projects } from "@/data";
import { PaperSheet, SectionHeading } from "@/components/notebook";
import { ProjectCard } from "./ProjectCard";
import { pageEyebrow } from "@/site/navigation";

export function Projects() {
	return (
		<PaperSheet id="projects">
			<SectionHeading
				eyebrow={pageEyebrow("projects")}
				title="Selected Projects"
				annotation="AI, data, and full-stack builds, each linked to its repository."
			/>

			<div className="project-grid">
				{projects.map((p, i) => (
					<ProjectCard key={p.id} project={p} index={i} />
				))}
			</div>
		</PaperSheet>
	);
}
