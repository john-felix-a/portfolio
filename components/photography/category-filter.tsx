"use client";

import { cn } from "@/lib/utils";
import { PhotoCategory } from "@/app/types";

interface CategoryFilterProps {
    categories: PhotoCategory[];
    activeCategory: string;
    onSelectCategory: (id: string) => void;
}

export function CategoryFilter({
    categories,
    activeCategory,
    onSelectCategory,
}: CategoryFilterProps) {
    return (
        <div className="flex gap-6 overflow-x-auto pb-4 md:pb-0 md:overflow-visible no-scrollbar w-full md:w-auto">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.id)}
                    className={cn(
                        "text-sm uppercase tracking-wider transition-colors outline-none",
                        activeCategory === category.id
                            ? "text-foreground font-medium border-b border-foreground"
                            : "text-muted-foreground hover:text-foreground"
                    )}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
}
