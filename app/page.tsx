"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import products, { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <main className="min-h-screen bg-[#faf8f5]">

      {/* HERO */}
      <section className="relative bg-[#e9e5df] py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d8d1c7] to-[#f5f1eb] opacity-70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-[#d4a853] tracking-[0.35em] uppercase text-xs mb-6">
            Belliviá Style
          </p>

          <h1 className="text-6xl md:text-7xl italic font-light text-[#2c2c2c] leading-none">
            Elegancja.
            <br />
            Kobiecość.
            <br />
            Trendy.
          </h1>

          <p className="mt-8 text-[#5a5a5a] max-w-xl text-lg font-light leading-relaxed">
            Odkryj kolekcję stworzoną z myślą o nowoczesnej kobiecie,
            która ceni styl i wyjątkowość.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/products"
              className="bg-[#d4a853] text-white px-8 py-4 tracking-widest uppercase text-sm"
            >
              Odkryj kolekcję
            </Link>

          </div>
        </div>
      </section>

      {/* PASEK */}
      <section className="bg-[#1a1a1a] py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            {[
              { icon: "✦", text: "Darmowa dostawa od 299 zł" },
              { icon: "✦", text: "Zwroty do 30 dni" },
              { icon: "✦", text: "Bezpieczne płatności Stripe" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className="text-[#d4a853] text-xs">{item.icon}</span>
                <span className="text-white/80 text-xs tracking-widest uppercase">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WYRÓŻNIONE PRODUKTY */}
      <section className="py-20 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
          <p className="text-[#d4a853] tracking-[0.3em] uppercase text-xs mb-3">
            Kolekcja
          </p>

          <h2 className="text-3xl md:text-4xl font-light text-[#2c2c2c] italic mb-4">
            Wybrane dla Ciebie
          </h2>

          <div className="w-12 h-px bg-[#d4a853] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/products"
            className="inline-block border border-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-white text-[#2c2c2c] px-10 py-3.5 text-sm tracking-widest uppercase transition-all duration-300"
          >
            Zobacz całą kolekcję
          </Link>
        </div>
      </section>

      {/* KATEGORIE */}
      <section className="py-20 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-14">
          <p className="text-[#d4a853] tracking-[0.3em] uppercase text-xs mb-3">
            Kategorie
          </p>

          <h2 className="text-3xl md:text-4xl font-light text-[#2c2c2c] italic mb-4">
            Cała kolekcja
          </h2>

          <div className="w-12 h-px bg-[#d4a853] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Garnitury",
              href: "/products?category=garnitury",
              img: "/images/gc1.jpg",
            },
            {
              label: "Gorset",
              href: "/products?category=gorset",
              img: "/images/go1.jpg",
            },
            {
              label: "Spodnie",
              href: "/products?category=spodnie",
              img: "/images/sc1.jpg",
            },
            {
              label: "Topy",
              href: "/products?category=topy",
              img: "/images/tb1.jpg",
            },
          ].map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group relative aspect-[3/4] overflow-hidden bg-[#ede8e0]"
            >
              <Image
                src={cat.img}
                alt={cat.label}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white text-sm tracking-widest uppercase font-light">
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* O MARCE */}
      <section className="bg-[#f0ebe3] py-20">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#d4a853] tracking-[0.35em] uppercase text-xs mb-4">
              O nas
            </p>

            <h2 className="text-3xl md:text-4xl font-light text-[#2c2c2c] italic mb-6">
              Belliviá Style
            </h2>

            <div className="w-12 h-px bg-[#d4a853] mx-auto mb-8" />

            <p className="text-[#5a5a5a] leading-relaxed text-base font-light">
              Tworzymy ubrania dla kobiet, które wiedzą czego chcą. Każdy element naszej kolekcji
              to połączenie eleganckiego kroju, wysokiej jakości tkanin i ponadczasowego stylu.
            </p>

            <div className="mt-10 flex justify-center gap-6">
              <a
                href="https://www.instagram.com/bellivia.style"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c2c2c] hover:text-[#d4a853] transition-colors text-xs tracking-widest uppercase"
              >
                Instagram
              </a>

              <span className="text-[#d4a853]">·</span>

              <a
                href="https://www.tiktok.com/@bellivia.style"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c2c2c] hover:text-[#d4a853] transition-colors text-xs tracking-widest uppercase"
              >
                TikTok
              </a>

              <span className="text-[#d4a853]">·</span>

              <a
                href="https://www.facebook.com/profile.php?id=61589264261596"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2c2c2c] hover:text-[#d4a853] transition-colors text-xs tracking-widest uppercase"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}