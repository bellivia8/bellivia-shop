"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import { getUpsellSuggestions } from "@/data/products";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQuantity, total } = useContext(CartContext);

  const upsells = cart.length > 0
    ? getUpsellSuggestions(cart[cart.length - 1].productId).slice(0, 2)
    : [];

  return (
    <>
      {/* Tło */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Szuflada */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#faf8f5] z-50 shadow-2xl flex flex-col transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>

        {/* Nagłówek */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e8e0d5]">
          <h2 className="text-sm tracking-[0.3em] uppercase text-[#2c2c2c]">
            Koszyk ({cart.reduce((s, i) => s + i.quantity, 0)})
          </h2>
          <button onClick={() => setCartOpen(false)} className="text-[#2c2c2c] hover:text-[#d4a853] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Produkty */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p className="text-[#999] font-light text-sm">Koszyk jest pusty</p>
              <button onClick={() => setCartOpen(false)} className="text-xs tracking-widest uppercase text-[#d4a853] hover:underline">
                Wróć do sklepu
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-[#f0ebe3]">
                  <div className="relative w-20 h-24 bg-[#ede8e0] shrink-0 overflow-hidden">
                    {item.image && (
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm font-light text-[#2c2c2c]">{item.name}</p>
                      <p className="text-xs text-[#999] mt-0.5">{item.color} · {item.size}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#e8e0d5]">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center text-[#5a5a5a] hover:text-[#2c2c2c] text-sm">−</button>
                        <span className="w-7 h-7 flex items-center justify-center text-xs text-[#2c2c2c]">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center text-[#5a5a5a] hover:text-[#2c2c2c] text-sm">+</button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-[#d4a853]">{item.price * item.quantity} zł</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-[#ccc] hover:text-red-400 transition-colors">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M18 6 6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Upsell */}
              {upsells.length > 0 && (
                <div className="mt-4 pt-4 border-t border-[#e8e0d5]">
                  <p className="text-xs tracking-[0.25em] uppercase text-[#d4a853] mb-3">Dokup jeszcze...</p>
                  <div className="flex flex-col gap-3">
                    {upsells.map((p) => (
                      <Link key={p.id} href={`/products/${p.id}`} onClick={() => setCartOpen(false)}
                        className="flex items-center gap-3 p-2 bg-white border border-[#f0ebe3] hover:border-[#d4a853] transition-colors">
                        <div className="relative w-12 h-14 bg-[#ede8e0] shrink-0 overflow-hidden">
                          <Image src={p.colors[0].images[0]} alt={p.name} fill className="object-cover" sizes="48px" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-light text-[#2c2c2c]">{p.name}</p>
                          <p className="text-xs text-[#d4a853]">{p.price} zł</p>
                        </div>
                        <span className="text-xs text-[#999]">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stopka z sumą */}
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-[#e8e0d5] bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm tracking-wide text-[#5a5a5a]">Suma</span>
              <span className="text-lg text-[#2c2c2c] font-light">{total} zł</span>
            </div>
            {total < 299 && (
              <p className="text-xs text-[#999] mb-4 text-center">
                Brakuje Ci <span className="text-[#d4a853]">{299 - total} zł</span> do darmowej dostawy
              </p>
            )}
            <Link
              href="/checkout"
              onClick={() => setCartOpen(false)}
              className="block w-full bg-[#2c2c2c] hover:bg-[#d4a853] text-white text-center py-4 text-sm tracking-widest uppercase transition-colors duration-300"
            >
              Przejdź do kasy
            </Link>
            <button onClick={() => setCartOpen(false)} className="block w-full text-center text-xs text-[#999] hover:text-[#2c2c2c] mt-3 tracking-wide transition-colors">
              Kontynuuj zakupy
            </button>
          </div>
        )}
      </div>
    </>
  );
}