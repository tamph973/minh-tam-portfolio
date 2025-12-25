
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
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
}

export interface SystemPrinciple {
  title: string;
  description: string;
  icon: string;
}
