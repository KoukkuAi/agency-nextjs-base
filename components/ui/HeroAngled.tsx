'use client';
// components/ui/HeroAngled.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Hero with angled/skewed background panel and side image.
// Adapted for KoukkuAi: props-driven, Balancer, FadeIn, cn(), primaryColor.
// Best for: asiantuntijapalvelut, tilitoimisto, lakiasiaintoimisto, konsultointi.
//
// Usage:
//   import { HeroAngled } from '@/components/ui';
//
//   <HeroAngled
//     headline="Muutamme tapaa jolla yritykset kasvavat."
//     subheadline="Yli 200 yritystä luottaa meihin. Kokenut tiimi, selkeät tulokset."
//     primaryCta={{ label: "Aloita nyt", href: "#yhteystiedot" }}
//     secondaryCta={{ label: "Lue lisää", href: "#palvelut" }}
//     imageSrc="/tiimi.jpg"
//     imageAlt="Tiimimme töissä"
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

interface HeroAngledProps {
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  imageSrc?: string;
  imageAlt?: string;
  primaryColor?: string;
  className?: string;
}

export function HeroAngled({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = 'Hero kuva',
  primaryColor = '#4F46E5',
  className,
}: HeroAngledProps) {
  return (
    <div className={cn('relative isolate overflow-hidden pt-14', className)}
      style={{ background: `linear-gradient(to bottom, ${primaryColor}10, transparent)` }}
    >
      {/* Skewed background panel */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-zinc-600/10 ring-zinc-50 sm:-mr-80 lg:-mr-96"
      />

      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">

          {/* Headline — spans full width on xl */}
          <FadeIn delay={0} className="lg:col-span-2 xl:col-auto">
            <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-zinc-950 sm:text-7xl">
              <Balancer>{headline}</Balancer>
            </h1>
          </FadeIn>

          {/* Subheadline + CTAs */}
          <FadeIn delay={0.15} className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg font-medium text-zinc-500 sm:text-xl leading-relaxed">
              <Balancer>{subheadline}</Balancer>
            </p>
            <div className="mt-10 flex items-center gap-x-6 flex-wrap gap-y-4">
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

          {/* Image — right side, tall on xl */}
          {imageSrc && (
            <FadeIn delay={0.25} className="mt-10 aspect-[6/5] w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
              <img
                alt={imageAlt}
                src={imageSrc}
                className="size-full rounded-2xl object-cover ring-1 ring-zinc-900/5"
              />
            </FadeIn>
          )}
        </div>
      </div>

      {/* Bottom fade-out */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}
