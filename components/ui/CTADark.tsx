'use client';
// components/ui/CTADark.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Dark rounded CTA card with screenshot image and glow SVG.
// Adapted for KoukkuAi: primaryColor glow, props-driven, Balancer, FadeIn, cn().
// Best for: premium SaaS, portaali, sovellus — näyttää tuotteen + CTA yhdessä.
//
// Usage:
//   import { CTADark } from '@/components/ui';
//
//   <CTADark
//     headline="Tehosta toimintaasi. Kokeile tänään."
//     subheadline="Yli 500 yritystä käyttää meidän palvelua päivittäin."
//     primaryCta={{ label: "Aloita ilmaiseksi", href: "#yhteystiedot" }}
//     secondaryCta={{ label: "Lue lisää", href: "#palvelut" }}
//     screenshotSrc="/dashboard-dark.png"
//     primaryColor="#7775D6"
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface CtaLink {
  label: string;
  href: string;
}

interface CTADarkProps {
  headline: string;
  subheadline?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  screenshotSrc?: string;
  screenshotAlt?: string;
  primaryColor?: string;
  glowColor2?: string;
  className?: string;
}

export function CTADark({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  screenshotSrc,
  screenshotAlt = 'Sovelluksen kuvakaappaus',
  primaryColor = '#7775D6',
  glowColor2 = '#E935C1',
  className,
}: CTADarkProps) {
  const gradientId = `cta-dark-glow-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative isolate overflow-hidden bg-zinc-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

            {/* Radial glow */}
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill={`url(#${gradientId})`} fillOpacity="0.7" />
              <defs>
                <radialGradient id={gradientId}>
                  <stop stopColor={primaryColor} />
                  <stop offset={1} stopColor={glowColor2} />
                </radialGradient>
              </defs>
            </svg>

            {/* Text content */}
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <Balancer>{headline}</Balancer>
              </h2>
              {subheadline && (
                <p className="mt-6 text-lg leading-8 text-zinc-300">
                  <Balancer>{subheadline}</Balancer>
                </p>
              )}
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start flex-wrap gap-y-4">
                <a
                  href={primaryCta.href}
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 transition-colors duration-200"
                >
                  {primaryCta.label}
                </a>
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="text-sm font-semibold text-white hover:text-zinc-200 transition-colors duration-200"
                  >
                    {secondaryCta.label} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </div>

            {/* Screenshot */}
            {screenshotSrc && (
              <div className="relative mt-16 h-80 lg:mt-8">
                <img
                  alt={screenshotAlt}
                  src={screenshotSrc}
                  width={1824}
                  height={1080}
                  className="absolute top-0 left-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10"
                />
              </div>
            )}

          </div>
        </FadeIn>
      </div>
    </div>
  );
}
