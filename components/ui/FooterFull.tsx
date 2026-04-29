'use client';
// components/ui/FooterFull.tsx — Full footer: logo + tagline + social left, 4-col nav grid right.
import { cn } from './cn';

interface NavLink { name: string; href: string; }
interface NavGroup { label: string; links: NavLink[]; }
interface SocialLink {
  name: string; href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
}

interface FooterFullProps {
  logoSrc: string; logoAlt?: string;
  tagline?: string;
  companyName?: string; year?: number;
  navGroups?: NavGroup[]; socialLinks?: SocialLink[];
  className?: string;
}

export function FooterFull({
  logoSrc, logoAlt = 'Logo', tagline,
  companyName = 'Your Company', year = new Date().getFullYear(),
  navGroups = [], socialLinks = [], className,
}: FooterFullProps) {
  return (
    <footer className={cn('bg-white', className)}>
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          {/* Brand column */}
          <div className="space-y-8">
            <img alt={logoAlt} src={logoSrc} className="h-9" />
            {tagline && <p className="text-sm leading-6 text-zinc-600">{tagline}</p>}
            {socialLinks.length > 0 && (
              <div className="flex gap-x-6">
                {socialLinks.map((item) => (
                  <a key={item.name} href={item.href} className="text-zinc-500 hover:text-zinc-700 transition-colors duration-200">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden={true} className="size-6" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Nav columns */}
          {navGroups.length > 0 && (
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {navGroups.slice(0, 2).map((group) => (
                  <div key={group.label} className="first:mt-0 mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold text-zinc-950">{group.label}</h3>
                    <ul role="list" className="mt-6 space-y-4">
                      {group.links.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-sm leading-6 text-zinc-600 hover:text-zinc-950 transition-colors duration-200">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {navGroups.length > 2 && (
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  {navGroups.slice(2, 4).map((group) => (
                    <div key={group.label} className="first:mt-0 mt-10 md:mt-0">
                      <h3 className="text-sm font-semibold text-zinc-950">{group.label}</h3>
                      <ul role="list" className="mt-6 space-y-4">
                        {group.links.map((item) => (
                          <li key={item.name}>
                            <a href={item.href} className="text-sm leading-6 text-zinc-600 hover:text-zinc-950 transition-colors duration-200">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-zinc-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-6 text-zinc-600">
            &copy; {year} {companyName}, Inc. Kaikki oikeudet pidätetään.
          </p>
        </div>
      </div>
    </footer>
  );
}
