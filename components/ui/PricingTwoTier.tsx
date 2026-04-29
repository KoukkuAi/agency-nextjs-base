'use client';
// components/ui/PricingTwoTier.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — 2-tier pricing cards (Hobby/Enterprise style).
// One dark featured card, one light. Gradient blob background.
// Adapted for KoukkuAi: data-driven, primaryColor, cn(), FadeIn, lucide, Balancer.
//
// Usage:
//   import { PricingTwoTier } from '@/components/ui';
//
//   <PricingTwoTier
//     superLabel="Hinnoittelu"
//     headline="Valitse sinulle sopiva paketti."
//     subheadline="Ei piilomaksuja. Peruuta milloin vain."
//     primaryColor="#4F46E5"
//     tiers={[
//       {
//         id: 'perus', name: 'Perus', priceMonthly: '€29', featured: false,
//         description: 'Täydellinen aloittelijoille.',
//         features: ['5 projektia', '10 GB tallennustila', 'Sähköpostituki'],
//         href: '#',
//       },
//       {
//         id: 'pro', name: 'Pro', priceMonthly: '€99', featured: true,
//         description: 'Kasvavalle tiimille.',
//         features: ['Rajoittamaton projektit', '100 GB tallennustila', 'Prioriteettituki', 'API-pääsy'],
//         href: '#',
//       },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import { Check } from 'lucide-react';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface TwoTierItem {
  id: string;
  name: string;
  priceMonthly: string;
  featured: boolean;
  description: string;
  features: string[];
  href?: string;
  ctaLabel?: string;
}

interface PricingTwoTierProps {
  superLabel?: string;
  headline: string;
  subheadline?: string;
  primaryColor?: string;
  tiers: [TwoTierItem, TwoTierItem];
  className?: string;
}

export function PricingTwoTier({
  superLabel,
  headline,
  subheadline,
  primaryColor = '#4F46E5',
  tiers,
  className,
}: PricingTwoTierProps) {
  return (
    <div className={cn('relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8', className)}>

      {/* Gradient blob background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 overflow-hidden px-36 blur-3xl transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${primaryColor}55, ${primaryColor}22)`,
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] opacity-30"
        />
      </div>

      {/* Header */}
      <FadeIn className="mx-auto max-w-4xl text-center">
        {superLabel && (
          <h2 className="text-sm font-semibold tracking-wide uppercase" style={{ color: primaryColor }}>
            {superLabel}
          </h2>
        )}
        <p className="mt-2 text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
          <Balancer>{headline}</Balancer>
        </p>
      </FadeIn>
      {subheadline && (
        <FadeIn delay={0.05}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-zinc-600 sm:text-xl">
            <Balancer>{subheadline}</Balancer>
          </p>
        </FadeIn>
      )}

      {/* Cards */}
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, idx) => (
          <FadeIn
            key={tier.id}
            delay={idx * 0.1}
            className={cn(
              'rounded-3xl p-8 ring-1 ring-zinc-900/10 sm:p-10',
              tier.featured
                ? 'relative bg-zinc-900 shadow-2xl z-10'
                : cn(
                    'bg-white/60 sm:mx-8 lg:mx-0',
                    idx === 0
                      ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                      : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none'
                  )
            )}
          >
            {/* Tier name */}
            <h3
              className="text-sm font-semibold"
              style={{ color: tier.featured ? `${primaryColor}cc` : primaryColor }}
            >
              {tier.name}
            </h3>

            {/* Price */}
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={cn(
                  'text-5xl font-bold tracking-tight',
                  tier.featured ? 'text-white' : 'text-zinc-950'
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={cn('text-base', tier.featured ? 'text-zinc-400' : 'text-zinc-500')}>
                /kk
              </span>
            </p>

            {/* Description */}
            <p className={cn('mt-6 text-base leading-7', tier.featured ? 'text-zinc-300' : 'text-zinc-600')}>
              {tier.description}
            </p>

            {/* Feature list */}
            <ul
              role="list"
              className={cn(
                'mt-8 space-y-3 text-sm sm:mt-10',
                tier.featured ? 'text-zinc-300' : 'text-zinc-600'
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check
                    aria-hidden="true"
                    className="h-6 w-5 flex-none"
                    style={{ color: tier.featured ? `${primaryColor}cc` : primaryColor }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={tier.href ?? '#'}
              aria-describedby={tier.id}
              className="mt-8 block rounded-xl px-3.5 py-2.5 text-center text-sm font-semibold transition-opacity duration-200 sm:mt-10"
              style={
                tier.featured
                  ? { backgroundColor: primaryColor, color: '#fff' }
                  : { color: primaryColor, boxShadow: `inset 0 0 0 1px ${primaryColor}40` }
              }
            >
              {tier.ctaLabel ?? 'Aloita nyt'}
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
