export default function ZwrotyReklamacje() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-light mb-4 text-[#2c241f]">
          Zwroty i reklamacje
        </h1>

        <div className="w-20 h-[2px] bg-[#d4a853] mx-auto"></div>
      </div>

      <div className="grid gap-8">

        {/* Zwroty */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#ece6de]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">↩️</span>
            <h2 className="text-2xl font-light text-[#2c241f]">
              Zwroty
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Klient ma prawo odstąpić od umowy i zwrócić zakupiony produkt
            w terminie 30 dni od otrzymania przesyłki bez podawania przyczyny.
          </p>
        </section>

        {/* Warunki */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#ece6de]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📦</span>
            <h2 className="text-2xl font-light text-[#2c241f]">
              Warunki zwrotu
            </h2>
          </div>

          <ul className="space-y-3 text-gray-600">
            <li>• Produkt nie może nosić śladów użytkowania.</li>
            <li>• Produkt powinien zostać odesłany w stanie umożliwiającym jego dalszą sprzedaż.</li>
            <li>• Zalecamy dołączenie numeru zamówienia do przesyłki zwrotnej.</li>
          </ul>
        </section>

        {/* Reklamacje */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#ece6de]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🛡️</span>
            <h2 className="text-2xl font-light text-[#2c241f]">
              Reklamacje
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Jeżeli otrzymany produkt posiada wadę lub jest niezgodny z zamówieniem,
            skontaktuj się z nami. Każda reklamacja rozpatrywana jest indywidualnie.
          </p>
        </section>

        {/* Kontakt */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#ece6de]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">✉️</span>
            <h2 className="text-2xl font-light text-[#2c241f]">
              Kontakt w sprawie zwrotów i reklamacji
            </h2>
          </div>

          <p className="text-gray-600">
            W sprawach związanych ze zwrotami i reklamacjami prosimy o kontakt
            poprzez nasze media społecznościowe lub adres e-mail sklepu.
          </p>
        </section>

      </div>
    </main>
  );
}