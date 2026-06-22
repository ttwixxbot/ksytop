import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MessageCircle, PackageCheck } from "lucide-react";
import { ProductGallery } from "@/components/catalog/ProductGallery";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { Button } from "@/components/ui/Button";
import { getCategoryName } from "@/data/categories";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { AddProductButton } from "./product-actions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.images[0], alt: product.name }]
    }
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const specs = [
    ["Материал", product.material],
    ["Размеры", product.dimensions],
    ["Цвет", product.color],
    ["Стиль", product.style],
    ["Наличие", product.availability],
    ["Гарантия", product.warranty]
  ];

  return (
    <>
      <section className="section-shell grid gap-10 !pt-16 lg:grid-cols-[1.08fr_0.92fr]">
        <ProductGallery images={product.images} name={product.name} />
        <div className="lg:pt-5">
          <p className="text-sm uppercase text-bronze-100">{getCategoryName(product.category)}</p>
          <h1 className="page-title mt-3">{product.name}</h1>
          <p className="mt-5 font-display text-5xl text-bronze-100">{formatPrice(product.price)}</p>
          <p className="mt-6 text-lg leading-8 text-mist">{product.fullDescription}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {specs.map(([label, value]) => (
              <div key={label} className="rounded-[12px] border border-bronze-200/14 bg-ivory/[0.035] p-4">
                <p className="text-xs uppercase text-bronze-100">{label}</p>
                <p className="mt-2 text-sm text-ivory">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddProductButton productId={product.id} productName={product.name} />
            <Button href="/contacts" variant="secondary" icon={<MessageCircle size={16} aria-hidden />}>
              Задать вопрос
            </Button>
          </div>
          <div className="glass-card mt-8 flex gap-4 p-4">
            <PackageCheck className="text-bronze-200" size={24} aria-hidden />
            <p className="text-sm leading-6 text-mist">
              Это заявка на подбор, не онлайн-оплата. Консультант уточнит материалы, размеры и
              сроки перед оформлением.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mb-8">
          <p className="text-sm uppercase text-bronze-100">В том же стиле</p>
          <h2 className="font-display text-4xl text-ivory md:text-5xl">Похожие товары</h2>
        </div>
        <ProductGrid products={getRelatedProducts(product)} />
      </section>
    </>
  );
}
