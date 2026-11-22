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
		{ value: "599", label: "Vitest tests in ERP CI" },
		{ value: "127K+", label: "legacy rows migrated" },
		{ value: "12", label: "MRI architectures benchmarked" },
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
		role: "Sole Developer & Maintainer (Contract)",
		period: "June 2026 to July 2026",
		summary:
			"Sole developer for Concept Marketing, a 60+ person HVAC dealership. Migrated its daily-use ERP from a legacy ASP.NET & C# app tied to one office PC to a web app staff use from any device, with no room for error.",
		highlights: [
			"Rebuilt it in Next.js, Prisma & PostgreSQL on Vercel & Supabase in 2 weeks, company-wide by July 2026",
			"Migrated 127,264 rows: 31,758 service calls, 2,958 customers, 6,150 machines",
			"Worked with staff almost daily: fixed legacy bugs, replaced the side tools they relied on with new features, redesigned the UI keeping the familiar layout, added a phone-first technician portal",
			"Schema refactor: 2,107 signatures from 29.0 MB of PNG to 2.6 MB of SVG, database 107 MB → 75 MB, parity proven over ~4,500 API responses & 75 write steps",
			"Row-level security, nonce-based CSP, HMAC-SHA256 sessions & Zod validation",
			"Nightly GPG-encrypted off-site backups & 599 passing Vitest tests in CI",
			"Sole owner of fixes & features since launch",
		],
	},
	{
		company: "IntelGrader (LearnLine Edustation)",
		role: "AI Engineer Intern",
		period: "June 2026 to July 2026",
		summary:
			"AI Engineer Intern at IntelGrader, an early-stage startup automating grading of handwritten work. Won the role via its assignment round, then built AI prototypes from answer-sheet capture to study content.",
		highlights: [
			"Android capture app (Kotlin, Jetpack Compose, CameraX, OpenCV) with TFLite page detection & an on-device MobileNetV3 quality gate that triggers retakes: 2.19 MB, 82.5% smaller than Keras",
			"Sorted 3,946 anonymised pages into submissions by handwriting: ResNet50 + supervised contrastive loss, ARI 0.3719 & NMI 0.7959 on 588 held-out pages",
			"YOLOv8s crossed-out text detector, cutting OCR token clutter 7.11%",
			"Parsed a CBSE textbook into 1,033 questions & built a curated 216-question JEE bank from 134 papers",
			"AWS Bedrock lesson generator with an LLM critic, plus Groq & Kokoro doodle lecture videos",
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
