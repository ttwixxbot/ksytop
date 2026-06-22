import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sparkles } from "lucide-react";
import { CatalogClient } from "@/components/catalog/CatalogClient";
import { CollectionCard } from "@/components/home/CollectionCard";
import { Button } from "@/components/ui/Button";
import { categories, getCategory } from "@/data/categories";
import { collections } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";
import { assetPath } from "@/lib/asset-path";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.title,
    description: category.description
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="section-shell grid gap-10 !pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase text-bronze-100">{category.accent}</p>
            <h1 className="page-title mt-3">{category.title}</h1>
            <p className="mt-6 text-lg leading-8 text-mist">{category.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/request">Оставить заявку</Button>
              <Button href="/contacts" variant="secondary">
                Нужна помощь
              </Button>
            </div>
          </div>
          <div className="glass-card overflow-hidden p-3">
            <img
              src={assetPath(category.image)}
              alt={category.title}
              className="aspect-[1.55] w-full rounded-[12px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <CatalogClient products={categoryProducts} initialCategory={category.slug} />
      </section>

      <section className="section-shell">
        <div className="mb-8">
          <p className="text-sm uppercase text-bronze-100">Комбинируйте с коллекциями</p>
          <h2 className="mt-2 font-display text-4xl text-ivory md:text-5xl">Популярные коллекции</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {collections.slice(0, 2).map((collection) => (
            <CollectionCard key={collection.slug} collection={collection} />
          ))}
        </div>
      </section>

      <section className="section-shell !pt-0">
        <div className="glass-card grid gap-6 p-7 md:grid-cols-[auto_1fr_auto] md:items-center">
          <span className="grid h-14 w-14 place-items-center rounded-[12px] border border-bronze-200/25 bg-bronze-300/10 text-bronze-100">
            <Sparkles size={26} aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-3xl text-ivory">Нужна помощь с выбором?</h2>
            <p className="mt-2 text-mist">
              Подберём конфигурацию, материалы и размер под вашу планировку.
            </p>
          </div>
          <Button href="/contacts">Связаться</Button>
        </div>
      </section>
    </>
  );
}
