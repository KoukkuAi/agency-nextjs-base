'use client';
// components/ui/BentoImageGrid.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Bento grid v1: 5-card image grid (3+3 top, 2+2+2 bottom).
// Uses relative/absolute inset pattern for shadow/outline layer.
// Adapted for KoukkuAi: data-driven, FadeInStagger, Balancer, cn(), primaryColor.
//
// Usage:
//   import { BentoImageGrid } from '@/components/ui';
//
//   <BentoImageGrid
//     superLabel="Palvelut"
//     headline="Kaikki mitä tarvitset."
//     primaryColor="#4F46E5"
//     items={[
//       { category: 'Nopeus', title: 'Nopein ratkaisu', description: '...', imageSrc: '/f1.png', colSpan: 3 },
//       { category: 'Julkaisut', title: 'Push to deploy', description: '...', imageSrc: '/f2.png', colSpan: 3 },
//       { category: 'Nopeus', title: 'Tehokäyttäjille', description: '...', imageSrc: '/f3.png', colSpan: 2 },
//       { category: 'Integraatiot', title: 'Yhdistä työkalut', description: '...', imageSrc: '/f4.png', colSpan: 2 },
//       { category: 'Verkko', title: 'Globaali CDN', description: '...', imageSrc: '/f5.png', colSpan: 2 },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface BentoImageItem {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  colSpan?: 2 | 3 | 4 | 6;
  imagePosition?: 'left' | 'right' | 'center';
}

interface BentoImageGridProps {
  superLabel?: string;
  headline: string;
  items: BentoImageItem[];
  primaryColor?: string;
  className?: string;
}

const colSpanClass: Record<number, string> = {
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  6: 'lg:col-span-6',
};

export function BentoImageGrid({
  superLabel,
  headline,
  items,
  primaryColor = '#4F46E5',
  className,
}: BentoImageGridProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

        {/* Header */}
        <FadeIn>
          {superLabel && (
            <h2 className="text-sm font-semibold leading-7 tracking-wide uppercase" style={{ color: primaryColor }}>
              {superLabel}
            </h2>
          )}
          <p className="mt-2 max-w-lg text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            <Balancer>{headline}</Balancer>
          </p>
        </FadeIn>

        {/* Grid */}
        <FadeInStagger className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                'relative',
                colSpanClass[item.colSpan ?? 2],
                // Automatic corner rounding
                i === 0 && 'max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]',
                i === 1 && 'lg:rounded-tr-[2rem]',
                i === items.length - 3 && 'lg:rounded-bl-[2rem]',
                i === items.length - 1 && 'max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]',
              )}
            >
              {/* Background layer */}
              <div className={cn(
                'absolute inset-0 rounded-lg bg-white',
                i === 0 && 'max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]',
                i === 1 && 'lg:rounded-tr-[2rem]',
                i === items.length - 3 && 'lg:rounded-bl-[2rem]',
                i === items.length - 1 && 'max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]',
              )} />

              {/* Content */}
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <img
                  alt={item.imageAlt ?? item.title}
                  src={item.imageSrc}
                  className={cn(
                    'h-80 object-cover',
                    item.imagePosition === 'right' ? 'object-right' : 'object-left'
                  )}
                />
                <div className="p-10 pt-4">
                  <h3
                    className="text-xs font-semibold tracking-wide uppercase"
                    style={{ color: primaryColor }}
                  >
                    {item.category}
                  </h3>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950">
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Shadow overlay */}
              <div className={cn(
                'pointer-events-none absolute inset-0 rounded-lg shadow-sm ring-1 ring-zinc-900/5',
                i === 0 && 'max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]',
                i === 1 && 'lg:rounded-tr-[2rem]',
                i === items.length - 3 && 'lg:rounded-bl-[2rem]',
                i === items.length - 1 && 'max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]',
              )} />
            </div>
          ))}
        </FadeInStagger>

      </div>
    </div>
  );
}
