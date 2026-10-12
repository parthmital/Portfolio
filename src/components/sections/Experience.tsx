import { experience } from "@/data";
import type { ExperienceEntry } from "@/data";
import { Highlights, PaperSheet, SectionHeading } from "@/components/notebook";
import { pageEyebrow } from "@/site/navigation";

type ExperienceCardProps = {
	entry: ExperienceEntry;
	index: number;
};

function ExperienceCard({ entry, index }: ExperienceCardProps) {
	return (
		<article className="notecard flex h-full flex-col">
			<div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
				<div>
					<span className="project-index">
						record {String(index + 1).padStart(2, "0")}
					</span>
					<h3 className="font-arch text-graphite mt-2 text-2xl leading-tight">
						{entry.role}
					</h3>
					<p className="text-graphite-soft mt-2 text-sm">{entry.company}</p>
				</div>

				<p className="font-scrawl text-graphite-soft text-base leading-snug sm:text-right">
					{entry.period}
				</p>
			</div>

			<Highlights summary={entry.summary} items={entry.highlights} />
		</article>
	);
}

export function Experience() {
	return (
		<PaperSheet id="experience" variant="alt">
			<SectionHeading
				eyebrow={pageEyebrow("experience")}
				title="Experience"
				annotation="Production software and applied AI work."
			/>

			<div className="card-stack">
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
