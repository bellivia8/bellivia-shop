'use client';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import { products } from '../data/products';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalPrice,
  } = useCart();

  const cartProductIds = cart.map((item) => item.id);
  const upsellProducts = products
    .filter((p) => !cartProductIds.includes(p.id))
    .slice(0, 2);

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-beige-50 z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-beige-200">
          <h2 className="font-serif text-xl font-semibold text-beige-900">
            Twoj koszyk
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-beige-500 hover:text-beige-900"
          >
            <X size={22} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-beige-400 gap-4">
            <ShoppingBag size={48} strokeWidth={1} />
            <p className="font-medium">Koszyk jest pusty</p>
            <Link
              href="/products"
              onClick={() => setIsCartOpen(false)}
              className="text-sm text-beige-600 underline underline-offset-2"
            >
              Przejdz do sklepu
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
              {/* Produkty */}
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 bg-white rounded-xl p-3 shadow-sm"
                >
                  <div className="w-20 h-20 bg-beige-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-beige-900 text-sm truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-beige-500 mt-0.5">
                      Rozmiar: {item.size}
                    </p>
                    <p className="text-sm font-semibold text-beige-700 mt-1">
                      {(item.price * item.quantity).toFixed(2)} zl
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className="w-6 h-6 bg-beige-100 rounded-full flex items-center justify-center hover:bg-beige-200"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="w-6 h-6 bg-beige-100 rounded-full flex items-center justify-center hover:bg-beige-200"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="ml-auto text-xs text-red-400 hover:text-red-600"
                      >
                        Usun
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Upsell */}
              {upsellProducts.length > 0 && (
                <div className="mt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-beige-500 mb-3">
                    Dokup jeszcze i uzupelnij stylizacje
                  </p>
                  {upsellProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-3 items-center bg-beige-100 rounded-xl p-3 mb-2"
                    >
                      <div className="w-14 h-14 bg-beige-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-beige-900 truncate">
                          {product.name}
                        </p>
                        <p className="text-xs font-bold text-beige-700 mt-0.5">
                          {product.price.toFixed(2)} zl
                        </p>
                      </div>
                      <Link
                        href={`/products/${product.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="text-xs bg-beige-700 text-white px-3 py-1.5 rounded-lg hover:bg-beige-800 flex-shrink-0"
                      >
                        Zobacz
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-beige-200 bg-white">
              <div className="flex justify-between items-center mb-4">
                <span className="text-beige-600 font-medium">Razem:</span>
                <span className="text-xl font-bold text-beige-900">
                  {totalPrice.toFixed(2)} zl
                </span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-beige-700 text-white text-center py-3 rounded-xl font-medium hover:bg-beige-800 transition-colors"
              >
                Przejdz do kasy
              </Link>
              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center py-3 text-sm text-beige-500 hover:text-beige-800 mt-1"
              >
                Przegladaj koszyk
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}