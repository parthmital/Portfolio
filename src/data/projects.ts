import type { Project } from "./types";

export const projects: Project[] = [
	{
		id: "muse",
		title: "Muse",
		tagline: "Lossless Music Streaming Platform",
		summary:
			"Self-hosted music streaming system with hybrid recommendation engine combining vector embeddings, user behaviour, and popularity signals. Delivers personalised discovery, adaptive audio streaming, and full data ownership through a scalable microservices architecture.",
		fields: ["Full-Stack"],
		github: "https://github.com/parthmital/Muse",
	},
	{
		id: "neuroscan",
		title: "NeuroScan AI",
		tagline: "AI Brain Tumour Analysis",
		summary:
			"Full-stack AI platform for automated brain tumour detection, classification, and 3D segmentation from MRI scans, delivering real-time predictions and volumetric analysis for clinical decision support.",
		fields: ["Machine Learning"],
		github: "https://github.com/parthmital/NeuroScan-AI",
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
