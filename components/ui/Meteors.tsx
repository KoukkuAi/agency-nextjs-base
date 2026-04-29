'use client';
// components/ui/Meteors.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Meteors — Animated meteor shower background effect.
// Ported from Aceternity UI (MIT license). Works with framer-motion already installed.
// Use as a decorative background layer in Hero sections on dark backgrounds.
//
// Usage:
//   <div className="relative bg-zinc-950 overflow-hidden rounded-2xl">
//     <Meteors number={20} />
//     <div className="relative z-10">Your content here</div>
//   </div>
// ──────────────────────────────────────────────────────────────────────────────
import React from 'react';
import { cn } from './cn';

interface MeteorsProps {
  number?: number;
  className?: string;
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const meteors = Array.from({ length: number }, (_, i) => ({
    id: i,
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    delay: `${(Math.random() * 0.6 + 0.2).toFixed(2)}s`,
    duration: `${(Math.random() * 8 + 6).toFixed(2)}s`,
    size: `${Math.floor(Math.random() * 60) + 20}px`,
  }));

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {meteors.map(({ id, top, left, delay, duration, size }) => (
        <span
          key={id}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]"
          style={{
            top,
            left,
            animationDelay: delay,
            animationDuration: duration,
            width: size,
          }}
        >
          <span className="absolute top-1/2 -translate-y-1/2 right-0 h-px w-full bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </div>
  );
}
