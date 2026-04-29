'use client';
// components/ui/RevealText.tsx
// ──────────────────────────────────────────────────────────────────────────────
// RevealText — Premium text reveal animation (text slides up from a clipping mask).
// Inspired by Aceternity UI's text reveal pattern.
// Use for Hero headlines and section titles for maximum impact.
//
// Usage:
//   <RevealText as="h1" className="text-5xl font-bold">
//     Putkiremontit ilman yllätyksiä.
//   </RevealText>
// ──────────────────────────────────────────────────────────────────────────────
import { motion } from 'framer-motion';
import React from 'react';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface RevealTextProps {
  children: React.ReactNode;
  as?: HeadingTag;
  className?: string;
  delay?: number;
}

export function RevealText({ children, as: Tag = 'h2', className, delay = 0 }: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <Tag className={className}>{children}</Tag>
      </motion.div>
    </div>
  );
}
