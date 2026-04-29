import clientData from "../../data/client.json";

export default function Tietosuoja() {
  const company = clientData.companyName || "Yritys";
  const address = clientData.address || "Osoite";
  const email = clientData.email || "info@yritys.fi";

  return (
    <main className="min-h-screen bg-[#0A0A0B] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-2">Tietosuojaseloste</h1>
        <p className="text-[#9898A0] mb-12">Päivitetty {new Date().toLocaleDateString("fi-FI")}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Rekisterinpitäjä</h2>
            <div className="bg-[#1C1C1F] border border-[#2A2A2E] rounded-2xl p-6 text-[#9898A0]">
              <p className="font-medium text-white">{company}</p>
              <p>{address}</p>
              <p>{email}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Kerättävät henkilötiedot</h2>
            <p className="text-[#9898A0]">Keräämme seuraavia tietoja yhteydenottolomakkeen kautta:</p>
            <ul className="mt-3 space-y-2 text-[#9898A0] list-disc list-inside">
              <li>Nimi</li>
              <li>Sähköpostiosoite</li>
              <li>Puhelinnumero (vapaaehtoinen)</li>
              <li>Viesti</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Käsittelyn tarkoitus ja oikeusperuste</h2>
            <p className="text-[#9898A0]">
              Henkilötietoja käsitellään yhteydenottopyyntöihin vastaamiseksi ja asiakaspalvelun toteuttamiseksi.
              Käsittelyn oikeusperusteena on rekisteröidyn suostumus (GDPR 6 art. 1a) sekä oikeutettu etu (6 art. 1f).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Tietojen säilytysaika</h2>
            <p className="text-[#9898A0]">
              Henkilötietoja säilytetään enintään 2 vuotta yhteydenoton jälkeen, jonka jälkeen ne poistetaan tai anonymisoidaan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Rekisteröidyn oikeudet</h2>
            <p className="text-[#9898A0] mb-3">Sinulla on oikeus:</p>
            <ul className="space-y-2 text-[#9898A0] list-disc list-inside">
              <li>Tarkastaa itseäsi koskevat tiedot</li>
              <li>Vaatia virheellisten tietojen korjaamista</li>
              <li>Vaatia tietojen poistamista</li>
              <li>Vastustaa tietojen käsittelyä</li>
              <li>Tehdä valitus valvontaviranomaiselle (Tietosuojavaltuutettu)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Yhteystiedot</h2>
            <p className="text-[#9898A0]">
              Tietosuojaan liittyvissä kysymyksissä ota yhteyttä:{" "}
              <a href={`mailto:${email}`} className="text-blue-400 hover:text-blue-300 underline">
                {email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
