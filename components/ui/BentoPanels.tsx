'use client';
// components/ui/BentoPanels.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Asymmetric bento-style feature grid (3-col, 2-row).
// Adapted for KoukkuAi: props-driven text, primaryColor, FadeIn, Balancer, cn().
// Layout: tall left panel | 2×2 center | tall right panel.
// Best for: SaaS feature showcase, ominaisuudet-osio.
//
// Usage:
//   import { BentoPanels } from '@/components/ui';
//
//   <BentoPanels
//     superLabel="Toimii nopeasti"
//     headline="Kaikki mitä tarvitset asiakaspalveluun."
//     primaryColor="#4F46E5"
//     panels={{
//       left:        { title: 'Mobiiliystävällinen', description: '...', imageSrc: '/bento-mobile.png' },
//       topCenter:   { title: 'Suorituskyky',        description: '...', imageSrc: '/bento-perf.png' },
//       bottomCenter:{ title: 'Tietoturva',          description: '...', imageSrc: '/bento-security.png' },
//       right:       { title: 'Tehokkaat API:t',     description: '...' },
//     }}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface PanelItem {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface BentoPanelsProps {
  superLabel?: string;
  headline: string;
  primaryColor?: string;
  panels: {
    left: PanelItem;
    topCenter: PanelItem;
    bottomCenter: PanelItem;
    right: PanelItem;
  };
  className?: string;
}

export function BentoPanels({
  superLabel,
  headline,
  primaryColor = '#4F46E5',
  panels,
  className,
}: BentoPanelsProps) {
  return (
    <div className={cn('bg-zinc-50 py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

        {/* Section header */}
        <FadeIn>
          {superLabel && (
            <h2 className="text-center text-sm font-semibold tracking-wide uppercase" style={{ color: primaryColor }}>
              {superLabel}
            </h2>
          )}
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            <Balancer>{headline}</Balancer>
          </p>
        </FadeIn>

        {/* Bento grid */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

          {/* LEFT — tall, spans 2 rows */}
          <FadeIn delay={0.05} className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 max-lg:text-center">
                  {panels.left.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 max-lg:text-center">
                  {panels.left.description}
                </p>
              </div>
              {panels.left.imageSrc && (
                <div className="relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12%] border-x-[3%] border-t-[3%] border-zinc-700 bg-zinc-900 shadow-2xl">
                    <img
                      alt={panels.left.imageAlt ?? panels.left.title}
                      src={panels.left.imageSrc}
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-zinc-900/5 lg:rounded-l-[2rem]" />
          </FadeIn>

          {/* TOP CENTER */}
          <FadeIn delay={0.1} className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 max-lg:text-center">
                  {panels.topCenter.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 max-lg:text-center">
                  {panels.topCenter.description}
                </p>
              </div>
              {panels.topCenter.imageSrc && (
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    alt={panels.topCenter.imageAlt ?? panels.topCenter.title}
                    src={panels.topCenter.imageSrc}
                    className="w-full max-lg:max-w-xs"
                  />
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-zinc-900/5 max-lg:rounded-t-[2rem]" />
          </FadeIn>

          {/* BOTTOM CENTER */}
          <FadeIn delay={0.15} className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 max-lg:text-center">
                  {panels.bottomCenter.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 max-lg:text-center">
                  {panels.bottomCenter.description}
                </p>
              </div>
              {panels.bottomCenter.imageSrc && (
                <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    alt={panels.bottomCenter.imageAlt ?? panels.bottomCenter.title}
                    src={panels.bottomCenter.imageSrc}
                    className="h-[min(152px,40cqw)] object-cover"
                  />
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-zinc-900/5" />
          </FadeIn>

          {/* RIGHT — tall, spans 2 rows, dark code panel */}
          <FadeIn delay={0.2} className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950 max-lg:text-center">
                  {panels.right.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-600 max-lg:text-center">
                  {panels.right.description}
                </p>
              </div>
              {panels.right.imageSrc ? (
                <div className="relative min-h-[30rem] w-full grow">
                  <img
                    alt={panels.right.imageAlt ?? panels.right.title}
                    src={panels.right.imageSrc}
                    className="absolute inset-0 size-full object-cover object-top"
                  />
                </div>
              ) : (
                /* Default: dark code panel placeholder */
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-zinc-900 shadow-2xl ring-1 ring-white/10">
                    <div className="flex bg-zinc-900 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium text-zinc-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          index.tsx
                        </div>
                        <div className="border-r border-zinc-600/10 px-4 py-2">app.tsx</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14 text-xs text-zinc-400 font-mono leading-6">
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-300">config</span>{' '}
                      <span className="text-white">= {'{'}</span>
                      <br />
                      {'  '}<span className="text-green-300">primaryColor</span>
                      <span className="text-white">: </span>
                      <span className="text-amber-300">&quot;{primaryColor}&quot;</span>
                      <br />
                      <span className="text-white">{'}'}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-zinc-900/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
