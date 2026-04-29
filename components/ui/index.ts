// components/ui/index.ts
// ──────────────────────────────────────────────────────────────────────────────
// KoukkuAi Component Library — Claude Design reads this folder via GitHub OAuth.
//
// IMPORTS:
//   import { Button, Card, cn, FadeIn, Meteors, BentoGrid } from '@/components/ui'
// ──────────────────────────────────────────────────────────────────────────────

// Core utility — ALWAYS use cn() instead of string concatenation for classNames
export { cn } from './cn';

// Primitives
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Badge } from './Badge';
export { default as Input } from './Input';

// Animation — Scroll-triggered, fires once only (viewport: once: true)
export { FadeIn, FadeInStagger } from './FadeIn';
export { RevealText } from './RevealText';

// Premium backgrounds
export { Meteors } from './Meteors';

// Layout components (Aceternity-inspired)
export { BentoGrid, BentoCard } from './BentoGrid';

// Cards
export { GlowCard } from './GlowCard';

// Stats / Social proof
export { NumberTicker } from './NumberTicker';
