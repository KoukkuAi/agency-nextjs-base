'use client';
// components/ui/FeaturesSection.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — 3-column features/services section with icon cards.
// Adapted for KoukkuAi: data-driven props, FadeInStagger, Balancer, cn(), primaryColor.
// Icons: use lucide-react (per CLAUDE.md). Pass as React component.
//
// Usage:
//   import { FeaturesSection } from '@/components/ui';
//   import { Wrench, Clock, Shield } from 'lucide-react';
//
//   <FeaturesSection
//     headline="Palvelut joihin voit luottaa"
//     subheadline="Hoidamme kaiken suunnittelusta toteutukseen."
//     primaryColor="#4F46E5"
//     features={[
//       {
//         name: 'Putkityöt',
//         description: 'Nopea ja siisti putkiasennus. Takuu kaikille töille.',
//         href: '#putkityot',
//         icon: Wrench,
//       },
//       {
//         name: '24/7 Päivystys',
//         description: 'Olemme tavoitettavissa ympäri vuorokauden.',
//         href: '#paivystys',
//         icon: Clock,
//       },
//     ]}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface Feature {
  name: string;
  description: string;
  href?: string;
  linkLabel?: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
}

interface FeaturesSectionProps {
  headline: string;
  subheadline?: string;
  features: Feature[];
  primaryColor?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeaturesSection({
  headline,
  subheadline,
  features,
  primaryColor = '#4F46E5',
  columns = 3,
  className,
}: FeaturesSectionProps) {
  const colClass = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  }[columns];

  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <FadeIn delay={0} className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            <Balancer>{headline}</Balancer>
          </h2>
          {subheadline && (
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              <Balancer>{subheadline}</Balancer>
            </p>
          )}
        </FadeIn>

        {/* Feature cards */}
        <FadeInStagger
          className={cn(
            'mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none',
            'grid grid-cols-1 gap-x-8 gap-y-16',
            colClass
          )}
        >
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col">
              <dt className="text-base font-semibold text-zinc-950">
                {/* Icon box */}
                <div
                  style={{ backgroundColor: primaryColor }}
                  className="mb-6 flex size-10 items-center justify-center rounded-lg"
                >
                  <feature.icon aria-hidden={true} className="size-6 text-white" />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-zinc-600">
                <p className="flex-auto">{feature.description}</p>
                {feature.href && (
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      style={{ color: primaryColor }}
                      className="text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
                    >
                      {feature.linkLabel ?? 'Lue lisää'} <span aria-hidden="true">→</span>
                    </a>
                  </p>
                )}
              </dd>
            </div>
          ))}
        </FadeInStagger>

      </div>
    </div>
  );
}
