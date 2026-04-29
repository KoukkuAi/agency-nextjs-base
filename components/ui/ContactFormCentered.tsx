'use client';
// components/ui/ContactFormCentered.tsx — Centered contact form with gradient blob.
// Phone field has country code select. CSS toggle for privacy consent. primaryColor CTA.
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface PhoneCountry { code: string; label: string; }

interface ContactFormCenteredProps {
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  privacyHref?: string;
  primaryColor?: string;
  phoneCountries?: PhoneCountry[];
  onSubmit?: (data: Record<string, string>) => void;
  className?: string;
}

const DEFAULT_COUNTRIES: PhoneCountry[] = [
  { code: 'FI', label: '+358' },
  { code: 'SE', label: '+46' },
  { code: 'US', label: '+1' },
  { code: 'GB', label: '+44' },
];

export function ContactFormCentered({
  headline = 'Otetaan yhteyttä',
  subheadline,
  ctaLabel = 'Lähetä viesti',
  privacyHref = '#',
  primaryColor = '#4F46E5',
  phoneCountries = DEFAULT_COUNTRIES,
  onSubmit,
  className,
}: ContactFormCenteredProps) {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', company: '', email: '', phone: '', message: '', country: phoneCountries[0].code });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ ...form, agreed: String(agreed) });
  };

  const inputCls = 'block w-full rounded-xl bg-white px-3.5 py-2 text-base text-zinc-950 outline-1 -outline-offset-1 outline-zinc-300 placeholder:text-zinc-400 focus:outline-2 focus:-outline-offset-2 sm:text-sm';

  return (
    <div className={cn('isolate bg-white px-6 py-24 sm:py-32 lg:px-8', className)}>

      {/* Gradient blob */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: `linear-gradient(to top right, ${primaryColor}55, ${primaryColor}22)`,
          }}
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
          <Balancer>{headline}</Balancer>
        </h2>
        {subheadline && (
          <p className="mt-2 text-lg leading-8 text-zinc-600">{subheadline}</p>
        )}
      </FadeIn>

      <FadeIn delay={0.1}>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            {/* First name */}
            <div>
              <label htmlFor="cf-first" className="block text-sm font-semibold text-zinc-950">Etunimi</label>
              <div className="mt-2.5">
                <input id="cf-first" name="firstName" type="text" autoComplete="given-name" value={form.firstName} onChange={set('firstName')} className={inputCls} />
              </div>
            </div>

            {/* Last name */}
            <div>
              <label htmlFor="cf-last" className="block text-sm font-semibold text-zinc-950">Sukunimi</label>
              <div className="mt-2.5">
                <input id="cf-last" name="lastName" type="text" autoComplete="family-name" value={form.lastName} onChange={set('lastName')} className={inputCls} />
              </div>
            </div>

            {/* Company */}
            <div className="sm:col-span-2">
              <label htmlFor="cf-company" className="block text-sm font-semibold text-zinc-950">Yritys</label>
              <div className="mt-2.5">
                <input id="cf-company" name="company" type="text" autoComplete="organization" value={form.company} onChange={set('company')} className={inputCls} />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor="cf-email" className="block text-sm font-semibold text-zinc-950">Sähköposti</label>
              <div className="mt-2.5">
                <input id="cf-email" name="email" type="email" autoComplete="email" value={form.email} onChange={set('email')} className={inputCls} />
              </div>
            </div>

            {/* Phone with country select */}
            <div className="sm:col-span-2">
              <label htmlFor="cf-phone" className="block text-sm font-semibold text-zinc-950">Puhelinnumero</label>
              <div className="mt-2.5 flex rounded-xl bg-white outline-1 -outline-offset-1 outline-zinc-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2" style={{ '--tw-ring-color': primaryColor } as React.CSSProperties}>
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select id="cf-country" name="country" autoComplete="country" value={form.country} onChange={set('country')} aria-label="Maavalinta"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-xl py-2 pr-7 pl-3.5 text-base text-zinc-500 focus:outline-none sm:text-sm bg-transparent">
                    {phoneCountries.map((c) => <option key={c.code} value={c.code}>{c.label}</option>)}
                  </select>
                  <ChevronDown aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-zinc-500 sm:size-4" />
                </div>
                <input id="cf-phone" name="phone" type="tel" placeholder="040 123 4567" value={form.phone} onChange={set('phone')}
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-zinc-950 placeholder:text-zinc-400 focus:outline-none sm:text-sm bg-transparent" />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="cf-message" className="block text-sm font-semibold text-zinc-950">Viesti</label>
              <div className="mt-2.5">
                <textarea id="cf-message" name="message" rows={4} value={form.message} onChange={set('message')} className={cn(inputCls, 'resize-none')} />
              </div>
            </div>

            {/* Privacy toggle */}
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <button
                  type="button"
                  role="switch"
                  aria-checked={agreed}
                  aria-labelledby="cf-privacy-label"
                  onClick={() => setAgreed((v) => !v)}
                  className="relative inline-flex w-8 shrink-0 rounded-full p-px transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{ backgroundColor: agreed ? primaryColor : '#d1d5db' }}
                >
                  <span
                    className="size-4 rounded-full bg-white shadow-sm ring-1 ring-zinc-900/5 transition-transform duration-200"
                    style={{ transform: agreed ? 'translateX(14px)' : 'translateX(0)' }}
                  />
                </button>
              </div>
              <label id="cf-privacy-label" className="text-sm leading-6 text-zinc-600">
                Hyväksyn{' '}
                <a href={privacyHref} className="font-semibold whitespace-nowrap hover:opacity-70 transition-opacity duration-200" style={{ color: primaryColor }}>
                  tietosuojaselosteen
                </a>
                .
              </label>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-xl px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: primaryColor }}
            >
              {ctaLabel}
            </button>
          </div>
        </form>
      </FadeIn>
    </div>
  );
}
