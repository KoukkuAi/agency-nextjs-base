'use client';
// components/ui/TestimonialsLogoPair.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — 2-column split testimonials, company logo above each quote.
// Divider between columns on desktop. Mobile: stacked with border-top separator.
// Adapted: data-driven, FadeIn, cn().
// Best for: "Mitä asiakkaamme sanovat" referenssiosio, yrityscase-sivut.
//
// Usage:
//   import { TestimonialsLogoPair } from '@/components/ui';
//
//   <TestimonialsLogoPair
//     testimonials={[
//       {
//         logoSrc: '/logos/acme.svg',
//         logoAlt: 'Acme',
//         quote: 'Projekti valmistui etuajassa ja budjetti piti.',
//         authorName: 'Matti Virtanen',
//         authorTitle: 'Toimitusjohtaja, Acme Oy',
//         authorImageUrl: '/avatars/matti.jpg',
//       },
//       {
//         logoSrc: '/logos/globalco.svg',
//         logoAlt: 'GlobalCo',
//         quote: 'Digimarkkinoinnin ROI kolminkertaistui puolessa vuodessa.',
//         authorName: 'Sanna Korhonen',
//         authorTitle: 'Markkinointijohtaja, GlobalCo',
//         authorImageUrl: '/avatars/sanna.jpg',
//       },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface LogoTestimonialItem {
  logoSrc: string;
  logoAlt: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImageUrl: string;
}

interface TestimonialsLogoPairProps {
  testimonials: [LogoTestimonialItem, LogoTestimonialItem];
  className?: string;
}

export function TestimonialsLogoPair({
  testimonials,
  className,
}: TestimonialsLogoPairProps) {
  const [left, right] = testimonials;

  return (
    <section className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          {/* Left testimonial */}
          <FadeIn className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20">
            <img
              alt={left.logoAlt}
              src={left.logoSrc}
              className="h-12 w-auto self-start object-contain"
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-zinc-950">
                <p>{`"${left.quote}"`}</p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  alt={left.authorName}
                  src={left.authorImageUrl}
                  className="size-14 rounded-full bg-zinc-100 object-cover"
                />
                <div className="text-base">
                  <div className="font-semibold text-zinc-950">{left.authorName}</div>
                  <div className="mt-1 text-zinc-500">{left.authorTitle}</div>
                </div>
              </figcaption>
            </figure>
          </FadeIn>

          {/* Right testimonial — border divider */}
          <FadeIn
            delay={0.1}
            className="flex flex-col border-t border-zinc-900/10 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20"
          >
            <img
              alt={right.logoAlt}
              src={right.logoSrc}
              className="h-12 w-auto self-start object-contain"
            />
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-zinc-950">
                <p>{`"${right.quote}"`}</p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <img
                  alt={right.authorName}
                  src={right.authorImageUrl}
                  className="size-14 rounded-full bg-zinc-100 object-cover"
                />
                <div className="text-base">
                  <div className="font-semibold text-zinc-950">{right.authorName}</div>
                  <div className="mt-1 text-zinc-500">{right.authorTitle}</div>
                </div>
              </figcaption>
            </figure>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
