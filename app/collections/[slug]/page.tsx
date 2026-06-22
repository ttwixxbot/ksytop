import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { Button } from "@/components/ui/Button";
import { collections, getCollection } from "@/data/collections";
import { products } from "@/data/products";
import type { CategorySlug } from "@/data/categories";
import { assetPath } from "@/lib/asset-path";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const collectionCategories: Record<string, CategorySlug[]> = {
  "spalnya-v-garmonii": ["bedrooms", "beds", "bedside-tables"],
  "kuhni-premium-klassa": ["kitchens"],
  "ofis-novogo-urovnya": ["office-chairs"],
  "gostinaya-so-stilem": ["sofas", "wardrobes", "bedside-tables"],
  "sovremennaya-prihozhaya": ["wardrobes", "bedside-tables"],
  "detskaya-komnata": ["beds", "wardrobes", "bedside-tables"]
};

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    return {};
  }

  return {
    title: collection.title,
    description: collection.description,
    openGraph: {
      title: collection.title,
      description: collection.description,
      images: [{ url: collection.image, alt: collection.title }]
    }
  };
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    notFound();
  }

  const categories = collectionCategories[collection.slug] ?? [];
  const collectionProducts = products
    .filter((product) => categories.includes(product.category))
    .slice(0, 8);

  return (
    <>
      <section className="relative min-h-[520px] overflow-hidden">
        <img
          src={assetPath(collection.image)}
          alt={collection.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.92),rgba(5,6,7,0.48)_58%,rgba(5,6,7,0.18))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.25),rgba(5,6,7,0.78))]" />
        <div className="section-shell relative z-10 flex min-h-[520px] flex-col justify-center !pt-12">
          <Link
            href="/collections"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-bronze-100 transition hover:text-bronze-200"
          >
            <ArrowLeft size={16} aria-hidden />
            Все коллекции
          </Link>
          <p className="text-sm uppercase text-bronze-100">{collection.room}</p>
          <h1 className="page-title mt-3 max-w-4xl">{collection.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">{collection.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/catalog">Перейти в каталог</Button>
            <Button href="/contacts" variant="secondary">
              Подобрать комплект
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase text-bronze-100">Предметы в этом настроении</p>
            <h2 className="mt-2 font-display text-4xl text-ivory md:text-5xl">
              Подходящие товары
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-bronze-200/18 px-4 py-2 text-sm text-mist">
            <Sparkles size={16} className="text-bronze-100" aria-hidden />
            {collectionProducts.length} позиций
          </span>
        </div>
        <ProductGrid products={collectionProducts} />
      </section>
    </>
  );
}
