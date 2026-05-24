import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="bg-beige-100 py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-beige-500 uppercase mb-4">
            Kolekcja 2025
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-beige-900 mb-6 leading-tight">
            Naturalny styl.
            <br />
            Ponadczasowa elegancja.
          </h1>
          <p className="text-beige-600 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Odkryj odziez z naturalnych materialow, tworzona z mysla o
            kobietach cenicacych komfort i estetike.
          </p>
          <Link
            href="/products"
            className="inline-block bg-beige-700 text-white px-10 py-4 rounded-full font-medium tracking-wide hover:bg-beige-800 transition-colors"
          >
            Odkryj kolekcje
          </Link>
        </div>
      </section>

      {/* Bestsellery */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest text-beige-500 uppercase mb-1">
              Wybrane dla Ciebie
            </p>
            <h2 className="font-serif text-3xl text-beige-900">Bestsellery</h2>
          </div>
          <Link
            href="/products"
            className="text-sm text-beige-500 hover:text-beige-900 underline underline-offset-2"
          >
            Zobacz wszystkie
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-beige-800 text-white py-16 px-4 text-center">
        <p className="text-xs tracking-[0.3em] text-beige-300 uppercase mb-3">
          Bezplatna dostawa
        </p>
        <h2 className="font-serif text-3xl mb-4">
          Zamowienia powyzej 299 zl
        </h2>
        <p className="text-beige-300 mb-8">
          Wysylka w 24h. Darmowe zwroty w ciagu 30 dni.
        </p>
        <Link
          href="/products"
          className="inline-block border border-white px-8 py-3 rounded-full hover:bg-white hover:text-beige-900 transition-colors font-medium"
        >
          Zacznij zakupy
        </Link>
      </section>
    </div>
  );
}