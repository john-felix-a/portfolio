"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black transition-colors duration-300">
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="w-2 h-2 rounded-full bg-black dark:bg-white"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[10px] font-mono uppercase tracking-[0.2em] text-black dark:text-white"
                >
                    Loading
                </motion.p>
            </div>
        </div>
    );
};

export default Loader;
