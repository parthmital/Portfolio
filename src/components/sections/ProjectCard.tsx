import { useState } from "react";
import type { Project } from "@/data";

type Props = { project: Project; index: number };

export function ProjectCard({ project, index }: Props) {
	const number = String(index + 1).padStart(2, "0");
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="notecard flex h-full flex-col">
			<div className="flex items-baseline gap-4">
				<span className="font-hand text-graphite-muted text-base">
					#{number}
				</span>
				<a
					href={project.github}
					target="_blank"
					rel="noopener noreferrer"
					className="font-arch text-graphite group inline-flex items-center gap-2 text-2xl"
				>
					<span className="cursor-pointer group-hover:underline">
						{project.title}
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="text-graphite-muted group-hover:text-graphite shrink-0 cursor-pointer"
					>
						<path d="M7 17L17 7" />
						<path d="M7 7h10v10" />
					</svg>
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
