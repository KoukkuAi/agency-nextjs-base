'use client';
// components/ui/FaqAccordion.tsx — Centered headline + Headless UI Disclosure accordion.
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface FaqItem { question: string; answer: string; }

interface FaqAccordionProps {
  headline?: string; faqs: FaqItem[];
  primaryColor?: string; className?: string;
}

export function FaqAccordion({
  headline = 'Frequently asked questions', faqs, primaryColor = '#4F46E5', className,
}: FaqAccordionProps) {
  return (
    <div className={cn('bg-white', className)}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              <Balancer>{headline}</Balancer>
            </h2>
          </FadeIn>
          <FadeInStagger className="mt-16 divide-y divide-zinc-900/10">
            {faqs.map((faq) => (
              <FadeIn key={faq.question}>
                <Disclosure as="div" className="py-6 first:pt-0 last:pb-0">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-zinc-950">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-[open]:hidden"
                          style={{ color: primaryColor }}
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 [.group:not([data-open])_&]:hidden"
                          style={{ color: primaryColor }}
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-zinc-600">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              </FadeIn>
            ))}
          </FadeInStagger>
        </div>
      </div>
    </div>
  );
}
