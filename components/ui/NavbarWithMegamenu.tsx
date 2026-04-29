'use client';
// components/ui/NavbarWithMegamenu.tsx — Navbar with Popover dropdown (icon products + CTA footer) + mobile Dialog.
import { useState } from 'react';
import {
  Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel,
  Popover, PopoverButton, PopoverGroup, PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cn } from './cn';

interface ProductItem {
  name: string; description: string; href: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
}
interface CtaItem {
  name: string; href: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
}
interface NavLink { name: string; href: string; }

interface NavbarWithMegamenuProps {
  logoSrc: string; logoAlt?: string; logoHref?: string;
  products?: ProductItem[]; callsToAction?: CtaItem[];
  navLinks?: NavLink[];
  loginLabel?: string; loginHref?: string;
  primaryColor?: string; className?: string;
}

export function NavbarWithMegamenu({
  logoSrc, logoAlt = 'Logo', logoHref = '/',
  products = [], callsToAction = [], navLinks = [],
  loginLabel = 'Kirjaudu', loginHref = '#',
  primaryColor = '#4F46E5', className,
}: NavbarWithMegamenuProps) {
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {products.length > 0 && (
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-zinc-950 focus:outline-none">
                Tuotteet
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-zinc-400" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-zinc-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-xl p-4 text-sm hover:bg-zinc-50">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-zinc-50 group-hover:bg-white">
                        <item.icon aria-hidden={true} className="size-6 text-zinc-600 group-hover:text-inherit" style={{ color: primaryColor } as React.CSSProperties} />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-zinc-950">
                          {item.name}<span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-zinc-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {callsToAction.length > 0 && (
                  <div className={`grid grid-cols-${callsToAction.length} divide-x divide-zinc-900/5 bg-zinc-50`}>
                    {callsToAction.map((item) => (
                      <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-100">
                        <item.icon aria-hidden={true} className="size-5 flex-none text-zinc-400" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </PopoverPanel>
            </Popover>
          )}
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold text-zinc-950 hover:text-zinc-600 transition-colors duration-200">
              {item.name}
            </a>
          ))}
        </PopoverGroup>

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
                {products.length > 0 && (
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-zinc-950 hover:bg-zinc-50">
                      Tuotteet
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton key={item.name} as="a" href={item.href} className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-zinc-950 hover:bg-zinc-50">
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                )}
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
