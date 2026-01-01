"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
    children: ReactNode;
    className?: string;
    depth?: number;
    id?: string;
}

export function ParallaxSection({
    children,
    className,
    depth = 40,
    id,
}: ParallaxSectionProps) {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const springConfig = { stiffness: 60, damping: 20, restDelta: 0.001 };
    const springProgress = useSpring(scrollYProgress, springConfig);

    // Parallax effect: standard lag
    const y = useTransform(springProgress, [0, 1], [depth, -depth]);

    // Gentle entry opacity
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section
            ref={ref}
            id={id}
            className={cn("relative", className)}
        >
            <motion.div style={{ y, opacity }} className="w-full">
                {children}
            </motion.div>
        </section>
    );
}
