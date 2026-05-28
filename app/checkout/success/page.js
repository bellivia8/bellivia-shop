export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center bg-white p-10 shadow-sm">

        <div className="w-20 h-20 rounded-full bg-[#f0ebe3] flex items-center justify-center mx-auto mb-8">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#d4a853"
            strokeWidth="1.5"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <p className="text-[#d4a853] tracking-[0.35em] uppercase text-xs mb-3">
          Dziękujemy!
        </p>

        <h1 className="text-3xl font-light text-[#2c2c2c] italic mb-4">
          Zamówienie przyjęte
        </h1>

        <div className="w-12 h-px bg-[#d4a853] mx-auto mb-6" />

        <p className="text-[#5a5a5a] font-light text-sm leading-relaxed mb-8">
          Twoja płatność została zrealizowana poprawnie.
        </p>

        <a
          href="/products"
          className="inline-block bg-[#2c2c2c] hover:bg-[#d4a853] text-white px-8 py-3.5 text-xs tracking-widest uppercase transition-colors duration-300"
        >
          Wróć do sklepu
        </a>
      </div>
    </main>
  );
}