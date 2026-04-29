'use client';
// components/ui/GlowCard.tsx
// ──────────────────────────────────────────────────────────────────────────────
// GlowCard — Card with animated gradient glow border on hover.
// Inspired by Magic UI. Perfect for pricing and testimonial sections.
//
// Usage:
//   <GlowCard glowColor="blue">
//     <p>Asiakaspalaute tässä</p>
//   </GlowCard>
// ──────────────────────────────────────────────────────────────────────────────
import { motion } from 'framer-motion';
import React from 'react';
import { cn } from './cn';

type GlowColor = 'blue' | 'purple' | 'emerald' | 'amber' | 'zinc';

const glowMap: Record<GlowColor, string> = {
  blue:    'from-blue-600/20 via-blue-400/10 to-transparent',
  purple:  'from-purple-600/20 via-purple-400/10 to-transparent',
  emerald: 'from-emerald-600/20 via-emerald-400/10 to-transparent',
  amber:   'from-amber-600/20 via-amber-400/10 to-transparent',
  zinc:    'from-zinc-600/20 via-zinc-400/10 to-transparent',
};

interface GlowCardProps {
  children: React.ReactNode;
  glowColor?: GlowColor;
  className?: string;
}

export function GlowCard({ children, glowColor = 'blue', className }: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('group relative rounded-2xl p-px overflow-hidden', className)}
    >
      {/* Glow border */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          glowMap[glowColor]
        )}
      />
      {/* Inner card */}
      <div className="relative rounded-2xl bg-white border border-zinc-200 p-8 h-full">
        {children}
      </div>
    </motion.div>
  );
}
