'use client';
// components/ui/NewsletterWithFeatures.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Newsletter with 2-col layout: form left, feature bullets right.
// White bg with gradient blob. Adapted: primaryColor, lucide icons, FadeIn, Balancer.
// Best for: footer-yläpuolella, blogin sivupalkki, erillinen uutiskirje-sivu.
//
// Usage:
//   import { NewsletterWithFeatures } from '@/components/ui';
//   import { Calendar, ShieldCheck } from 'lucide-react';
//
//   <NewsletterWithFeatures
//     headline="Tilaa uutiskirjeemme"
//     subheadline="Saat viikottain vinkkejä ja alan uutisia."
//     primaryColor="#4F46E5"
//     features={[
//       { icon: Calendar, title: 'Viikottaiset artikkelit', description: 'Käytännön vinkkejä suoraan sähköpostiisi.' },
//       { icon: ShieldCheck, title: 'Ei roskapostia', description: 'Vain olennaiset, tärkeät viestit.' },
//     ]}
//     onSubmit={(email) => console.log(email)}
//   />
// ──────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
  title: string;
  description: string;
}

interface NewsletterWithFeaturesProps {
  headline: string;
  subheadline?: string;
  placeholder?: string;
  ctaLabel?: string;
  features?: FeatureItem[];
  primaryColor?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

export function NewsletterWithFeatures({
  headline,
  subheadline,
  placeholder = 'Sähköpostiosoitteesi',
  ctaLabel = 'Tilaa',
  features = [],
  primaryColor = '#4F46E5',
  onSubmit,
  className,
}: NewsletterWithFeaturesProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
    setEmail('');
  };

  return (
    <div className={cn('relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32', className)}>

      {/* Gradient blob */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${primaryColor}55, ${primaryColor}22)`,
          }}
          className="aspect-[1155/678] w-[72.1875rem] opacity-25"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

          {/* Left: form */}
          <FadeIn className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950">
              <Balancer>{headline}</Balancer>
            </h2>
            {subheadline && (
              <p className="mt-4 text-lg text-zinc-600">{subheadline}</p>
            )}
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="nwf-email" className="sr-only">Sähköpostiosoite</label>
              <input
                id="nwf-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                autoComplete="email"
                className="min-w-0 flex-auto rounded-xl bg-white px-3.5 py-2 text-base text-zinc-950 outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-500 focus:outline-2 focus:-outline-offset-2 sm:text-sm"
                style={{ '--tw-ring-color': primaryColor } as React.CSSProperties}
              />
              <button
                type="submit"
                className="flex-none rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: primaryColor }}
              >
                {ctaLabel}
              </button>
            </form>
          </FadeIn>

          {/* Right: feature bullets */}
          {features.length > 0 && (
            <FadeIn delay={0.1}>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                {features.map((feature, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <div className="rounded-lg bg-zinc-50 p-2 ring-1 ring-zinc-200">
                      <feature.icon aria-hidden={true} className="size-6 text-zinc-600" />
                    </div>
                    <dt className="mt-4 text-base font-semibold text-zinc-950">{feature.title}</dt>
                    <dd className="mt-2 text-base leading-7 text-zinc-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
}
