"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, Plus } from "lucide-react";
import type { Product } from "@/data/products";
import { getCategoryName } from "@/data/categories";
import { useRequestCart } from "@/components/request/RequestCartContext";
import { cn, formatPrice } from "@/lib/utils";
import { SafeImage } from "@/components/ui/SafeImage";
import { useToast } from "@/components/ui/ToastProvider";

export function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { toast } = useToast();
  const { addItem } = useRequestCart();

  const handleAdd = () => {
    const ok = addItem(product.id);
    toast(ok ? "Добавлено в заявку" : "Не удалось добавить товар", product.name);
  };

  return (
    <article
      className={cn(
        "premium-motion-card group relative flex h-full flex-col overflow-hidden rounded-[14px] border border-bronze-200/16 bg-ivory/[0.035] shadow-soft transition duration-300 hover:-translate-y-2 hover:border-bronze-200/65 hover:bg-ivory/[0.055] hover:shadow-bronze",
        compact ? "min-h-[430px]" : "min-h-[500px]"
      )}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <span className={cn("relative block overflow-hidden bg-ink-900", compact ? "aspect-[1.08]" : "aspect-[1.28]")}>
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
      <div className={cn("flex flex-1 flex-col", compact ? "p-3.5" : "p-4")}>
        <p className="text-xs uppercase text-bronze-100">{getCategoryName(product.category)}</p>
        <h3
          className={cn(
            "font-semibold text-ivory",
            compact ? "mt-1.5 min-h-10 text-base leading-5" : "mt-2 min-h-12 text-lg leading-6"
          )}
        >
          {product.name}
        </h3>
        <p
          className={cn(
            "mt-2 text-mist",
            compact ? "line-clamp-2 min-h-10 text-xs leading-5" : "line-clamp-3 min-h-[60px] text-sm leading-5"
          )}
        >
          {product.shortDescription}
        </p>
        <div className={cn("mt-auto flex items-end justify-between gap-3", compact ? "pt-4" : "pt-5")}>
          <div>
            <p className={cn("font-semibold text-ivory", compact ? "text-lg" : "text-xl")}>{formatPrice(product.price)}</p>
            {product.oldPrice ? (
              <p className="text-sm text-mist line-through">{formatPrice(product.oldPrice)}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Добавить ${product.name} в заявку`}
            title="Р”РѕР±Р°РІРёС‚СЊ РІ Р·Р°СЏРІРєСѓ"
            style={compact ? { fontSize: 0 } : undefined}
            className={cn(
              "premium-button inline-flex items-center rounded-[10px] border border-bronze-200/35 text-sm font-semibold text-bronze-100 transition hover:bg-bronze-200 hover:text-ink-950",
              compact ? "h-9 w-9 justify-center px-0 text-[0px]" : "h-10 gap-2 px-3"
            )}
          >
            <Plus size={17} aria-hidden />
            В заявку
          </button>
        </div>
        <Link
          href={`/product/${product.slug}`}
          className={cn("inline-flex items-center gap-2 font-semibold text-bronze-100", compact ? "mt-3 text-xs" : "mt-4 text-sm")}
        >
          Подробнее <ArrowUpRight size={15} aria-hidden />
        </Link>
      </div>
    </article>
  );
}
