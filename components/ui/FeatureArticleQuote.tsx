'use client';
// components/ui/FeatureArticleQuote.tsx — 2-col: text+features left, quote panel right. Gradient blob.
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface FeaturePoint { icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>; title: string; description: string; }
interface QuoteBlock { quote: string; authorName: string; authorHandle: string; authorImageUrl: string; }
interface SubSection { headline: string; body: string; }

interface FeatureArticleQuoteProps {
  superLabel?: string; headline: string; lead: string;
  body?: string; features?: FeaturePoint[]; subSection?: SubSection;
  quotePanel: QuoteBlock;
  primaryColor?: string; className?: string;
}

export function FeatureArticleQuote({
  superLabel, headline, lead, body, features = [], subSection, quotePanel, primaryColor = '#4F46E5', className,
}: FeatureArticleQuoteProps) {
  return (
    <div className={cn('relative isolate overflow-hidden bg-white py-24 sm:py-32', className)}>

      {/* Gradient blob */}
      <div aria-hidden="true" className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56">
        <div
          style={{
            clipPath: 'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
            background: `linear-gradient(to top right, ${primaryColor}55, ${primaryColor}22)`,
          }}
          className="aspect-[801/1036] w-[50.0625rem] opacity-30"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="mx-auto max-w-2xl lg:mx-0">
          {superLabel && <p className="text-sm font-semibold" style={{ color: primaryColor }}>{superLabel}</p>}
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
            <Balancer>{headline}</Balancer>
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-700">{lead}</p>
        </FadeIn>

        {/* 12-col grid: text 7 cols + quote 5 cols */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">

          {/* Quote panel — right, order-last on lg */}
          <FadeIn delay={0.15} className="relative lg:order-last lg:col-span-5">
            <figure
              className="border-l-2 pl-8"
              style={{ borderColor: primaryColor }}
            >
              <blockquote className="text-xl font-semibold tracking-tight text-zinc-950 leading-8">
                <p>{`"${quotePanel.quote}"`}</p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img alt={quotePanel.authorName} src={quotePanel.authorImageUrl} className="mt-1 size-10 flex-none rounded-full bg-zinc-50 object-cover" />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-zinc-950">{quotePanel.authorName}</div>
                  <div className="text-zinc-600">@{quotePanel.authorHandle}</div>
                </div>
              </figcaption>
            </figure>
          </FadeIn>

          {/* Text + features */}
          <FadeIn className="max-w-xl text-base leading-7 text-zinc-600 lg:col-span-7">
            {body && <p>{body}</p>}
            {features.length > 0 && (
              <ul role="list" className="mt-8 max-w-xl space-y-8 text-zinc-600">
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
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
