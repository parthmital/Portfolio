import { about } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

const workingNotes = [
	{
		label: "Software",
		text: "Production web systems, APIs, databases, deployment, and workflow tooling.",
	},
	{
		label: "AI",
		text: "Computer vision, OCR, LLM pipelines, model training, and evaluation.",
	},
	{
		label: "Creative",
		text: "Design, 3D, video, and audio tools used to make outputs feel considered.",
	},
];

export function About() {
	return (
		<PaperSheet id="about" variant="alt">
			<SectionHeading
				eyebrow="// page 2"
				title="About"
				annotation="What I work on and how I go about it."
			/>

			<div className="section-grid">
				<div className="about-card border-paper-edge border-b pb-6 md:border-r md:border-b-0 md:pr-8 md:pb-0">
					<p className="font-scrawl text-graphite text-lg leading-snug">
						{about.paragraphs[0]}
					</p>

					<div className="about-pillars">
						{workingNotes.map((note) => (
							<div key={note.label} className="border-paper-edge border-t pt-3">
								<div className="font-hand text-graphite-muted text-base">
									{note.label}
								</div>
								<p className="text-graphite-soft mt-1 text-sm leading-relaxed">
									{note.text}
								</p>
							</div>
						))}
					</div>
				</div>

				<div className="text-graphite space-y-4 text-base leading-relaxed">
					{about.paragraphs.slice(1).map((p) => (
						<p key={p}>{p}</p>
					))}
				</div>
			</div>
		</PaperSheet>
	);
}
