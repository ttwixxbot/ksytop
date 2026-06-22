"use client";

import { useMemo, useState } from "react";
import type { CategorySlug } from "@/data/categories";
import type { Product } from "@/data/products";
import { ProductGrid } from "./ProductGrid";
import { FiltersPanel, type FiltersState } from "./FiltersPanel";

type CatalogClientProps = {
  products: Product[];
  initialCategory?: CategorySlug;
};

export function CatalogClient({ products, initialCategory }: CatalogClientProps) {
  const [filters, setFilters] = useState<FiltersState>({
    category: initialCategory ?? "all",
    material: "all",
    color: "all",
    room: "all",
    popularOnly: false,
    maxPrice: Math.max(...products.map((item) => item.price)),
    sort: "popular"
  });

  const filtered = useMemo(() => {
    const next = products
      .filter((item) => filters.category === "all" || item.category === filters.category)
      .filter((item) => filters.material === "all" || item.material === filters.material)
      .filter((item) => filters.color === "all" || item.color === filters.color)
      .filter((item) => filters.room === "all" || item.room === filters.room)
      .filter((item) => item.price <= filters.maxPrice)
      .filter((item) => !filters.popularOnly || item.isPopular);

    next.sort((a, b) => {
      if (filters.sort === "price-asc") return a.price - b.price;
      if (filters.sort === "price-desc") return b.price - a.price;
      if (filters.sort === "new") return Number(b.isNew) - Number(a.isNew);
      return Number(b.isPopular) - Number(a.isPopular);
    });

    return next;
  }, [products, filters]);

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <FiltersPanel
        products={products}
        filters={filters}
        onChange={setFilters}
        hideCategory={Boolean(initialCategory)}
      />
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm text-mist">
          <span>Найдено: {filtered.length}</span>
          <span className="rounded-full border border-bronze-200/15 px-3 py-1">
            Каталог без онлайн-оплаты
          </span>
        </div>
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
