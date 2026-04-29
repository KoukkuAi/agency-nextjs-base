'use client';
// components/ui/CTASection.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Simple centered CTA section with solid brand color bg.
// Adapted for KoukkuAi: primaryColor replaces hardcoded indigo, Balancer, FadeIn.
// Best for: yhteydenotto-osio sivun lopussa, konversio-CTA.
//
// Usage:
//   import { CTASection } from '@/components/ui';
//
//   <CTASection
//     headline="Pyydä ilmainen arvio tänään."
//     subheadline="Vastataan 24 tunnin sisällä. Ei sitoumuksia."
//     primaryCta={{ label: "Ota yhteyttä", href: "#yhteystiedot" }}
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

interface CTASectionProps {
  headline: string;
  subheadline?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  primaryColor?: string;
  className?: string;
}

export function CTASection({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  primaryColor = '#4F46E5',
  className,
}: CTASectionProps) {
  return (
    <div className={cn('py-24 sm:py-32', className)} style={{ backgroundColor: primaryColor }}>
      <div className="px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <Balancer>{headline}</Balancer>
          </h2>

          {subheadline && (
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
              <Balancer>{subheadline}</Balancer>
            </p>
          )}

          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            {/* Primary: white button with brand text */}
            <a
              href={primaryCta.href}
              style={{ color: primaryColor }}
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-zinc-50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryCta.label}
            </a>

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="text-sm font-semibold text-white hover:text-white/80 transition-colors duration-200"
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
