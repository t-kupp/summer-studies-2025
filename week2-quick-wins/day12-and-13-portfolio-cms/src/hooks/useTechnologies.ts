import { Technology } from "@/types";
import { isTechnology } from "@/types/guards";
import { useEffect, useState } from "react";

export default function useTechnologies() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Load technologies from localstorage on mount
  useEffect(() => {
    try {
      const storedTechnologies = localStorage.getItem("technologies");
      if (storedTechnologies) {
        const parsedTechnologies = JSON.parse(storedTechnologies);
        if (Array.isArray(parsedTechnologies) && parsedTechnologies.every(isTechnology)) {
          setTechnologies(parsedTechnologies);
        } else {
          throw new Error("Invalid technologies data format");
        }
      }
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  function addTechnology(technologyData: Technology) {
    try {
      const newTechnology = { ...technologyData };
      if (!isTechnology(newTechnology)) throw new Error("Invalid technology data format");

      const newTechnologies = [...technologies, newTechnology];
      setTechnologies(newTechnologies);
      localStorage.setItem("technologies", JSON.stringify(newTechnologies));
      clearError();
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    }
  }

  function updateTechnology(id: string, updates: Partial<Technology>) {
    try {
      let technologyFound = false;
      const newTechnologies = technologies.map((technology) => {
        if (technology.id === id) {
          technologyFound = true;
          const updatedTechnology = {
            ...technology,
            ...updates,
          };
          if (!isTechnology(updatedTechnology)) throw new Error("Invalid technology format");
          return updatedTechnology;
        }
        return technology;
      });
      if (!technologyFound) throw new Error("Technology not found");

      setTechnologies(newTechnologies);
      localStorage.setItem("technologies", JSON.stringify(newTechnologies));
      clearError();
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    }
  }

  function deleteTechnology(id: string) {
    try {
      const filteredTechnologies = technologies.filter((technology) => technology.id !== id);
      if (technologies.length === filteredTechnologies.length) {
        throw new Error("Could not find technology");
      }
      setTechnologies(filteredTechnologies);
      localStorage.setItem("technologies", JSON.stringify(filteredTechnologies));
      clearError();
    } catch (error) {
      setError((error as Error).message);
      console.error((error as Error).message);
    }
  }

  function getTechnologyById(id: string) {
    return technologies.find((technology) => technology.id === id);
  }

  function clearError() {
    setError("");
  }

  // Used to update technologies[] when importing a new file in usePortfolioData()
  function setAllTechnologies(newTechnologies: Technology[]) {
    try {
      if (!Array.isArray(newTechnologies) || !newTechnologies.every(isTechnology)) {
        throw new Error("Invalid technology data");
      }
      setTechnologies(newTechnologies);
      localStorage.setItem("technologies", JSON.stringify(newTechnologies));
      clearError();
    } catch (error) {
      setError((error as Error).message);
    }
  }

  return {
    technologies,
    error,
    loading,
    addTechnology,
    updateTechnology,
    deleteTechnology,
    getTechnologyById,
    setAllTechnologies,
  };
}
