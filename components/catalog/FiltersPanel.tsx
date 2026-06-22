"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { CategorySlug } from "@/data/categories";
import { categories } from "@/data/categories";
import type { Product } from "@/data/products";
import { unique } from "@/lib/utils";

export type FiltersState = {
  category: CategorySlug | "all";
  material: string;
  color: string;
  room: string;
  popularOnly: boolean;
  maxPrice: number;
  sort: "popular" | "price-asc" | "price-desc" | "new";
};

type FiltersPanelProps = {
  products: Product[];
  filters: FiltersState;
  onChange: (filters: FiltersState) => void;
  hideCategory?: boolean;
};

export function FiltersPanel({ products, filters, onChange, hideCategory }: FiltersPanelProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const options = useMemo(
    () => ({
      materials: unique(products.map((item) => item.material)),
      colors: unique(products.map((item) => item.color)),
      rooms: unique(products.map((item) => item.room)),
      max: Math.max(...products.map((item) => item.price))
    }),
    [products]
  );

  const update = <K extends keyof FiltersState>(key: K, value: FiltersState[K]) =>
    onChange({ ...filters, [key]: value });

  const panel = (
    <div className="grid gap-5">
      {!hideCategory ? (
        <Field label="Категория">
          <select
            className="field h-11 px-3"
            value={filters.category}
            onChange={(event) => update("category", event.target.value as FiltersState["category"])}
          >
            <option value="all">Все категории</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </Field>
      ) : null}

      <Field label={`Цена до ${filters.maxPrice.toLocaleString("ru-RU")} ₽`}>
        <input
          className="w-full accent-bronze-200"
          type="range"
          min={10000}
          max={options.max}
          step={5000}
          value={filters.maxPrice}
          onChange={(event) => update("maxPrice", Number(event.target.value))}
        />
      </Field>

      <Field label="Материал">
        <select
          className="field h-11 px-3"
          value={filters.material}
          onChange={(event) => update("material", event.target.value)}
        >
          <option value="all">Все материалы</option>
          {options.materials.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Цвет">
        <select
          className="field h-11 px-3"
          value={filters.color}
          onChange={(event) => update("color", event.target.value)}
        >
          <option value="all">Все цвета</option>
          {options.colors.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Комната">
        <select
          className="field h-11 px-3"
          value={filters.room}
          onChange={(event) => update("room", event.target.value)}
        >
          <option value="all">Все комнаты</option>
          {options.rooms.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </Field>

      <label className="flex cursor-pointer items-center gap-3 rounded-[10px] border border-bronze-200/15 p-3 text-sm text-mist">
        <input
          type="checkbox"
          className="h-4 w-4 accent-bronze-200"
          checked={filters.popularOnly}
          onChange={(event) => update("popularOnly", event.target.checked)}
        />
        Только популярные
      </label>

      <Field label="Сортировка">
        <select
          className="field h-11 px-3"
          value={filters.sort}
          onChange={(event) => update("sort", event.target.value as FiltersState["sort"])}
        >
          <option value="popular">По популярности</option>
          <option value="price-asc">Сначала дешёвые</option>
          <option value="price-desc">Сначала дорогие</option>
          <option value="new">Новинки</option>
        </select>
      </Field>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="mb-5 inline-flex items-center gap-2 rounded-[10px] border border-bronze-200/25 px-4 py-3 text-sm text-ivory lg:hidden"
      >
        <SlidersHorizontal size={17} aria-hidden /> Фильтры
      </button>

      <aside className="glass-card sticky top-24 hidden self-start p-5 lg:block">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-display text-2xl text-ivory">Фильтры</h2>
          <SlidersHorizontal size={18} className="text-bronze-200" aria-hidden />
        </div>
        {panel}
      </aside>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[80] bg-ink-950/72 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="h-full w-[min(380px,92vw)] overflow-y-auto border-r border-bronze-200/20 bg-ink-900 p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-display text-3xl text-ivory">Фильтры</h2>
                <button
                  type="button"
                  aria-label="Закрыть фильтры"
                  onClick={() => setMobileOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-[10px] border border-bronze-200/20"
                >
                  <X size={18} />
                </button>
              </div>
              {panel}
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm text-mist">
      <span>{label}</span>
      {children}
    </label>
  );
}
