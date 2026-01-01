"use client";

import { cn } from "@/lib/utils";

interface InstagramEmbedProps {
    id: string; // The post ID, e.g., "B_HFXCqnKOf"
    className?: string;
    caption?: boolean;
}

export function InstagramEmbed({ id, className, caption = false }: InstagramEmbedProps) {
    const embedUrl = `https://www.instagram.com/p/${id}/embed${caption ? "/captioned" : ""}`;

    return (
        <div className={cn("relative w-full aspect-square bg-muted overflow-hidden rounded-md border", className)}>
            <iframe
                src={embedUrl}
                className="absolute inset-0 w-full h-full border-0"
                allowTransparency={true}
                allow="encrypted-media"
            />
        </div>
    );
}
