'use client';
// components/ui/FaqSideBySide.tsx — Left: headline + support link. Right: Q&A list. Static, no accordion.
import Balancer from 'react-wrap-balancer';
import { FadeIn } from './FadeIn';
import { cn } from './cn';

interface FaqItem { question: string; answer: string; }

interface FaqSideBySideProps {
  headline?: string; supportLabel?: string; supportHref?: string;
  faqs: FaqItem[]; primaryColor?: string; className?: string;
}

export function FaqSideBySide({
  headline = 'Frequently asked questions', supportLabel, supportHref = '#',
  faqs, primaryColor = '#4F46E5', className,
}: FaqSideBySideProps) {
  return (
    <div className={cn('bg-white', className)}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              <Balancer>{headline}</Balancer>
            </h2>
            {supportLabel && (
              <p className="mt-4 text-base leading-7 text-zinc-600">
                Etkö löydä vastausta?{' '}
                <a href={supportHref} className="font-semibold hover:opacity-70 transition-opacity duration-200" style={{ color: primaryColor }}>
                  {supportLabel}
                </a>
              </p>
            )}
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-zinc-950">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-zinc-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
