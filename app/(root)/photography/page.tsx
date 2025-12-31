import { Metadata } from "next";
import { PHOTOS, PHOTO_CATEGORIES } from "@/app/data";
import { pagesConfig } from "@/config/pages";
import { PhotographyClientWrapper } from "@/components/photography/photography-client-wrapper";

export const metadata: Metadata = {
    title: pagesConfig.contributions.metadata.title,
    description: pagesConfig.contributions.metadata.description,
};

export default function PhotographyPage() {
    return (
        <div className="container py-12">
            <PhotographyClientWrapper
                title={pagesConfig.contributions.title}
                description={pagesConfig.contributions.description}
                photos={PHOTOS}
                categories={PHOTO_CATEGORIES}
            />
        </div>
    );
}
