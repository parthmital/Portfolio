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
	resumeUrl: "/Parth_Mital_Resume.pdf",
	focusAreas: [
		"Production software",
		"Applied AI systems",
		"Data-heavy workflows",
		"Creative tooling",
	],
	proofPoints: [
		{ value: "591", label: "Vitest tests in ERP CI" },
		{ value: "114K+", label: "legacy records migrated" },
		{ value: "24", label: "MRI architectures benchmarked" },
		{ value: "60+", label: "daily production users" },
	],
	contacts: [
		{
			label: "Email",
			value: "parth.mital.2004@gmail.com",
			href: "mailto:parth.mital.2004@gmail.com",
		},
		{
			label: "GitHub",
			value: "@parthmital",
			href: "https://github.com/parthmital",
		},
		{
			label: "LinkedIn",
			value: "in/parthmital",
			href: "https://linkedin.com/in/parthmital",
		},
	],
};

export const about: About = {
	paragraphs: [
		"I'm a Computer Science student at VIT Vellore working across full-stack engineering, AI systems, and computer vision, with recent work spanning an ERP rebuild, OCR/document pipelines, and medical imaging.",
		"On the software side, I have shipped Next.js, TypeScript, Prisma, PostgreSQL, Fastify, FastAPI, Docker, and REST API systems used in production workflows.",
		"On the AI side, I have worked with YOLOv8, MobileNetV3, TensorFlow Lite, ONNX Runtime, LLM pipelines, EasyOCR, PyMuPDF, and deep learning benchmarks for MRI analysis.",
		"I still care about creative tools - Figma, Blender, Adobe apps, video, and music - because they make interfaces and outputs feel considered, not just functional.",
	],
	notes: [
		{
			label: "Software",
			text: "Production web systems, APIs, databases, deployment, and workflow tooling.",
		},
		{
			label: "AI",
			text: "Computer vision, OCR, LLM pipelines, model training, and evaluation.",
		},
		{
			label: "Creative",
			text: "Design, 3D, video, and audio tools used to make outputs feel considered.",
		},
	],
};

export const experience: Experience = [
	{
		company: "Concept Marketing",
		role: "Sole Software Developer and Maintainer (Contract)",
		period: "June 2026 to July 2026",
		summary:
			"Sole developer of a mission-critical ERP/CRM modernisation & cloud migration for a Vadodara HVAC dealership with 60+ employees, all daily users, & a turnover of several crores.",
		highlights: [
			"Replaced a legacy ASP.NET, C# & SQL Server app bound to one office PC with a 24/7 platform on any device, incl. technicians' phones, keeping familiar workflows & branding",
			"Migrated 114K+ records from 42 tables to Supabase PostgreSQL with zero data loss & no disruption",
			"Built Next.js, TypeScript & Prisma modules for service calls, dispatch, AMCs, quotations, invoicing, inventory & reports, now holding 32,430 service calls & 2,935 customers",
			"Secured it with signed httpOnly sessions, deny-by-default RBAC, Zod, rate limits, nonce CSP & redacted logs; automated daily crons & AES-256 encrypted backups",
			"Added a 12-step CI with secret scanning, 591 Vitest tests & Playwright E2E",
			"Owned it end to end, turning feedback from staff using it 6–8 hrs a day into features",
		],
	},
	{
		company: "LearnLine Edustation (IntelGrader)",
		role: "AI Engineer Intern",
		period: "June 2026 to July 2026",
		summary:
			"AI Engineer Intern at an early-stage edtech startup, hired off-campus via Wellfound on my crossout detection assignment; owned production projects across AI/ML, agentic AI, full-stack & Android with high autonomy.",
		highlights: [
			"Built a Kotlin, CameraX & OpenCV Android app with a native camera via JS bridge, Google Sign-In, GraphQL upload, auto-capture, TFLite page segmentation & PDF export",
			"Trained a MobileNetV3-Small image-quality model on 7,000 images grown from 248: 0.65% false accept rate, 2.19 MB float16 TFLite, 2.55 ms inference",
			"Fine-tuned YOLOv8s on 100 annotated sheets to route crossed-out regions; masking them cut EasyOCR token clutter 7.11%",
			"Built PyMuPDF & 2-GPU EasyOCR + AWS Bedrock ingestion: 1,033 questions from a 280-page textbook & 216 verified JEE questions",
			"Built Bedrock lesson-page generation gated on Playwright & axe-core, plus Groq, Kokoro & Stable Diffusion narrated video pipelines",
			"Trained a ResNet50 writer-embedding model (0.796 NMI) to map submissions to students",
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
