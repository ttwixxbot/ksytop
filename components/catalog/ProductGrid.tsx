import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

type ProductGridLayout = "default" | "singleRow";

export function ProductGrid({
  products,
  layout = "default"
}: {
  products: Product[];
  layout?: ProductGridLayout;
}) {
  if (!products.length) {
    return (
      <div className="glass-card p-8 text-center">
        <p className="font-display text-3xl text-ivory">Ничего не найдено</p>
        <p className="mt-2 text-mist">Попробуйте изменить фильтры или сортировку.</p>
      </div>
    );
  }

  if (layout === "singleRow") {
    return (
      <div className="-mx-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0">
        <div className="grid min-w-[1260px] grid-cols-6 items-stretch gap-3 xl:min-w-0 2xl:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
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
