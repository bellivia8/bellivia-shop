'use client';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import ProductCard from '../../components/ProductCard';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const cartProductIds = cart.map((item) => item.id);
  const upsellProducts = products
    .filter((p) => !cartProductIds.includes(p.id))
    .slice(0, 3);

  const shipping = totalPrice >= 299 ? 0 : 14.99;
  const total = totalPrice + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <ShoppingBag
          size={60}
          className="mx-auto text-beige-300 mb-6"
          strokeWidth={1}
        />
        <h1 className="font-serif text-3xl text-beige-800 mb-4">
          Koszyk jest pusty
        </h1>
        <p className="text-beige-500 mb-8">
          Dodaj produkty do koszyka, aby przejsc do kasy.
        </p>
        <Link
          href="/products"
          className="inline-block bg-beige-700 text-white px-10 py-3 rounded-full hover:bg-beige-800 transition-colors"
        >
          Przejdz do sklepu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-beige-900 mb-8">Koszyk</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Produkty */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm"
            >
              <div className="w-24 h-24 bg-beige-100 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <p className="font-serif font-medium text-beige-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-beige-500 mt-0.5">
                      Rozmiar: {item.size}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.size)}
                    className="text-beige-400 hover:text-red-400"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2 bg-beige-50 rounded-lg px-2 py-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity - 1)
                      }
                      className="text-beige-600 hover:text-beige-900"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.size, item.quantity + 1)
                      }
                      className="text-beige-600 hover:text-beige-900"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="font-semibold text-beige-800">
                    {(item.price * item.quantity).toFixed(2)} zl
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Upsell */}
          {upsellProducts.length > 0 && (
            <div className="mt-4 bg-beige-100 rounded-2xl p-5">
              <p className="font-medium text-beige-800 mb-1">
                Dokup jeszcze i uzupelnij stylizacje
              </p>
              <p className="text-sm text-beige-500 mb-4">
                Klientki, ktore kupily te produkty, czesto wybieraly tez:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {upsellProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="bg-white rounded-xl p-3 flex gap-3 hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 bg-beige-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-beige-900 leading-tight">
                        {product.name}
                      </p>
                      <p className="text-xs font-bold text-beige-700 mt-1">
                        {product.price.toFixed(2)} zl
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Podsumowanie */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
            <h2 className="font-serif text-xl text-beige-900 mb-5">
              Podsumowanie
            </h2>
            <div className="space-y-3 text-sm text-beige-600 mb-5">
              <div className="flex justify-between">
                <span>
                  Produkty ({cart.reduce((s, i) => s + i.quantity, 0)} szt.)
                </span>
                <span>{totalPrice.toFixed(2)} zl</span>
              </div>
              <div className="flex justify-between">
                <span>Dostawa</span>
                <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                  {shipping === 0 ? 'GRATIS' : `${shipping.toFixed(2)} zl`}
                </span>
              </div>
              {totalPrice < 299 && (
                <p className="text-xs text-beige-400 text-right">
                  Brakuje {(299 - totalPrice).toFixed(2)} zl do darmowej dostawy
                </p>
              )}
            </div>
            <div className="border-t border-beige-100 pt-4 mb-5">
              <div className="flex justify-between font-bold text-beige-900 text-lg">
                <span>Razem</span>
                <span>{total.toFixed(2)} zl</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full bg-beige-700 text-white text-center py-4 rounded-xl font-medium hover:bg-beige-800 transition-colors"
            >
              Zamawiam i place
            </Link>
            <Link
              href="/products"
              className="block text-center text-sm text-beige-500 hover:text-beige-700 mt-3"
            >
              Kontynuuj zakupy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}