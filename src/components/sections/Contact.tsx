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
				eyebrow="// page 6"
				title="Get in touch"
				annotation="If you find something interesting here, we’ll probably get along."
			/>

			<div className="flex flex-col gap-4 sm:flex-row">
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
