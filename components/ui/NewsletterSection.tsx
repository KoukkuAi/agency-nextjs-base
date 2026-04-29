'use client';
// components/ui/NewsletterSection.tsx
// ──────────────────────────────────────────────────────────────────────────────
// Tailwind UI Plus — Side-by-side newsletter signup on solid brand-color bg.
// Adapted for KoukkuAi: primaryColor background, onSubmit callback, Balancer, FadeIn.
// Best for: uutiskirje, kampanjailmoitus, pääsylista.
//
// Usage:
//   import { NewsletterSection } from '@/components/ui';
//
//   <NewsletterSection
//     headline="Haluatko pysyä kärryillä? Tilaa uutiskirjeemme."
//     placeholder="Sähköpostiosoitteesi"
//     ctaLabel="Tilaa"
//     privacyText="Arvostamme yksityisyyttäsi."
//     privacyHref="/tietosuoja"
//     privacyLinkLabel="Lue tietosuojaseloste"
//     primaryColor="#4F46E5"
//     onSubmit={(email) => console.log(email)}
//   />
// ──────────────────────────────────────────────────────────────────────────────
'use client';
import { useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface NewsletterSectionProps {
  headline: string;
  placeholder?: string;
  ctaLabel?: string;
  privacyText?: string;
  privacyHref?: string;
  privacyLinkLabel?: string;
  primaryColor?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

export function NewsletterSection({
  headline,
  placeholder = 'Sähköpostiosoitteesi',
  ctaLabel = 'Tilaa',
  privacyText = 'Arvostamme yksityisyyttäsi.',
  privacyHref = '#',
  privacyLinkLabel = 'Lue tietosuojaseloste',
  primaryColor = '#4F46E5',
  onSubmit,
  className,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
    setEmail('');
  };

  return (
    <div className={cn('py-16 sm:py-24 lg:py-32', className)} style={{ backgroundColor: primaryColor }}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">

        {/* Headline */}
        <FadeIn className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <Balancer>{headline}</Balancer>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.1} className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-x-4">
              <label htmlFor="newsletter-email" className="sr-only">
                Sähköpostiosoite
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                autoComplete="email"
                className="min-w-0 flex-auto rounded-xl bg-white/10 px-3.5 py-2 text-base text-white placeholder:text-white/70 outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm"
              />
              <button
                type="submit"
                className="flex-none rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-sm hover:bg-zinc-50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ color: primaryColor }}
              >
                {ctaLabel}
              </button>
            </div>
            {privacyText && (
              <p className="mt-4 text-sm text-white/70">
                {privacyText}{' '}
                <a
                  href={privacyHref}
                  className="font-semibold whitespace-nowrap text-white hover:text-white/80 transition-colors duration-200"
                >
                  {privacyLinkLabel}
                </a>
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </div>
  );
}
