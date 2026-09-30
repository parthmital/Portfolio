import {
	BriefcaseBusiness,
	FolderKanban,
	GraduationCap,
	Mail,
	User,
	Wrench,
	type LucideIcon,
} from "lucide-react";

export interface NavSection {
	id: string;
	label: string;
	shortLabel: string;
	icon: LucideIcon;
}

/** Single source for page section anchors, in page order. */
export const navSections: NavSection[] = [
	{ id: "about", label: "About", shortLabel: "About", icon: User },
	{
		id: "experience",
		label: "Experience",
		shortLabel: "Work",
		icon: BriefcaseBusiness,
	},
	{
		id: "projects",
		label: "Projects",
		shortLabel: "Projects",
		icon: FolderKanban,
	},
	{ id: "skills", label: "Skills", shortLabel: "Skills", icon: Wrench },
	{
		id: "education",
		label: "Education",
		shortLabel: "Education",
		icon: GraduationCap,
	},
	{ id: "contact", label: "Contact", shortLabel: "Contact", icon: Mail },
];

export const logoUrl = "/Portfolio Website.svg";

export const navSectionIds = navSections.map(({ id }) => id);
