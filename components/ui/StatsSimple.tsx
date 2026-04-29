'use client';
// components/ui/StatsSimple.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Minimal centered 3-column stats grid.
// Adapted for KoukkuAi: data-driven, FadeInStagger, cn().
// Best for: lyhyt lukupaketti tunnusluvuista, social proof -osio.
//
// Usage:
//   import { StatsSimple } from '@/components/ui';
//
//   <StatsSimple
//     stats={[
//       { name: 'Tyytyväistä asiakasta', value: '500+' },
//       { name: 'Valmistunutta projektia', value: '1 200+' },
//       { name: 'Vuotta kokemusta', value: '10+' },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import { FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface StatItem {
  name: string;
  value: string;
}

interface StatsSimpleProps {
  stats: StatItem[];
  className?: string;
}

export function StatsSimple({ stats, className }: StatsSimpleProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-zinc-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}
