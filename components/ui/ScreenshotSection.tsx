'use client';
// components/ui/ScreenshotSection.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Feature section with large app screenshot.
// Adapted for KoukkuAi: props-driven, Balancer, FadeIn, cn().
// Best for: SaaS-tuotteet, portaalit, sovellukset — näyttää tuotteen visuaalisesti.
//
// Usage:
//   import { ScreenshotSection } from '@/components/ui';
//
//   <ScreenshotSection
//     headline="Kaikki mitä tarvitset liiketoimintasi kasvattamiseen."
//     screenshotSrc="/dashboard.png"
//     screenshotAlt="Hallintapaneeli"
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface ScreenshotSectionProps {
  headline: string;
  screenshotSrc: string;
  screenshotAlt?: string;
  className?: string;
}

export function ScreenshotSection({
  headline,
  screenshotSrc,
  screenshotAlt = 'Sovelluksen kuvakaappaus',
  className,
}: ScreenshotSectionProps) {
  return (
    <div className={cn('overflow-hidden bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <FadeIn delay={0}>
          <p className="max-w-2xl text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
            <Balancer>{headline}</Balancer>
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="relative mt-16">
          {/* Shadow ring around screenshot */}
          <div className="absolute -inset-2 rounded-[calc(theme(borderRadius.xl)+8px)] shadow-sm ring-1 ring-zinc-900/5" />
          <img
            alt={screenshotAlt}
            src={screenshotSrc}
            className="relative w-full rounded-xl shadow-2xl ring-1 ring-zinc-900/10"
          />
        </FadeIn>

      </div>
    </div>
  );
}
