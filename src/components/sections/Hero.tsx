import { profile } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { Button } from "@/components/notebook/Button";
import { Eyebrow } from "@/components/notebook/Eyebrow";

export function Hero() {
	return (
		<PaperSheet id="top" className="relative overflow-hidden">
			<Eyebrow>// page 1: intro</Eyebrow>

			<h1 className="font-arch text-graphite text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-6xl">
				{profile.name}
			</h1>

			<p className="font-scrawl text-graphite mt-6 text-lg md:text-2xl">
				{profile.role}
			</p>

			<p className="text-graphite-soft mt-6 text-base leading-relaxed md:text-lg">
				{profile.tagline}
			</p>

			<div className="mt-8 flex flex-wrap items-center gap-4">
				<Button variant="filled" href="#projects">
					See projects →
				</Button>
				<Button variant="outline" href="#contact">
					Get in touch
				</Button>
			</div>

			<div className="mt-6 flex flex-wrap items-center gap-3">
				<span className="text-graphite-soft text-sm">Download resume:</span>
				<Button variant="ghost" size="sm" href={profile.resumeUrl}>
					Resume
				</Button>
			</div>
		</PaperSheet>
	);
}
