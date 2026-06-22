"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { getCategoryName } from "@/data/categories";
import { useRequestCart } from "@/components/request/RequestCartContext";
import { formatPrice } from "@/lib/utils";
import { SafeImage } from "@/components/ui/SafeImage";
import { useToast } from "@/components/ui/ToastProvider";

export function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast();
  const { addItem } = useRequestCart();

  const handleAdd = () => {
    const ok = addItem(product.id);
    toast(ok ? "Добавлено в заявку" : "Не удалось добавить товар", product.name);
  };

  return (
    <article className="premium-motion-card group relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[14px] border border-bronze-200/16 bg-ivory/[0.035] shadow-soft transition duration-300 hover:-translate-y-2 hover:border-bronze-200/65 hover:bg-ivory/[0.055] hover:shadow-bronze">
      <Link href={`/product/${product.slug}`} className="block">
        <span className="relative block aspect-[1.28] overflow-hidden bg-ink-900">
          <SafeImage
            src={product.images[0]}
            alt={product.name}
            className="image-lift h-full w-full object-cover"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,6,7,0.82))]" />
          {product.isNew ? (
            <span className="absolute left-3 top-3 rounded-full bg-bronze-200 px-3 py-1 text-xs font-semibold text-ink-950">
              Новинка
            </span>
          ) : null}
        </span>
      </Link>
      <button
        type="button"
        aria-label="Добавить в избранное"
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-bronze-200/25 bg-ink-950/55 text-mist backdrop-blur transition hover:border-bronze-200/70 hover:text-bronze-100"
      >
        <Heart size={16} aria-hidden />
      </button>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs uppercase text-bronze-100">{getCategoryName(product.category)}</p>
        <h3 className="mt-2 min-h-12 text-lg font-semibold leading-6 text-ivory">{product.name}</h3>
        <p className="mt-2 line-clamp-3 min-h-[60px] text-sm leading-5 text-mist">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            <p className="text-xl font-semibold text-ivory">{formatPrice(product.price)}</p>
            {product.oldPrice ? (
              <p className="text-sm text-mist line-through">{formatPrice(product.oldPrice)}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Добавить ${product.name} в заявку`}
            className="premium-button inline-flex h-10 items-center gap-2 rounded-[10px] border border-bronze-200/35 px-3 text-sm font-semibold text-bronze-100 transition hover:bg-bronze-200 hover:text-ink-950"
          >
            <Plus size={17} aria-hidden />
            В заявку
          </button>
        </div>
        <Link
          href={`/product/${product.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bronze-100"
        >
          Подробнее <ArrowUpRight size={15} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
