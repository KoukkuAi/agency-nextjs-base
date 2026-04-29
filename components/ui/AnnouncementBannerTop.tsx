'use client';
// components/ui/AnnouncementBannerTop.tsx — Dismissible colored top banner strip.
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { cn } from './cn';

interface AnnouncementBannerTopProps {
  message: string; linkLabel?: string; linkHref?: string;
  primaryColor?: string; className?: string;
  onDismiss?: () => void;
}

export function AnnouncementBannerTop({
  message, linkLabel, linkHref = '#',
  primaryColor = '#4F46E5', className, onDismiss,
}: AnnouncementBannerTopProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div
      className={cn('flex items-center gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1', className)}
      style={{ backgroundColor: primaryColor }}
    >
      <p className="text-sm leading-6 text-white">
        {linkHref && linkLabel ? (
          <a href={linkHref} className="hover:opacity-90 transition-opacity duration-200">
            <strong className="font-semibold">{message}</strong>
            {linkLabel && (
              <>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                {linkLabel}&nbsp;<span aria-hidden="true">&rarr;</span>
              </>
            )}
          </a>
        ) : (
          <strong className="font-semibold">{message}</strong>
        )}
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          onClick={handleDismiss}
          className="-m-3 p-3 focus-visible:-outline-offset-4 hover:opacity-75 transition-opacity duration-200"
        >
          <span className="sr-only">Sulje</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
