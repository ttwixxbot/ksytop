import type { Metadata } from "next";
import { RequestCart } from "@/components/request/RequestCart";

export const metadata: Metadata = {
  title: "Заявка на подбор",
  description: "Список выбранных товаров и форма заявки на персональный подбор мебели."
};

export default function RequestPage() {
  return (
    <section className="section-shell !pt-16">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase text-bronze-100">Без онлайн-оплаты</p>
        <h1 className="page-title mt-3">Заявка на подбор</h1>
        <p className="mt-6 text-lg leading-8 text-mist">
          Соберите товары в подборку и отправьте заявку. Консультант уточнит размеры, материалы,
          наличие и удобное время связи.
        </p>
      </div>
      <RequestCart />
    </section>
  );
}
