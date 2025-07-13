export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  images: ProjectImage[];
  status: "draft" | "published" | "archived";
  featured: boolean;
  createdAt: string;
  completedAt?: string;
}

export interface Technology {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tool" | "database";
  proficiencyLevel: 1 | 2 | 3 | 4 | 5;
  yearsExperience: number;
  iconSlug: string;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface PortfolioData {
  projects: Project[];
  technologies: Technology[];
  exportedAt: string;
}
