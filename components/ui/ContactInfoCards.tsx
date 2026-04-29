'use client';
// components/ui/ContactInfoCards.tsx — Contact channels + location cards, 2-section layout.
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface ContactCard {
  title: string;
  email: string;
  phone?: string;
}

interface LocationCard {
  city: string;
  addressLines: string[];
}

interface ContactSection {
  headline: string;
  subheadline?: string;
  cards: ContactCard[];
}

interface LocationSection {
  headline: string;
  subheadline?: string;
  locations: LocationCard[];
}

interface ContactInfoCardsProps {
  contact: ContactSection;
  locations?: LocationSection;
  primaryColor?: string;
  className?: string;
}

export function ContactInfoCards({ contact, locations, primaryColor = '#4F46E5', className }: ContactInfoCardsProps) {
  return (
    <div className={cn('bg-white py-8 sm:py-16', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-zinc-100 lg:mx-0 lg:max-w-none">

          {/* Contact section */}
          <FadeIn className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-950">
                <Balancer>{contact.headline}</Balancer>
              </h2>
              {contact.subheadline && (
                <p className="mt-4 text-base leading-7 text-zinc-600">{contact.subheadline}</p>
              )}
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {contact.cards.map((card) => (
                <div key={card.title} className="rounded-2xl bg-zinc-50 p-10">
                  <h3 className="text-sm font-semibold text-zinc-950">{card.title}</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-zinc-600">
                    <div>
                      <dt className="sr-only">Sähköposti</dt>
                      <dd>
                        <a
                          href={`mailto:${card.email}`}
                          className="font-semibold hover:opacity-70 transition-opacity duration-200"
                          style={{ color: primaryColor }}
                        >
                          {card.email}
                        </a>
                      </dd>
                    </div>
                    {card.phone && (
                      <div className="mt-1">
                        <dt className="sr-only">Puhelinnumero</dt>
                        <dd>{card.phone}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Locations section */}
          {locations && (
            <FadeIn delay={0.1} className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-zinc-950">
                  <Balancer>{locations.headline}</Balancer>
                </h2>
                {locations.subheadline && (
                  <p className="mt-4 text-base leading-7 text-zinc-600">{locations.subheadline}</p>
                )}
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                {locations.locations.map((loc) => (
                  <div key={loc.city} className="rounded-2xl bg-zinc-50 p-10">
                    <h3 className="text-sm font-semibold text-zinc-950">{loc.city}</h3>
                    <address className="mt-3 space-y-1 text-sm leading-6 text-zinc-600 not-italic">
                      {loc.addressLines.map((line, i) => <p key={i}>{line}</p>)}
                    </address>
                  </div>
                ))}
              </div>
            </FadeIn>
          )}

        </div>
      </div>
    </div>
  );
}
