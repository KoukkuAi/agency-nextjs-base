'use client';
// components/ui/TestimonialSingle.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Large centered single testimonial with star rating.
// Adapted: data-driven, primaryColor stars, FadeIn, Balancer, cn().
// Best for: Hero-alueen alla, hinnoittelusivun yläosa, laskeutumissivu.
//
// Usage:
//   import { TestimonialSingle } from '@/components/ui';
//
//   <TestimonialSingle
//     rating={5}
//     quote="Palvelu ylitti odotukseni. Sivusto valmistui ajallaan ja asiakasmäärä kasvoi heti ensimmäisen kuukauden aikana."
//     authorName="Liisa Mäkinen"
//     authorTitle="Toimitusjohtaja, KorjausProfi Oy"
//     authorImageUrl="/avatars/liisa.jpg"
//     primaryColor="#4F46E5"
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface TestimonialSingleProps {
  rating?: number;           // 1–5, renders filled stars
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImageUrl: string;
  primaryColor?: string;
  className?: string;
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={cn('size-5 flex-none', className)}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function TestimonialSingle({
  rating = 5,
  quote,
  authorName,
  authorTitle,
  authorImageUrl,
  primaryColor = '#4F46E5',
  className,
}: TestimonialSingleProps) {
  const clampedRating = Math.min(5, Math.max(1, Math.round(rating)));

  return (
    <section className={cn('bg-white px-6 py-24 sm:py-32 lg:px-8', className)}>
      <FadeIn>
        <figure className="mx-auto max-w-2xl">

          {/* Stars */}
          <p className="sr-only">{clampedRating} tähteä viidestä</p>
          <div className="flex gap-x-1" style={{ color: primaryColor }}>
            {Array.from({ length: clampedRating }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-10 text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl leading-9">
            <Balancer>{`"${quote}"`}</Balancer>
          </blockquote>

          {/* Author */}
          <figcaption className="mt-10 flex items-center gap-x-6">
            <img
              alt={authorName}
              src={authorImageUrl}
              className="size-12 rounded-full bg-zinc-100 object-cover"
            />
            <div className="text-sm leading-6">
              <div className="font-semibold text-zinc-950">{authorName}</div>
              <div className="mt-0.5 text-zinc-500">{authorTitle}</div>
            </div>
          </figcaption>

        </figure>
      </FadeIn>
    </section>
  );
}
