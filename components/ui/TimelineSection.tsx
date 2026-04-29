'use client';
// components/ui/TimelineSection.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Horizontal 4-column timeline with dot + connecting line.
// Adapted for KoukkuAi: data-driven, primaryColor, FadeInStagger, Balancer, cn().
// Best for: Prosessi-osio, yrityshistoria, vaiheet palvelussa.
//
// Usage:
//   import { TimelineSection } from '@/components/ui';
//
//   <TimelineSection
//     primaryColor="#4F46E5"
//     items={[
//       { name: 'Yhteydenotto', description: 'Lähetät meille viestin tai soitat.', date: 'Vaihe 1', dateTime: '2024-01' },
//       { name: 'Kartoitus', description: 'Käymme tilanteesi läpi ilmaiseksi.', date: 'Vaihe 2', dateTime: '2024-02' },
//       { name: 'Toteutus', description: 'Teemme sovitun työn ajallaan.', date: 'Vaihe 3', dateTime: '2024-03' },
//       { name: 'Takuu', description: '12 kk takuu kaikille töille.', date: 'Vaihe 4', dateTime: '2024-04' },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface TimelineItem {
  name: string;
  description: string;
  date: string;
  dateTime: string;
}

interface TimelineSectionProps {
  headline?: string;
  items: TimelineItem[];
  primaryColor?: string;
  className?: string;
}

export function TimelineSection({
  headline,
  items,
  primaryColor = '#4F46E5',
  className,
}: TimelineSectionProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {headline && (
          <FadeIn className="mx-auto max-w-2xl lg:mx-0 mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              <Balancer>{headline}</Balancer>
            </h2>
          </FadeIn>
        )}

        <FadeInStagger className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {items.map((item, i) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold"
                style={{ color: primaryColor }}
              >
                {/* Dot */}
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                {/* Connecting line — extends to the right on lg */}
                {i < items.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-zinc-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                )}
              </time>
              <p className="mt-6 text-lg font-semibold tracking-tight text-zinc-950">{item.name}</p>
              <p className="mt-1 text-base leading-7 text-zinc-600">{item.description}</p>
            </div>
          ))}
        </FadeInStagger>

      </div>
    </div>
  );
}
