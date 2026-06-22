import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <div className="glass-card p-8 text-center">
        <p className="font-display text-3xl text-ivory">Ничего не найдено</p>
        <p className="mt-2 text-mist">Попробуйте изменить фильтры или сортировку.</p>
      </div>
    );
  }

  return (
    <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
