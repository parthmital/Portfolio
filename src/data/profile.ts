import type { Profile, About, Education, SkillGroup } from "./types";

export const profile: Profile = {
	name: "Parth Mital",
	role: "Computer Science Student",
	tagline:
		"I build random stuff because I want to, and sometimes they turn out useful.",
	email: "parth.mital.2004@gmail.com",
	github: "https://github.com/parthmital",
	linkedin: "https://linkedin.com/in/parthmital",
	resumeUrl: "/Resume/Parth_Mital_Resume.pdf",
};

export const about: About = {
	paragraphs: [
		"I'm a Computer Science student at VIT, Vellore working across machine learning systems, computer vision, and full-stack stuff, mostly building things I’d personally want to use.",
		"Outside of code, I spend time on creative work too - designing in Figma and Adobe tools, working in 3D with Blender and Substance Painter, editing videos in After Effects and Premiere Pro, and making music with Ableton Live and FL Studio.",
		"Most projects start because I need something or just feel like building it. A lot of them are small utilities, automations, or experiments that slowly turn into something more complete.",
		"I like systems that don’t fall apart when you actually use them, models that do more than just look good in demos, and interfaces that feel simple without trying too hard.",
	],
};

export const education: Education = [
	{
		school: "Vellore Institute of Technology, Vellore",
		degree: "B.Tech, Computer Science & Engineering Core",
		period: "2023 – 2027",
		gpa: "CGPA 8.70 / 10",
	},
	{
		school: "Green Valley High School, Vadodara",
		degree: "11th & 12th Grade",
		period: "2021 – 2023",
		gpa: "91.8% in 12th Grade Board Exams",
	},
	{
		school: "Anand Vidya Vihar, Vadodara",
		degree: "Till 10th Grade",
		period: "2011 – 2021",
		gpa: "94.2% in 10th Grade Board Exams",
	},
];

export const skillGroups: SkillGroup[] = [
	{
		label: "Programming & Development",
		items: [
			"React",
			"Next.js",
			"HTML",
			"CSS",
			"Tailwind CSS",
			"JavaScript",
			"TypeScript",
			"Python",
			"Java",
			"C",
			"C++",
		],
	},
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
	{
		label: "ML / CV",
		items: ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "Hugging Face"],
	},
	{
		label: "Agentic / LLM",
		items: ["LangGraph", "LangChain", "RAG", "Vector DBs"],
	},
	{
		label: "Backend",
		items: ["FastAPI", "Node.js", "Postgres", "Supabase", "Redis"],
	},
	{
		label: "Infra",
		items: ["Docker", "Linux", "GitHub Actions", "Cloudflare", "vtk.js"],
	},
];
