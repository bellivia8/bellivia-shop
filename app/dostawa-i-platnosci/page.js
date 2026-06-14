export default function DostawaPlatnosci() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-light mb-4 text-[#2c241f]">
          Dostawa i płatności
        </h1>

        <div className="w-20 h-[2px] bg-[#d4a853] mx-auto"></div>
      </div>

      <div className="grid gap-8">

        {/* Dostawa */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#ece6de]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📦</span>
            <h2 className="text-2xl font-light text-[#2c241f]">
              Dostawa
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            Zamówienia wysyłamy na terenie Polski za pośrednictwem InPost.
          </p>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span>Paczkomat InPost</span>
              <span className="font-medium">20 zł</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span>Kurier InPost</span>
              <span className="font-medium">20 zł</span>
            </div>

            <div className="flex justify-between pb-3">
              <span>Darmowa dostawa</span>
              <span className="text-[#d4a853] font-semibold">
                od 299 zł
              </span>
            </div>
          </div>
        </section>

        {/* Płatności */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#ece6de]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">💳</span>
            <h2 className="text-2xl font-light text-[#2c241f]">
              Płatności
            </h2>
          </div>

          <p className="text-gray-600 mb-6">
            Płatności realizowane są za pośrednictwem bezpiecznego systemu Stripe.
          </p>

          <div className="space-y-3">
            <div className="bg-[#faf8f5] p-4 rounded-xl">
              Apple Pay
            </div>

            <div className="bg-[#faf8f5] p-4 rounded-xl">
              Karty płatnicze (Visa, Mastercard i inne obsługiwane przez Stripe)
            </div>

            <div className="bg-[#faf8f5] p-4 rounded-xl">
              Link by Stripe
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Wszystkie transakcje są szyfrowane i realizowane za pomocą bezpiecznego połączenia SSL.
          </p>
        </section>

        {/* Realizacja */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-[#ece6de]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🚚</span>
            <h2 className="text-2xl font-light text-[#2c241f]">
              Realizacja zamówienia
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Zamówienia przygotowujemy zazwyczaj w ciągu 1–3 dni roboczych od momentu zaksięgowania płatności.
          </p>
        </section>

      </div>
    </main>
  );
}