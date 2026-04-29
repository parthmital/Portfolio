import { profile } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { Button } from "@/components/notebook/Button";

export function Hero() {
	return (
		<PaperSheet id="top" className="relative overflow-hidden">
			<div className="font-hand text-graphite-soft mb-2 text-base">
				// page 1: intro
			</div>

			<h1 className="font-arch text-graphite text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
				{profile.name}
			</h1>

			<p className="font-scrawl text-graphite mt-5 text-xl md:text-2xl">
				{profile.role}
			</p>

			<p className="text-graphite-soft mt-6 text-base leading-relaxed md:text-lg">
				{profile.tagline}
			</p>

			<div className="mt-8 flex flex-wrap items-center gap-3">
				<Button variant="filled" href="#projects">
					See projects →
				</Button>
				<Button variant="outline" href="#contact">
					Get in touch
				</Button>
			</div>
		</PaperSheet>
	);
}
