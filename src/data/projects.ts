import type { Project } from "./types";

export const projects: Project[] = [
	{
		id: "neuroscan",
		title: "NeuroScan AI",
		summary:
			"Brain MRI tumour platform: upload 4 MRI sequences, get detection, tumour type & a 3D tumour outline in one report.",
		highlights: [
			"Benchmarked 9 2D backbones & 3 3D segmentation nets with Holm-corrected tests. Best detector: 99.42% on 171 unseen scans",
			"SegResNet: 0.8717 Dice internal, 0.7967 on 60 external BraTS-Africa cases",
			"Model disagreement flags bad outlines (AUROC 0.9932/0.8704)",
			"FastAPI, React & vtk.js app, 103 tests",
			"2 papers drafted for Engineering Applications of AI",
		],
		github: "https://github.com/parthmital/NeuroScan-AI",
	},
	{
		id: "obsidian-flask",
		title: "The Obsidian Flask: RAG-Driven NPC Narrative Engine",
		summary:
			"Text adventure where LLM NPCs talk freely but code owns the game state, so they can't forget facts, invent items or break rules.",
		highlights: [
			"9-node LangGraph pipeline: RAG memory → LLM → strict JSON → rule validator → append-only event log",
			"Validator let 0 of 26,273 unlawful changes pass. Crash recovery 300/300, up from 93/300",
			"Scoped memory recalled 63.7% of facts 20+ turns old vs 0% for a same-budget window",
			"13 memory designs, 7 worlds, 3 model families",
			"Paper drafted for IEEE Transactions on Games",
		],
		github: "https://github.com/parthmital/RAG-Driven-NPC-Narrative-Engine",
	},
	{
		id: "neuralss",
		title: "NeuralSS: Neural Super-Sampling & Frame Generation",
		summary:
			"Open, hardware-agnostic alternative to vendor-locked game upscaling & frame generation (DLSS, XeSS), built only from ONNX-exportable ops.",
		highlights: [
			"Recurrent 3x upscaler: +1.2 to 2.2 dB PSNR-Y over bicubic on 5 suites (27/28 clips), +2.8 to 4.9 dB over TAAU with engine data",
			"2x to 6x frame generator beats RIFE 4.26 on Middlebury: 34.23 vs 33.34 dB",
			"Leakage-audited data: 12,300 items, 0 cross-split duplicates",
			"Paper drafted for J. Real-Time Image Processing",
		],
		github:
			"https://github.com/parthmital/High-Throughput-Neural-Super-Sampling",
	},
	{
		id: "ai-camera-match-for-blender",
		title: "AI Camera Match for Blender",
		summary:
			"Blender add-on that matches a 3D camera to one photo with no hand-drawn vanishing lines, automating the fSpy workflow for VFX & archviz artists.",
		highlights: [
			"GeoCalib estimates focal length, distortion & gravity, MoGe-2 metric depth sets camera height, in an isolated solver process",
			"Builds camera, undistorted plate, floor & textured proxy mesh, exports .fspy",
			"29.1 to 38.9 s per solve on a 4 GB GTX 1650",
			"Proxy re-render matched the plate: 95.1% pixel coverage, 0 px shift",
		],
		github: "https://github.com/parthmital/Blender-AI-Camera-Match",
	},
	{
		id: "laptop-price-pipeline",
		title: "Laptop Price & Specification Pipeline",
		summary:
			"Free prototype for PickPCParts, an Indian price comparison site that updates listings largely by hand, automating laptop prices & specs.",
		highlights: [
			"Scrapes 3 stores, then spec-table rules + a local K2 Horizon 3.7B LLM fill a 42-field schema with per-field provenance",
			"0.9881 field accuracy, 0.020 hallucination rate on 756 labelled cells",
			"Cross-store matching: precision 1.0, recall 0.857",
			"SQLite price history & Next.js comparison app",
			"Costed at ~Rs 25 to 100/month on their server",
		],
		github: "https://github.com/parthmital/Laptop-Data-Scraper",
	},
];

/** Upstream open-source work, linked to the merged pull request. */
export const openSourceContributions: Project[] = [
	{
		id: "uad-ng",
		title: "Universal Android Debloater (UAD-ng)",
		summary:
			"Open-source Rust GUI & CLI that removes Android bloatware over ADB without root. I found bugs while using it & proposed fixes in an 18-commit PR.",
		highlights: [
			"5 fixes merged upstream in #1517 with co-author credit",
			"Recovery from invalid list downloads & cache, panic-free backup restore with correct indexes, numeric release-version comparison",
			"Least-privilege CI tokens & config tests isolated in temp dirs",
			"Credited commits: 78.1% of the merged PR's added lines",
		],
		github:
			"https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation/pull/1517",
	},
];
