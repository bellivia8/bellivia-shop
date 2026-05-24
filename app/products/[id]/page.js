'use client';
import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { getProductById, getRelatedProducts } from '../../../data/products';
import { useCart } from '../../../context/CartContext';
import ProductCard from '../../../components/ProductCard';
import { ShoppingBag, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProductPage() {
  const params = useParams();
  const product = getProductById(params.id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-3xl text-beige-800 mb-4">
          Produkt nie istnieje
        </h1>
        <Link href="/products" className="text-beige-600 underline">
          Wróc do sklepu
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(params.id, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Wybierz rozmiar');
      return;
    }
    addToCart(product, selectedSize);
    setError('');
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Powrot */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-beige-500 hover:text-beige-800 text-sm mb-6"
      >
        <ChevronLeft size={16} />
        Wroć do sklepu
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Zdjecie */}
        <div className="aspect-[3/4] bg-beige-100 rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.parentElement.innerHTML =
                '<div class="w-full h-full flex items-center justify-center text-beige-300">Brak zdjecia</div>';
            }}
          />
        </div>

        {/* Szczegoły */}
        <div className="flex flex-col">
          <p className="text-xs text-beige-500 uppercase tracking-wider mb-2">
            {product.category}
          </p>
          <h1 className="font-serif text-3xl text-beige-900 mb-3">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-beige-700 mb-6">
            {product.price.toFixed(2)} zl
          </p>
          <p className="text-beige-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Rozmiary */}
          <div className="mb-6">
            <p className="text-sm font-medium text-beige-800 mb-3 uppercase tracking-wide">
              Rozmiar
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setError('');
                  }}
                  className={`px-4 py-2 text-sm border rounded-lg font-medium transition-colors ${
                    selectedSize === size
                      ? 'bg-beige-700 text-white border-beige-700'
                      : 'border-beige-300 text-beige-700 hover:border-beige-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
          </div>

          {/* Dodaj do koszyka */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors text-base ${
              added
                ? 'bg-green-600 text-white'
                : 'bg-beige-700 text-white hover:bg-beige-800'
            }`}
          >
            <ShoppingBag size={18} />
            {added ? 'Dodano do koszyka!' : 'Dodaj do koszyka'}
          </button>

          {/* Info */}
          <div className="mt-8 pt-8 border-t border-beige-200 grid grid-cols-2 gap-3 text-sm text-beige-500">
            <div>Bezplatna dostawa od 299 zl</div>
            <div>Darmowe zwroty 30 dni</div>
            <div>Wysylka w 24h</div>
            <div>Bezpieczna platnosc</div>
          </div>
        </div>
      </div>

      {/* Polecane */}
      {related.length > 0 && (
        <div>
          <h2 className="font-serif text-2xl text-beige-900 mb-6">
            Moze Cie zainteresuje
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}