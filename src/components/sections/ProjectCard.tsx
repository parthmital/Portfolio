import { ExternalLink } from "lucide-react";
import type { Project } from "@/data";
import { Highlights } from "@/components/notebook";
import { newTabLinkProps } from "@/lib/links";

type Props = {
	project: Project;
	/** Handwritten index label, for example "case 01". */
	label: string;
	/** h4 when the card sits under a sub-heading inside the section. */
	headingLevel?: "h3" | "h4";
};

export function ProjectCard({ project, label, headingLevel = "h3" }: Props) {
	const Heading = headingLevel;
	return (
		<article className="project-card notecard flex h-full flex-col">
			<span className="project-index">{label}</span>
			<Heading className="font-arch mt-1 text-2xl leading-tight">
				<a
					href={project.github}
					{...newTabLinkProps(project.github)}
					className="case-link text-graphite group inline-block py-2"
				>
					<span>{project.title}</span>
					<ExternalLink
						className="text-graphite-muted group-hover:text-graphite ml-2 inline h-3.5 w-3.5 align-baseline transition-colors"
						strokeWidth={1.5}
					/>
					<span className="sr-only"> (GitHub, opens in a new tab)</span>
				</a>
			</Heading>
			<Highlights summary={project.summary} items={project.highlights} />
		</article>
	);
}
