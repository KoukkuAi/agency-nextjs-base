// components/ui/cn.ts
// ──────────────────────────────────────────────────────────────────────────────
// cn() — Tailwind class merger (clsx + tailwind-merge)
// Eliminates class conflicts that Claude often introduces (e.g. p-4 p-8).
// ALWAYS use this instead of string concatenation for className props.
//
// Usage:
//   cn("px-4 py-2", isLarge && "px-8", variant === "primary" && "bg-blue-600")
// ──────────────────────────────────────────────────────────────────────────────
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
