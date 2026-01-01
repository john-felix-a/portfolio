"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Icons } from "@/components/common/icons";
import { PhotoItem } from "@/app/types";
import { PhotoLightbox } from "./photo-lightbox";
import { InstagramEmbed } from "./instagram-embed";

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
                                    {photo.instagramId ? (
                                        <InstagramEmbed id={photo.instagramId} />
                                    ) : (
                                        <Image
                                            src={photo.src}
                                            alt={photo.title}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-cover transition-all duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    )}
                                </div>

                                {/* Instagram Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    {photo.instagramUrl && (
                                        <a
                                            href={photo.instagramUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 text-white"
                                        >
                                            <Icons.instagram className="w-6 h-6" />
                                        </a>
                                    )}
                                </div>
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
