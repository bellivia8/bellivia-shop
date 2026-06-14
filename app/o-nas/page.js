export default function ONasPage() {
  return (
    <main className="bg-[#f8f5f0] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Nagłówek */}
        <div className="text-center mb-20">
          <p className="text-[#d4a853] uppercase tracking-[0.35em] text-sm mb-4">
            Belliviá Style
          </p>

          <h1 className="text-5xl md:text-6xl font-light italic text-[#2c2c2c] mb-6">
            O nas
          </h1>

          <div className="w-24 h-px bg-[#d4a853] mx-auto mb-8"></div>

          <p className="text-xl text-[#5a5a5a] max-w-3xl mx-auto leading-relaxed">
            Belliviá Style to coś więcej niż marka — to styl życia.
          </p>
        </div>

        {/* Historia */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-[#2c2c2c] mb-8">
            Nasza historia
          </h2>

          <div className="bg-white border border-[#ece7df] p-8 md:p-10 space-y-6">
            <p className="text-[#5a5a5a] leading-relaxed">
              Belliviá Style to coś więcej niż marka — to styl życia.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed">
              Tworzymy z pasji do mody i dbałości o każdy detal.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed">
              Naszym celem jest sprawić, aby każda kobieta czuła się pewnie,
              kobieco i wyjątkowo.
            </p>
          </div>
        </section>

        {/* Misja */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-[#2c2c2c] mb-8">
            Nasza misja
          </h2>

          <div className="bg-white border border-[#ece7df] p-8 md:p-10 space-y-6">
            <p className="text-[#5a5a5a] leading-relaxed">
              Chcemy inspirować kobiety do wyrażania siebie poprzez modę.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed">
              Tworzymy ubrania, w których poczujesz się piękna i pewna siebie —
              każdego dnia.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed">
              Stawiamy na jakość, wygodę i ponadczasowy styl.
            </p>
          </div>
        </section>

        {/* Co nas wyróżnia */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-[#2c2c2c] mb-10">
            Co nas wyróżnia?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border border-[#ece7df] p-8">
              <h3 className="text-[#d4a853] text-lg mb-4">
                Starannie wyselekcjonowane materiały
              </h3>
              <p className="text-[#5a5a5a]">
                Perfekcyjne kroje i dbałość o jakość.
              </p>
            </div>

            <div className="bg-white border border-[#ece7df] p-8">
              <h3 className="text-[#d4a853] text-lg mb-4">
                Kobiecość i elegancja
              </h3>
              <p className="text-[#5a5a5a]">
                Połączenie klasyki z aktualnymi trendami.
              </p>
            </div>

            <div className="bg-white border border-[#ece7df] p-8">
              <h3 className="text-[#d4a853] text-lg mb-4">
                Dbałość o detale
              </h3>
              <p className="text-[#5a5a5a]">
                Na każdym etapie tworzenia kolekcji.
              </p>
            </div>

            <div className="bg-white border border-[#ece7df] p-8">
              <h3 className="text-[#d4a853] text-lg mb-4">
                Limitowane kolekcje
              </h3>
              <p className="text-[#5a5a5a]">
                Wyjątkowe modele dostępne w ograniczonych ilościach.
              </p>
            </div>

          </div>
        </section>

        {/* Dla kogo */}
        <section className="mb-20">
          <h2 className="text-3xl font-light text-[#2c2c2c] mb-8">
            Dla kogo tworzymy?
          </h2>

          <div className="bg-white border border-[#ece7df] p-8 md:p-10 space-y-6">
            <p className="text-[#5a5a5a] leading-relaxed">
              Dla kobiet, które cenią sobie elegancję, jakość i chcą
              wyróżniać się stylem.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed">
              Dla tych, które lubią czuć się wyjątkowo i podkreślać swoją
              kobiecość.
            </p>
          </div>
        </section>

        {/* Kolekcje */}
        <section>
          <h2 className="text-3xl font-light text-[#2c2c2c] mb-8">
            Nasze kolekcje
          </h2>

          <div className="bg-white border border-[#ece7df] p-8 md:p-10 space-y-6">
            <p className="text-[#5a5a5a] leading-relaxed">
              Tworzymy limitowane kolekcje, które łączą klasykę z nowoczesnymi
              trendami.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed">
              Znajdziesz u nas zarówno ponadczasowe basic, jak i efektowne
              elementy, które dopełnią każdą stylizację.
            </p>

            <p className="text-[#5a5a5a] leading-relaxed">
              Bo wierzymy, że to detale tworzą wyjątkowy look.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}