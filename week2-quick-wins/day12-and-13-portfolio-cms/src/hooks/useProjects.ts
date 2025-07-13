import { Project } from "@/types";
import { isProject } from "@/types/guards";
import { useEffect, useState } from "react";

export default function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load projects from localstorage on mount
  useEffect(() => {
    try {
      const storedProjects = localStorage.getItem("projects");
      if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        if (Array.isArray(parsedProjects) && parsedProjects.every(isProject)) {
          setProjects(parsedProjects);
        } else {
          throw new Error("Invalid project data format");
        }
      }
      clearError();
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  function addProject(projectData: Omit<Project, "id" | "createdAt">) {
    try {
      if (!projectData.title.trim()) {
        throw new Error("Title is required");
      }
      if (!projectData.description.trim()) {
        throw new Error("Description is required");
      }
      const newProject = {
        ...projectData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      if (!isProject(newProject)) throw new Error("Invalid project data format");
      const newProjects = [...projects, newProject];
      setProjects(newProjects);
      localStorage.setItem("projects", JSON.stringify(newProjects));
      clearError();
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    }
  }

  function updateProject(id: string, updates: Partial<Project>) {
    try {
      let projectFound = false;
      const newProjects = projects.map((project) => {
        if (project.id === id) {
          projectFound = true;
          const updatedProject = { ...project, ...updates };
          if (!isProject(updatedProject)) {
            throw new Error("Invalid project data format");
          }
          return updatedProject;
        }
        return project;
      });

      if (!projectFound) throw new Error("Project not found");

      setProjects(newProjects);
      localStorage.setItem("projects", JSON.stringify(newProjects));
      clearError();
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    }
  }

  function deleteProject(id: string) {
    try {
      const filteredProjects = projects.filter((project) => project.id !== id);
      if (filteredProjects.length === projects.length) throw new Error("Could not find project");
      setProjects(filteredProjects);
      localStorage.setItem("projects", JSON.stringify(filteredProjects));
      clearError();
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    }
  }

  function getProjectById(id: string) {
    return projects.find((project) => project.id === id);
  }

  function clearError() {
    setError("");
  }

  // Used to update projects[] when importing a new file in usePortfolioData()
  function setAllProjects(newProjects: Project[]) {
    try {
      if (!Array.isArray(newProjects) || !newProjects.every(isProject)) {
        throw new Error("Invalid projects data");
      }
      setProjects(newProjects);
      localStorage.setItem("projects", JSON.stringify(newProjects));
      clearError();
    } catch (error) {
      setError((error as Error).message);
    }
  }

  return {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    getProjectById,
    clearError,
    setAllProjects,
  };
}
