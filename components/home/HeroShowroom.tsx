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
    <section className="relative min-h-[calc(100svh-64px)] overflow-hidden md:min-h-[calc(100vh-76px)]">
      <motion.img
        src={assetPath("/images/hero/showroom-hero.png")}
        alt=""
        aria-hidden
        style={{ y: backgroundY }}
        className="absolute inset-0 h-[calc(100%+110px)] w-full object-cover object-[58%_center] md:object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.76)_0%,rgba(5,6,7,0.54)_45%,rgba(5,6,7,0.78)_100%)] md:bg-[linear-gradient(90deg,rgba(5,6,7,0.94)_0%,rgba(5,6,7,0.82)_32%,rgba(5,6,7,0.36)_62%,rgba(5,6,7,0.28)_100%)]" />
      <div className="absolute inset-0 hidden bg-[linear-gradient(180deg,rgba(5,6,7,0.62)_0%,rgba(5,6,7,0.08)_34%,rgba(5,6,7,0.72)_100%)] md:block" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_38%,rgba(200,148,85,0.12),transparent_18rem)] md:bg-[radial-gradient(circle_at_15%_48%,rgba(200,148,85,0.16),transparent_25rem),radial-gradient(circle_at_74%_34%,rgba(232,191,132,0.08),transparent_30rem)]" />

      <div className="ambient-orbit left-[5%] top-[18%] hidden h-[260px] w-[58%] sm:block" aria-hidden />
      <div className="ambient-orbit right-[-10%] top-[46%] hidden h-[220px] w-[56%] md:block" aria-hidden />

      <div className="section-shell relative z-10 flex min-h-[calc(100svh-64px)] flex-col justify-end !pb-8 !pt-10 md:min-h-[calc(100vh-76px)] md:justify-center md:!py-8 lg:!py-10">
        <div className="grid flex-1 items-center gap-8 xl:grid-cols-[0.74fr_1.26fr]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 max-w-[22rem] self-end md:max-w-2xl md:self-auto"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.12em] text-bronze-200 md:mb-5 md:text-sm md:tracking-normal">
              Мебель для дома и офиса
            </p>
            <h1 className="premium-title bronze-line">Собери пространство под себя</h1>
            <p className="mt-7 max-w-[19rem] text-sm leading-6 text-mist md:mt-8 md:max-w-xl md:text-lg md:leading-7">
              Премиальные интерьеры для дома и офиса без лишнего шума.
            </p>
            <div className="mt-6 flex max-w-[19rem] flex-col gap-3 sm:flex-row md:mt-8 md:max-w-none">
              <Button href="/catalog" className="w-full sm:w-auto">
                Перейти в каталог
              </Button>
              <Button
                href="/collections"
                variant="secondary"
                icon={<Play size={15} aria-hidden />}
                className="hidden sm:inline-flex"
              >
                Смотреть коллекции
              </Button>
            </div>
            <Link
              href="/collections"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-bronze-100 sm:hidden"
            >
              Смотреть коллекции
              <Play size={14} aria-hidden />
            </Link>
            <div className="glass-card mt-9 hidden max-w-xs p-4 md:block">
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

        <div className="relative z-20 mt-5 hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
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
