import { openSourceContributions, projects } from "@/data";
import { PaperSheet, SectionHeading } from "@/components/notebook";
import { ProjectCard } from "./ProjectCard";
import { pageEyebrow } from "@/site/navigation";

const pad = (index: number) => String(index + 1).padStart(2, "0");

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
					<ProjectCard key={p.id} project={p} label={`case ${pad(i)}`} />
				))}
			</div>

			<section aria-labelledby="open-source-heading" className="mt-10">
				<h3
					id="open-source-heading"
					className="font-arch text-graphite text-2xl md:text-3xl"
				>
					Open source
				</h3>
				<p className="annotation text-graphite-soft mt-2 mb-5 max-w-2xl">
					Fixes contributed to projects I use, linked to the merged pull
					request.
				</p>
				<div className="project-grid">
					{openSourceContributions.map((p, i) => (
						<ProjectCard
							key={p.id}
							project={p}
							label={`contribution ${pad(i)}`}
							headingLevel="h4"
						/>
					))}
				</div>
			</section>
		</PaperSheet>
	);
}
