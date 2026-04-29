'use client';
// components/ui/NavbarSimple.tsx — Simple flat navbar, no dropdowns. Mobile Dialog.
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from './cn';

interface NavLink { name: string; href: string; }

interface NavbarSimpleProps {
  logoSrc: string; logoAlt?: string; logoHref?: string;
  navLinks?: NavLink[];
  loginLabel?: string; loginHref?: string;
  className?: string;
}

export function NavbarSimple({
  logoSrc, logoAlt = 'Logo', logoHref = '/',
  navLinks = [],
  loginLabel = 'Kirjaudu', loginHref = '#',
  className,
}: NavbarSimpleProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={cn('bg-white', className)}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href={logoHref} className="-m-1.5 p-1.5">
            <span className="sr-only">{logoAlt}</span>
            <img alt={logoAlt} src={logoSrc} className="h-8 w-auto" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700">
            <span className="sr-only">Avaa valikko</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-zinc-950 hover:text-zinc-600 transition-colors duration-200">
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop login */}
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
  );
}
