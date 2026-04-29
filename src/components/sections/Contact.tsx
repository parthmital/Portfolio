import { profile } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { SectionHeading } from "@/components/notebook/SectionHeading";

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
					<a
						key={l.label}
						href={l.href}
						className="group border-paper-edge bg-paper/60 retrace hover:border-graphite/60 block flex-auto rounded-md border p-4 transition-colors"
					>
						<div className="text-graphite-muted text-xs tracking-wide uppercase">
							{l.label}
						</div>
						<div className="font-arch text-graphite mt-1 text-lg">
							{l.value}{" "}
							<span className="text-graphite-muted group-hover:text-graphite transition-colors">
								→
							</span>
						</div>
					</a>
				))}
			</div>
		</PaperSheet>
	);
}
