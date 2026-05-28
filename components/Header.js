"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";

export default function Header() {
  const { cart, setCartOpen } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/95 backdrop-blur-sm border-b border-[#e8e0d5]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Hamburger mobile */}
            <button
              className="md:hidden text-[#2c2c2c] p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {menuOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>

            {/* Menu desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/products"
                className="text-xs tracking-[0.2em] uppercase text-[#2c2c2c] hover:text-[#d4a853] transition-colors duration-200"
              >
                Kolekcja
              </Link>

              <Link
                href="/products?category=nowosci"
                className="text-xs tracking-[0.2em] uppercase text-[#2c2c2c] hover:text-[#d4a853] transition-colors duration-200"
              >
                Nowości
              </Link>
            </nav>

            {/* LOGO */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <span
                className="text-[#1f1f1f] leading-none"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "48px",
                }}
              >
                Belliviá
              </span>

              <span className="text-[10px] tracking-[0.6em] uppercase text-[#1f1f1f] mt-1">
                STYLE
              </span>
            </Link>

            {/* Prawa strona */}
            <div className="flex items-center gap-4">

              {/* Koszyk */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative text-[#2c2c2c] hover:text-[#d4a853] transition-colors duration-200"
                aria-label="Koszyk"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>

                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#d4a853] text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobilne */}
        {menuOpen && (
          <div className="md:hidden bg-[#faf8f5] border-t border-[#e8e0d5] px-6 py-6">
            <nav className="flex flex-col gap-5">
              {[
                { label: "Kolekcja", href: "/products" },
                { label: "Garnitury", href: "/products?category=garnitury" },
                { label: "Gorset", href: "/products?category=gorset" },
                { label: "Spodnie", href: "/products?category=spodnie" },
                { label: "Topy", href: "/products?category=topy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase text-[#2c2c2c] hover:text-[#d4a853] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <div className="h-16 md:h-20" />
    </>
  );
}