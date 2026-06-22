import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories, type CategorySlug } from "@/data/categories";
import { assetPath } from "@/lib/asset-path";

const orbitPoints: Record<CategorySlug, { x: number; y: number }> = {
  kitchens: { x: 12, y: 12 },
  sofas: { x: 38, y: 7 },
  wardrobes: { x: 64, y: 13 },
  beds: { x: 84, y: 34 },
  "bedside-tables": { x: 77, y: 58 },
  bedrooms: { x: 50, y: 84 },
  "office-chairs": { x: 28, y: 51 }
};

const catalogPoint = { x: 73, y: 86 };

export function CategoryOrbitCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 hidden xl:block">
      <div className="absolute bottom-[8%] left-[35%] right-[1%] top-[6%] rounded-full border border-transparent" aria-hidden>
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M 12 12 C 30 2 54 4 66 13 C 88 29 91 61 76 79 C 67 90 57 94 43 90"
            fill="none"
            stroke="rgba(232, 191, 132, 0.42)"
            strokeLinecap="round"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            filter="drop-shadow(0 0 18px rgba(232, 191, 132, 0.38))"
          />
        </svg>

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
                style={{ width: "clamp(168px, 12vw, 210px)", animationDelay: `${index * 0.22}s` }}
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
          style={{ left: `${catalogPoint.x}%`, top: `${catalogPoint.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <Link
            href="/catalog"
            aria-label="Открыть весь каталог"
            className="premium-motion-card premium-orbit-card glass-card pointer-events-auto flex items-center gap-4 p-4 transition duration-300 hover:-translate-y-2 hover:border-bronze-200/70 hover:shadow-bronze focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200"
            style={{ width: "clamp(204px, 15vw, 236px)", animationDelay: "0.6s" }}
          >
            <span className="font-display text-6xl leading-none text-bronze-100">7</span>
            <span className="block flex-1 text-sm leading-5 text-mist">
              категорий для идеального пространства
            </span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-bronze-200/35 text-bronze-100">
              <ArrowUpRight size={15} aria-hidden />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
