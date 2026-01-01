"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: [0.19, 1.0, 0.22, 1.0], // Premium "Expo Out" feel
    },
  }),
};

export const AnimatedText = ({
  children,
  delay = 0,
  className = "",
  as = "div",
}: AnimatedTextProps) => {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      animate="visible"
      custom={delay}
      variants={textVariants}
      className={className}
    >
      {children}
    </Component>
  );
};
