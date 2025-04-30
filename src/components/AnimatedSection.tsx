"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedSection({ children, delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px 0px" });
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion && isInView;

  // Désactive l'animation si l'utilisateur préfère moins d'animations
  const animation = prefersReducedMotion
    ? {}
    : isInView
    ? { opacity: 1 }
    : { opacity: 0 };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0}}
      animate={{ opacity: shouldAnimate ? 1 : prefersReducedMotion ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeIn", delay }}
    >
      {children}
    </motion.div>
  );
}
