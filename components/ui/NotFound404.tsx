'use client';
// components/ui/NotFound404.tsx — Full-screen 404 with background image, white text, back-to-home link.
import { cn } from './cn';

interface NotFound404Props {
  headline?: string; subheadline?: string;
  backLabel?: string; backHref?: string;
  imageSrc: string; imageAlt?: string;
  className?: string;
}

export function NotFound404({
  headline = 'Sivua ei löydy',
  subheadline = 'Pahoittelut, emme löytäneet etsimääsi sivua.',
  backLabel = 'Takaisin etusivulle',
  backHref = '/',
  imageSrc, imageAlt = '',
  className,
}: NotFound404Props) {
  return (
    <main className={cn('relative isolate min-h-full', className)}>
      {/* Full-bleed background image */}
      <img
        alt={imageAlt}
        src={imageSrc}
        className="absolute inset-0 -z-10 size-full object-cover object-top"
      />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-zinc-950/60" />

      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold text-white">404</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-7xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg font-medium text-white/70 sm:text-xl">
          {subheadline}
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={backHref}
            className="text-sm font-semibold text-white hover:text-white/80 transition-colors duration-200"
          >
            <span aria-hidden="true">&larr;</span> {backLabel}
          </a>
        </div>
      </div>
    </main>
  );
}
