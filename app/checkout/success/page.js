import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="font-serif text-3xl text-beige-900 mb-4">
        Dziekujemy za zamowienie!
      </h1>
      <p className="text-beige-600 mb-2">
        Twoje zamowienie zostalo przyjete.
      </p>
      <p className="text-beige-500 text-sm mb-8">
        Potwierdzenie zostanie wyslane na podany adres email.
      </p>
      <Link
        href="/"
        className="inline-block bg-beige-700 text-white px-10 py-3 rounded-full hover:bg-beige-800 transition-colors"
      >
        Wroć na strone glowna
      </Link>
    </div>
  );
}