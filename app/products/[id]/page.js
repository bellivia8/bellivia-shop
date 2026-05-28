"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl">Produkt nie istnieje</h1>
      </div>
    );
  }

  const defaultColor =
    product.colors.find((c) => c.value === product.defaultColor) ||
    product.colors[0];

  const [selectedColor, setSelectedColor] = useState(defaultColor);

  const [selectedImage, setSelectedImage] = useState(
    defaultColor.images[0]
  );

  const [selectedSize, setSelectedSize] = useState(
    typeof product.sizes[0] === "object"
      ? product.sizes.find((s) => s.available)?.name || ""
      : product.sizes[0]
  );

  const [activeTab, setActiveTab] = useState("opis");

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(color.images[0]);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: `${product.name} - ${selectedColor.name}`,
      price: product.price,
      size: selectedSize,
      image: selectedImage,
      quantity: 1,
    });
  };

  return (
    <main className="bg-[#f8f5f0] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEWA STRONA */}
          <div className="flex gap-4">

            {/* MINIATURY */}
            <div className="flex flex-col gap-3">
              {selectedColor.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-16 h-20 border ${
                    selectedImage === img
                      ? "border-[#d4a853]"
                      : "border-[#ddd]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* GŁÓWNE ZDJĘCIE */}
            <div className="relative flex-1 aspect-[3/4] bg-[#ede8e0] overflow-hidden">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* PRAWA STRONA */}
          <div>
            <p className="text-[#a6a6a6] uppercase tracking-[0.3em] text-xs mb-3">
              {product.category}
            </p>

            <h1 className="text-4xl italic font-light text-[#2c2c2c] mb-4">
              {product.name}
            </h1>

            <p className="text-3xl text-[#d4a853] font-light mb-8">
              {product.price} zł
            </p>

            {/* KOLOR */}
            <div className="mb-8">
              <p className="uppercase tracking-[0.3em] text-xs text-[#2c2c2c] mb-3">
                Kolor:{" "}
                <span className="text-[#d4a853]">
                  {selectedColor.name}
                </span>
              </p>

              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor.value === color.value
                        ? "border-[#d4a853]"
                        : "border-[#ddd]"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            {/* ROZMIARY */}
            <div className="mb-8">
              <p className="uppercase tracking-[0.3em] text-xs text-[#2c2c2c] mb-3">
                Rozmiar:{" "}
                <span className="text-[#d4a853]">
                  {selectedSize}
                </span>
              </p>

              <div className="flex gap-3 flex-wrap">

                {typeof product.sizes[0] === "object" ? (
                  product.sizes.map((size) => (
                    <button
                      key={size.name}
                      disabled={!size.available}
                      onClick={() =>
                        size.available &&
                        setSelectedSize(size.name)
                      }
                      className={`relative px-5 py-3 border text-sm tracking-widest transition-all
                        ${
                          selectedSize === size.name
                            ? "bg-[#2c2c2c] text-white border-[#2c2c2c]"
                            : "border-[#ddd] text-[#2c2c2c]"
                        }
                        ${
                          !size.available
                            ? "opacity-40 cursor-not-allowed line-through"
                            : "hover:border-[#2c2c2c]"
                        }
                      `}
                    >
                      {size.name}

                      {!size.available && (
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-red-500 whitespace-nowrap">
                          Wyprzedane
                        </span>
                      )}
                    </button>
                  ))
                ) : (
                  product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-3 border text-sm tracking-widest ${
                        selectedSize === size
                          ? "bg-[#2c2c2c] text-white border-[#2c2c2c]"
                          : "border-[#ddd] text-[#2c2c2c]"
                      }`}
                    >
                      {size}
                    </button>
                  ))
                )}

              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleAddToCart}
              disabled={
                typeof product.sizes[0] === "object" &&
                !product.sizes.find(
                  (s) => s.name === selectedSize
                )?.available
              }
              className="w-full bg-[#2c2c2c] hover:bg-black text-white py-5 tracking-[0.2em] uppercase text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {typeof product.sizes[0] === "object" &&
              !product.sizes.find(
                (s) => s.name === selectedSize
              )?.available
                ? "Rozmiar niedostępny"
                : "Dodaj do koszyka"}
            </button>

            {/* INFO */}
            <div className="mt-6 text-sm text-[#8a8a8a] space-y-2">
              <p>+ Darmowa dostawa od 299 zł</p>
              <p>+ Zwroty do 30 dni</p>
              <p>+ Bezpieczne płatności Stripe</p>
            </div>

            {/* TABS */}
            <div className="mt-12">
              <div className="flex gap-8 border-b border-[#ddd] mb-6">
                {["opis", "wymiary", "skład"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 uppercase tracking-[0.25em] text-xs ${
                      activeTab === tab
                        ? "text-[#2c2c2c] border-b border-[#d4a853]"
                        : "text-[#999]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === "opis" && (
                <div className="space-y-4 text-[#5a5a5a] leading-relaxed">
                  <p>{product.description}</p>

                  {product.notes?.map((note, index) => (
                    <p key={index}>✦ {note}</p>
                  ))}
                </div>
              )}

              {activeTab === "wymiary" && (
                <div className="space-y-6 text-sm text-[#5a5a5a]">
                  {Object.entries(product.measurements).map(
                    ([section, values]) => (
                      <div key={section}>
                        <h3 className="font-medium mb-2">
                          {section}
                        </h3>

                        <div className="space-y-1">
                          {Object.entries(values).map(([k, v]) => (
                            <div
                              key={k}
                              className="flex justify-between border-b border-[#eee] py-1"
                            >
                              <span>{k}</span>
                              <span>{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              {activeTab === "skład" && (
                <p className="text-[#5a5a5a]">
                  {product.composition}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}