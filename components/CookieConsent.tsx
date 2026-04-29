"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay so it doesn't flash on first paint
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type: "all" | "essential") => {
    localStorage.setItem("cookie_consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Evästeilmoitus"
      className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up"
    >
      <div className="bg-[#1C1C1F] border-t border-[#2A2A2E] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <p className="text-sm text-[#9898A0] flex-1">
            Käytämme evästeitä parantaaksemme käyttökokemustasi.{" "}
            <Link
              href="/evasteet"
              className="underline text-[#F8F8F8] hover:text-blue-400 transition-colors"
            >
              Lue evästekäytäntömme
            </Link>
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => accept("essential")}
              className="px-5 py-2 rounded-full text-sm font-medium border border-[#2A2A2E] text-[#9898A0] hover:text-white hover:border-[#444] transition-all"
            >
              Vain välttämättömät
            </button>
            <button
              onClick={() => accept("all")}
              className="px-5 py-2 rounded-full text-sm font-semibold bg-blue-500 hover:bg-blue-400 text-white transition-all"
            >
              Hyväksy kaikki
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
