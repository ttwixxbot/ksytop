"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App route error", error);
  }, [error]);

  return (
    <section className="section-shell grid min-h-[55vh] place-items-center text-center">
      <div className="glass-card max-w-xl p-8">
        <p className="text-sm uppercase text-bronze-100">Что-то пошло не так</p>
        <h1 className="mt-3 font-display text-4xl text-ivory">Страница временно не загрузилась</h1>
        <p className="mt-4 text-mist">
          Мы сохранили тёмный зал включённым. Попробуйте обновить блок или вернуться в каталог.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={reset}>Повторить</Button>
          <Button href="/catalog" variant="secondary">
            В каталог
          </Button>
        </div>
      </div>
    </section>
  );
}
