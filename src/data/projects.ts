import type { Project } from "./types";

export const projects: Project[] = [
	{
		id: "neuroscan",
		title: "NeuroScan AI",
		tagline: "Brain Tumour Benchmark & Clinical Platform",
		summary:
			"• Benchmarked 21 deep learning architectures across 3 stages in a 2-person team under faculty supervision; co-authored 2 research manuscripts (Elsevier format) currently under review.\n• Trained Stage 1 binary detector (99.59% accuracy) & Stage 2 subtyper (98.58% accuracy) across 4,705 scans, eliminating 19.3% cross-dataset leakage via pHash deduplication.\n• Evaluated Stage 3 3D volumetric segmentation on 368 BraTS cases; deployed VNet reaching 0.7655 mean Dice (0.8541 WT) with only 1.4M parameters & 16.9 min training.\n• Developed full-stack clinical platform for interactive multi-planar 3D slice navigation & mask overlays; integrated NiBabel NIfTI parsing, VTK.js rendering, & automated PDF diagnostic reports.",
		github: "https://github.com/parthmital/NeuroScan-AI",
	},
	{
		id: "industrial-equipment-maintenance-system",
		title: "Industrial Equipment Maintenance System",
		tagline: "Local Intelligence Workspace for Plant Documentation",
		summary:
			"Developed a local intelligence workspace to resolve industrial knowledge fragmentation across plant documentation.\n• Engineered a local ingestion and parsing pipeline across 5 formats (PDF, DOCX, TXT, CSV, XLSX) with RapidOCR fallback, FastEmbed text vectorisation, and PostgreSQL/pgvector storage.\n• Built an end-to-end FastAPI backend with 23 endpoints and a Next.js interface across 7 app routes, integrating DeepSeek API for structured analysis, cited chat, compliance gap audits, and root cause analysis.\n• Designed graph edge building routines with provenance tracking, persisting asset relationships and timeline events with JSON and Cypher export capabilities.\n• Achieved a 71/71 score across 12 categories in deterministic benchmarks, reaching 100.0% citation hit rate, 100.0% entity extraction precision/recall, 90.7% retrieval context precision, and a 3.95 ms P95 check latency.",
		github:
			"https://github.com/parthmital/Industrial-Equipment-Maintenance-System",
	},
	{
		id: "self-hosted-lossless-music-streamer",
		title: "Self Hosted Lossless Music Streamer",
		tagline: "Self-Hosted Music Streaming & Discovery Platform",
		summary:
			"Developed a self-hosted music streaming and recommendation platform to bring audio playback, user history, and discovery algorithms into an inspectable full-stack application.\n• Built a Next.js frontend with 12 App Router pages and 43 TSX components, featuring Dash.js playback, library management, and custom audio controls.\n• Engineered a Fastify REST API exposing 57 route handlers and 19 PostgreSQL Prisma models, securing sessions with crypto.scrypt hashing, HS256 JWTs, and Zod input validation.\n• Integrated a dedicated Python FastAPI service (18 endpoints) to proxy Tidal-compatible catalogue search, stream URLs, lyrics, and image assets.\n• Implemented a durable background worker system handling 4 concurrent jobs with 300-second leases to process track enrichment and generate personalized Last.fm-based recommendation mixes.\n• Optimized latency and throughput using multi-tier LRU caching, supporting 10,000 profile records and 50,000 recommendation entries.",
		github: "https://github.com/parthmital/Self-Hosted-Lossless-Music-Streamer",
	},
	{
		id: "rag-driven-npc-narrative-engine",
		title: "RAG Driven NPC Narrative Engine",
		tagline: "AI Narrative Engine with Persistent NPC Memory",
		summary:
			"Built a full-stack text adventure engine to solve LLM state hallucination and context loss during NPC interactions.\n• Engineered a LangGraph turn pipeline integrating Groq chat completion (openai/gpt-oss-120b) with a 30-second timeout and 3 retries.\n• Developed a hybrid memory system combining an 8-turn short-term buffer and long-term retrieval using FAISS CPU and 384-dimensional sentence-transformer embeddings with SQLite caching.\n• Designed a deterministic world-state engine that validates structured LLM JSON outputs before persisting state mutations to an append-only SQLite event store.\n• Implemented a FastAPI backend exposing 18 HTTP endpoints and 1 WebSocket endpoint for real-time broadcasts and heartbeat management.\n• Built a React 18, TypeScript, and Vite frontend featuring 8 routes and Zustand stores, achieving an 895ms build time and a 151.32 kB gzip JS bundle.",
		github: "https://github.com/parthmital/RAG-Driven-NPC-Narrative-Engine",
	},
	{
		id: "pdf-renamer",
		title: "PDF Renamer",
		tagline: "Transformer-Based Document Title Generation",
		summary:
			"Built an automated title generation workflow in Google Colab to predict descriptive file names from raw PDF content.\n• Developed a text extraction and preprocessing pipeline using pdfplumber and regex filtering, discarding low-quality documents with 10 or fewer characters.\n• Partitioned records into an 80/10/10 train, validation, and test split, formatting inputs for sequence-to-sequence document summarisation.\n• Fine-tuned a Hugging Face t5-small model using Seq2SeqTrainer across 8 epochs with fp16 mixed precision and PyTorch CUDA acceleration.\n• Generated predicted titles via greedy decoding, evaluated against source file names across 277 test records.\n• Achieved an Exact Match score of 0.20216606498194944 (56/277 exact matches), a BLEU score of 0.27505131557961493, and a ROUGE-1 score of 0.4468573809569774.",
		github: "https://github.com/parthmital/PDF-Renamer",
	},
];
