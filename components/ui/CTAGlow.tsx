'use client';
// components/ui/CTAGlow.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — CTA with radial gradient glow background (white bg variant).
// Adapted for KoukkuAi: primaryColor drives the glow colors, Balancer, FadeIn.
// Best for: sivuston lopun yhteydenotto, hinnoittelu-CTA — pehmeämpi kuin CTASection.
//
// Usage:
//   import { CTAGlow } from '@/components/ui';
//
//   <CTAGlow
//     headline="Aloita tänään ilmaiseksi."
//     subheadline="Ei sitoumuksia. Vastataan 24 h:n sisällä."
//     primaryCta={{ label: "Pyydä tarjous", href: "#yhteystiedot" }}
//     secondaryCta={{ label: "Lue lisää", href: "#palvelut" }}
//     primaryColor="#4F46E5"
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface CtaLink {
  label: string;
  href: string;
}

interface CTAGlowProps {
  headline: string;
  subheadline?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  primaryColor?: string;
  glowColor2?: string;
  className?: string;
}

export function CTAGlow({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  primaryColor = '#4F46E5',
  glowColor2 = '#E935C1',
  className,
}: CTAGlowProps) {
  const gradientId = `cta-glow-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <div className={cn('relative isolate overflow-hidden bg-white py-24 sm:py-32', className)}>

      {/* Radial glow SVG */}
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      >
        <circle r={512} cx={512} cy={512} fill={`url(#${gradientId})`} fillOpacity="0.7" />
        <defs>
          <radialGradient id={gradientId}>
            <stop stopColor={primaryColor} />
            <stop offset={1} stopColor={glowColor2} />
          </radialGradient>
        </defs>
      </svg>

      <div className="px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">

          <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            <Balancer>{headline}</Balancer>
          </h2>

          {subheadline && (
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              <Balancer>{subheadline}</Balancer>
            </p>
          )}

          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            <a
              href={primaryCta.href}
              style={{ backgroundColor: primaryColor }}
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity duration-200"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="text-sm font-semibold text-zinc-900 hover:text-zinc-600 transition-colors duration-200"
              >
                {secondaryCta.label} <span aria-hidden="true">→</span>
              </a>
            )}
          </div>

        </FadeIn>
      </div>
    </div>
  );
}
