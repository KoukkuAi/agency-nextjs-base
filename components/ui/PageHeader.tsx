'use client';
// components/ui/PageHeader.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Simple centered page header (superLabel + headline + sub).
// Adapted for KoukkuAi: primaryColor superLabel, Balancer, FadeIn, cn().
// Best for: Ota yhteyttä, Tuki, FAQ, Blogi — inner page openers.
//
// Usage:
//   import { PageHeader } from '@/components/ui';
//
//   <PageHeader
//     superLabel="Ota yhteyttä"
//     headline="Olemme täällä auttamassa."
//     subheadline="Vastataan 24 tunnin sisällä arkisin. Ei sitoumuksia."
//     primaryColor="#4F46E5"
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface PageHeaderProps {
  superLabel?: string;
  headline: string;
  subheadline?: string;
  primaryColor?: string;
  className?: string;
}

export function PageHeader({
  superLabel,
  headline,
  subheadline,
  primaryColor = '#4F46E5',
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('bg-white px-6 py-24 sm:py-32 lg:px-8', className)}>
      <FadeIn className="mx-auto max-w-2xl text-center">
        {superLabel && (
          <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: primaryColor }}>
            {superLabel}
          </p>
        )}
        <h2 className="mt-2 text-5xl font-bold tracking-tight text-zinc-950 sm:text-7xl">
          <Balancer>{headline}</Balancer>
        </h2>
        {subheadline && (
          <p className="mt-8 text-lg font-medium text-zinc-500 sm:text-xl leading-8">
            <Balancer>{subheadline}</Balancer>
          </p>
        )}
      </FadeIn>
    </div>
  );
}
