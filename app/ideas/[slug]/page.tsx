import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { Button } from "@/components/ui/Button";
import { getCategoryName } from "@/data/categories";
import { getRoomIdea, roomIdeas } from "@/data/rooms";
import { products } from "@/data/products";
import { assetPath } from "@/lib/asset-path";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return roomIdeas.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const idea = getRoomIdea(slug);

  if (!idea) {
    return {};
  }

  return {
    title: `${idea.title} — идеи для дома`,
    description: idea.description,
    openGraph: {
      title: `${idea.title} — идеи для дома`,
      description: idea.description,
      images: [{ url: idea.image, alt: idea.title }]
    }
  };
}

export default async function RoomIdeaPage({ params }: PageProps) {
  const { slug } = await params;
  const idea = getRoomIdea(slug);

  if (!idea) {
    notFound();
  }

  const ideaProducts = products
    .filter((product) => idea.categorySlugs.includes(product.category))
    .slice(0, 8);

  return (
    <>
      <section className="relative min-h-[500px] overflow-hidden">
        <img
          src={assetPath(idea.image)}
          alt={idea.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.94),rgba(5,6,7,0.58)_60%,rgba(5,6,7,0.22))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.2),rgba(5,6,7,0.82))]" />
        <div className="section-shell relative z-10 flex min-h-[500px] flex-col justify-center !pt-12">
          <Link
            href="/ideas"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm text-bronze-100 transition hover:text-bronze-200"
          >
            <ArrowLeft size={16} aria-hidden />
            Все идеи
          </Link>
          <p className="text-sm uppercase text-bronze-100">Интерьерная идея</p>
          <h1 className="page-title mt-3 max-w-4xl">{idea.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">{idea.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/catalog">Смотреть товары</Button>
            <Button href="/contacts" variant="secondary">
              Подобрать комнату
            </Button>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase text-bronze-100">Подходящие категории</p>
            <h2 className="mt-2 font-display text-4xl text-ivory md:text-5xl">
              Товары для сценария
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-bronze-200/18 px-4 py-2 text-sm text-mist">
            <Sparkles size={16} className="text-bronze-100" aria-hidden />
            {ideaProducts.length} позиций
          </span>
        </div>

        <div className="mb-7 flex flex-wrap gap-2">
          {idea.categorySlugs.map((category) => (
            <Link
              key={category}
              href={`/catalog/${category}`}
              className="rounded-full border border-bronze-200/22 px-4 py-2 text-sm text-mist transition hover:border-bronze-200/60 hover:text-ivory"
            >
              {getCategoryName(category)}
            </Link>
          ))}
        </div>

        <ProductGrid products={ideaProducts} />
      </section>
    </>
  );
}
