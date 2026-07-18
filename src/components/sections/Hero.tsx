import { ArrowRight } from "lucide-react";
import { profile } from "@/data";
import { PaperSheet } from "@/components/notebook/PaperSheet";
import { Button } from "@/components/notebook/Button";

const focusAreas = [
	"Production software",
	"Applied AI systems",
	"Data-heavy workflows",
	"Creative tooling",
];

const proofPoints = [
	{ value: "58", label: "ERP API routes rebuilt" },
	{ value: "114K+", label: "legacy records migrated" },
	{ value: "21", label: "MRI models benchmarked" },
	{ value: "60+", label: "daily production users" },
];

export function Hero() {
	return (
		<PaperSheet
			id="top"
			withMargin={false}
			className="hero-sheet relative overflow-hidden py-6 md:py-12 lg:py-14"
		>
			<div className="grid gap-5 md:gap-8">
				<div>
					<div className="hero-stamp mb-4 md:mb-6">
						<img
							src="/Portfolio Website.svg"
							alt=""
							className="theme-logo h-4 w-auto opacity-80"
							aria-hidden="true"
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

					<div className="field-strip mt-5 max-w-2xl md:mt-7">
						{focusAreas.map((label) => (
							<span key={label}>{label}</span>
						))}
					</div>

					<div className="mt-6 flex flex-wrap items-center gap-3 md:mt-8">
						<Button variant="filled" href="#projects" className="gap-2">
							See projects <ArrowRight className="h-4 w-4" />
						</Button>
						<Button variant="outline" href="#contact">
							Get in touch
						</Button>
					</div>
				</div>

				<aside className="hero-proof" aria-label="Portfolio proof points">
					{proofPoints.map((point) => (
						<div key={point.label}>
							<div className="hero-proof-value">{point.value}</div>
							<div className="text-graphite-soft mt-3 max-w-[12rem] text-sm leading-relaxed">
								{point.label}
							</div>
						</div>
					))}
				</aside>
			</div>
		</PaperSheet>
	);
}
