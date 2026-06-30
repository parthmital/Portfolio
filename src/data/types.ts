export interface ProjectLink {
	label: string;
	href: string;
}

export interface Project {
	id: string;
	title: string;
	tagline: string;
	summary: string;
	fields: string[];
	github: string;
}

export interface Profile {
	name: string;
	role: string;
	tagline: string;
	email: string;
	github: string;
	linkedin: string;
	resumeUrl: string;
}

export interface About {
	paragraphs: string[];
}

export interface EducationEntry {
	school: string;
	degree: string;
	period: string;
	gpa: string;
}

export type Education = EducationEntry[];

export interface SkillGroup {
	label: string;
	items: string[];
}
