'use client';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    zip: '',
    city: '',
  });

  const shipping = totalPrice >= 299 ? 0 : 14.99;
  const total = totalPrice + shipping;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cart, total, customer: form }),
      });
      const data = await response.json();
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert('Wystapil blad platnosci. Sprobuj ponownie.');
      }
    } catch (err) {
      alert('Blad polaczenia. Sprawdz internet.');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <p className="text-beige-600 mb-4">Koszyk jest pusty.</p>
        <a href="/products" className="text-beige-700 underline">
          Wroć do sklepu
        </a>
      </div>
    );
  }

  const fields = [
    { name: 'name', label: 'Imie i nazwisko', type: 'text', placeholder: 'Anna Kowalska' },
    { name: 'email', label: 'Adres email', type: 'email', placeholder: 'anna@przyklad.pl' },
    { name: 'phone', label: 'Telefon', type: 'tel', placeholder: '+48 123 456 789' },
    { name: 'street', label: 'Ulica i numer', type: 'text', placeholder: 'ul. Rozana 12/4' },
    { name: 'zip', label: 'Kod pocztowy', type: 'text', placeholder: '00-001' },
    { name: 'city', label: 'Miasto', type: 'text', placeholder: 'Warszawa' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-beige-900 mb-8">Kasa</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formularz */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="font-medium text-beige-800 uppercase text-sm tracking-wider mb-2">
            Dane dostawy
          </h2>
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-medium text-beige-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="w-full border border-beige-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-beige-400 text-beige-900 placeholder:text-beige-300"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-beige-700 text-white py-4 rounded-xl font-medium hover:bg-beige-800 transition-colors flex items-center justify-center gap-3 text-base disabled:opacity-60 mt-4"
          >
            {loading ? (
              'Przekierowuje do platnosci...'
            ) : (
              <>
                <span>Zapl przez Przelewy24</span>
                <span className="font-bold text-lg">{total.toFixed(2)} zl</span>
              </>
            )}
          </button>

          <p className="text-xs text-beige-400 text-center">
            Zostaniesz przekierowany do bezpiecznej bramki platnosci Przelewy24.
          </p>
        </form>

        {/* Podsumowanie zamowienia */}
        <div className="bg-beige-100 rounded-2xl p-6">
          <h2 className="font-serif text-xl text-beige-900 mb-5">
            Twoje zamowienie
          </h2>
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex items-center gap-3"
              >
                <div className="w-14 h-14 bg-beige-200 rounded-lg overflow-hidden flex-shrink-0">
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
                  <p className="text-sm font-medium text-beige-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-beige-500">
                    Rozmiar: {item.size} · Szt.: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-semibold text-beige-800 flex-shrink-0">
                  {(item.price * item.quantity).toFixed(2)} zl
                </p>
              </div>
            ))}
          </div>
          <div className="border-t border-beige-200 mt-5 pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-beige-600">
              <span>Produkty</span>
              <span>{totalPrice.toFixed(2)} zl</span>
            </div>
            <div className="flex justify-between text-beige-600">
              <span>Dostawa</span>
              <span className={shipping === 0 ? 'text-green-600 font-medium' : ''}>
                {shipping === 0 ? 'GRATIS' : `${shipping.toFixed(2)} zl`}
              </span>
            </div>
            <div className="flex justify-between font-bold text-beige-900 text-base border-t border-beige-200 pt-2 mt-2">
              <span>Razem</span>
              <span>{total.toFixed(2)} zl</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}