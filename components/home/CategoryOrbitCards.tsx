import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

const positions = [
  "xl:left-[7%] xl:top-[6%]",
  "xl:left-[39%] xl:top-[3%]",
  "xl:right-[2%] xl:top-[18%]",
  "xl:right-[3%] xl:top-[48%]",
  "xl:left-[1%] xl:top-[60%]",
  "xl:right-[0%] xl:bottom-[14%]",
  "xl:left-[35%] xl:bottom-[0%]"
];

export function CategoryOrbitCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden xl:block">
      {categories.map((category, index) => (
        <Link
          key={category.slug}
          href={`/catalog/${category.slug}`}
          aria-label={`Открыть категорию ${category.name}`}
          className={cn(
            "premium-motion-card premium-orbit-card glass-card pointer-events-auto absolute z-30 flex w-[218px] items-center gap-3 p-3 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200 2xl:w-[236px]",
            positions[index]
          )}
          style={{ animationDelay: `${index * 0.22}s` }}
        >
          <img
            src={assetPath(category.image)}
            alt={category.name}
            className="h-16 w-[76px] shrink-0 rounded-[9px] object-cover 2xl:w-20"
            loading="lazy"
          />
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold leading-5 text-ivory 2xl:text-base">
              {category.name}
            </span>
            <span className="mt-1 block text-xs leading-4 text-mist">{category.accent}</span>
          </span>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-bronze-200/35 text-bronze-100">
            <ArrowUpRight size={15} aria-hidden />
          </span>
        </Link>
      ))}

      <Link
        href="/catalog"
        aria-label="Открыть весь каталог"
        className="premium-motion-card premium-orbit-card glass-card pointer-events-auto absolute left-[43%] top-[35%] z-20 w-40 p-4 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200 2xl:w-44"
        style={{ animationDelay: "0.6s" }}
      >
        <span className="block font-display text-6xl leading-none text-bronze-100">7</span>
        <span className="mt-1 block text-sm leading-5 text-mist">
          категорий для цельного пространства
        </span>
        <span className="mt-3 grid h-8 w-8 place-items-center rounded-full border border-bronze-200/35 text-bronze-100">
          <ArrowUpRight size={15} aria-hidden />
        </span>
      </Link>
    </div>
  );
}
