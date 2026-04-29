'use client';
// components/ui/LogoCloudCTA.tsx — Left CTA text + two buttons, right 2-col logo grid.
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface LogoItem { name: string; src: string; width?: number; height?: number; }

interface LogoCloudCTAProps {
  headline: string; subheadline?: string;
  primaryCtaLabel: string; primaryCtaHref?: string;
  secondaryCtaLabel?: string; secondaryCtaHref?: string;
  logos: LogoItem[];
  primaryColor?: string; className?: string;
}

export function LogoCloudCTA({
  headline, subheadline,
  primaryCtaLabel, primaryCtaHref = '#',
  secondaryCtaLabel, secondaryCtaHref = '#',
  logos, primaryColor = '#4F46E5', className,
}: LogoCloudCTAProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">

          {/* Left: CTA */}
          <FadeIn className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              <Balancer>{headline}</Balancer>
            </h2>
            {subheadline && <p className="mt-6 text-lg leading-8 text-zinc-600">{subheadline}</p>}
            <div className="mt-8 flex items-center gap-x-6">
              <a
                href={primaryCtaHref}
                className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: primaryColor }}
              >
                {primaryCtaLabel}
              </a>
              {secondaryCtaLabel && (
                <a href={secondaryCtaHref} className="text-sm font-semibold text-zinc-950 hover:text-zinc-700 transition-colors duration-200">
                  {secondaryCtaLabel} <span aria-hidden="true">&rarr;</span>
                </a>
              )}
            </div>
          </FadeIn>

          {/* Right: Logo grid */}
          <FadeIn delay={0.1} className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {logos.map((logo) => (
              <img
                key={logo.name}
                alt={logo.name}
                src={logo.src}
                width={logo.width ?? 105}
                height={logo.height ?? 48}
                className="max-h-12 w-full object-contain object-left"
              />
            ))}
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
