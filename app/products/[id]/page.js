"use client";

import React, { useState, useContext, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById, getUpsellSuggestions } from "@/data/products";
import { CartContext } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage({ params }) {
  const { id } = use(params);
  const product = getProductById(id);
  if (!product) notFound();

  const { addToCart } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState(product.defaultColor);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [mainImg, setMainImg] = useState(0);
  const [added, setAdded] = useState(false);
  const [openTab, setOpenTab] = useState("opis");

  const activeColor = product.colors.find((c) => c.value === selectedColor) || product.colors[0];
  const upsells = getUpsellSuggestions(product.id);

  function handleAddToCart() {
    addToCart({
      id: `${product.id}-${selectedColor}-${selectedSize}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      color: activeColor.name,
      size: selectedSize,
      image: activeColor.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Galeria */}
          <div className="flex gap-3">
            <div className="flex flex-col gap-2 w-16 shrink-0">
              {activeColor.images.map((img, i) => (
                <button key={i} onClick={() => setMainImg(i)}
                  className={`relative aspect-square overflow-hidden border-2 transition-colors ${mainImg === i ? "border-[#d4a853]" : "border-transparent"}`}>
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
            <div className="relative flex-1 aspect-[3/4] overflow-hidden bg-[#ede8e0]">
              <Image
                src={activeColor.images[mainImg] || activeColor.images[0]}
                alt={`${product.name} - ${activeColor.name}`}
                fill className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw" priority
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#d4a853] text-white text-[10px] tracking-widest uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Informacje */}
          <div className="flex flex-col justify-center">
            <p className="text-[#999] text-xs tracking-[0.25em] uppercase mb-3">{product.category}</p>
            <h1 className="text-2xl md:text-3xl font-light text-[#2c2c2c] italic mb-3">{product.name}</h1>
            <p className="text-2xl text-[#d4a853] font-light mb-6">{product.price} zł</p>
            <div className="w-12 h-px bg-[#e8e0d5] mb-6" />

            {/* Kolor */}
            <div className="mb-6">
              <p className="text-xs tracking-[0.2em] uppercase text-[#2c2c2c] mb-3">
                Kolor: <span className="text-[#d4a853]">{activeColor.name}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button key={color.value}
                    onClick={() => { setSelectedColor(color.value); setMainImg(0); }}
                    title={color.name}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${selectedColor === color.value ? "border-[#d4a853] scale-110 shadow-md" : "border-[#ddd] hover:border-[#aaa]"}`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Rozmiar */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.2em] uppercase text-[#2c2c2c] mb-3">
                Rozmiar: <span className="text-[#d4a853]">{selectedSize}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs tracking-wide border transition-all duration-200 ${selectedSize === size ? "bg-[#2c2c2c] text-white border-[#2c2c2c]" : "border-[#ccc] text-[#5a5a5a] hover:border-[#2c2c2c] hover:text-[#2c2c2c]"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Dodaj do koszyka */}
            <button onClick={handleAddToCart}
              className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300 ${added ? "bg-green-600 text-white" : "bg-[#2c2c2c] hover:bg-[#d4a853] text-white"}`}>
              {added ? "✓ Dodano do koszyka" : "Dodaj do koszyka"}
            </button>

            <div className="mt-4 flex flex-col gap-2 text-xs text-[#999]">
              <span>✦ Darmowa dostawa od 299 zł</span>
<span>✦ Zwroty do 30 dni</span>
<span>✦ Bezpieczne płatności Stripe</span>
            </div>

            {/* Zakładki: Opis / Wymiary / Skład */}
            <div className="mt-10">
              <div className="flex border-b border-[#e8e0d5]">
                {["opis", "wymiary", "sklad"].map((tab) => (
                  <button key={tab} onClick={() => setOpenTab(tab)}
                    className={`px-4 py-2.5 text-xs tracking-[0.2em] uppercase transition-colors ${openTab === tab ? "border-b-2 border-[#d4a853] text-[#2c2c2c]" : "text-[#999] hover:text-[#2c2c2c]"}`}>
                    {tab === "opis" ? "Opis" : tab === "wymiary" ? "Wymiary" : "Skład"}
                  </button>
                ))}
              </div>

              <div className="pt-5">
                {/* Opis */}
                {openTab === "opis" && (
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-[#5a5a5a] leading-relaxed font-light">{product.description}</p>
                    {product.notes && product.notes.length > 0 && (
                      <ul className="flex flex-col gap-1.5 mt-2">
                        {product.notes.map((note, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#5a5a5a] font-light">
                            <span className="text-[#d4a853] mt-0.5">✦</span>
                            {note}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Wymiary */}
                {openTab === "wymiary" && (
                  <div className="flex flex-col gap-6">
                    {Object.entries(product.measurements).map(([section, dims]) => (
                      <div key={section}>
                        <p className="text-xs tracking-[0.2em] uppercase text-[#2c2c2c] mb-3">{section}</p>
                        <table className="w-full text-sm">
                          <tbody>
                            {Object.entries(dims).map(([key, val]) => (
                              <tr key={key} className="border-b border-[#f0ebe3]">
                                <td className="py-2 text-[#999] font-light">{key}</td>
                                <td className="py-2 text-[#2c2c2c] text-right font-light">{val}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ))}
                    <p className="text-xs text-[#bbb] italic">* Wszystkie wymiary podane w centymetrach</p>
                  </div>
                )}

                {/* Skład */}
                {openTab === "sklad" && (
                  <div>
                    <p className="text-sm text-[#5a5a5a] font-light">{product.composition}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Dokup jeszcze */}
        {upsells.length > 0 && (
          <section className="mt-24">
            <div className="text-center mb-10">
              <p className="text-[#d4a853] tracking-[0.3em] uppercase text-xs mb-2">Dokup jeszcze...</p>
              <h2 className="text-2xl font-light text-[#2c2c2c] italic">Stwórz kompletną stylizację</h2>
              <div className="w-12 h-px bg-[#d4a853] mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {upsells.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}