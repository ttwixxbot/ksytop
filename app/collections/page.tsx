import type { Metadata } from "next";
import { CollectionCard } from "@/components/home/CollectionCard";
import { collections } from "@/data/collections";

export const metadata: Metadata = {
  title: "Коллекции мебели",
  description: "Коллекции мебели Зона Комфорта для спальни, кухни, офиса, гостиной и детской."
};

export default function CollectionsPage() {
  return (
    <section className="section-shell !pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase text-bronze-100">Собранные сценарии</p>
        <h1 className="page-title mt-3">Коллекции для идеального пространства</h1>
        <p className="mt-6 text-lg leading-8 text-mist">
          Готовые сочетания мебели, материалов и света для цельных интерьеров без случайных
          деталей.
        </p>
      </div>
      <div className="grid gap-5">
        {collections.map((collection) => (
          <CollectionCard key={collection.slug} collection={collection} large />
        ))}
      </div>
    </section>
  );
}
