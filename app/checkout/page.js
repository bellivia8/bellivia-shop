"use client";

import React, { useState, useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, total } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shipping, setShipping] = useState("paczkomat");

  const shippingCost = total >= 299 ? 0 : 20;
  const finalTotal = total + shippingCost;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    paczkomat: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form, cart, total: finalTotal, shipping }),
      });
      const data = await res.json();
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        setError("Błąd płatności. Sprawdź czy klucze Stripe są ustawione w .env.local");
      }
    } catch (err) {
      setError("Błąd połączenia. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#999] font-light mb-4">Twój koszyk jest pusty.</p>
          <Link href="/products" className="text-xs tracking-widest uppercase text-[#d4a853] hover:underline">
            Wróć do sklepu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="text-center mb-12">
          <p className="text-[#d4a853] tracking-[0.35em] uppercase text-xs mb-3">Ostatni krok</p>
          <h1 className="text-3xl font-light text-[#2c2c2c] italic">Finalizacja zamówienia</h1>
          <div className="w-12 h-px bg-[#d4a853] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Formularz */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Dane osobowe */}
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#2c2c2c]">Dane kontaktowe</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-[#999] block mb-1">Imię *</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required
                  className="w-full border border-[#e8e0d5] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4a853]" />
              </div>
              <div>
                <label className="text-xs text-[#999] block mb-1">Nazwisko *</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required
                  className="w-full border border-[#e8e0d5] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4a853]" />
              </div>
            </div>
            <div>
              <label className="text-xs text-[#999] block mb-1">Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required
                className="w-full border border-[#e8e0d5] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4a853]" />
            </div>
            <div>
              <label className="text-xs text-[#999] block mb-1">Telefon *</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} required
                className="w-full border border-[#e8e0d5] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4a853]" />
            </div>

            {/* Metoda dostawy */}
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#2c2c2c] mt-2">Metoda dostawy</h2>
            <div className="flex flex-col gap-3">
              <label className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${shipping === "paczkomat" ? "border-[#d4a853] bg-[#fdf8f0]" : "border-[#e8e0d5] bg-white hover:border-[#ccc]"}`}>
                <input type="radio" name="shipping" value="paczkomat" checked={shipping === "paczkomat"} onChange={() => setShipping("paczkomat")} className="accent-[#d4a853]" />
                <div className="flex-1">
                  <p className="text-sm text-[#2c2c2c] font-light">📦 InPost Paczkomat</p>
                  <p className="text-xs text-[#999] mt-0.5">Dostawa do wybranego paczkomatu</p>
                </div>
                <span className="text-sm text-[#d4a853]">{shippingCost === 0 ? "Gratis" : "20 zł"}</span>
              </label>
              <label className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${shipping === "kurier" ? "border-[#d4a853] bg-[#fdf8f0]" : "border-[#e8e0d5] bg-white hover:border-[#ccc]"}`}>
                <input type="radio" name="shipping" value="kurier" checked={shipping === "kurier"} onChange={() => setShipping("kurier")} className="accent-[#d4a853]" />
                <div className="flex-1">
                  <p className="text-sm text-[#2c2c2c] font-light">🚚 Kurier InPost</p>
                  <p className="text-xs text-[#999] mt-0.5">Dostawa pod wskazany adres</p>
                </div>
                <span className="text-sm text-[#d4a853]">{shippingCost === 0 ? "Gratis" : "20 zł"}</span>
              </label>
            </div>

            {/* Adres */}
            {shipping === "kurier" && (
              <div className="flex flex-col gap-4">
                <h2 className="text-xs tracking-[0.3em] uppercase text-[#2c2c2c]">Adres dostawy</h2>
                <div>
                  <label className="text-xs text-[#999] block mb-1">Ulica i numer *</label>
                  <input name="address" value={form.address} onChange={handleChange} required
                    className="w-full border border-[#e8e0d5] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4a853]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-[#999] block mb-1">Kod pocztowy *</label>
                    <input name="zip" value={form.zip} onChange={handleChange} required placeholder="00-000"
                      className="w-full border border-[#e8e0d5] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4a853]" />
                  </div>
                  <div>
                    <label className="text-xs text-[#999] block mb-1">Miasto *</label>
                    <input name="city" value={form.city} onChange={handleChange} required
                      className="w-full border border-[#e8e0d5] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4a853]" />
                  </div>
                </div>
              </div>
            )}

            {shipping === "paczkomat" && (
              <div>
                <label className="text-xs text-[#999] block mb-1">Nazwa paczkomatu (np. WAW123) *</label>
                <input name="paczkomat" value={form.paczkomat} onChange={handleChange} required
                  placeholder="Wpisz kod paczkomatu"
                  className="w-full border border-[#e8e0d5] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#d4a853]" />
                <p className="text-xs text-[#999] mt-1">Znajdź paczkomat na <a href="https://inpost.pl/znajdz-paczkomat" target="_blank" className="text-[#d4a853] hover:underline">inpost.pl</a></p>
              </div>
            )}

            {error && <p className="text-red-500 text-xs bg-red-50 p-3 border border-red-200">{error}</p>}

            <button type="submit" disabled={loading}
              className="w-full bg-[#2c2c2c] hover:bg-[#d4a853] text-white py-4 text-sm tracking-widest uppercase transition-colors duration-300 disabled:opacity-50 mt-2">
              {loading ? "Przekierowuję..." : `Zapłać ${finalTotal} zł przez Stripe`}
            </button>
            <p className="text-xs text-[#999] text-center">🔒 Bezpieczna płatność SSL · Stripe</p>
          </form>

          {/* Podsumowanie */}
          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-[#2c2c2c] mb-6">Podsumowanie</h2>
            <div className="bg-white border border-[#e8e0d5] p-6 flex flex-col gap-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-start text-sm">
                  <div>
                    <p className="text-[#2c2c2c] font-light">{item.name}</p>
                    <p className="text-xs text-[#999] mt-0.5">{item.color} · {item.size} · szt. {item.quantity}</p>
                  </div>
                  <span className="text-[#d4a853] shrink-0 ml-4">{item.price * item.quantity} zł</span>
                </div>
              ))}
              <div className="border-t border-[#f0ebe3] pt-4 mt-2 flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#5a5a5a]">Produkty</span>
                  <span className="text-[#5a5a5a]">{total} zł</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5a5a5a]">Dostawa</span>
                  <span className={shippingCost === 0 ? "text-green-600" : "text-[#5a5a5a]"}>
                    {shippingCost === 0 ? "🎉 Gratis!" : `${shippingCost} zł`}
                  </span>
                </div>
                {shippingCost > 0 && (
                  <p className="text-xs text-[#bbb]">Brakuje {299 - total} zł do darmowej dostawy</p>
                )}
                <div className="flex justify-between mt-2 pt-2 border-t border-[#f0ebe3]">
                  <span className="text-[#2c2c2c]">Razem</span>
                  <span className="text-xl text-[#d4a853] font-light">{finalTotal} zł</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}