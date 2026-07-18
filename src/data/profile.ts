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
		role: "Independent Software Developer (Contract)",
		period: "June 2026 - Present",
		location: "Vadodara, India",
		bullets: [
			"Rebuilt a legacy ASP.NET WebForms and SQL Server ERP into a Next.js, TypeScript, Prisma, and PostgreSQL application with 58 API routes.",
			"Migrated 114K+ records from 42 legacy tables while preserving existing data and application compatibility.",
			"Built modules for service management, AMC, billing, inventory, reporting, PDF generation, and Excel import/export, with authentication, testing, security, and cloud deployment.",
			"Delivered a production system used by 60+ daily users, managing 2.8K customers, 28K service calls, and 1.1K AMC contracts.",
		],
	},
	{
		company: "LearnLine Edustation (IntelGrader)",
		role: "AI Engineer Intern",
		period: "June 2026",
		location: "Remote",
		bullets: [
			"Built a YOLOv8 crossout detection system from 100 annotated answer sheets and 277 bounding boxes across 5 classes, reducing OCR clutter by 7.11%.",
			"Built an Android document scanning app with Kotlin, Jetpack Compose, CameraX, OpenCV, TensorFlow Lite, and ONNX Runtime.",
			"Trained a MobileNetV3 model on 10K images, reducing model size by 82.5% from 12.5 MB to 2.2 MB and reaching 2.55 ms inference.",
			"Built book ingestion, question bank, and lecture generation pipelines using PyMuPDF, EasyOCR, AWS Bedrock, LLMs, Stable Diffusion, TTS, and text-to-video models.",
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
