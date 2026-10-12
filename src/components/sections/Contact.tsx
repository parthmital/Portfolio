import { profile } from "@/data";
import { ContactCard, PaperSheet, SectionHeading } from "@/components/notebook";
import { pageEyebrow } from "@/site/navigation";

export function Contact() {
	return (
		<PaperSheet id="contact" variant="alt">
			<SectionHeading
				eyebrow={pageEyebrow("contact")}
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
				{profile.contacts.map((contact) => (
					<ContactCard key={contact.label} {...contact} />
				))}
			</div>
		</PaperSheet>
	);
}
