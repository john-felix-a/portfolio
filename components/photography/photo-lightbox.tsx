"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { Icons } from "@/components/common/icons";
import { PhotoItem } from "@/app/types";

interface PhotoLightboxProps {
    photo: PhotoItem | null;
    onClose: () => void;
}

export function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (photo) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [photo, onClose]);

    return (
        <AnimatePresence>
            {photo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-10"
                    >
                        <Icons.close size={32} />
                    </button>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[80vh]">
                            <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                className="object-contain" // maintain aspect ratio
                                priority
                            />
                        </div>

                        <div className="mt-4 text-center text-white">
                            <h2 className="text-xl font-medium tracking-wide">{photo.title}</h2>
                            {photo.exif && (
                                <div className="flex gap-4 mt-2 text-sm text-white/60 justify-center">
                                    <span>{photo.exif.camera}</span>
                                    <span>{photo.exif.lens}</span>
                                    <span>{photo.exif.aperture}</span>
                                    <span>{photo.exif.iso}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
