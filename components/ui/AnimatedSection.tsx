"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0.18, y: 18, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.04, margin: "0px 0px 28% 0px" }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn("section-shell", className)}
    >
      {children}
    </motion.section>
  );
}
