import { about } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

export function About() {
	return (
		<PaperSheet id="about" variant="alt">
			<SectionHeading
				eyebrow="// page 2"
				title="About"
				annotation="What I work on and how I go about it."
			/>

			<div className="text-graphite space-y-4 text-base leading-relaxed">
				{about.paragraphs.map((p, i) => (
					<p key={i}>{p}</p>
				))}
			</div>
		</PaperSheet>
	);
}
