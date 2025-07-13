import { PortfolioData, Project, ProjectImage, Technology } from "./index";

export function isProject(obj: unknown): obj is Project {
  if (!obj || typeof obj !== "object") return false;
  const validStatuses = ["draft", "published", "archived"];

  return (
    "id" in obj &&
    typeof obj.id === "string" &&
    "title" in obj &&
    typeof obj.title === "string" &&
    "description" in obj &&
    typeof obj.description === "string" &&
    "technologies" in obj &&
    Array.isArray(obj.technologies) &&
    obj.technologies.every(isTechnology) &&
    "images" in obj &&
    Array.isArray(obj.images) &&
    obj.images.every(isProjectImage) &&
    "status" in obj &&
    typeof obj.status === "string" &&
    validStatuses.includes(obj.status) &&
    "featured" in obj &&
    typeof obj.featured === "boolean" &&
    "createdAt" in obj &&
    typeof obj.createdAt === "string" &&
    // Optional fields
    (!("liveUrl" in obj) || typeof obj.liveUrl === "string") &&
    (!("githubUrl" in obj) || typeof obj.githubUrl === "string") &&
    (!("completedAt" in obj) || typeof obj.completedAt === "string")
  );
}

export function isTechnology(obj: unknown): obj is Technology {
  if (!obj || typeof obj !== "object") return false;
  const validCategories = ["frontend", "backend", "tool", "database"];
  const validProficiencyLevels = [1, 2, 3, 4, 5];

  return (
    "id" in obj &&
    typeof obj.id === "string" &&
    "name" in obj &&
    typeof obj.name === "string" &&
    "category" in obj &&
    typeof obj.category === "string" &&
    validCategories.includes(obj.category) &&
    "proficiencyLevel" in obj &&
    typeof obj.proficiencyLevel === "number" &&
    validProficiencyLevels.includes(obj.proficiencyLevel) &&
    "yearsExperience" in obj &&
    typeof obj.yearsExperience === "number" &&
    obj.yearsExperience >= 0 &&
    "iconSlug" in obj &&
    typeof obj.iconSlug === "string"
  );
}

export function isProjectImage(obj: unknown): obj is ProjectImage {
  if (!obj || typeof obj !== "object") return false;
  return (
    "id" in obj &&
    typeof obj.id === "string" &&
    "url" in obj &&
    typeof obj.url === "string" &&
    "alt" in obj &&
    typeof obj.alt === "string" &&
    "isPrimary" in obj &&
    typeof obj.isPrimary === "boolean"
  );
}

export function isPortfolioData(obj: unknown): obj is PortfolioData {
  if (!obj || typeof obj !== "object") return false;

  return (
    "projects" in obj &&
    Array.isArray(obj.projects) &&
    obj.projects.every(isProject) &&
    "technologies" in obj &&
    Array.isArray(obj.technologies) &&
    obj.technologies.every(isTechnology) &&
    "exportedAt" in obj &&
    typeof obj.exportedAt === "string"
  );
}
