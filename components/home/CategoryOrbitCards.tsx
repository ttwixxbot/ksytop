import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, type CategorySlug } from "@/data/categories";
import { assetPath } from "@/lib/asset-path";

const orbitPoints: Record<CategorySlug, { x: number; y: number }> = {
  kitchens: { x: 16, y: 13 },
  sofas: { x: 43, y: 10 },
  wardrobes: { x: 72, y: 14 },
  beds: { x: 87, y: 38 },
  "bedside-tables": { x: 80, y: 61 },
  bedrooms: { x: 47, y: 79 },
  "office-chairs": { x: 20, y: 48 }
};

export function CategoryOrbitCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden xl:block">
      <div
        className="absolute bottom-[6%] left-[23%] right-[1%] top-[3%] rounded-full border border-transparent"
        aria-hidden
      >
        {categories.map((category, index) => {
          const point = orbitPoints[category.slug];

          return (
            <div
              key={category.slug}
              className="pointer-events-none absolute z-30"
              style={{
                left: `${point.x}%`,
                top: `${point.y}%`,
                transform: "translate(-50%, -50%)"
              }}
            >
              <Link
                href={`/catalog/${category.slug}`}
                aria-label={`Открыть категорию ${category.name}`}
                className="premium-motion-card premium-orbit-card glass-card pointer-events-auto flex items-center gap-2.5 p-2.5 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200 2xl:gap-3 2xl:p-3"
                style={{ width: "clamp(176px, 13vw, 218px)", animationDelay: `${index * 0.22}s` }}
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
            </div>
          );
        })}

        <div
          className="pointer-events-none absolute z-20"
          style={{ left: "96%", top: "84%", transform: "translate(-50%, -50%)" }}
        >
          <Link
            href="/catalog"
            aria-label="Открыть весь каталог"
            className="premium-motion-card premium-orbit-card glass-card pointer-events-auto block p-4 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200"
            style={{ width: "clamp(140px, 10vw, 164px)", animationDelay: "0.6s" }}
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
      </div>
    </div>
  );
}
