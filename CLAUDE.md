# KOUKKU-AI DESIGN SYSTEM — Agentin Ohjekirja

Tämä on KoukkuAi-toimiston virallinen design-sääntökirja. Nämä säännöt ovat
ehdottomia ja menevät aina käyttäjän yksittäisten pyyntöjen edelle ulkoasussa.

---

## 1. TEKSTI — Ainoa tehtäväsi on injektoida annettu data

- **ÄLÄ KOSKAAN** lyhennä, tiivistä, muokkaa tai keksi tekstiä itse.
- Käytä XML-tageissa (`<website_data>`) annettu JSON-data **sana sanalta**.
- Kohtele dataa tietokantana: `hero.headline` → pääotsikko, `services[].title` → palvelun nimi, jne.
- Jos datassa on tyhjä kenttä, jätä se tyhjäksi. Älä täytä itse.

---

## 2. TYPOGRAFIA — Apple-tason luettavuus

- Käytä **aina** `<Balancer>` (`react-wrap-balancer`) kaikissa `<h1>`, `<h2>` ja hero-otsikoissa.
  ```tsx
  import Balancer from 'react-wrap-balancer';
  <h1><Balancer>Tässä on otsikko</Balancer></h1>
  ```
- Otsikkohierarkia: `h1` = vain yksi per sivu (Hero), `h2` = osiotason otsikot.
- Fonttiparit: suuret otsikot `font-bold tracking-tight`, leipäteksti `text-zinc-600 leading-relaxed`.

---

## 3. VÄRIT — Ei koskaan puhdasta mustaa

- **ÄLÄ KOSKAAN** käytä `#000000` tai `text-black`. Käytä aina `text-zinc-950`.
- Taustavärit: `bg-white` tai `bg-zinc-50` (vaalea), `bg-zinc-950` (tumma).
- Aksenttiväri tulee aina `data/client.json`:n `primaryColor`-kentästä.
- Hover-tilat: aina `transition-colors duration-200`.

---

## 4. TILANKÄYTTÖ — Premium vaatii ilmaa

- Osioiden välinen padding: **aina** `py-24` tai `py-32`. Ei koskaan alle `py-16`.
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Grid-välit: `gap-8` tai `gap-12`. Ei koskaan alle `gap-6`.
- Sisäinen padding korteissa: `p-8` tai `p-10`. Ei koskaan alle `p-6`.

---

## 5. KOMPONENTIT — Käytä aina olemassaolevia

Tässä repossa on `components/ui/` -kansio. Käytä aina sieltä löytyviä komponentteja:

```tsx
import { Button, Card, Badge, Input, cn } from '@/components/ui';
// Animaatiot:
import { FadeIn, FadeInStagger, RevealText, Meteors, BentoGrid } from '@/components/ui';
```

**cn()-funktio luokkakonfliktien välttämiseksi (PAKOLLINEN):**
```tsx
// ÄLÄ: className="p-4 p-8 bg-red-500 bg-blue-500"
// TEE: className={cn("p-4 bg-red-500", isLarge && "p-8", variant === 'primary' && "bg-blue-500")}
```

---

## 6. PYÖRISTYKSET — Vahvat, modernit kulmat

- Kortit, kontainerit: `rounded-2xl`
- Napit: `rounded-xl`
- Ikonit pienessä boksissa: `rounded-lg`
- Ei koskaan `rounded` tai `rounded-md` pääkomponenteissa.

---

## 7. IKONIT — Aina Lucide React

```tsx
import { ArrowRight, Phone, Mail, MapPin, Star, Check } from 'lucide-react';
```

- Älä käytä Heroicons, SVG-kuvakkeet tai emoji-ikoneja.
- Koko: `size={20}` normaali, `size={24}` painikkeessa, `size={32}` feature-osiossa.

---

## 8. ANIMAATIOT — Framer Motion + omat komponentit

- Hero: `FadeIn` delay `0.2s`
- Kortit: `FadeInStagger` — jokainen kortti ilmestyy peräkkäin (`staggerChildren: 0.1`)
- Otsikot: `RevealText` — teksti paljastuu ylöspäin
- Taustat: `Meteors` — meteorisuihku tummalle taustalle
- **Käynnistys:** Animaatiot käynnistyvät aina `viewport: { once: true }` — ei toistu.

---

## 9. RAKENNE — Sivun osioiden järjestys

Yksisivuinen asiakas-site noudattaa aina tätä järjestystä:
1. `<Hero>` — pääotsikko, alaotsikko, CTA-nappi, `Meteors`-tausta
2. `<SocialProof>` — logot tai luvut (3–5 kpl)
3. `<Services>` — 3–4 korttia gridissä
4. `<Process>` — 3-vaiheen prosessi (numerot + kuvaus)
5. `<Testimonials>` — asiakasarvostelut (2–3 kpl)
6. `<Contact>` — lomake tai CTA-osio

Header ja Footer ovat jo repossa — **älä luo niitä uudelleen**.

---

## 10. EXPORT — Aina valmis injektoitavaksi

- Tiedosto alkaa aina `"use client";`
- Exportoi aina: `export default function Home() { ... }`
- Älä lisää muita exportteja tai komponentteja samaan tiedostoon.
- Älä importoi `app/layout.tsx`:stä — se on jo olemassa.
