'use client';
// components/ui/TestimonialsGrid.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Masonry-columns testimonial grid.
// Mobile: 1-col, sm: 2-col, lg: 3-col. Card per testimonial, avatar + handle.
// Adapted: data-driven, primaryColor superLabel, FadeIn, Balancer, cn().
// Best for: social proof -osio, asiakasreferenssit.
//
// Usage:
//   import { TestimonialsGrid } from '@/components/ui';
//
//   <TestimonialsGrid
//     superLabel="Referenssit"
//     headline="Tuhannet tyytyväiset asiakkaat"
//     primaryColor="#4F46E5"
//     testimonials={[
//       {
//         body: 'Loistavaa palvelua. Suosittelen lämpimästi.',
//         author: { name: 'Liisa M.', handle: 'liisamdesign', imageUrl: '/avatars/liisa.jpg' },
//       },
//       ...
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface TestimonialAuthor {
  name: string;
  handle: string;
  imageUrl: string;
}

interface TestimonialItem {
  body: string;
  author: TestimonialAuthor;
}

interface TestimonialsGridProps {
  superLabel?: string;
  headline: string;
  primaryColor?: string;
  testimonials: TestimonialItem[];
  className?: string;
}

export function TestimonialsGrid({
  superLabel,
  headline,
  primaryColor = '#4F46E5',
  testimonials,
  className,
}: TestimonialsGridProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          {superLabel && (
            <h2 className="text-sm font-semibold tracking-wide uppercase" style={{ color: primaryColor }}>
              {superLabel}
            </h2>
          )}
          <p className="mt-2 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            <Balancer>{headline}</Balancer>
          </p>
        </FadeIn>

        {/* Masonry grid */}
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <FadeInStagger className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((t) => (
              <FadeIn
                key={t.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-zinc-50 p-8 text-sm leading-6">
                  <blockquote className="text-zinc-950">
                    <p>{`"${t.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt={t.author.name}
                      src={t.author.imageUrl}
                      className="size-10 rounded-full bg-zinc-100 object-cover"
                    />
                    <div>
                      <div className="font-semibold text-zinc-950">{t.author.name}</div>
                      <div className="text-zinc-500">{`@${t.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>

      </div>
    </div>
  );
}
