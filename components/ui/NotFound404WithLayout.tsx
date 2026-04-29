'use client';
// components/ui/NotFound404WithLayout.tsx — Full 404 page: navbar + centered error block + 4-col footer.
// Intended as a page-level component (e.g. app/not-found.tsx).
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from './cn';

interface NavLink { name: string; href: string; }
interface FooterGroup { label: string; links: NavLink[]; }

interface NotFound404WithLayoutProps {
  // Navbar
  logoSrc: string; logoAlt?: string; logoHref?: string;
  navLinks?: NavLink[];
  loginLabel?: string; loginHref?: string;
  // Error block
  headline?: string; subheadline?: string;
  backLabel?: string; backHref?: string;
  // Footer
  footerGroups?: FooterGroup[];
  companyName?: string; year?: number;
  // Branding
  primaryColor?: string; className?: string;
}

export function NotFound404WithLayout({
  logoSrc, logoAlt = 'Logo', logoHref = '/',
  navLinks = [],
  loginLabel = 'Kirjaudu', loginHref = '#',
  headline = 'Sivua ei löydy',
  subheadline = 'Pahoittelut, emme löytäneet etsimääsi sivua.',
  backLabel = 'Takaisin etusivulle', backHref = '/',
  footerGroups = [],
  companyName = 'Your Company', year = new Date().getFullYear(),
  primaryColor = '#4F46E5', className,
}: NotFound404WithLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={cn('flex min-h-full flex-col', className)}>

      {/* ── Navbar ── */}
      <header className="mx-auto w-full max-w-7xl px-6 pt-6 lg:px-8">
        <nav aria-label="Global" className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href={logoHref} className="-m-1.5 p-1.5">
              <span className="sr-only">{logoAlt}</span>
              <img alt={logoAlt} src={logoSrc} className="h-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700">
              <span className="sr-only">Avaa valikko</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-zinc-950 hover:text-zinc-600 transition-colors duration-200">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href={loginHref} className="text-sm font-semibold text-zinc-950 hover:text-zinc-600 transition-colors duration-200">
              {loginLabel} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
            <div className="flex items-center justify-between">
              <a href={logoHref} className="-m-1.5 p-1.5">
                <span className="sr-only">{logoAlt}</span>
                <img alt={logoAlt} src={logoSrc} className="h-8 w-auto" />
              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-zinc-700">
                <span className="sr-only">Sulje valikko</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-zinc-500/10">
                <div className="space-y-2 py-6">
                  {navLinks.map((item) => (
                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-zinc-950 hover:bg-zinc-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href={loginHref} className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-zinc-950 hover:bg-zinc-50">
                    {loginLabel}
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* ── 404 block ── */}
      <main className="mx-auto flex w-full max-w-7xl flex-auto flex-col justify-center px-6 py-24 sm:py-64 lg:px-8">
        <p className="text-base font-semibold" style={{ color: primaryColor }}>404</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-950 sm:text-6xl">
          {headline}
        </h1>
        <p className="mt-6 text-lg font-medium text-zinc-500 sm:text-xl">
          {subheadline}
        </p>
        <div className="mt-10">
          <a href={backHref} className="text-sm font-semibold hover:opacity-70 transition-opacity duration-200" style={{ color: primaryColor }}>
            <span aria-hidden="true">&larr;</span> {backLabel}
          </a>
        </div>
      </main>

      {/* ── Footer ── */}
      {footerGroups.length > 0 && (
        <footer aria-labelledby="footer-heading" className="border-t border-zinc-200">
          <h2 id="footer-heading" className="sr-only">Footer</h2>
          <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <img alt={logoAlt} src={logoSrc} className="h-7 w-auto" />
              <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  {footerGroups.slice(0, 2).map((group, i) => (
                    <div key={group.label} className={i > 0 ? 'mt-10 md:mt-0' : ''}>
                      <h3 className="text-sm font-semibold text-zinc-950">{group.label}</h3>
                      <ul role="list" className="mt-6 space-y-4">
                        {group.links.map((item) => (
                          <li key={item.name}>
                            <a href={item.href} className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-200">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {footerGroups.length > 2 && (
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    {footerGroups.slice(2, 4).map((group, i) => (
                      <div key={group.label} className={i > 0 ? 'mt-10 md:mt-0' : ''}>
                        <h3 className="text-sm font-semibold text-zinc-950">{group.label}</h3>
                        <ul role="list" className="mt-6 space-y-4">
                          {group.links.map((item) => (
                            <li key={item.name}>
                              <a href={item.href} className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors duration-200">
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
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
