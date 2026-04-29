import Link from "next/link";

const navigation = {
  solutions: [
    { name: "Palvelut", href: "#" },
    { name: "Referenssit", href: "#" },
    { name: "Hinnoittelu", href: "#pricing" },
  ],
  company: [
    { name: "Tietoa meistä", href: "#" },
    { name: "Blogi", href: "#" },
    { name: "Ura", href: "#" },
  ],
  legal: [
    { name: "Tietosuojaseloste", href: "#" },
    { name: "Käyttöehdot", href: "#" },
    { name: "Evästeet", href: "#" },
  ],
};

interface FooterStandardProps {
  companyName: string;
  tagline?: string;
}

export function FooterStandard({
  companyName,
  tagline = "Laadukkaat verkkosivut yrityksellesi.",
}: FooterStandardProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Alatunniste
      </h2>

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-8">
            <span className="text-2xl font-bold text-white">{companyName}</span>
            <p className="text-sm/6 text-gray-400">{tagline}</p>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm/6 font-semibold text-white">Palvelut</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm/6 text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm/6 font-semibold text-white">Yritys</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm/6 text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm/6 font-semibold text-white">Oikeudellinen</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm/6 text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-400">
            &copy; {currentYear} {companyName}. Kaikki oikeudet pidätetään.
          </p>
        </div>
      </div>
    </footer>
  );
}
