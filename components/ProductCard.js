"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.defaultColor);
  const [hovered, setHovered] = useState(false);

  const activeColor = product.colors.find((c) => c.value === selectedColor) || product.colors[0];
  const mainImage = activeColor.images[0];
  const hoverImage = activeColor.images[1] || activeColor.images[0];

  return (
    <div className="group flex flex-col">
      {/* Zdjęcie */}
      <Link
        href={`/products/${product.id}`}
        className="block relative overflow-hidden bg-[#ede8e0] aspect-[3/4]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={hovered ? hoverImage : mainImage}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#d4a853] text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="bg-[#1a1a1a]/90 text-white text-center text-xs tracking-widest uppercase py-3">
            Zobacz produkt
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 pb-2 flex flex-col gap-1">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-sm font-light text-[#2c2c2c] hover:text-[#d4a853] transition-colors tracking-wide">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-[#d4a853] font-light">{product.price} zł</p>

        {/* Swatche kolorów */}
        {product.colors.length > 1 && (
          <div className="flex gap-1.5 mt-2">
            {product.colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                title={color.name}
                className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                  selectedColor === color.value
                    ? "border-[#d4a853] scale-110"
                    : "border-transparent hover:border-[#ccc]"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        )}

        {/* Rozmiary */}
        <p className="text-xs text-[#999] font-light mt-1">
  {
    product.sizes?.every(
      size => typeof size === "object" && size.available === false
    )
      ? "Wyprzedane"
      : product.sizes
          ?.filter(
            size =>
              typeof size === "string" ||
              size.available !== false
          )
          .map(
            size =>
              typeof size === "string"
                ? size
                : size.name
          )
          .join(" · ")
  }
</p>
      </div>
    </div>
  );
}