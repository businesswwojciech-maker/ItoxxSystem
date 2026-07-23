import { useState } from 'react';

function App() {
  const [selectedLine, setSelectedLine] = useState('nano');

  const PHONE_NUMBER = "xxx-xxx-xxx";
  const GOOGLE_FORM_URL = "https://forms.gle/placeholder";

  const products = {
    nano: {
      name: "NANO CASHMERE",
      subtitle: "System wypełniający z kwasem hialuronowym",
      color: "from-[#C8A34F] to-[#6e5726]",
      accent: "bg-[#C8A34F]",
      textAccent: "text-[#C8A34F]",
      packPrice: 299,
      steps: [
        { step: 1, name: "Szampon wypełniający", size: "1000ML" },
        { step: 2, name: "Maska wypełniająca", size: "1000ML" },
        { step: 3, name: "Fluid wypełniający", size: "250ML" },
      ]
    },
    stage: {
      name: "NANO GOLD BTX",
      subtitle: "Z kwasem hialuronowym, olejem z pestek moreli i hydrolizowaną keratyną",
      color: "from-pink-500 to-purple-600",
      accent: "bg-pink-600",
      textAccent: "text-pink-600",
      packPrice: 299,
      steps: [
        { step: 1, name: "Szampon Nano Gold BTX", size: "1000ML" },
        { step: 2, name: "Maska Nano Gold BTX", size: "1000ML" },
        { step: 3, name: "Fluid Nano Gold BTX", size: "200ML" },
      ]
    }
  };

  const active = products[selectedLine];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="text-2xl font-black tracking-widest">ITOXX <span className="bg-gradient-to-r from-[#C8A34F] to-pink-500 bg-clip-text text-transparent">SYSTEM</span></div>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-300">
            <a href="#produkty" className="hover:text-white">Produkty</a>
            <a href="#tiktok" className="hover:text-white">TikTok</a>
            <a href="#o-nas" className="hover:text-white">O produktach</a>
          </nav>
        </div>
      </header>

      {/* B2B Banner */}
      <div className={`${active.accent} text-black text-center py-2 px-4 text-xs md:text-sm font-bold uppercase tracking-wide`}>
        Oferta wyłącznie dla firm (B2B) · Sprzedaż tylko dla salonów i podmiotów prowadzących działalność gospodarczą
      </div>

      {/* Hero */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-gray-900 to-black">
        <p className={`${active.textAccent} uppercase tracking-widest text-sm mb-3`}>Made in Italy · Użycie profesjonalne</p>
        <h1 className="text-4xl md:text-6xl font-black mb-4">PROFESJONALNE SYSTEMY<br/>DO WŁOSÓW</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Znane z TikToka. Zabiegi wypełniające na bazie nanotechnologii i kwasu hialuronowego — salonowe efekty w domu.</p>
      </section>

      {/* Product Line Selector */}
      <section id="produkty" className="max-w-6xl mx-auto px-4 py-4">
        <h2 className="text-3xl font-black text-center mb-8">Wybierz swój system</h2>
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(products).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedLine(key)}
              className={`px-6 py-3 rounded-full font-bold uppercase text-sm border-2 transition ${
                selectedLine === key ? `${products[key].accent} border-transparent text-black` : 'border-gray-600 text-gray-300'
              }`}
            >
              {products[key].name}
            </button>
          ))}
        </div>

        <div className={`rounded-2xl p-8 bg-gradient-to-br ${active.color} bg-opacity-20 border border-gray-800`}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-black">{active.name}</h3>
            <p className="text-gray-300 mt-2">{active.subtitle}</p>
            <span className="inline-block mt-3 text-xs font-bold uppercase px-3 py-1 rounded-full bg-gray-800 text-gray-300">Zestaw 3-stopniowy · 3 produkty w zestawie</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {active.steps.map((p) => (
              <div key={p.step} className="bg-black rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center">
                <div className={`w-40 h-56 mb-4 rounded-lg bg-gray-900 flex items-center justify-center border border-gray-700`}>
                  <img src="https://placehold.co/160x220?text=ITOXX" alt={p.name} className="rounded-lg opacity-90" />
                </div>
                <span className={`text-xs font-bold uppercase mb-2 ${active.textAccent}`}>Krok {p.step}</span>
                <h4 className="font-bold text-lg mb-1">{p.name}</h4>
                <p className="text-gray-500 text-sm">{p.size}</p>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto bg-black rounded-xl border border-gray-800 p-6 text-center">
            <p className="text-3xl font-black mb-4">{active.packPrice} zł <span className="text-sm text-gray-400 font-normal">/ zestaw 3 produktów</span></p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className={`w-full px-8 py-3 rounded-full font-bold uppercase text-black ${active.accent}`}
              >
                📞 Zadzwoń teraz: {PHONE_NUMBER}
              </a>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-3 rounded-full font-bold uppercase border-2 border-white text-white"
              >
                Zamów przez formularz
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">* Ceny netto B2B. Sprzedaż tylko dla firm — salonów fryzjerskich, dystrybutorów i przedsiębiorców. Wymagany NIP przy zamówieniu.</p>
          </div>
        </div>
      </section>

      {/* As Seen on TikTok */}
      <section id="tiktok" className="bg-gray-950 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-2">Zobacz nas na TikToku</h2>
          <p className="text-gray-400 mb-10">Prawdziwe efekty, prawdziwi klienci — jak widziane na TikToku.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-48 aspect-[9/16] bg-black rounded-xl border border-gray-800 flex flex-col items-center justify-center text-gray-500 hover:border-yellow-500 transition overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="https://placehold.co/270x480?text=TikTok+Video"
                >
                  {/* Wgraj tu plik wideo z TikToka */}
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Info */}
      <section id="o-nas" className="bg-gray-950 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">O produktach</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Nano Cashmere */}
            <div className="bg-black rounded-2xl border border-gray-800 p-6">
              <h3 className="text-2xl font-black mb-1">NANO CASHMERE</h3>
              <p className="text-[#C8A34F] text-xs uppercase tracking-wide mb-4">Made in Italy · Kwas hialuronowy</p>
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <p className="font-bold text-white">Krok 1 — Cashmere Shampoo (1000ml)</p>
                  <p className="text-gray-400">Oczyszczający szampon z olejkiem z pestek moreli, kwasem hialuronowym i hydrolizatem wełny kokosowej. Profesjonalna kuracja regenerująco-liftingująca do włosów uszkodzonych, zniszczonych lub cienkich — nadaje objętość i gęstość, przygotowuje włosy do dalszych etapów zabiegu. Sposób użycia: umyj włosy odpowiednią ilością szamponu (w zależności od długości i gęstości włosów), delikatnie spłucz.</p>
                </div>
                <div>
                  <p className="font-bold text-white">Krok 2 — Cashmere Mask (1000ml)</p>
                  <p className="text-gray-400">Maska z olejkiem z pestek moreli, kwasem hialuronowym i włóknem kokosowym — wypełnia i odbudowuje uszkodzoną strukturę włosa, dodaje objętości i połysku. Sposób użycia: nałóż odpowiednią ilość maski na wilgotne włosy (dobraną do ich długości i gęstości), delikatnie wmasuj, pozostaw min. 10 minut (można użyć dodatkowego źródła ciepła), następnie dokładnie spłucz.</p>
                </div>
                <div>
                  <p className="font-bold text-white">Krok 3 — Cashmere Fluid (200ml)</p>
                  <p className="text-gray-400">Fluid wypełniający i uszczelniający łuski włosa — natychmiastowo nawilża i wygładza. Sposób użycia: nałóż ilość dopasowaną do długości i gęstości włosów na dłonie, wmasuj równomiernie we włosy, szczególnie w końce. Nie spłukuj, modeluj jak zwykle.</p>
                </div>
              </div>
            </div>

            {/* Stage 2 Nano Gold BTX */}
            <div className="bg-black rounded-2xl border border-gray-800 p-6">
              <h3 className="text-2xl font-black mb-1">NANO GOLD BTX</h3>
              <p className="text-pink-500 text-xs uppercase tracking-wide mb-4">Kwas hialuronowy · Olej z pestek moreli · Hydrolizowana keratyna</p>
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <p className="font-bold text-white">Krok 1 — Nano Gold BTX Shampoo (1000ml)</p>
                  <p className="text-gray-400">Delikatny szampon oczyszczający z olejkiem z pestek moreli, hydrolizatem keratyny i kwasu hialuronowego. Pielęgnuje i przywraca naturalny połysk. Sposób użycia: umyj włosy odpowiednią ilością szamponu (w zależności od długości i gęstości włosów), delikatnie spłucz, jeżeli konieczne powtórz aplikację.</p>
                </div>
                <div>
                  <p className="font-bold text-white">Krok 2 — Nano Gold BTX Mask (1000ml)</p>
                  <p className="text-gray-400">Wypełniająca maska do włosów z olejkiem z pestek moreli, hydrolizatem kwasu hialuronowego i keratyny — wygładza i uzupełnia uszkodzoną strukturę włosa, nadaje objętość i naturalny blask, głęboko odżywia i nawilża. Sposób użycia: nałóż odpowiednią ilość maski (dobraną do długości i gęstości włosów) na wilgotne włosy umyte wcześniej szamponem z tej serii, delikatnie masuj uszkodzone partie, pozostaw na ok. 10 minut (można stosować dodatkowe źródło ciepła), następnie dokładnie spłucz.</p>
                </div>
                <div>
                  <p className="font-bold text-white">Krok 3 — Nano Gold BTX Fluid (200ml)</p>
                  <p className="text-gray-400">Fluid wypełniający i uszczelniający łuski włosa. Natychmiastowo wygładza, nawilża i zabezpiecza włosy. Zawiera keratynę i kwas hialuronowy. Sposób użycia: nałóż ilość dopasowaną do długości i gęstości włosów na dłonie, rozmasuj i wmasuj równomiernie we włosy, szczególnie w końce. Nie spłukuj, stylizuj według upodobania.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="kontakt" className="bg-black border-t border-gray-800 py-10 px-4 text-center text-gray-500 text-sm">
        <p className="text-white font-black text-xl mb-2">ITOXX SYSTEM</p>
        <p>Profesjonalna pielęgnacja włosów, znana z TikToka.</p>
        <p className="mt-4">© 2026 ITOXX System. Wszelkie prawa zastrzeżone.</p>
      </footer>

    </div>
  );
}

export default App;
