"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PhotoItem } from "@/app/types";
import { PhotoLightbox } from "./photo-lightbox";

interface PhotographyGridProps {
    photos: PhotoItem[];
}

export function PhotographyGrid({ photos }: PhotographyGridProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

    return (
        <div>
            <motion.div
                layout
                className="columns-1 sm:columns-2 lg:columns-3 gap-1 space-y-1"
            >
                <AnimatePresence mode="popLayout">
                    {photos.map((photo) => (
                        <motion.div
                            layout
                            key={photo.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="break-inside-avoid"
                        >
                            <div
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <div className="relative w-full">
                                    <Image
                                        src={photo.src}
                                        alt={photo.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-auto object-cover transition-all duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Minimal Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <PhotoLightbox
                photo={selectedPhoto}
                onClose={() => setSelectedPhoto(null)}
            />
        </div>
    );
}
