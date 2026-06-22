import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { assetPath } from "@/lib/asset-path";

const positions = [
  { left: "24%", top: "5%" },
  { left: "45%", top: "7%" },
  { left: "80%", top: "31%" },
  { left: "70%", top: "12%" },
  { left: "23%", top: "33%" },
  { left: "80%", top: "51%" },
  { left: "41%", bottom: "13%" }
];

export function CategoryOrbitCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden xl:block">
      {categories.map((category, index) => (
        <Link
          key={category.slug}
          href={`/catalog/${category.slug}`}
          aria-label={`Открыть категорию ${category.name}`}
          className="premium-motion-card premium-orbit-card glass-card pointer-events-auto absolute z-30 flex items-center gap-2.5 p-2.5 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200 2xl:gap-3 2xl:p-3"
          style={{ ...positions[index], width: "188px", animationDelay: `${index * 0.22}s` }}
        >
          <img
            src={assetPath(category.image)}
            alt={category.name}
            className="h-14 w-[66px] shrink-0 rounded-[9px] object-cover 2xl:h-16 2xl:w-20"
            loading="lazy"
          />
          <span className="min-w-0 flex-1">
            <span className="block text-[13px] font-semibold leading-5 text-ivory 2xl:text-base">
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
        className="premium-motion-card premium-orbit-card glass-card pointer-events-auto absolute z-20 p-4 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200"
        style={{ left: "80%", bottom: "13%", width: "160px", animationDelay: "0.6s" }}
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
