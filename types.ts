export interface Project {
	id: string;
	title: string;
	description: string;
	backendHighlights: string[];
	tags: string[];
	icon: string;
	repoUrl?: string;
	docsUrl?: string;
	liveUrl?: string;
}

export interface SkillItem {
	label: string;
	description: string;
}

export interface SkillCategory {
	title: string;
	icon: string;
	colorClass: string;
	items: SkillItem[];
	isPrimary?: boolean;
}

export interface SystemPrinciple {
	title: string;
	description: string;
	icon: string;
}

export interface ArchitectureFlow {
	label: string;
	icon: string;
	color: string;
}
