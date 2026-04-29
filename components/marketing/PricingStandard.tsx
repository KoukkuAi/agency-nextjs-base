import { Check } from "lucide-react";
import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: string[];
  ctaLabel?: string;
  ctaHref?: string;
  highlighted?: boolean;
}

interface PricingStandardProps {
  heading?: string;
  subheading?: string;
  tiers: PricingTier[];
}

export function PricingStandard({
  heading = "Hinnoittelu",
  subheading = "Valitse yrityksellesi sopiva paketti. Kaikissa paketeissa on 14 päivän maksuton kokeilu.",
  tiers,
}: PricingStandardProps) {
  return (
    <section className="bg-white py-24 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-brand-600">Hinnoittelu</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            {heading}
          </p>
        </div>
        {subheading && (
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg/8 text-gray-600">
            {subheading}
          </p>
        )}

        <div
          className={`mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none ${
            tiers.length === 1
              ? "lg:max-w-md"
              : tiers.length === 2
              ? "lg:grid-cols-2"
              : "lg:grid-cols-3"
          }`}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 xl:p-10 ${
                tier.highlighted
                  ? "bg-brand-600 ring-brand-600 text-white"
                  : "bg-white ring-gray-200"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-lg/8 font-semibold ${
                      tier.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  {tier.highlighted && (
                    <p className="rounded-full bg-white/10 px-2.5 py-1 text-xs/5 font-semibold text-white">
                      Suosituin
                    </p>
                  )}
                </div>

                {tier.description && (
                  <p
                    className={`mt-4 text-sm/6 ${
                      tier.highlighted ? "text-brand-100" : "text-gray-600"
                    }`}
                  >
                    {tier.description}
                  </p>
                )}

                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={`text-4xl font-semibold tracking-tight ${
                      tier.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {tier.price}
                  </span>
                  {!tier.price.includes("Pyydä") && (
                    <span
                      className={`text-sm/6 font-semibold ${
                        tier.highlighted ? "text-brand-100" : "text-gray-600"
                      }`}
                    >
                      /kk
                    </span>
                  )}
                </p>

                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm/6 ${
                    tier.highlighted ? "text-brand-100" : "text-gray-600"
                  }`}
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className={`h-6 w-5 flex-none ${
                          tier.highlighted ? "text-white" : "text-brand-600"
                        }`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={tier.ctaHref ?? "#contact"}
                className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.highlighted
                    ? "bg-white text-brand-600 hover:bg-brand-50 focus-visible:outline-white"
                    : "bg-brand-600 text-white hover:bg-brand-500 focus-visible:outline-brand-600"
                }`}
              >
                {tier.ctaLabel ?? "Aloita nyt"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
