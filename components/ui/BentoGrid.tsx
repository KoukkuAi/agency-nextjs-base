'use client';
// components/ui/BentoGrid.tsx
// ──────────────────────────────────────────────────────────────────────────────
// BentoGrid — Apple/Linear-style asymmetric feature grid.
// Ported from Aceternity UI pattern. Use for Services and Features sections.
//
// Usage:
//   <BentoGrid>
//     <BentoCard
//       title="Palvelu 1"
//       description="Kuvaus tässä."
//       icon={<Wrench size={24} />}
//       className="md:col-span-2"
//     />
//     <BentoCard title="Palvelu 2" description="..." icon={<Clock size={24} />} />
//   </BentoGrid>
// ──────────────────────────────────────────────────────────────────────────────
import { motion } from 'framer-motion';
import React from 'react';
import { cn } from './cn';

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function BentoCard({ title, description, icon, className, children }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      className={cn(
        'group relative rounded-2xl border border-zinc-200 bg-white p-8',
        'hover:border-zinc-300 hover:shadow-lg transition-all duration-300',
        className
      )}
    >
      {icon && (
        <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-zinc-100 p-3 text-zinc-700 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-xl font-bold tracking-tight text-zinc-950">{title}</h3>
      <p className="text-zinc-600 leading-relaxed">{description}</p>
      {children}
    </motion.div>
  );
}

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-3', className)}>
      {children}
    </div>
  );
}
