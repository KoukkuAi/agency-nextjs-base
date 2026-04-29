'use client';
// components/ui/LogoCloudSimple.tsx — Centered 5-col logo grid, no headline. Pure social proof strip.
import { FadeInStagger, FadeIn } from './FadeIn';
import { cn } from './cn';

interface LogoItem { name: string; src: string; width?: number; height?: number; }

interface LogoCloudSimpleProps { logos: LogoItem[]; className?: string; }

export function LogoCloudSimple({ logos, className }: LogoCloudSimpleProps) {
  return (
    <div className={cn('bg-white py-24 sm:py-32', className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInStagger className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, i) => (
            <FadeIn
              key={logo.name}
              className={cn(
                'max-h-12 w-full object-contain',
                i < 3 ? 'col-span-2 lg:col-span-1' : i === 3 ? 'col-span-2 sm:col-start-2 lg:col-span-1' : 'col-span-2 col-start-2 sm:col-start-auto lg:col-span-1'
              )}
            >
              <img
                alt={logo.name}
                src={logo.src}
                width={logo.width ?? 158}
                height={logo.height ?? 48}
                className="max-h-12 w-full object-contain"
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </div>
  );
}
