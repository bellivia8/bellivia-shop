import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white/70">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo i opis */}
          <div>
            <h3 className="text-white text-xl font-light italic tracking-wider mb-4">Belliviá Style</h3>
            <p className="text-sm leading-relaxed font-light max-w-xs">
              Elegancja, kobiecość i styl — dla nowoczesnej kobiety, która wie, czego chce.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/bellivia.style" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 border border-white/20 hover:border-[#d4a853] hover:text-[#d4a853] flex items-center justify-center transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@bellivia.style" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-9 h-9 border border-white/20 hover:border-[#d4a853] hover:text-[#d4a853] flex items-center justify-center transition-colors duration-300">
                <svg width="14" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1-.04z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589264261596" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 border border-white/20 hover:border-[#d4a853] hover:text-[#d4a853] flex items-center justify-center transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Kolekcja */}
          <div>
            <h4 className="text-white text-xs tracking-[0.3em] uppercase mb-6">Kolekcja</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Garnitury", href: "/products?category=garnitury" },
                { label: "Gorset", href: "/products?category=gorset" },
                { label: "Spodnie", href: "/products?category=spodnie" },
                { label: "Topy", href: "/products?category=topy" },
                { label: "Wszystkie produkty", href: "/products" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm hover:text-[#d4a853] transition-colors duration-200 font-light">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Pomoc */}
          <div>
            <h4 className="text-white text-xs tracking-[0.3em] uppercase mb-6">Pomoc</h4>
            <nav className="flex flex-col gap-3">
              {[
  { label: "O nas", href: "/o-nas" },
  { label: "Dostawa i płatności", href: "/dostawa-i-platnosci" },
  { label: "Zwroty i reklamacje", href: "/zwroty-i-reklamacje" },
  { label: "Kontakt", href: "/kontakt" },
].map((link) => (
  <Link
    key={link.href}
    href={link.href}
    className="text-sm hover:text-[#d4a853] transition-colors duration-200 font-light"
  >
    {link.label}
  </Link>
))}
                           
            </nav>
          </div>
        </div>
      </div>

      {/* Dolna belka */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Belliviá Style. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6">
            <Link href="/polityka-prywatnosci" className="text-xs text-white/40 hover:text-white/70 transition-colors">
  Polityka prywatności
  </Link>
            <Link href="/regulamin" className="text-xs text-white/40 hover:text-white/70 transition-colors">
  Regulamin
</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}