"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";

export default function SuccessPage() {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        {/* Ikona sukcesu */}
        <div className="w-20 h-20 rounded-full bg-[#f0ebe3] flex items-center justify-center mx-auto mb-8">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="1.5">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <p className="text-[#d4a853] tracking-[0.35em] uppercase text-xs mb-3">Dziękujemy!</p>
        <h1 className="text-3xl font-light text-[#2c2c2c] italic mb-4">
          Zamówienie przyjęte
        </h1>
        <div className="w-12 h-px bg-[#d4a853] mx-auto mb-6" />

        <p className="text-[#5a5a5a] font-light text-sm leading-relaxed mb-8">
          Twoje zamówienie zostało złożone i opłacone. Potwierdzenie wysłaliśmy na Twój adres email.
          Zamówienie zostanie wysłane w ciągu 1–3 dni roboczych.
        </p>

        <div className="bg-white border border-[#e8e0d5] p-6 mb-8 text-left">
          <h3 className="text-xs tracking-[0.25em] uppercase text-[#2c2c2c] mb-4">Co dalej?</h3>
          <div className="flex flex-col gap-3">
            {[
              "Otrzymasz email z potwierdzeniem zamówienia",
              "Przygotujemy i zapakujemy Twoje produkty",
              "Wyślemy paczkę kurierem InPost lub DPD",
              "Otrzymasz numer śledzenia przesyłki",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#f0ebe3] text-[#d4a853] text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm text-[#5a5a5a] font-light">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/products"
            className="inline-block bg-[#2c2c2c] hover:bg-[#d4a853] text-white px-8 py-3.5 text-xs tracking-widest uppercase transition-colors duration-300">
            Kontynuuj zakupy
          </Link>
          <Link href="/"
            className="inline-block border border-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white text-[#2c2c2c] px-8 py-3.5 text-xs tracking-widest uppercase transition-colors duration-300">
            Strona główna
          </Link>
        </div>

        <div className="mt-10 flex justify-center gap-6">
          <a href="https://www.instagram.com/bellivia.style" target="_blank" rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-[#999] hover:text-[#d4a853] transition-colors">Instagram</a>
          <span className="text-[#d4a853]">·</span>
          <a href="https://www.tiktok.com/@bellivia.style" target="_blank" rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-[#999] hover:text-[#d4a853] transition-colors">TikTok</a>
        </div>
      </div>
    </main>
  );
}