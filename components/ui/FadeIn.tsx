'use client';
// components/ui/FadeIn.tsx
// ──────────────────────────────────────────────────────────────────────────────
// FadeIn — Single element fade-in-up animation on scroll entry.
// FadeInStagger — Wraps children with staggered fade-in (use for card grids).
//
// Usage:
//   <FadeIn><h1>Title</h1></FadeIn>
//   <FadeInStagger><Card /><Card /><Card /></FadeInStagger>
// ──────────────────────────────────────────────────────────────────────────────
import { motion, type Variants } from 'framer-motion';
import React from 'react';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={fadeInVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
