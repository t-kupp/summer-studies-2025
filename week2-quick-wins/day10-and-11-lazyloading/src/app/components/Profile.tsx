"use client";

import { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    company: "",
    location: "",
    website: "",
    twitter: "",
    skills: [] as string[],
  });

  const skillOptions = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Docker",
    "AWS",
    "GraphQL",
    "MongoDB",
  ];

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  return (
    <div className="max-w-4xl p-8">
      <h1 className="mb-8 text-3xl font-bold">User Profile</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Name
              <input
                className="w-full rounded border px-3 py-2"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
              <input
                className="w-full rounded border px-3 py-2"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </label>
          </div>
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i}>
              <label className="mb-2 block text-sm font-medium">Field {i + 3}</label>
              <input className="w-full rounded border px-3 py-2" />
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">Skills ({formData.skills.length} selected)</h3>
          {skillOptions.map((skill) => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={formData.skills.includes(skill)}
                onChange={() => handleSkillToggle(skill)}
              />
              {skill}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
