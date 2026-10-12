/** A one-sentence summary followed by its supporting points. */
export interface Highlighted {
	summary: string;
	highlights: string[];
}

export interface Project extends Highlighted {
	id: string;
	title: string;
	github: string;
}

/** A headline figure shown in the hero. */
export interface ProofPoint {
	value: string;
	label: string;
}

export interface ContactLink {
	label: string;
	value: string;
	href: string;
}

export interface Profile {
	name: string;
	role: string;
	tagline: string;
	resumeUrl: string;
	focusAreas: string[];
	proofPoints: ProofPoint[];
	contacts: ContactLink[];
}

export interface AboutNote {
	label: string;
	text: string;
}

export interface About {
	paragraphs: string[];
	notes: AboutNote[];
}

export interface ExperienceEntry extends Highlighted {
	company: string;
	role: string;
	period: string;
}

export type Experience = ExperienceEntry[];

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
