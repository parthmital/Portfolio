import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data";

type Props = { project: Project; index: number };

export function ProjectCard({ project, index }: Props) {
	const number = String(index + 1).padStart(2, "0");
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="project-card notecard flex h-full flex-col">
			<span className="project-index">case {number}</span>
			<a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				className="case-link font-arch text-graphite group mt-2 inline-flex items-center gap-2 text-2xl leading-tight"
			>
				<span>{project.title}</span>
				<ExternalLink className="text-graphite-muted group-hover:text-graphite h-3.5 w-3.5 shrink-0 transition-colors" />
			</a>
			<p className="font-scrawl text-graphite-soft mt-2 text-base leading-snug">
				{project.tagline}
			</p>

			<div className="mt-4">
				<p
					className={`text-graphite text-sm leading-relaxed ${
						expanded ? "" : "line-clamp-3"
					}`}
				>
					{project.summary}
				</p>
				<button
					type="button"
					onClick={() => setExpanded(!expanded)}
					aria-expanded={expanded}
					className="text-graphite-muted hover:text-graphite mt-2 cursor-pointer text-xs underline"
				>
					{expanded ? "Show less" : "Read more"}
				</button>
			</div>

			<div className="mt-auto flex flex-wrap gap-2 pt-4">
				{project.fields.map((f) => (
					<span key={f} className="tag text-xs">
						{f}
					</span>
				))}
			</div>
		</div>
	);
}
