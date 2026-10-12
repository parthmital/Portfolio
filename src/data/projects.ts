import type { Project } from "./types";

export const projects: Project[] = [
	{
		id: "neuroscan",
		title: "NeuroScan AI",
		summary:
			"Built a brain tumour MRI platform backed by 3 ML pipelines, a 24-architecture benchmark & 2 research papers, in a 2-person team under a faculty advisor.",
		highlights: [
			"Benchmarked 9 2D backbones for detection & classification & 6 3D segmentation networks (15 unique) with the same splits & budgets, removing duplicates by perceptual hashing",
			"Reached 0.9942 fold-ensemble detection accuracy & 0.8199 mean Dice (UNet) on BraTS 2020, deploying EfficientNet-B0 & a 1.4M-parameter VNet (0.7965 Dice)",
			"Built a FastAPI & React app that runs detection, subtyping & 3D segmentation on NIfTI uploads in about 4 s per scan, with a multi-planar & vtk.js 3D viewer & PDF/CSV reports",
			"Secured it with bcrypt, TOTP 2FA, CSRF checks & owner checks, plus 61 backend & 39 frontend tests & CI security scans",
			"Co-wrote 2 Elsevier-format papers, now complete & under faculty review",
		],
		github: "https://github.com/parthmital/NeuroScan-AI",
	},
	{
		id: "obsidian-flask",
		title: "The Obsidian Flask: RAG-Driven NPC Narrative Engine",
		summary:
			"Built a full-stack text adventure where LLM-driven NPCs talk freely while code keeps the world state consistent, & evaluated it as a research study.",
		highlights: [
			"Built an 8-node LangGraph turn pipeline in FastAPI that retrieves memory, calls Groq, parses strict JSON & validates every world change before an append-only SQLite log",
			"Combined an 8-turn buffer with FAISS long-term memory scoped by location & NPC, with a React & TypeScript client over REST & WebSockets",
			"Benchmarked it on Kaggle with vLLM across 7 worlds, 10 memory conditions & pre-registered hypothesis tests",
			"Reached 87.7% recall of facts 20+ turns old & cut attack success to 2.9% from 16.2% with direct writes, at 0.0% false rejection & 0.039 ms P95 validation",
			"Rebuilt state from the log in 100% of sessions, & wrote the study up as an IEEE-format paper",
		],
		github: "https://github.com/parthmital/RAG-Driven-NPC-Narrative-Engine",
	},
	{
		id: "laptop-price-pipeline",
		title: "Laptop Price and Specification Pipeline",
		summary:
			"Built a pipeline that scrapes laptop listings from Reliance Digital, Vijay Sales & HP's India store into a comparable 42-field catalogue with price history, plus a web app to find the cheapest exact configuration.",
		highlights: [
			"Extracted specs with deterministic rules first, then K2 Horizon 3.7B on 2 Tesla T4 GPUs, keeping every raw page & per-field provenance",
			"Reached 0.9881 field accuracy with a 0.020 hallucination rate on 29 hand-labelled listings, & 1.0 match precision over 406 pairs",
			"Loaded SQLite with price history, freshness labels, run metrics, alerts & the lowest comparable price per configuration; the latest run took 26 min 55 s",
			"Built Laptop Ledger in Next.js: every store's price side by side, 42 laptop-specific filters & a spec sheet showing where each value came from",
		],
		github: "https://github.com/parthmital/Laptop-Data-Scraper",
	},
	{
		id: "solari-hub-demand-forecasting",
		title: "Solari Hub Demand Forecasting",
		summary:
			"Forecast daily orders for 1,115 micro-fulfilment hubs over a 42-day window from 970,379 rows of history, scored on RMSLE.",
		highlights: [
			"Engineered leakage-safe hub history features & a rolling-origin back-test, keeping the validation block untouched for an honest score",
			"Trained XGBoost & CatBoost forecasters on 2 GPUs with 4 parallel workers, including 6 multi-gap direct models that each use the freshest allowed lags",
			"Blended & calibrated the models with per-hub correction, reaching 0.09432 validation RMSLE, about 35% below the best naive baseline, with 7.18% MAPE",
			"Predicted all 46,830 test rows, passing 13 of 13 submission checks",
		],
		github: "https://github.com/parthmital/Solari-Hub-Demand-Forecaster",
	},
	{
		id: "ai-camera-match-for-blender",
		title: "AI Camera Match for Blender",
		summary:
			"Built a Blender add-on that matches a 3D camera to a single photo automatically, with no vanishing lines to draw.",
		highlights: [
			"Ran GeoCalib & MoGe in a separate process & virtual environment to estimate focal length, lens distortion, roll, pitch & camera height from a fitted floor plane",
			"Built the matched camera, undistorted background plate, floor & textured proxy mesh in Blender, & exported fSpy-compatible project files",
			"Added a one-click solver installer for CUDA or CPU PyTorch builds, plus headless batch use",
			"Solved images in 5.6 to 38.9 s on a 4 GB GTX 1650; re-rendering through the solved camera reproduced the photo with 95.1% pixel coverage",
		],
		github: "https://github.com/parthmital/Blender-AI-Camera-Match",
	},
];
