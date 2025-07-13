import { isPortfolioData } from "@/types/guards";
import { useState } from "react";
import useProjects from "./useProjects";
import useTechnologies from "./useTechnologies";

export default function usePortfolioData() {
  const [error, setError] = useState("");
  const { projects, setAllProjects } = useProjects();
  const { technologies, setAllTechnologies } = useTechnologies();

  function exportAll() {
    try {
      const portfolioData = { projects, technologies, exportedAt: new Date().toISOString() };
      if (!isPortfolioData(portfolioData)) throw new Error("Invalid portfolio data format");

      const jsonData = JSON.stringify(portfolioData, null, 2);

      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "portfolio-data.json";
      link.click();

      URL.revokeObjectURL(url);
      clearError();
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    }
  }

  function importAll(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedData = JSON.parse(content);

        if (!isPortfolioData(importedData)) throw new Error("Invalid portfolio data format");

        setAllProjects(importedData.projects);
        setAllTechnologies(importedData.technologies);
        clearError();
      } catch (error) {
        setError((error as Error).message);
        console.error((error as Error).message);
      }
    };

    reader.onerror = () => {
      setError("Failed to read file");
      console.error("Failed to read file");
    };

    reader.readAsText(file);
  }

  function clearError() {
    setError("");
  }

  return { error, exportAll, importAll };
}
