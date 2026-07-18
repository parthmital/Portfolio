import { useState } from "react";
import { experience } from "@/data";
import type { ExperienceEntry } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

type ExperienceCardProps = {
	entry: ExperienceEntry;
	index: number;
};

function ExperienceCard({ entry, index }: ExperienceCardProps) {
	const [expanded, setExpanded] = useState(false);
	const visibleBullets = expanded ? entry.bullets : entry.bullets.slice(0, 1);
	const canExpand = entry.bullets.length > 1;

	return (
		<article className="notecard experience-card flex h-full flex-col">
			<div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
				<div>
					<span className="project-index">
						record {String(index + 1).padStart(2, "0")}
					</span>
					<div>
						<h3 className="font-arch text-graphite mt-2 text-2xl leading-tight">
							{entry.role}
						</h3>
						<p className="text-graphite-soft mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
							<span>{entry.company}</span>
							<span aria-hidden="true" className="text-graphite-muted">
								/
							</span>
							<span className="text-graphite-muted">{entry.location}</span>
						</p>
					</div>
				</div>

				<div className="font-scrawl text-graphite-soft text-base leading-snug sm:text-right">
					{entry.period}
				</div>
			</div>

			<ul className="marker:text-graphite-muted mt-4 list-disc space-y-2 pl-5">
				{visibleBullets.map((bullet) => (
					<li
						key={bullet}
						className="text-graphite-soft text-sm leading-relaxed"
					>
						{bullet}
					</li>
				))}
			</ul>

			{canExpand && (
				<button
					type="button"
					onClick={() => setExpanded(!expanded)}
					aria-expanded={expanded}
					className="text-graphite-muted hover:text-graphite mt-2 w-fit cursor-pointer text-xs underline"
				>
					{expanded ? "Show less" : "Read more"}
				</button>
			)}
		</article>
	);
}

export function Experience() {
	return (
		<PaperSheet id="experience" variant="alt">
			<SectionHeading
				eyebrow="// page 3"
				title="Experience"
				annotation="Production software and applied AI work from the resume."
			/>

			<div className="timeline-stack">
				{experience.map((entry, index) => (
					<ExperienceCard
						key={`${entry.company}-${entry.role}`}
						entry={entry}
						index={index}
					/>
				))}
			</div>
		</PaperSheet>
	);
}
