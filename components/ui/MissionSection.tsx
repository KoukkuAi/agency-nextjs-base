'use client';
// components/ui/MissionSection.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — "Our mission" with long text left + vertical stats right.
// Adapted for KoukkuAi: data-driven, FadeIn, Balancer, cn().
// Best for: Tietoja meistä, yrityssivu, missio-osio.
//
// Usage:
//   import { MissionSection } from '@/components/ui';
//
//   <MissionSection
//     headline="Missiomme"
//     lead="Autamme pk-yrityksiä kasvamaan digitaalisten ratkaisujen avulla."
//     body="Perustimme yrityksen vuonna 2015 tavoitteena tehdä laadukkaista verkkosivuista saavutettavia kaikille yrityksille koosta riippumatta."
//     stats={[
//       { label: 'Asiakasta', value: '500+' },
//       { label: 'Projektia', value: '1 200+' },
//       { label: 'Vuotta alalla', value: '10+' },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface StatItem {
  label: string;
  value: string;
}

interface MissionSectionProps {
  headline: string;
  lead: string;
  body?: string;
  stats?: StatItem[];
  className?: string;
}

export function MissionSection({
  headline,
  lead,
  body,
  stats = [],
  className,
}: MissionSectionProps) {
  return (
    <div className={cn('bg-white py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">

          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              <Balancer>{headline}</Balancer>
            </h2>
          </FadeIn>

          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">

            {/* Text column */}
            <FadeIn delay={0.1} className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-zinc-600">
                <Balancer>{lead}</Balancer>
              </p>
              {body && (
                <p className="mt-10 max-w-xl text-base leading-7 text-zinc-700">
                  {body}
                </p>
              )}
            </FadeIn>

            {/* Stats column */}
            {stats.length > 0 && (
              <FadeIn delay={0.2} className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-zinc-600">{stat.label}</dt>
                      <dd className="text-5xl font-bold tracking-tight text-zinc-950">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
