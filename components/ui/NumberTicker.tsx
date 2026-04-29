'use client';
// components/ui/NumberTicker.tsx
// ──────────────────────────────────────────────────────────────────────────────
// NumberTicker — Animated counter that counts up to a target number on scroll.
// From Magic UI pattern. Use in Social Proof / Stats sections.
//
// Usage:
//   <NumberTicker value={150} suffix="+" prefix="" />
//   → renders: "150+"
// ──────────────────────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from './cn';

interface NumberTickerProps {
  value: number;
  duration?: number;  // ms
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function NumberTicker({ value, duration = 1800, prefix = '', suffix = '', className }: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{display.toLocaleString('fi-FI')}{suffix}
    </span>
  );
}
