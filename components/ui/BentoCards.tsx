'use client';
// components/ui/BentoCards.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Bento grid v2: image-top cards with category label.
// 6-column grid: 4+2 top row, 2+4 bottom row.
// Adapted for KoukkuAi: data-driven, FadeInStagger, Balancer, cn(), primaryColor.
//
// Usage:
//   import { BentoCards } from '@/components/ui';
//
//   <BentoCards
//     superLabel="Ominaisuudet"
//     headline="Kaikki mitä tarvitset kasvuun."
//     primaryColor="#4F46E5"
//     cards={[
//       { category: 'Julkaisut', title: 'Push to deploy', description: '...', imageSrc: '/f1.png', wide: true },
//       { category: 'Integraatiot', title: 'Yhdistä työkalusi', description: '...', imageSrc: '/f2.png' },
//       { category: 'Tietoturva', title: 'Kehittynyt hallinta', description: '...', imageSrc: '/f3.png' },
//       { category: 'Suorituskyky', title: 'Salamannopea', description: '...', imageSrc: '/f4.png', wide: true },
//     ]}
//   />
//
// NOTE: cards[0] and cards[3] should have wide:true (col-span-4).
//       cards[1] and cards[2] are narrow (col-span-2).
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface BentoCardItem {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  wide?: boolean;
}

interface BentoCardsProps {
  superLabel?: string;
  headline: string;
  cards: BentoCardItem[];
  primaryColor?: string;
  className?: string;
}

export function BentoCards({
  superLabel,
  headline,
  cards,
  primaryColor = '#4F46E5',
  className,
}: BentoCardsProps) {
  return (
    <div className={cn('bg-zinc-50 py-24 sm:py-32', className)}>
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
          {cards.map((card, i) => (
            <div
              key={i}
              className={cn(
                'flex p-px',
                card.wide ? 'lg:col-span-4' : 'lg:col-span-2',
                // Corner rounding based on position
                i === 0 && 'max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]',
                i === 1 && 'lg:rounded-tr-[2rem]',
                i === 2 && 'lg:rounded-bl-[2rem]',
                i === cards.length - 1 && 'max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]',
              )}
            >
              <div
                className={cn(
                  'w-full overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-900/5',
                  i === 0 && 'max-lg:rounded-t-[calc(2rem-1px)] lg:rounded-tl-[calc(2rem-1px)]',
                  i === 1 && 'lg:rounded-tr-[calc(2rem-1px)]',
                  i === 2 && 'lg:rounded-bl-[calc(2rem-1px)]',
                  i === cards.length - 1 && 'max-lg:rounded-b-[calc(2rem-1px)] lg:rounded-br-[calc(2rem-1px)]',
                )}
              >
                <img
                  alt={card.imageAlt ?? card.title}
                  src={card.imageSrc}
                  className="h-80 w-full object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-xs font-semibold tracking-wide uppercase text-zinc-500">
                    {card.category}
                  </h3>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-zinc-950">
                    {card.title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-600">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </FadeInStagger>

      </div>
    </div>
  );
}
