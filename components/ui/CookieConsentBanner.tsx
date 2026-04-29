'use client';
// components/ui/CookieConsentBanner.tsx — Sticky bottom cookie consent: text + accept/reject buttons.
import { useState } from 'react';
import { cn } from './cn';

interface CookieConsentBannerProps {
  message?: string; policyLabel?: string; policyHref?: string;
  acceptLabel?: string; rejectLabel?: string;
  primaryColor?: string; className?: string;
  onAccept?: () => void; onReject?: () => void;
}

export function CookieConsentBanner({
  message = 'Käytämme evästeitä parantaaksemme käyttökokemustasi. Hyväksyminen on vapaaehtoista mutta suositeltavaa.',
  policyLabel = 'evästekäytäntömme', policyHref = '#',
  acceptLabel = 'Hyväksy kaikki', rejectLabel = 'Hylkää kaikki',
  primaryColor = '#4F46E5', className,
  onAccept, onReject,
}: CookieConsentBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleAccept = () => { setVisible(false); onAccept?.(); };
  const handleReject = () => { setVisible(false); onReject?.(); };

  return (
    <div className={cn(
      'fixed inset-x-0 bottom-0 z-50 flex flex-col justify-between gap-x-8 gap-y-4 border-t border-zinc-900/10 bg-white p-6 shadow-lg md:flex-row md:items-center lg:px-8',
      className
    )}>
      <p className="max-w-4xl text-sm leading-6 text-zinc-950">
        {message}{' '}
        <a href={policyHref} className="font-semibold hover:opacity-70 transition-opacity duration-200" style={{ color: primaryColor }}>
          {policyLabel}
        </a>
        .
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button
          type="button"
          onClick={handleAccept}
          className="rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ backgroundColor: primaryColor }}
        >
          {acceptLabel}
        </button>
        <button
          type="button"
          onClick={handleReject}
          className="text-sm font-semibold text-zinc-950 hover:text-zinc-600 transition-colors duration-200"
        >
          {rejectLabel}
        </button>
      </div>
    </div>
  );
}
