import { products } from '../../data/products';
import ProductCard from '../../components/ProductCard';

export const metadata = {
  title: 'Sklep — Bellivia',
};

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <p className="text-xs tracking-[0.3em] text-beige-500 uppercase mb-2">
          Kolekcja
        </p>
        <h1 className="font-serif text-4xl text-beige-900">
          Wszystkie produkty
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}