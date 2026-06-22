import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

const positions = [
  "xl:left-[3%] xl:top-[13%]",
  "xl:left-[37%] xl:top-[3%]",
  "xl:right-[0%] xl:top-[17%]",
  "xl:right-[2%] xl:top-[53%]",
  "xl:left-[0%] xl:top-[43%]",
  "xl:right-[12%] xl:bottom-[10%]",
  "xl:left-[21%] xl:bottom-[2%]"
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
            "glass-card pointer-events-auto absolute z-30 flex w-[218px] items-center gap-3 p-3 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200 2xl:w-[236px]",
            positions[index]
          )}
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
        className="glass-card pointer-events-auto absolute left-[43%] top-[35%] z-20 w-40 p-4 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200 2xl:w-44"
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
