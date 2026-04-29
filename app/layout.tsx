import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import clientData from "../data/client.json";

// Dynamically imported client-side components
import CookieConsent from "../components/CookieConsent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${clientData.companyName || "Yrityksen nimi"} | Palvelut`,
  description: `Tervetuloa sivustolle. ${clientData.companyName ? clientData.companyName + " – ammattitaitoista palvelua." : "Laskeutumissivun kuvaus tähän."}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0B] text-[#F8F8F8]">

        {/* Main content — Header and Footer injected per-page via page.tsx or via global header below */}
        <main className="flex-1">
          {children}
        </main>

        {/* GDPR Cookie Consent Banner — reads localStorage */}
        <CookieConsent />

        {/* Marker.io – Bug reporting widget (poistetaan tuotannossa tarvittaessa) */}
        <Script
          id="marker-io"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.markerConfig = {
                project: 'MARKER_PROJECT_ID',
                source: 'snippet'
              };
              !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
            `,
          }}
        />
      </body>
    </html>
  );
}
