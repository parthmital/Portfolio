import { useState } from "react";
import type { Project } from "@/data";

type Props = { project: Project; index: number };

export function ProjectCard({ project, index }: Props) {
	const number = String(index + 1).padStart(2, "0");
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="notecard group flex h-full flex-col">
			<div className="flex items-baseline gap-3">
				<span className="font-hand text-graphite-muted text-base">
					#{number}
				</span>
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="font-arch text-graphite cursor-pointer text-2xl group-hover:underline"
				>
					{project.title}
				</a>
			</div>

			<p className="font-scrawl text-graphite-soft mt-2 text-base leading-snug">
				{project.tagline}
			</p>

			{/* Summary with 2-line truncation and expand toggle */}
			<div className="mt-4">
				<p
					className={`text-graphite text-sm leading-relaxed ${
						expanded ? "" : "line-clamp-2"
					}`}
				>
					{project.summary}
				</p>
				<button
					onClick={() => setExpanded(!expanded)}
					className="text-graphite-muted hover:text-graphite mt-1 cursor-pointer text-xs underline"
				>
					{expanded ? "Show less" : "Read more"}
				</button>
			</div>

			{/* Field buttons */}
			<div className="mt-auto flex flex-wrap gap-2 pt-4">
				{project.fields.map((f) => (
					<span
						key={f}
						className="border-paper-edge text-graphite-soft rounded-full border px-3 py-1 text-xs font-medium"
					>
						{f}
					</span>
				))}
			</div>
		</div>
	);
}
