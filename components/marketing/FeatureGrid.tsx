import { type LucideIcon, icons } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  iconName: string;
}

interface FeatureGridProps {
  heading?: string;
  subheading?: string;
  features: Feature[];
}

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // Capitalize first letter to match Lucide export names
  const iconKey = (name.charAt(0).toUpperCase() + name.slice(1)) as keyof typeof icons;
  const Icon: LucideIcon | undefined = icons[iconKey] as LucideIcon | undefined;

  if (!Icon) {
    // Fallback to a generic star icon
    const Fallback = icons["Star"] as LucideIcon;
    return <Fallback className={className} aria-hidden="true" />;
  }

  return <Icon className={className} aria-hidden="true" />;
}

export function FeatureGrid({
  heading = "Miksi valita meidät?",
  subheading,
  features,
}: FeatureGridProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-brand-600">Palvelumme</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {heading}
          </p>
          {subheading && (
            <p className="mt-6 text-lg/8 text-gray-600">{subheading}</p>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.title} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-brand-600">
                    <DynamicIcon name={feature.iconName} className="size-6 text-white" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
