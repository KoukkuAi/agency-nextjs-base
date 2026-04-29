'use client';
// components/ui/FooterCentered.tsx — Centered footer: nav links + social icons + copyright, all centered.
import { cn } from './cn';

interface NavLink { name: string; href: string; }
interface SocialLink {
  name: string; href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

interface FooterCenteredProps {
  companyName?: string; year?: number;
  navLinks?: NavLink[]; socialLinks?: SocialLink[];
  className?: string;
}

export function FooterCentered({
  companyName = 'Your Company', year = new Date().getFullYear(),
  navLinks = [], socialLinks = [], className,
}: FooterCenteredProps) {
  return (
    <footer className={cn('bg-white border-t border-zinc-100', className)}>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {navLinks.length > 0 && (
          <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm leading-6">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-zinc-600 hover:text-zinc-950 transition-colors duration-200">
                {item.name}
              </a>
            ))}
          </nav>
        )}
        {socialLinks.length > 0 && (
          <div className="mt-16 flex justify-center gap-x-10">
            {socialLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-zinc-500 hover:text-zinc-700 transition-colors duration-200">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden={true} className="size-6" />
              </a>
            ))}
          </div>
        )}
        <p className="mt-10 text-center text-sm leading-6 text-zinc-600">
          &copy; {year} {companyName}, Inc. Kaikki oikeudet pidätetään.
        </p>
      </div>
    </footer>
  );
}
