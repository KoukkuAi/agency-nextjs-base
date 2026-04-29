'use client';
// components/ui/AboutPhotoGrid.tsx — "About us": headline+mission text left, 2x2 staggered photo grid right, dotted stats bottom.
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface StatItem { label: string; value: string; }

interface AboutPhotoGridProps {
  superLabel?: string; headline: string;
  missionHeadline?: string; missionBody: string; missionBodyExtra?: string;
  statsLabel?: string; stats?: StatItem[];
  photos: [string, string, string, string]; // exactly 4
  primaryColor?: string; className?: string;
}

export function AboutPhotoGrid({
  superLabel, headline, missionHeadline = 'Missiomme', missionBody, missionBodyExtra,
  statsLabel = 'Lukuina', stats = [], photos, primaryColor = '#4F46E5', className,
}: AboutPhotoGridProps) {
  return (
    <div className={cn('overflow-hidden bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

        {/* Headline */}
        <FadeIn className="max-w-4xl">
          {superLabel && <p className="text-sm font-semibold" style={{ color: primaryColor }}>{superLabel}</p>}
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            <Balancer>{headline}</Balancer>
          </h1>
        </FadeIn>

        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">

          {/* Mission text */}
          <FadeIn className="lg:pr-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-950">{missionHeadline}</h2>
            <p className="mt-6 text-base leading-7 text-zinc-600">{missionBody}</p>
            {missionBodyExtra && <p className="mt-8 text-base leading-7 text-zinc-600">{missionBodyExtra}</p>}
          </FadeIn>

          {/* 2x2 staggered photo grid */}
          <FadeIn delay={0.1} className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              {photos.map((src, i) => (
                <div
                  key={i}
                  className={cn(
                    'aspect-square overflow-hidden rounded-xl shadow-xl ring-1 ring-inset ring-black/10',
                    (i === 1 || i === 3) && 'lg:-mt-40'
                  )}
                >
                  <img alt="" src={src} className="block size-full object-cover" />
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Stats */}
          {stats.length > 0 && (
            <FadeIn delay={0.2} className="max-lg:mt-16 lg:col-span-1">
              <p className="text-sm font-semibold text-zinc-500">{statsLabel}</p>
              <hr className="mt-6 border-t border-zinc-200" />
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={cn(
                      'flex flex-col gap-y-2 pb-4',
                      i < stats.length - 2 ? 'border-b border-dotted border-zinc-200' : 'max-sm:border-b max-sm:border-dotted max-sm:border-zinc-200 max-sm:pb-4'
                    )}
                  >
                    <dt className="text-sm leading-6 text-zinc-600">{s.label}</dt>
                    <dd className="order-first text-6xl font-bold tracking-tight text-zinc-950">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          )}
        </section>
      </div>
    </div>
  );
}
