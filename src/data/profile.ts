import type {
	Profile,
	About,
	Experience,
	Education,
	SkillGroup,
} from "./types";

export const profile: Profile = {
	name: "Parth Mital",
	role: "Computer Science student, software developer, and AI engineer",
	tagline:
		"Building production software, AI pipelines, and full-stack systems measured by real users, real data, and working deployments.",
	email: "parth.mital.2004@gmail.com",
	github: "https://github.com/parthmital",
	linkedin: "https://linkedin.com/in/parthmital",
	resumeUrl: "/Parth_Mital_Resume.pdf",
};

export const about: About = {
	paragraphs: [
		"I'm a Computer Science student at VIT Vellore working across full-stack engineering, AI systems, and computer vision, with recent work spanning an ERP rebuild, OCR/document pipelines, and medical imaging.",
		"On the software side, I have shipped Next.js, TypeScript, Prisma, PostgreSQL, Fastify, FastAPI, Docker, and REST API systems used in production workflows.",
		"On the AI side, I have worked with YOLOv8, MobileNetV3, TensorFlow Lite, ONNX Runtime, LLM pipelines, EasyOCR, PyMuPDF, and deep learning benchmarks for MRI analysis.",
		"I still care about creative tools - Figma, Blender, Adobe apps, video, and music - because they make interfaces and outputs feel considered, not just functional.",
	],
};

export const experience: Experience = [
	{
		company: "Concept Marketing",
		role: "Sole Software Developer & Maintainer (Contract)",
		period: "June 2026 – July 2026",
		location: "Vadodara, India",
		bullets: [
			"Migrated legacy on-premise ASP.NET ERP to 24/7 Next.js, TypeScript, Prisma, & PostgreSQL on Vercel + Supabase; ported 114K+ records across 42 tables with zero data loss, eliminating single-PC server bottlenecks.",
			"Partnered directly with operational staff (6–8 hrs daily software usage) to consolidate fragmented tools into unified workflows for technician dispatch, AMC contracts, billing, inventory variances, & automated PDF invoicing.",
			"Secured internet-facing operations with role-based route access, CSRF validation, & PostgreSQL rate limits; scheduled AES-256 encrypted offsite backups to Google Drive with 30-day retention via GitHub Actions.",
			"Engineered test suite with 587 Vitest unit & route tests across 85 files; delivered production platform managing 2.8K clients, 28K service calls, & 60+ users with ongoing solo maintenance.",
		],
	},
	{
		company: "LearnLine Edustation (IntelGrader)",
		role: "AI Engineer Intern",
		period: "June 2026 – July 2026",
		location: "Remote",
		bullets: [
			"Architected native Android capture app in Kotlin, Jetpack Compose, CameraX, & OpenCV; implemented real-time quad stability auto-capture across 7 stable frames, perspective rectification, & native JavaScript bridge.",
			"Trained multi-task MobileNetV3 to score image quality & 7 defect flags; applied float16 TFLite quantization, shrinking model size by 82.5% to 2.19 MB with 2.55 ms edge inference latency.",
			"Fine-tuned YOLOv8s struck-out text detector via 2-phase training; integrated downstream masking to cut OCR token clutter by 7.11% while maintaining 80% to 96% semantic similarity via RapidFuzz.",
			"Designed native PyMuPDF pipeline extracting 1,033 questions & 383 visuals; generated dual-GPU EasyOCR cache across 4,574 textbook pages with AWS Bedrock structured LLM parsing.",
			"Directed technical implementation with co-founders to deploy autonomous educational web generator across 6 archetypes, integrating AWS Bedrock LessonSpec synthesis with Playwright & axe-core accessibility gates.",
		],
	},
];

export const education: Education = [
	{
		school: "Vellore Institute of Technology, Vellore",
		degree: "B.Tech, Computer Science & Engineering Core",
		period: "2023 - 2027",
		gpa: "CGPA 8.75 / 10",
	},
	{
		school: "Green Valley High School, Vadodara",
		degree: "11th & 12th Grade",
		period: "2021 - 2023",
		gpa: "91.8% in 12th Grade Board Exams",
	},
	{
		school: "Anand Vidya Vihar, Vadodara",
		degree: "Till 10th Grade",
		period: "2011 - 2021",
		gpa: "94.2% in 10th Grade Board Exams",
	},
];

export const technicalSkillGroups: SkillGroup[] = [
	{
		label: "Languages",
		items: ["C", "C++", "Java", "Python", "TypeScript", "JavaScript"],
	},
	{
		label: "AI/ML",
		items: [
			"Machine Learning",
			"Deep Learning",
			"Computer Vision",
			"NLP",
			"Model Training",
			"Feature Engineering",
			"ETL",
		],
	},
	{
		label: "Software",
		items: [
			"Full-stack Engineering",
			"Frontend",
			"Backend",
			"REST APIs",
			"Authentication",
			"Databases",
		],
	},
	{
		label: "Cloud & DevOps",
		items: ["AWS", "Docker", "Cloud Deployment", "Containerization"],
	},
	{
		label: "Coursework",
		items: [
			"Data Structures & Algorithms",
			"OOP",
			"Operating Systems",
			"Computer Networks",
			"Digital Systems",
			"Microprocessors",
		],
	},
];

export const creativeSkillGroups: SkillGroup[] = [
	{
		label: "UI/UX & Design",
		items: [
			"Figma",
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Adobe Lightroom Classic",
			"Topaz Photo AI",
		],
	},
	{
		label: "3D Modelling & Texturing",
		items: [
			"Blender",
			"Adobe Substance Painter",
			"Unreal Engine",
			"Marmoset Toolbag",
			"RizomUV",
			"Topogun",
			"Gaea",
			"Adobe Substance Sampler",
		],
	},
	{
		label: "Video Editing & Motion Graphics",
		items: [
			"Adobe After Effects",
			"Adobe Premiere Pro",
			"DaVinci Resolve",
			"FFmpeg",
			"Topaz Video AI",
			"Flow Frames",
		],
	},
	{
		label: "Music Production & Audio",
		items: [
			"Ableton Live Suite",
			"FL Studio",
			"Adobe Audition",
			"iZotope RX",
			"iZotope Ozone",
			"Antares Auto-Tune",
			"FabFilter Total Bundle",
		],
	},
];
