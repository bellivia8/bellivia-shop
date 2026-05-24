'use client';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    const defaultSize = product.sizes[1] || product.sizes[0];
    addToCart(product, defaultSize);
  };

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Zdjecie */}
        <div className="relative aspect-[3/4] bg-beige-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.parentElement.innerHTML =
                '<div class="w-full h-full flex items-center justify-center text-beige-300 text-sm">Brak zdjecia</div>';
            }}
          />
          <button
            onClick={handleQuickAdd}
            className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-beige-700 hover:text-white text-beige-700"
          >
            <ShoppingBag size={16} />
          </button>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-beige-400 uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-serif font-medium text-beige-900 text-base mb-2">
            {product.name}
          </h3>
          <p className="text-beige-700 font-semibold">
            {product.price.toFixed(2)} zl
          </p>
        </div>
      </div>
    </Link>
  );
}