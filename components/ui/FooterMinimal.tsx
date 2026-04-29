'use client';
// components/ui/FooterMinimal.tsx — Minimal footer: copyright left + social icons right (single row).
import { cn } from './cn';

interface SocialLink {
  name: string; href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

interface FooterMinimalProps {
  companyName?: string; year?: number;
  socialLinks?: SocialLink[]; className?: string;
}

export function FooterMinimal({
  companyName = 'Your Company', year = new Date().getFullYear(),
  socialLinks = [], className,
}: FooterMinimalProps) {
  return (
    <footer className={cn('bg-white border-t border-zinc-100', className)}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <p className="mt-8 text-center text-sm leading-6 text-zinc-600 md:order-1 md:mt-0">
          &copy; {year} {companyName}, Inc. Kaikki oikeudet pidätetään.
        </p>
        {socialLinks.length > 0 && (
          <div className="flex justify-center gap-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-zinc-500 hover:text-zinc-700 transition-colors duration-200">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden={true} className="size-6" />
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
