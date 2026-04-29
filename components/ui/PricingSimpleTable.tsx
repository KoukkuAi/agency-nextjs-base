'use client';
// components/ui/PricingSimpleTable.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Simple pricing table (no toggle). Mobile: stacked cards.
// Desktop: fixed table with most-popular highlight column.
// Adapted for KoukkuAi: data-driven, primaryColor, cn(), FadeIn, lucide icons.
//
// Usage:
//   import { PricingSimpleTable } from '@/components/ui';
//
//   <PricingSimpleTable
//     superLabel="Hinnoittelu"
//     headline="Hinnoittelu joka kasvaa kanssasi."
//     subheadline="Valitse budjettisi mukainen paketti."
//     primaryColor="#4F46E5"
//     tiers={[
//       { id: 'starter', name: 'Starter', priceMonthly: '€19', mostPopular: false, href: '#' },
//       { id: 'growth', name: 'Growth', priceMonthly: '€49', mostPopular: true, href: '#' },
//       { id: 'scale', name: 'Scale', priceMonthly: '€99', mostPopular: false, href: '#' },
//     ]}
//     sections={[...]}   // same shape as PricingTable sections
//   />
// ──────────────────────────────────────────────────────────────────────────────
import { Fragment } from 'react';
import { Check, Minus } from 'lucide-react';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface SimpleTier {
  id: string;
  name: string;
  priceMonthly: string;
  mostPopular: boolean;
  href?: string;
  ctaLabel?: string;
}

interface PricingFeature {
  name: string;
  tiers: Record<string, boolean | string>;
}

interface PricingSection {
  name: string;
  features: PricingFeature[];
}

interface PricingSimpleTableProps {
  superLabel?: string;
  headline: string;
  subheadline?: string;
  primaryColor?: string;
  tiers: SimpleTier[];
  sections: PricingSection[];
  className?: string;
}

export function PricingSimpleTable({
  superLabel,
  headline,
  subheadline,
  primaryColor = '#4F46E5',
  tiers,
  sections,
  className,
}: PricingSimpleTableProps) {
  const popularIdx = tiers.findIndex((t) => t.mostPopular);

  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

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

        {/* ── Mobile: stacked cards ──────────────────────────────────────── */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={cn(
                'p-8',
                tier.mostPopular && 'rounded-xl bg-zinc-50 ring-1 ring-zinc-200'
              )}
            >
              <h3 className="text-sm font-semibold text-zinc-950">{tier.name}</h3>
              <p className="mt-2 flex items-baseline gap-x-1 text-zinc-950">
                <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                <span className="text-sm font-semibold">/kk</span>
              </p>
              <a
                href={tier.href ?? '#'}
                aria-describedby={tier.id}
                className="mt-8 block rounded-xl px-3 py-2 text-center text-sm font-semibold transition-colors duration-200"
                style={
                  tier.mostPopular
                    ? { backgroundColor: primaryColor, color: '#fff' }
                    : { color: primaryColor, boxShadow: `inset 0 0 0 1px ${primaryColor}30` }
                }
              >
                {tier.ctaLabel ?? 'Aloita nyt'}
              </a>
              <ul role="list" className="mt-10 space-y-4 text-sm text-zinc-950">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <Check aria-hidden="true" className="h-6 w-5 flex-none" style={{ color: primaryColor }} />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name] === 'string' && (
                                <span className="text-sm text-zinc-500">({feature.tiers[tier.name]})</span>
                              )}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* ── Desktop: comparison table ──────────────────────────────────── */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">

            {/* Popular column highlight */}
            {popularIdx >= 0 && (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  style={{ marginLeft: `${(popularIdx + 1) * 25}%` }}
                  aria-hidden="true"
                  className="flex w-1/4 px-4"
                >
                  <div
                    className="w-full rounded-t-xl border-x border-t"
                    style={{ borderColor: `${primaryColor}30`, backgroundColor: `${primaryColor}08` }}
                  />
                </div>
              </div>
            )}

            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Hinnoittelupakettien vertailu</caption>
              <colgroup>
                <col className="w-1/4" />
                {tiers.map((t) => <col key={t.id} className="w-1/4" />)}
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold text-zinc-950">{tier.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Price + CTA row */}
                <tr>
                  <th scope="row"><span className="sr-only">Hinta</span></th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-zinc-950">
                        <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                        <span className="text-sm font-semibold">/kk</span>
                      </div>
                      <a
                        href={tier.href ?? '#'}
                        className="mt-8 block rounded-xl px-3 py-2 text-center text-sm font-semibold transition-colors duration-200"
                        style={
                          tier.mostPopular
                            ? { backgroundColor: primaryColor, color: '#fff' }
                            : { color: primaryColor, boxShadow: `inset 0 0 0 1px ${primaryColor}30` }
                        }
                      >
                        {tier.ctaLabel ?? 'Aloita nyt'}
                      </a>
                    </td>
                  ))}
                </tr>

                {/* Section rows */}
                {sections.map((section, sIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={tiers.length + 1}
                        className={cn(
                          sIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm font-semibold text-zinc-950'
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-zinc-900/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal text-zinc-950">
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-zinc-900/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm text-zinc-500">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : feature.tiers[tier.name] === true ? (
                              <>
                                <Check aria-hidden="true" className="mx-auto size-5" style={{ color: primaryColor }} />
                                <span className="sr-only">Sisältyy — {tier.name}</span>
                              </>
                            ) : (
                              <>
                                <Minus aria-hidden="true" className="mx-auto size-5 text-zinc-400" />
                                <span className="sr-only">Ei sisälly — {tier.name}</span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
