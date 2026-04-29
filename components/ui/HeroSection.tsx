'use client';
// components/ui/HeroSection.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Hero with gradient background (adapted for KoukkuAi).
// Nav is NOT included — it lives in app/layout.tsx already.
//
// Usage:
//   import { HeroSection } from '@/components/ui';
//
//   <HeroSection
//     badge="24/7 Päivystys"
//     headline="Putkiremontit ilman yllätyksiä."
//     subheadline="Nopea, luotettava ja siisti jälki — yli 500 tyytyväistä asiakasta."
//     primaryCta={{ label: "Pyydä ilmainen arvio", href: "#yhteystiedot" }}
//     secondaryCta={{ label: "Katso referenssit", href: "#referenssit" }}
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

interface HeroSectionProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  primaryColor?: string;
  className?: string;
}

export function HeroSection({
  badge,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  primaryColor = '#4F46E5',
  className,
}: HeroSectionProps) {
  return (
    <div className={cn('relative isolate bg-white px-6 pt-24 lg:px-8', className)}>

      {/* Gradient blob — top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${primaryColor}33, ${primaryColor}55)`,
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

        {/* Badge */}
        {badge && (
          <FadeIn delay={0}>
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 transition-all duration-200">
                {badge}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Headline + subheadline */}
        <FadeIn delay={0.1}>
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-7xl">
              <Balancer>{headline}</Balancer>
            </h1>
            <p className="mt-8 text-lg font-medium text-zinc-500 sm:text-xl leading-relaxed">
              <Balancer>{subheadline}</Balancer>
            </p>
          </div>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            <a
              href={primaryCta.href}
              style={{ backgroundColor: primaryColor }}
              className="rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
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

      {/* Gradient blob — bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${primaryColor}33, ${primaryColor}55)`,
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
