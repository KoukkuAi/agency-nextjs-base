import clientData from "../../data/client.json";

export default function Evasteet() {
  const company = clientData.companyName || "Yritys";
  const email = clientData.email || "info@yritys.fi";

  return (
    <main className="min-h-screen bg-[#0A0A0B] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">Evästekäytäntö</h1>
        <p className="text-[#9898A0] mb-12">Päivitetty {new Date().toLocaleDateString("fi-FI")}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Mitä evästeet ovat?</h2>
            <p className="text-[#9898A0]">
              Evästeet ovat pieniä tekstitiedostoja, jotka verkkosivusto tallentaa selaimellesi. Ne auttavat meitä
              tarjoamaan paremman käyttökokemuksen ja analysoimaan sivuston käyttöä.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Välttämättömät evästeet</h2>
            <div className="bg-[#1C1C1F] border border-[#2A2A2E] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                  Aina käytössä
                </span>
              </div>
              <p className="text-[#9898A0]">
                Nämä evästeet ovat välttämättömiä sivuston toiminnalle. Ne tallentavat mm. evästesuostumuksesi.
                Niitä ei voi poistaa käytöstä.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-[#9898A0]">
                  <thead>
                    <tr className="border-b border-[#2A2A2E]">
                      <th className="text-left py-2 text-white">Nimi</th>
                      <th className="text-left py-2 text-white">Tarkoitus</th>
                      <th className="text-left py-2 text-white">Voimassaolo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 font-mono">cookie_consent</td>
                      <td className="py-2">Tallentaa evästesuostumuksesi</td>
                      <td className="py-2">1 vuosi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Analytiikkaevästeet</h2>
            <div className="bg-[#1C1C1F] border border-[#2A2A2E] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Valinnainen
                </span>
              </div>
              <p className="text-[#9898A0]">
                Jos hyväksyt kaikki evästeet, saatamme käyttää analytiikkatyökaluja (esim. Google Analytics)
                sivuston kävijämäärien seuraamiseen. Tiedot ovat anonyymejä.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Miten hallita evästeitä?</h2>
            <p className="text-[#9898A0] mb-3">
              Voit muuttaa evästesuostumuksesi milloin tahansa tyhjentämällä selaimen tallennuksen tai
              klikkaamalla alla olevaa painiketta.
            </p>
            <button
              onClick={() => { localStorage.removeItem("cookie_consent"); window.location.reload(); }}
              className="px-6 py-3 rounded-full font-medium border border-[#2A2A2E] text-[#9898A0] hover:text-white hover:border-[#444] transition-all"
            >
              Nollaa evästesuostumus
            </button>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Yhteydenotto</h2>
            <p className="text-[#9898A0]">
              Evästekäytäntöön liittyvissä kysymyksissä: {" "}
              <a href={`mailto:${email}`} className="text-blue-400 hover:text-blue-300 underline">{email}</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
