'use client';
// components/ui/TeamGridCompact.tsx — Leadership: left text + right 2-col avatar grid.
import Balancer from 'react-wrap-balancer';
import { FadeIn, FadeInStagger } from './FadeIn';
import { cn } from './cn';

interface TeamMember { name: string; role: string; imageUrl: string; }

interface TeamGridCompactProps {
  headline: string;
  subheadline?: string;
  primaryColor?: string;
  people: TeamMember[];
  className?: string;
}

export function TeamGridCompact({ headline, subheadline, primaryColor = '#4F46E5', people, className }: TeamGridCompactProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <FadeIn className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            <Balancer>{headline}</Balancer>
          </h2>
          {subheadline && (
            <p className="mt-6 text-lg leading-8 text-zinc-600">{subheadline}</p>
          )}
        </FadeIn>
        <FadeInStagger className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <FadeIn key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="size-16 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <div>
                  <h3 className="text-sm font-semibold text-zinc-950">{person.name}</h3>
                  <p className="text-sm font-semibold" style={{ color: primaryColor }}>{person.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}
