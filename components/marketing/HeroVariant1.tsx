import Link from "next/link";

interface HeroVariant1Props {
  heading: string;
  subheading: string;
  primaryCta: string;
  primaryCtaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  badgeText?: string;
}

export function HeroVariant1({
  heading,
  subheading,
  primaryCta,
  primaryCtaHref = "#contact",
  secondaryCta,
  secondaryCtaHref = "#",
  badgeText,
}: HeroVariant1Props) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-400 to-indigo-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          {badgeText && (
            <div className="mb-8 flex">
              <div className="relative rounded-full px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {badgeText}
              </div>
            </div>
          )}

          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            {heading}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {subheading}
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={primaryCtaHref}
              className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-xs hover:bg-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-colors"
            >
              {primaryCta}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCtaHref}
                className="text-sm/6 font-semibold text-gray-900 hover:text-brand-600 transition-colors"
              >
                {secondaryCta} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-300 to-brand-400 opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}
