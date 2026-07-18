import type { Project } from "./types";

export const projects: Project[] = [
	{
		id: "neuroscan",
		title: "NeuroScan AI",
		tagline: "Brain Tumour MRI Analysis System",
		summary:
			"Medical imaging platform built around a 3-stage AI pipeline for brain tumour detection, classification, and segmentation. Benchmarked 21 deep learning architectures across 4,705 MRI scans and BraTS 2020, reaching 99.59% detection, 98.58% classification, and 0.7655 Dice, with MRI inference, 3D visualisation, volumetric analysis, PDF reporting, JWT authentication, and REST APIs.",
		fields: ["Machine Learning", "Research", "Full-Stack"],
		github: "https://github.com/parthmital/NeuroScan-AI",
	},
	{
		id: "muse",
		title: "Muse",
		tagline: "Self-Hosted Music Streaming & Discovery Platform",
		summary:
			"Spotify-inspired self-hosted streaming and discovery platform with a distributed 4-service architecture using Next.js, Fastify, PostgreSQL, and FastAPI. Includes Last.fm personalised ranking, 25-track queues, radio, Tidal resolution handling, job queues, workers, JWT, Docker, caching, and datasets for 10K profiles, 50K recommendations, and 100K playback sessions.",
		fields: ["Full-Stack", "Backend"],
		github: "https://github.com/parthmital/Muse",
	},
	{
		id: "obsidian-flask",
		title: "The Obsidian Flask",
		tagline: "AI Narrative Engine with Persistent NPC Memory",
		summary:
			"Production-grade narrative game engine featuring AI-driven NPCs with long-term memory, Retrieval-Augmented Generation (RAG), and real-time dialogue via WebSockets. NPCs maintain trust-based relationships, recall past interactions, and generate context-aware responses using LLMs.",
		fields: ["Generative AI"],
		github: "https://github.com/parthmital/LLM-Game",
	},
	{
		id: "ppe-compliance-monitor",
		title: "PPE Compliance Monitor",
		tagline: "Real-Time Computer Vision Safety Monitoring System",
		summary:
			"End-to-end computer vision pipeline for detecting PPE compliance in construction environments using a YOLOv8 model. Supports real-time image and video analysis with temporal smoothing, async processing, and a full-stack monitoring dashboard for safety analytics and incident tracking.",
		fields: ["Machine Learning"],
		github: "https://github.com/parthmital/PPE-Compliance-Monitor",
	},
	{
		id: "pdf-renamer",
		title: "PDF Renamer",
		tagline: "Transformer-Based Document Title Generation",
		summary:
			"End-to-end NLP pipeline that extracts PDF content and generates descriptive filenames using a fine-tuned T5 sequence-to-sequence model. Automates document organization by learning semantic mappings between content and titles.",
		fields: ["Machine Learning"],
		github: "https://github.com/parthmital/PDF-Renamer",
	},
	{
		id: "resource-pipeline",
		title: "Resource Automation Pipeline",
		tagline: "End-to-End Academic Resource Automation",
		summary:
			"Automation pipeline for collecting, analyzing, and standardizing academic resources from VTOP and UniBud. Replaces manual workflows with automated scraping, quantitative analysis, and PDF standardization across entire semesters.",
		fields: ["Automation", "Web Scraping"],
		github: "https://github.com/parthmital/VIT-Resource-Automation-Pipeline",
	},
	{
		id: "vit-carpool",
		title: "VIT Carpool",
		tagline: "Structured Ride Sharing for Campus",
		summary:
			"Web platform for VIT students to post, discover, and join carpools with structured listings, real-time seat tracking, and campus-restricted authentication. Eliminates unstructured WhatsApp coordination through searchable, filterable ride data.",
		fields: ["Full-Stack"],
		github: "https://github.com/parthmital/Vit-Carpool",
	},
];
