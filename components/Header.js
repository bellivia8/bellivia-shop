'use client';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import CartDrawer from './CartDrawer';

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-beige-100 border-b border-beige-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-beige-900 tracking-widest uppercase"
          >
            Bellivia
          </Link>

          {/* Desktop nawigacja */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-beige-600 uppercase tracking-wider">
            <Link href="/" className="hover:text-beige-900 transition-colors">
              Strona glowna
            </Link>
            <Link
              href="/products"
              className="hover:text-beige-900 transition-colors"
            >
              Sklep
            </Link>
          </nav>

          {/* Koszyk + mobilne menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-beige-700 hover:text-beige-900 transition-colors"
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-beige-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-beige-700"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobilna nawigacja */}
        {menuOpen && (
          <div className="md:hidden bg-beige-50 border-t border-beige-200 px-4 py-4 flex flex-col gap-4 text-sm font-medium text-beige-700 uppercase tracking-wider">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Strona glowna
            </Link>
            <Link href="/products" onClick={() => setMenuOpen(false)}>
              Sklep
            </Link>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}