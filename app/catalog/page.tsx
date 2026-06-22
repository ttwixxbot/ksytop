import type { Metadata } from "next";
import { CatalogClient } from "@/components/catalog/CatalogClient";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Каталог мебели",
  description:
    "Каталог премиальной мебели Зона Комфорта: кухни, диваны, кровати, шкафы, офисные кресла и спальни."
};

export default function CatalogPage() {
  return (
    <section className="section-shell !pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase text-bronze-100">Каталог без онлайн-оплаты</p>
        <h1 className="page-title mt-3">Каталог мебели</h1>
        <p className="mt-6 text-lg leading-8 text-mist">
          Отберите товары по категории, комнате, материалам и цене, а затем отправьте подборку
          дизайнеру-консультанту.
        </p>
      </div>
      <CatalogClient products={products} />
    </section>
  );
}
