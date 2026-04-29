'use client';
// components/ui/StatsSection.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Background image + gradient blobs + links + stats grid.
// Adapted for KoukkuAi: data-driven, primaryColor, FadeIn, Balancer, cn().
// Best for: Tietoja meistä, Miksi me, Ura-sivun hero.
//
// Usage:
//   import { StatsSection } from '@/components/ui';
//
//   <StatsSection
//     headline="Teemme töitä kanssasi"
//     subheadline="Yli 10 vuoden kokemus. 500+ tyytyväistä asiakasta."
//     backgroundImageSrc="/tiimi.jpg"
//     primaryColor="#4F46E5"
//     links={[
//       { name: 'Avoimet paikat', href: '#' },
//       { name: 'Arvomme', href: '#' },
//     ]}
//     stats={[
//       { name: 'Asiakasta', value: '500+' },
//       { name: 'Projektia', value: '1 200+' },
//       { name: 'Tuntia/vko', value: '40' },
//       { name: 'NPS-pisteet', value: '97' },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface StatItem {
  name: string;
  value: string;
}

interface LinkItem {
  name: string;
  href: string;
}

interface StatsSectionProps {
  headline: string;
  subheadline?: string;
  backgroundImageSrc?: string;
  primaryColor?: string;
  links?: LinkItem[];
  stats?: StatItem[];
  className?: string;
}

export function StatsSection({
  headline,
  subheadline,
  backgroundImageSrc,
  primaryColor = '#4F46E5',
  links = [],
  stats = [],
  className,
}: StatsSectionProps) {
  return (
    <div className={cn('relative isolate overflow-hidden bg-white py-24 sm:py-32', className)}>

      {/* Background image — subtle overlay */}
      {backgroundImageSrc && (
        <img
          alt=""
          src={backgroundImageSrc}
          className="absolute inset-0 -z-10 size-full object-cover object-center opacity-10"
        />
      )}

      {/* Gradient blob — top right */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${primaryColor}55, ${primaryColor}22)`,
          }}
          className="aspect-[1097/845] w-[68.5625rem] opacity-20"
        />
      </div>

      {/* Gradient blob — top left */}
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-[28rem] sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${primaryColor}55, ${primaryColor}22)`,
          }}
          className="aspect-[1097/845] w-[68.5625rem] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Headline + subheadline */}
        <FadeIn className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-zinc-950 sm:text-7xl">
            <Balancer>{headline}</Balancer>
          </h2>
          {subheadline && (
            <p className="mt-8 text-lg font-medium text-zinc-700 sm:text-xl leading-8">
              <Balancer>{subheadline}</Balancer>
            </p>
          )}
        </FadeIn>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

          {/* Links row */}
          {links.length > 0 && (
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-sm font-semibold text-zinc-950 sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:opacity-70 transition-opacity duration-200"
                    style={{ color: primaryColor }}
                  >
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
            </FadeIn>
          )}

          {/* Stats grid */}
          {stats.length > 0 && (
            <FadeInStagger className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse gap-1">
                  <dt className="text-base leading-7 text-zinc-700">{stat.name}</dt>
                  <dd className="text-4xl font-bold tracking-tight text-zinc-950">{stat.value}</dd>
                </div>
              ))}
            </FadeInStagger>
          )}
        </div>
      </div>
    </div>
  );
}
