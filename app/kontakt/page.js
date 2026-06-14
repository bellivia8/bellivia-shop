export default function Kontakt() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-light mb-10 text-[#2c2c2c]">
        Kontakt
      </h1>

      <div className="space-y-8 text-[#4a4a4a] leading-8">
        <p>
          Masz pytanie dotyczące zamówienia, produktu lub współpracy?
          Skontaktuj się z nami – chętnie pomożemy.
        </p>

        <div className="border-l-2 border-[#d4a853] pl-6">
          <p className="text-sm uppercase tracking-[0.25em] text-[#d4a853] mb-2">
            E-mail
          </p>

          <a
            href="mailto:bellivia.style@gmail.com"
            className="text-lg hover:text-[#d4a853] transition-colors"
          >
            bellivia.style@gmail.com
          </a>
        </div>

        <p className="text-sm text-[#888]">
          Odpowiadamy zazwyczaj w ciągu 24 godzin w dni robocze.
        </p>
      </div>
    </main>
  );
}