"use client";

import React from "react";
import { skills, skillsInterface } from "@/config/skills";
import SkillCategoryCard from "./skill-category-card";

export default function SkillsSection() {
    // Group skills by category
    const groupedSkills = skills.reduce((acc, skill) => {
        const category = skill.category || "Other";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(skill);
        return acc;
    }, {} as Record<string, skillsInterface[]>);

    // Define category order
    const categoryOrder = [
        "Frontend",
        "Backend",
        "Database",
        "Programming Languages",
        "Cloud (AWS)",
        "Data Engineering",
        "Tools",
        "Other",
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryOrder.map((category, index) => {
                const categorySkills = groupedSkills[category];
                if (!categorySkills?.length) return null;

                return (
                    <SkillCategoryCard
                        key={category}
                        title={category}
                        skills={categorySkills}
                        index={index}
                    />
                );
            })}
        </div>
    );
}
