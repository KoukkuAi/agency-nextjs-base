'use client';
// components/ui/AnnouncementBannerBottom.tsx — Sticky dark bottom bar with dismiss button.
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { cn } from './cn';

interface AnnouncementBannerBottomProps {
  message: string; linkLabel?: string; linkHref?: string;
  className?: string; onDismiss?: () => void;
}

export function AnnouncementBannerBottom({
  message, linkLabel, linkHref = '#', className, onDismiss,
}: AnnouncementBannerBottomProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className={cn('fixed inset-x-0 bottom-0 z-50', className)}>
      <div className="flex items-center gap-x-6 bg-zinc-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-white">
          {linkHref && linkLabel ? (
            <a href={linkHref} className="hover:opacity-90 transition-opacity duration-200">
              <strong className="font-semibold">{message}</strong>
              <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                <circle r={1} cx={1} cy={1} />
              </svg>
              {linkLabel}&nbsp;<span aria-hidden="true">&rarr;</span>
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
    </div>
  );
}
