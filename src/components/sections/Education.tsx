import { education } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

export function Education() {
	return (
		<PaperSheet id="education" variant="alt">
			<SectionHeading
				eyebrow="// page 6"
				title="Education"
				annotation="Formal record, kept compact."
			/>
			<div className="notecard">
				{education.map((entry) => (
					<div
						key={entry.school}
						className="education-row grid gap-2 py-4 first:pt-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-baseline"
					>
						<div>
							<div className="font-arch text-graphite text-xl">
								{entry.school}
							</div>
							<div className="text-graphite-soft">{entry.degree}</div>
						</div>
						<div className="text-graphite-soft sm:text-right">
							<div className="font-scrawl text-base">{entry.period}</div>
							<div className="font-arch text-graphite text-base">
								{entry.gpa}
							</div>
						</div>
					</div>
				))}
			</div>
		</PaperSheet>
	);
}
