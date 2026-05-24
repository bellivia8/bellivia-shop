import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-beige-900 text-beige-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl text-white mb-3 tracking-widest">
              BELLIVIA
            </h3>
            <p className="text-sm text-beige-400 leading-relaxed">
              Odziez damska z naturalnych materialow. Styl, komfort i elegancja
              w kazdym detalu.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">
              Sklep
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-beige-400">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Wszystkie produkty
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  Koszyk
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-4">
              Kontakt
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-beige-400">
              <li>kontakt@bellivia.pl</li>
              <li>+48 123 456 789</li>
              <li className="text-xs mt-2">
                Poniedzialek – Piatek
                <br />
                9:00 – 17:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beige-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-beige-500">
          <p>© 2025 Bellivia. Wszelkie prawa zastrzezone.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Polityka prywatnosci
            </Link>
            <Link href="#" className="hover:text-white">
              Regulamin
            </Link>
            <Link href="#" className="hover:text-white">
              Zwroty
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}