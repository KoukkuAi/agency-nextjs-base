"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
  author: string;
  role: string;
  quote: string;
  avatarInitials?: string;
}

interface TestimonialCarouselProps {
  heading?: string;
  reviews: Review[];
}

export function TestimonialCarousel({
  heading = "Asiakkaat kertovat",
  reviews,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === reviews.length - 1 ? 0 : i + 1));

  const review = reviews[currentIndex];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="relative rounded-2xl bg-white p-10 shadow-sm ring-1 ring-gray-200">
            <Quote
              className="absolute top-6 left-6 size-8 text-brand-200"
              aria-hidden="true"
            />

            <blockquote className="mt-4 text-lg/8 font-medium text-gray-900 italic text-center">
              &ldquo;{review.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-8 flex flex-col items-center gap-2">
              {/* Avatar circle with initials */}
              <div className="flex size-12 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                {review.avatarInitials ??
                  review.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-900">{review.author}</div>
                <div className="text-sm text-gray-500">{review.role}</div>
              </div>
            </figcaption>
          </div>

          {/* Navigation */}
          {reviews.length > 1 && (
            <div className="mt-8 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 hover:bg-brand-50 transition-colors"
                aria-label="Edellinen arvostelu"
              >
                <ChevronLeft className="size-5 text-gray-600" />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`size-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-brand-600" : "bg-gray-300"
                    }`}
                    aria-label={`Arvostelu ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex size-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 hover:bg-brand-50 transition-colors"
                aria-label="Seuraava arvostelu"
              >
                <ChevronRight className="size-5 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
