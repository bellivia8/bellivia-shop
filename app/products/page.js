"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";

const CATEGORIES = [
  { value: "wszystkie", label: "Wszystkie" },
  { value: "garnitury", label: "Garnitury" },
  { value: "gorset", label: "Gorset" },
  { value: "spodnie", label: "Spodnie" },
  { value: "topy", label: "Topy" },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "wszystkie";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filtered =
    activeCategory === "wszystkie"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* Nagłówek strony */}
      <section className="bg-[#f0ebe3] py-16 text-center">
        <p className="text-[#d4a853] tracking-[0.35em] uppercase text-xs mb-3">
          Sklep
        </p>
        <h1 className="text-3xl md:text-4xl font-light text-[#2c2c2c] italic">
          Kolekcja
        </h1>
        <div className="w-12 h-px bg-[#d4a853] mx-auto mt-4" />
      </section>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Filtry kategorii */}
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-200 ${
                activeCategory === cat.value
                  ? "bg-[#2c2c2c] text-white"
                  : "border border-[#ccc] text-[#5a5a5a] hover:border-[#2c2c2c] hover:text-[#2c2c2c]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Liczba produktów */}
        <p className="text-xs text-[#999] tracking-wide mb-8 text-center">
          {filtered.length} {filtered.length === 1 ? "produkt" : filtered.length < 5 ? "produkty" : "produktów"}
        </p>

        {/* Siatka produktów */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#999]">
            <p className="text-lg font-light italic">Brak produktów w tej kategorii.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f5] flex items-center justify-center text-[#999]">Ładowanie...</div>}>
      <ProductsContent />
    </Suspense>
  );
}