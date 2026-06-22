"use client";

import { FormEvent, useMemo } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import { getCategoryName } from "@/data/categories";
import { useRequestCart } from "@/components/request/RequestCartContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { useToast } from "@/components/ui/ToastProvider";
import { createMailtoLink } from "@/lib/mailto";

export function RequestCart() {
  const { toast } = useToast();
  const { items, hydrated, incrementItem, decrementItem, removeItem } = useRequestCart();
  const detailedItems = useMemo(
    () =>
      items
        .map((item) => ({
          ...item,
          product: products.find((product) => product.id === item.productId)
        }))
        .filter((item) => item.product),
    [items]
  );
  const total = detailedItems.reduce(
    (sum, item) => sum + (item.product?.price ?? 0) * item.quantity,
    0
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      comment: String(form.get("comment") ?? ""),
      products: detailedItems.map((item) => ({
        name: item.product?.name,
        quantity: item.quantity
      })),
      total
    };

    if (!payload.name.trim() || !payload.phone.trim()) {
      toast("Заполните имя и телефон", "Так мы сможем подтвердить подборку.");
      return;
    }

    window.location.href = createMailtoLink({
      subject: "Заявка на подбор мебели Зона Комфорта",
      lines: [
        "Здравствуйте.",
        "Прошу связаться для уточнения подборки мебели.",
        "",
        `Имя: ${payload.name.trim()}`,
        `Телефон: ${payload.phone.trim()}`,
        payload.comment.trim() ? `Комментарий: ${payload.comment.trim()}` : "",
        "",
        "Товары:",
        ...payload.products.map((item) => `- ${item.name} — ${item.quantity} шт.`),
        "",
        `Ориентировочная сумма: ${formatPrice(total)}`
      ]
    });
    toast("Письмо подготовлено", "Подтвердите отправку в почтовом клиенте.");
  };

  if (!hydrated) {
    return (
      <div className="glass-card p-8">
        <h2 className="font-display text-3xl text-ivory">Загружаем подборку</h2>
        <p className="mt-2 text-mist">Проверяем сохранённые товары на этом устройстве.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <section className="grid gap-4">
        {detailedItems.length ? (
          detailedItems.map((item) => {
            const product = item.product;
            if (!product) return null;

            return (
              <article key={product.id} className="glass-card grid gap-4 p-4 sm:grid-cols-[140px_1fr_auto]">
                <SafeImage
                  src={product.images[0] ?? "/images/generated/products/sofas-1.png"}
                  alt={product.name}
                  className="aspect-[1.25] w-full rounded-[10px] object-cover"
                />
                <div>
                  <h2 className="font-display text-2xl text-ivory">{product.name}</h2>
                  <p className="mt-1 text-xs uppercase text-bronze-100">{getCategoryName(product.category)}</p>
                  <p className="mt-2 text-sm leading-6 text-mist">{product.shortDescription}</p>
                  <p className="mt-3 font-semibold text-bronze-100">{formatPrice(product.price)}</p>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:justify-between">
                  <div className="flex items-center rounded-[10px] border border-bronze-200/20">
                    <button
                      type="button"
                      onClick={() => decrementItem(product.id)}
                      className="grid h-10 w-10 place-items-center"
                      aria-label="Уменьшить количество"
                    >
                      <Minus size={15} />
                    </button>
                    <span className="min-w-8 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => incrementItem(product.id)}
                      className="grid h-10 w-10 place-items-center"
                      aria-label="Увеличить количество"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="grid h-10 w-10 place-items-center rounded-[10px] border border-bronze-200/20 text-mist transition hover:text-bronze-100"
                    aria-label="Удалить товар"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </article>
            );
          })
        ) : (
          <div className="glass-card p-8">
            <h2 className="font-display text-3xl text-ivory">Заявка пока пуста</h2>
            <p className="mt-2 text-mist">Добавьте товары из каталога, чтобы отправить подборку.</p>
          </div>
        )}
      </section>

      <form onSubmit={handleSubmit} className="glass-card self-start p-5">
        <div className="mb-5 flex items-end justify-between gap-4 border-b border-bronze-200/10 pb-5">
          <div>
            <p className="text-sm uppercase text-bronze-100">Ориентировочная сумма</p>
            <p className="mt-2 font-display text-4xl text-ivory">{formatPrice(total)}</p>
          </div>
        </div>
        <div className="grid gap-4">
          <label className="grid gap-2 text-sm text-mist">
            Имя
            <input className="field h-12 px-4" name="name" placeholder="Ваше имя" autoComplete="name" required />
          </label>
          <label className="grid gap-2 text-sm text-mist">
            Телефон
            <input
              className="field h-12 px-4"
              name="phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              autoComplete="tel"
              required
            />
          </label>
          <label className="grid gap-2 text-sm text-mist">
            Комментарий
            <textarea
              className="field min-h-28 resize-none px-4 py-3"
              name="comment"
              placeholder="Например: нужна спальня в тёплом графите"
            />
          </label>
          <Button type="submit" disabled={!detailedItems.length}>
            Отправить заявку
          </Button>
          <p className="text-xs leading-5 text-mist">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных по{" "}
            <Link href="/privacy" className="text-bronze-100 underline-offset-4 hover:underline">
              Политике конфиденциальности
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
