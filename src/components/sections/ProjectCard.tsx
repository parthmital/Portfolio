import { ExternalLink } from "lucide-react";
import type { Project } from "@/data";
import { Highlights } from "@/components/notebook";
import { newTabLinkProps } from "@/lib/links";

type Props = { project: Project; index: number };

export function ProjectCard({ project, index }: Props) {
	return (
		<article className="project-card notecard flex h-full flex-col">
			<span className="project-index">
				case {String(index + 1).padStart(2, "0")}
			</span>
			<h3 className="font-arch mt-1 text-2xl leading-tight">
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
			</h3>
			<Highlights summary={project.summary} items={project.highlights} />
		</article>
	);
}
