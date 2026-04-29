import { education } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

export function Education() {
	return (
		<PaperSheet id="education">
			<SectionHeading eyebrow="// page 5" title="Education" />
			<div className="flex flex-col gap-6">
				{education.map((entry) => (
					<div
						key={entry.school}
						className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"
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
