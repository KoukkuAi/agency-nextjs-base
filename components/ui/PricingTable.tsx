'use client';
// components/ui/PricingTable.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Full pricing section: monthly/annual CSS toggle, 3 tiers,
// highlights list, + full feature comparison table (mobile & desktop).
// Adapted for KoukkuAi: data-driven, primaryColor, cn(), FadeIn, lucide icons.
// Requires: Tailwind CSS v3.4+ (uses :has() selector for CSS-only toggle).
//
// Usage:
//   import { PricingTable } from '@/components/ui';
//   <PricingTable
//     headline="Hinnoittelu joka kasvaa kanssasi."
//     subheadline="Valitse suunnitelma joka sopii tiimillesi."
//     primaryColor="#4F46E5"
//     tiers={[...]}
//     sections={[...]}
//   />
//
// Tier shape:
//   { id, name, featured, description,
//     price: { monthly: '€99', annually: '€990' },
//     highlights: ['Ominaisuus 1', ...] }
//
// Section shape:
//   { name: 'Ominaisuudet', features: [
//     { name: 'SSO', tiers: { Starter: false, Scale: true, Growth: '3 kpl' } }
//   ]}
// ──────────────────────────────────────────────────────────────────────────────
import { Check, X } from 'lucide-react';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

// ── Types ─────────────────────────────────────────────────────────────────────

interface PricingTier {
  id: string;
  name: string;
  featured: boolean;
  description: string;
  price: { monthly: string; annually: string };
  highlights: string[];
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

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  primaryColor?: string;
  currency?: string;
  tiers: PricingTier[];
  sections: PricingSection[];
  className?: string;
}

// ── Component ─────────────────────────────────────────────────────────────────

export function PricingTable({
  headline,
  subheadline,
  primaryColor = '#4F46E5',
  currency = '€',
  tiers,
  sections,
  className,
}: PricingTableProps) {
  // Inline styles for primaryColor since Tailwind can't generate dynamic classes
  const featuredStyle = { backgroundColor: primaryColor } as React.CSSProperties;
  const featuredHoverStyle = { '--featured-color': primaryColor } as React.CSSProperties;

  return (
    <form className={cn('group/tiers isolate overflow-hidden bg-white', className)}>

      {/* ── Dark header with tier cards ────────────────────────────────────── */}
      <div className="flow-root border-b border-b-transparent bg-zinc-900 pt-24 pb-16 sm:pt-32 lg:pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="relative z-10">

            {/* Headline */}
            <h2 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white sm:text-6xl">
              <Balancer>{headline}</Balancer>
            </h2>
            {subheadline && (
              <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-zinc-400 sm:text-xl">
                <Balancer>{subheadline}</Balancer>
              </p>
            )}

            {/* Monthly / Annually CSS toggle */}
            <div className="mt-16 flex justify-center">
              <fieldset aria-label="Maksuväli">
                <div className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold text-white">
                  <label
                    className="group relative rounded-full px-2.5 py-1 has-checked:text-white transition-colors duration-200"
                    style={undefined}
                  >
                    <input
                      defaultValue="monthly"
                      defaultChecked
                      name="frequency"
                      type="radio"
                      className="absolute inset-0 appearance-none rounded-full checked:bg-[var(--primary)] peer"
                      style={{ '--primary': primaryColor } as React.CSSProperties}
                    />
                    <span className="relative">Kuukausittain</span>
                  </label>
                  <label className="group relative rounded-full px-2.5 py-1 transition-colors duration-200">
                    <input
                      defaultValue="annually"
                      name="frequency"
                      type="radio"
                      className="absolute inset-0 appearance-none rounded-full checked:bg-[var(--primary)] peer"
                      style={{ '--primary': primaryColor } as React.CSSProperties}
                    />
                    <span className="relative">Vuosittain</span>
                  </label>
                </div>
              </fieldset>
            </div>
          </FadeIn>

          {/* Tier cards */}
          <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">

            {/* Glow SVG */}
            <svg
              viewBox="0 0 1208 1024"
              aria-hidden="true"
              className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
            >
              <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#pricing-glow)" />
              <defs>
                <radialGradient id="pricing-glow">
                  <stop stopColor={primaryColor} />
                  <stop offset={1} stopColor={primaryColor} stopOpacity="0.3" />
                </radialGradient>
              </defs>
            </svg>

            {/* Desktop: bg panel behind non-featured */}
            <div
              aria-hidden="true"
              className="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-zinc-800/80 lg:ring-1 lg:ring-white/10"
            />

            {tiers.map((tier) => (
              <div
                key={tier.id}
                data-featured={tier.featured ? 'true' : undefined}
                className={cn(
                  'group/tier relative rounded-2xl',
                  tier.featured
                    ? 'z-10 bg-white shadow-xl ring-1 ring-zinc-900/10'
                    : 'bg-zinc-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                )}
              >
                <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                  <h3 className={cn(
                    'text-sm font-semibold',
                    tier.featured ? 'text-zinc-900' : 'text-white'
                  )}>
                    {tier.name}
                  </h3>

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                    <div className="mt-2 flex items-center gap-x-4">

                      {/* Monthly price — hidden when annually selected */}
                      <p className={cn(
                        'text-4xl font-bold tracking-tight',
                        tier.featured ? 'text-zinc-900' : 'text-white',
                        'group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden'
                      )}>
                        {tier.price.monthly}
                      </p>

                      {/* Annual price — hidden when monthly selected */}
                      <p className={cn(
                        'text-4xl font-bold tracking-tight',
                        tier.featured ? 'text-zinc-900' : 'text-white',
                        'group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden'
                      )}>
                        {tier.price.annually}
                      </p>

                      <div className="text-sm">
                        <p className={tier.featured ? 'text-zinc-900' : 'text-white'}>{currency}</p>
                        <p className={cn(
                          tier.featured ? 'text-zinc-500' : 'text-zinc-400',
                          'group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden'
                        )}>
                          / kk
                        </p>
                        <p className={cn(
                          tier.featured ? 'text-zinc-500' : 'text-zinc-400',
                          'group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden'
                        )}>
                          / vuosi
                        </p>
                      </div>
                    </div>

                    {/* CTA button */}
                    <a
                      href={tier.href ?? '#'}
                      aria-describedby={tier.id}
                      className={cn(
                        'w-full rounded-xl px-3 py-2 text-center text-sm font-semibold transition-opacity duration-200',
                        tier.featured
                          ? 'text-white shadow-sm hover:opacity-90'
                          : 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20'
                      )}
                      style={tier.featured ? featuredStyle : undefined}
                    >
                      {tier.ctaLabel ?? 'Aloita nyt'}
                    </a>
                  </div>

                  {/* Highlights list */}
                  <div className="mt-8 flow-root sm:mt-10">
                    <ul
                      role="list"
                      className={cn(
                        '-my-2 divide-y border-t text-sm',
                        tier.featured
                          ? 'divide-zinc-900/5 border-zinc-900/5 text-zinc-600'
                          : 'divide-white/5 border-white/5 text-white',
                        'lg:border-t-0'
                      )}
                    >
                      {tier.highlights.map((feature) => (
                        <li key={feature} className="flex gap-x-3 py-2">
                          <Check
                            aria-hidden="true"
                            className={cn(
                              'h-6 w-5 flex-none',
                              tier.featured ? 'text-zinc-500' : 'text-zinc-400'
                            )}
                            style={tier.featured ? { color: primaryColor } : undefined}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Feature comparison table ────────────────────────────────────────── */}
      <div className="relative bg-zinc-50 lg:pt-14">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">

          {/* Mobile comparison */}
          <section aria-labelledby="mobile-comparison-heading" className="lg:hidden">
            <h2 id="mobile-comparison-heading" className="sr-only">Ominaisuuksien vertailu</h2>
            <div className="mx-auto max-w-2xl space-y-16">
              {tiers.map((tier) => (
                <div key={tier.id} className="border-t border-zinc-900/10">
                  <div className={cn(
                    '-mt-px w-72 border-t-2 pt-10 md:w-80',
                    tier.featured ? 'border-t-2' : 'border-transparent'
                  )}
                  style={tier.featured ? { borderColor: primaryColor } : undefined}
                  >
                    <h3 className="text-sm font-semibold" style={tier.featured ? { color: primaryColor } : { color: '#18181b' }}>
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600">{tier.description}</p>
                  </div>
                  <div className="mt-10 space-y-10">
                    {sections.map((section) => (
                      <div key={section.name}>
                        <h4 className="text-sm font-semibold text-zinc-950">{section.name}</h4>
                        <div className="relative mt-6">
                          <div
                            aria-hidden="true"
                            className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
                          />
                          <div className={cn(
                            'relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0',
                            tier.featured ? 'ring-2' : 'ring-1 ring-zinc-900/10'
                          )}
                          style={tier.featured ? { '--ring-color': primaryColor } as React.CSSProperties : undefined}
                          >
                            <dl className="divide-y divide-zinc-200 text-sm">
                              {section.features.map((feature) => (
                                <div key={feature.name} className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
                                  <dt className="pr-4 text-zinc-600">{feature.name}</dt>
                                  <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                                    {typeof feature.tiers[tier.name] === 'string' ? (
                                      <span
                                        className="font-semibold text-sm"
                                        style={tier.featured ? { color: primaryColor } : { color: '#18181b' }}
                                      >
                                        {feature.tiers[tier.name]}
                                      </span>
                                    ) : feature.tiers[tier.name] === true ? (
                                      <Check aria-hidden="true" className="mx-auto size-5" style={{ color: primaryColor }} />
                                    ) : (
                                      <X aria-hidden="true" className="mx-auto size-5 text-zinc-400" />
                                    )}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                          <div
                            aria-hidden="true"
                            className={cn(
                              'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block',
                              tier.featured ? 'ring-2' : 'ring-1 ring-zinc-900/10'
                            )}
                            style={tier.featured ? { boxShadow: `0 0 0 2px ${primaryColor}` } : undefined}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Desktop comparison table */}
          <section aria-labelledby="comparison-heading" className="hidden lg:block">
            <h2 id="comparison-heading" className="sr-only">Ominaisuuksien vertailu</h2>

            {/* Tier column headers */}
            <div className="grid grid-cols-4 gap-x-8 border-t border-zinc-900/10 before:block">
              {tiers.map((tier) => (
                <div key={tier.id} aria-hidden="true" className="-mt-px">
                  <div
                    className={cn('border-t-2 pt-10', tier.featured ? '' : 'border-transparent')}
                    style={tier.featured ? { borderColor: primaryColor } : undefined}
                  >
                    <p
                      className="text-sm font-semibold"
                      style={tier.featured ? { color: primaryColor } : { color: '#18181b' }}
                    >
                      {tier.name}
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">{tier.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section tables */}
            <div className="-mt-6 space-y-16">
              {sections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm font-semibold text-zinc-950">{section.name}</h3>
                  <div className="relative -mx-8 mt-10">

                    {/* Card backgrounds */}
                    <div aria-hidden="true" className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block">
                      <div className="size-full rounded-lg bg-white shadow-sm" />
                      <div className="size-full rounded-lg bg-white shadow-sm" />
                      <div className="size-full rounded-lg bg-white shadow-sm" />
                    </div>

                    <table className="relative w-full border-separate border-spacing-x-8">
                      <thead>
                        <tr className="text-left">
                          <th scope="col"><span className="sr-only">Ominaisuus</span></th>
                          {tiers.map((tier) => (
                            <th key={tier.id} scope="col"><span className="sr-only">{tier.name}</span></th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.features.map((feature, featureIdx) => (
                          <tr key={feature.name}>
                            <th scope="row" className="w-1/4 py-3 pr-4 text-left text-sm font-normal text-zinc-950">
                              {feature.name}
                              {featureIdx !== section.features.length - 1 && (
                                <div className="absolute inset-x-8 mt-3 h-px bg-zinc-200" />
                              )}
                            </th>
                            {tiers.map((tier) => (
                              <td key={tier.id} className="relative w-1/4 px-4 py-0 text-center">
                                <span className="relative size-full py-3">
                                  {typeof feature.tiers[tier.name] === 'string' ? (
                                    <span
                                      className="text-sm font-semibold"
                                      style={tier.featured ? { color: primaryColor } : { color: '#18181b' }}
                                    >
                                      {feature.tiers[tier.name]}
                                    </span>
                                  ) : feature.tiers[tier.name] === true ? (
                                    <Check aria-hidden="true" className="mx-auto size-5" style={{ color: primaryColor }} />
                                  ) : (
                                    <X aria-hidden="true" className="mx-auto size-5 text-zinc-400" />
                                  )}
                                </span>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {/* Card borders */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block">
                      {tiers.map((tier) => (
                        <div
                          key={tier.id}
                          className="rounded-lg"
                          style={
                            tier.featured
                              ? { boxShadow: `0 0 0 2px ${primaryColor}` }
                              : { boxShadow: '0 0 0 1px rgba(24,24,27,0.1)' }
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </form>
  );
}
