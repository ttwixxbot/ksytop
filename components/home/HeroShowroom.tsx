"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CategoryOrbitCards } from "./CategoryOrbitCards";
import { categories } from "@/data/categories";
import { assetPath } from "@/lib/asset-path";

export function HeroShowroom() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 700], [0, 80]);
  const cardsY = useTransform(scrollY, [0, 650], [0, 48]);
  const cardsOpacity = useTransform(scrollY, [0, 650], [1, 0.72]);

  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden">
      <motion.img
        src={assetPath("/images/hero/showroom-hero.png")}
        alt=""
        aria-hidden
        style={{ y: backgroundY }}
        className="absolute inset-0 h-[calc(100%+110px)] w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.94)_0%,rgba(5,6,7,0.82)_32%,rgba(5,6,7,0.36)_62%,rgba(5,6,7,0.28)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.62)_0%,rgba(5,6,7,0.08)_34%,rgba(5,6,7,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_48%,rgba(200,148,85,0.16),transparent_25rem),radial-gradient(circle_at_74%_34%,rgba(232,191,132,0.08),transparent_30rem)]" />

      <div className="ambient-orbit left-[5%] top-[18%] h-[260px] w-[58%]" aria-hidden />
      <div className="ambient-orbit right-[-10%] top-[46%] h-[220px] w-[56%]" aria-hidden />

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-76px)] flex-col justify-center !py-8 lg:!py-10">
        <div className="grid flex-1 items-center gap-8 xl:grid-cols-[0.74fr_1.26fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 max-w-2xl"
          >
            <p className="mb-5 text-sm uppercase text-bronze-200">Мебель для дома и офиса</p>
            <h1 className="premium-title bronze-line">Собери пространство под себя</h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-mist md:text-lg">
              Создаём персональные интерьеры для дома и офиса с премиальным комфортом и
              безупречным стилем.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/catalog">Перейти в каталог</Button>
              <Button href="/collections" variant="secondary" icon={<Play size={15} aria-hidden />}>
                Смотреть коллекции
              </Button>
            </div>
            <div className="glass-card mt-9 max-w-xs p-4">
              <p className="text-sm font-semibold text-ivory">Премиальные материалы</p>
              <p className="mt-1 text-xs leading-5 text-mist">
                Европейская фурнитура, фактурные ткани и гарантия до 5 лет.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: cardsY, opacity: cardsOpacity }}
            className="showroom-shell pointer-events-none hidden min-h-[620px] xl:block"
          >
            <CategoryOrbitCards />
          </motion.div>
        </div>

        <div className="relative z-20 mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/catalog/${category.slug}`}
              aria-label={`Открыть категорию ${category.name}`}
              className="glass-card flex items-center gap-3 p-3 transition duration-300 hover:-translate-y-1 hover:border-bronze-200/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze-200"
            >
              <img
                src={assetPath(category.image)}
                alt={category.name}
                className="h-16 w-20 rounded-[9px] object-cover"
              />
              <span className="flex-1 font-semibold">{category.name}</span>
              <ArrowRight size={17} className="text-bronze-200" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
