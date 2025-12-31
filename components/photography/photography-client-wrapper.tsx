"use client";

import { useState } from "react";
import { PhotoItem, PhotoCategory } from "@/app/types";
import { CategoryFilter } from "./category-filter";
import { PhotographyGrid } from "./photography-grid";

interface PhotographyClientWrapperProps {
    title: string;
    description: string;
    photos: PhotoItem[];
    categories: PhotoCategory[];
}

export function PhotographyClientWrapper({
    title,
    description,
    photos,
    categories,
}: PhotographyClientWrapperProps) {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <div>
            {/* Header Row aligned with Filters */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h1 className="font-heading text-4xl tracking-tight lg:text-5xl capitalize">
                        {title}
                    </h1>
                    {/* <p className="text-muted-foreground mt-2 text-lg">{description}</p> */}
                </div>

                <CategoryFilter
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                />
            </div>

            {/* We pass activeCategory down to Grid to filter, OR we filter here. 
            The Grid component currently has internal state. 
            We should REFACTOR Grid to be dumb (controlled) or just pass the props.
            
            Refactoring Grid to be reusable/dumb is better. 
            But to be quick/safe, the Grid I just wrote handles its own state. 
            
            Wait, I just wrote PhotographyGrid to accept props but it has internal state `[activeCategory, setActiveCategory]`.
            I should modify `PhotographyGrid` to accept `activeCategory` prop OR move the filter inside Grid (as I did in previous step).
            
            Actually, the previous step `PhotographyGrid` had the header/filter logic inside it commented out/planned.
            
            Let's make `PhotographyGrid` purely for the GRID of photos, and filter locally here.
        */}

            <PhotographyGrid
                photos={activeCategory === "all" ? photos : photos.filter(p => p.category === activeCategory)}
            />
        </div>
    );
}

// Re-implementing a "ControlledPhotographyGrid" to clean up
function ControlledPhotographyGrid({ photos }: { photos: PhotoItem[] }) {
    // ... import logic from photography-grid but remove internal filter state
}

// Actually, simpler plan:
// In `photography-grid.tsx` I tried to put the filter inside. 
// If I want the Title to be left and Filter to be right, I can just pass the "Title" component INTO the grid? 
// No, that's messy.

// Let's rewrite `photography-grid.tsx` to accept `activeCategory` as a controlled prop?
// Or better, let's just rewrite `photography-grid.tsx` in the next step to be the FULL implementation including the Header alignment.
