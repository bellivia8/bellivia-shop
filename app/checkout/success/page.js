export default function SuccessPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6 py-16">
      <div className="max-w-xl w-full bg-white border border-[#eee] shadow-sm p-10 md:p-14 text-center">

        {/* IKONA */}
        <div className="w-24 h-24 rounded-full bg-[#f3eee6] flex items-center justify-center mx-auto mb-8">
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4a853"
            strokeWidth="1.5"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        {/* TEKST */}
        <p className="text-[#d4a853] tracking-[0.4em] uppercase text-xs mb-4">
          Dziękujemy
        </p>

        <h1 className="text-4xl md:text-5xl italic font-light text-[#2c2c2c] mb-5">
          Zamówienie przyjęte
        </h1>

        <div className="w-16 h-px bg-[#d4a853] mx-auto mb-8" />

        <p className="text-[#5a5a5a] font-light leading-relaxed mb-8">
          Twoja płatność została zrealizowana poprawnie.
          Zamówienie zostało zapisane w naszym systemie i przygotujemy je do wysyłki w ciągu 1–3 dni roboczych.
        </p>

        {/* NUMER */}
        <div className="bg-[#faf8f5] border border-[#eee] py-5 px-6 mb-8">
          <p className="text-xs tracking-[0.25em] uppercase text-[#999] mb-2">
            Numer zamówienia
          </p>

          <p className="text-2xl tracking-widest text-[#2c2c2c]">
            #{orderNumber}
          </p>
        </div>

        {/* CO DALEJ */}
        <div className="text-left bg-[#faf8f5] border border-[#eee] p-6 mb-10">
          <h3 className="uppercase tracking-[0.25em] text-xs text-[#2c2c2c] mb-5">
            Co dalej?
          </h3>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <span className="text-[#d4a853]">✦</span>
              <p className="text-sm text-[#5a5a5a] font-light">
                Otrzymasz email z potwierdzeniem zamówienia.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#d4a853]">✦</span>
              <p className="text-sm text-[#5a5a5a] font-light">
                Przygotujemy Twoje produkty do wysyłki.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-[#d4a853]">✦</span>
              <p className="text-sm text-[#5a5a5a] font-light">
                Numer śledzenia przesyłki wyślemy mailowo.
              </p>
            </div>

          </div>
        </div>

        {/* BUTTONY */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="/products"
            className="inline-block bg-[#2c2c2c] hover:bg-[#d4a853] text-white px-8 py-4 text-xs tracking-[0.25em] uppercase transition-colors duration-300"
          >
            Kontynuuj zakupy
          </a>

          <a
            href="/"
            className="inline-block border border-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white text-[#2c2c2c] px-8 py-4 text-xs tracking-[0.25em] uppercase transition-colors duration-300"
          >
            Strona główna
          </a>

        </div>

        {/* SOCIAL */}
        <div className="mt-12 pt-8 border-t border-[#eee]">
          <p className="text-xs tracking-[0.25em] uppercase text-[#999] mb-4">
            Obserwuj Belliviá
          </p>

          <div className="flex justify-center gap-6 text-sm">

            <a
              href="https://www.instagram.com/bellivia.style"
              target="_blank"
              className="text-[#5a5a5a] hover:text-[#d4a853] transition-colors"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@bellivia.style"
              target="_blank"
              className="text-[#5a5a5a] hover:text-[#d4a853] transition-colors"
            >
              TikTok
            </a>

          </div>
        </div>
      </div>
    </main>
  );
}