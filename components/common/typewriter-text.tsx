"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number; // Start delay in seconds
    speed?: number; // Typing speed in ms per char
}

export function TypewriterText({
    text,
    className,
    delay = 0,
    speed = 80, // slower speed for cleaner effect
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <motion.h1
            className={cn("font-heading inline-block", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }} // Instant fade-in so we see typing
        >
            {displayedText}
            <span className="animate-pulse ml-1 inline-block bg-primary w-[3px] h-[1em] align-middle mb-1" />
        </motion.h1>
    );
}
