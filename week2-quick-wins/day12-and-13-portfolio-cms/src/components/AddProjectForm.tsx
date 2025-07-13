"use client";
import useProjects from "@/hooks/useProjects";
import { Project, ProjectImage, Technology } from "@/types";
import { useState } from "react";
import LabeledInput from "./LabeledInput";

type ProjectFormData = Omit<Project, "id" | "createdAt" | "completedAt">;

export default function AddProjectForm() {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    images: [],
    status: "draft",
    featured: false,
  });
  const { addProject, error } = useProjects();

  function updateField<T>(field: keyof ProjectFormData, value: T) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function addTechnology() {
    const newTech: Technology = {
      id: Date.now().toString(),
      name: "",
      category: "frontend",
      proficiencyLevel: 1,
      yearsExperience: 0,
      iconSlug: "",
    };
    updateField("technologies", [...formData.technologies, newTech]);
  }

  function addImage() {
    const newImage: ProjectImage = {
      id: Date.now().toString(),
      url: "",
      alt: "",
      isPrimary: false,
    };
    updateField("images", [...formData.images, newImage]);
  }

  function removeTechnology(index: number) {
    const updated = formData.technologies.filter((_, i) => i !== index);
    updateField("technologies", updated);
  }

  function removeImage(index: number) {
    const updated = formData.images.filter((_, i) => i !== index);
    updateField("images", updated);
  }

  function updateTechnologyField<T>(index: number, field: keyof Technology, value: T) {
    const updated = formData.technologies.map((tech, i) =>
      i === index ? { ...tech, [field]: value } : tech
    );
    updateField("technologies", updated);
  }

  function updateImageField<T>(index: number, field: keyof ProjectImage, value: T) {
    const updated = formData.images.map((image, i) =>
      i === index ? { ...image, [field]: value } : image
    );
    updateField("images", updated);
  }

  function setPrimaryImage(primaryIndex: number) {
    const updated = formData.images.map((image, index) => ({
      ...image,
      isPrimary: index === primaryIndex, // Only the selected one is primary
    }));
    updateField("images", updated);
  }

  function handleSubmit() {
    addProject(formData);
  }

  return (
    <form className="border-border flex max-w-md flex-col gap-4 rounded border p-4">
      <h1 className="text-xl font-bold">Add Project</h1>

      {/* Title  */}
      <LabeledInput
        title="Title"
        value={formData.title}
        onChange={(e) => updateField("title", e.target.value)}
        required
      />

      {/* Description  */}
      <LabeledInput
        title="Description"
        value={formData.description}
        onChange={(e) => updateField("description", e.target.value)}
        textarea
        required
      />

      {/* Technologies  */}
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="technology-input">
          Technologies
        </label>
        <div className="flex flex-col gap-2" id="technology-input">
          {formData.technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                className="border-border bg-text-input rounded border px-1"
                value={tech.name}
                onChange={(e) => updateTechnologyField(index, "name", e.target.value)}
              />
              <select
                value={tech.category}
                onChange={(e) => updateTechnologyField(index, "category", e.target.value)}
                className="border-border bg-text-input rounded border p-1"
              >
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="tool">Tool</option>
                <option value="database">Database</option>
              </select>
              <button
                type="button"
                className="border-border w-fit rounded border px-2"
                onClick={() => removeTechnology(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="border-border mt-2 w-fit rounded border px-2"
          onClick={addTechnology}
        >
          Add Technology
        </button>
      </div>

      {/* Live URL  */}
      <LabeledInput
        title="Live URL"
        value={formData.liveUrl}
        onChange={(e) => updateField("liveUrl", e.target.value)}
      />

      {/* Github URL  */}
      <LabeledInput
        title="Github URL"
        value={formData.githubUrl}
        onChange={(e) => updateField("githubUrl", e.target.value)}
      />

      {/* Images  */}
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="images-input">
          Images
        </label>
        <div className="flex flex-col gap-2" id="images-input">
          {formData.images.map((image, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                className="border-border bg-text-input rounded border px-1"
                value={image.url}
                onChange={(e) => updateImageField(index, "url", e.target.value)}
              />
              <label htmlFor={`image-input-${index}`}>Primary</label>
              <input
                type="radio"
                id={`image-input-${index}`}
                name="primary-image" // Same name for all radios = only one can be selected
                checked={image.isPrimary} // Shows current state
                onChange={() => setPrimaryImage(index)} // Custom handler
              />
              <button
                type="button"
                className="border-border w-fit rounded border px-2"
                onClick={() => removeImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="border-border mt-2 w-fit rounded border px-2"
          onClick={addImage}
        >
          Add Image
        </button>
      </div>

      {/* Status  */}
      <LabeledInput
        select
        title="Status"
        value={formData.status}
        onChange={(e) => updateField("status", e.target.value)}
        options={["draft", "published", "archived"]}
      />

      {/* Error and submit  */}
      {error && <div className="rounded-xs border bg-red-200 px-2 py-2 text-red-800">{error}</div>}
      <button
        type="button"
        onClick={handleSubmit}
        className="border-border mx-auto w-1/3 rounded border px-2"
      >
        Add
      </button>
    </form>
  );
}
