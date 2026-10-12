import { ArrowRight } from "lucide-react";
import { profile } from "@/data";
import { logoUrl } from "@/site/navigation";
import { ButtonLink, PaperSheet } from "@/components/notebook";

export function Hero() {
	return (
		<PaperSheet
			id="top"
			withMargin={false}
			className="overflow-hidden py-6 md:py-12 lg:py-14"
		>
			<div className="grid gap-5 md:gap-8">
				<div>
					<div className="hero-stamp mb-4 md:mb-6">
						<img
							src={logoUrl}
							alt=""
							className="theme-logo h-4 w-auto opacity-80"
						/>
						<span>// page 1: working file</span>
					</div>

					<h1 className="hero-title font-arch text-graphite">{profile.name}</h1>

					<p className="font-scrawl text-graphite mt-5 max-w-2xl text-xl leading-snug md:mt-6 md:text-2xl">
						{profile.role}
					</p>

					<p className="text-graphite-soft mt-5 max-w-2xl text-base leading-relaxed md:mt-6 md:text-lg">
						{profile.tagline}
					</p>

					<ul className="field-strip mt-5 max-w-2xl md:mt-7">
						{profile.focusAreas.map((label) => (
							<li key={label}>{label}</li>
						))}
					</ul>

					<div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
						<ButtonLink variant="filled" href="#projects">
							See projects <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
						</ButtonLink>
						<ButtonLink href="#contact">Get in touch</ButtonLink>
					</div>
				</div>

				<dl className="hero-proof">
					{profile.proofPoints.map((point) => (
						<div
							key={point.label}
							className="flex flex-col-reverse justify-end gap-3"
						>
							<dt className="text-graphite-soft max-w-[12rem] text-sm leading-relaxed">
								{point.label}
							</dt>
							<dd className="hero-proof-value">{point.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</PaperSheet>
	);
}
