import { profile } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";
import { ContactCard } from "@/components/notebook/ContactCard";

export function Contact() {
	const links = [
		{ label: "Email", value: profile.email, href: `mailto:${profile.email}` },
		{ label: "GitHub", value: "@parthmital", href: profile.github },
		{ label: "LinkedIn", value: "in/parthmital", href: profile.linkedin },
	];

	return (
		<PaperSheet id="contact" variant="alt">
			<SectionHeading
				eyebrow="// page 7"
				title="Get in touch"
				annotation="If you find something interesting here, we will probably get along."
			/>

			<div className="border-paper-edge mb-5 border-y py-4">
				<p className="text-graphite-soft max-w-2xl text-sm leading-relaxed">
					Reach out for software engineering, applied AI, full-stack systems, or
					creative technical work.
				</p>
			</div>

			<div className="contact-grid">
				{links.map((l) => (
					<ContactCard
						key={l.label}
						label={l.label}
						value={l.value}
						href={l.href}
					/>
				))}
			</div>
		</PaperSheet>
	);
}
