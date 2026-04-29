'use client';
// components/ui/FeatureArticleStickyImage.tsx — 2-col: sticky screenshot right, scrolling text+features left. SVG grid bg.
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface FeaturePoint { icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>; title: string; description: string; }
interface SubSection { headline: string; body: string; }

interface FeatureArticleStickyImageProps {
  superLabel?: string; headline: string; lead: string;
  body?: string; features?: FeaturePoint[]; subSection?: SubSection;
  screenshotSrc: string; screenshotAlt?: string;
  primaryColor?: string; className?: string;
}

export function FeatureArticleStickyImage({
  superLabel, headline, lead, body, features = [], subSection,
  screenshotSrc, screenshotAlt = '', primaryColor = '#4F46E5', className,
}: FeatureArticleStickyImageProps) {
  return (
    <div className={cn('relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0', className)}>

      {/* SVG grid background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg aria-hidden="true" className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-zinc-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
          <defs>
            <pattern id="fais-grid" x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-zinc-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#fais-grid)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

        {/* Header row spans both columns */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              {superLabel && <p className="text-sm font-semibold" style={{ color: primaryColor }}>{superLabel}</p>}
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
                <Balancer>{headline}</Balancer>
              </h1>
              <p className="mt-6 text-xl leading-8 text-zinc-700">{lead}</p>
            </div>
          </div>
        </div>

        {/* Sticky screenshot */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt={screenshotAlt}
            src={screenshotSrc}
            className="w-[48rem] max-w-none rounded-2xl bg-zinc-900 shadow-xl ring-1 ring-zinc-400/10 sm:w-[57rem]"
          />
        </div>

        {/* Scrolling content */}
        <FadeIn className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-zinc-600 lg:max-w-lg">
              {body && <p>{body}</p>}
              {features.length > 0 && (
                <ul role="list" className="mt-8 space-y-8 text-zinc-600">
                  {features.map((f, i) => (
                    <li key={i} className="flex gap-x-3">
                      <f.icon aria-hidden={true} className="mt-1 size-5 flex-none" style={{ color: primaryColor }} />
                      <span><strong className="font-semibold text-zinc-950">{f.title}</strong> {f.description}</span>
                    </li>
                  ))}
                </ul>
              )}
              {subSection && (
                <>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-zinc-950">{subSection.headline}</h2>
                  <p className="mt-6">{subSection.body}</p>
                </>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
