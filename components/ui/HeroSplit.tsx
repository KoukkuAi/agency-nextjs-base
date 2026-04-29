'use client';
// components/ui/HeroSplit.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Hero with split layout (text left, image/screenshot right).
// Adapted for KoukkuAi: props-driven, Balancer, FadeIn, cn(), primaryColor theming.
// Best for: SaaS, tech, construction, professional services.
//
// Usage:
//   import { HeroSplit } from '@/components/ui';
//
//   <HeroSplit
//     badge="Uutta"
//     badgeLink={{ label: "Katso mitä on uutta", href: "#" }}
//     headline="Putkiremontit ilman yllätyksiä."
//     subheadline="Nopea, luotettava ja siisti jälki — yli 500 tyytyväistä asiakasta."
//     primaryCta={{ label: "Pyydä ilmainen arvio", href: "#yhteystiedot" }}
//     secondaryCta={{ label: "Katso referenssit", href: "#referenssit" }}
//     screenshotSrc="/screenshot.png"
//     screenshotAlt="Sovelluksen kuvakaappaus"
//     primaryColor="#4F46E5"
//   />
// ──────────────────────────────────────────────────────────────────────────────
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface CtaLink {
  label: string;
  href: string;
}

interface HeroSplitProps {
  badge?: string;
  badgeLink?: CtaLink;
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  screenshotSrc?: string;
  screenshotAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  primaryColor?: string;
  className?: string;
}

export function HeroSplit({
  badge,
  badgeLink,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  screenshotSrc,
  screenshotAlt = 'Kuvakaappaus',
  logoSrc,
  logoAlt = 'Logo',
  primaryColor = '#4F46E5',
  className,
}: HeroSplitProps) {
  return (
    <div className={cn('relative isolate overflow-hidden bg-white', className)}>

      {/* SVG grid background */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="hero-grid-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-zinc-50">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect fill="url(#hero-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
      </svg>

      {/* Gradient blob */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            background: `linear-gradient(to right, ${primaryColor}55, ${primaryColor}88)`,
          }}
          className="aspect-[1108/632] w-[69.25rem] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">

        {/* Left: text content */}
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">

          {/* Logo */}
          {logoSrc && (
            <img alt={logoAlt} src={logoSrc} className="h-11" />
          )}

          {/* Badge */}
          {badge && (
            <FadeIn delay={0}>
              <div className="mt-24 sm:mt-32 lg:mt-16">
                {badgeLink ? (
                  <a href={badgeLink.href} className="inline-flex space-x-6">
                    <span
                      style={{ color: primaryColor, borderColor: `${primaryColor}33`, backgroundColor: `${primaryColor}10` }}
                      className="rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset"
                    >
                      {badge}
                    </span>
                    <span className="inline-flex items-center space-x-2 text-sm font-medium text-zinc-600">
                      <span>{badgeLink.label}</span>
                      <ChevronRightIcon aria-hidden="true" className="size-5 text-zinc-400" />
                    </span>
                  </a>
                ) : (
                  <span
                    style={{ color: primaryColor, borderColor: `${primaryColor}33`, backgroundColor: `${primaryColor}10` }}
                    className="rounded-full px-3 py-1 text-sm font-semibold ring-1 ring-inset"
                  >
                    {badge}
                  </span>
                )}
              </div>
            </FadeIn>
          )}

          <FadeIn delay={0.1}>
            <h1 className="mt-10 text-5xl font-bold tracking-tight text-zinc-950 sm:text-7xl">
              <Balancer>{headline}</Balancer>
            </h1>
            <p className="mt-8 text-lg font-medium text-zinc-500 sm:text-xl leading-relaxed">
              <Balancer>{subheadline}</Balancer>
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
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
        </div>

        {/* Right: screenshot */}
        {screenshotSrc && (
          <FadeIn delay={0.3} className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <img
                alt={screenshotAlt}
                src={screenshotSrc}
                width={2432}
                height={1442}
                className="w-[76rem] rounded-2xl bg-zinc-50 shadow-xl ring-1 ring-zinc-900/10"
              />
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
