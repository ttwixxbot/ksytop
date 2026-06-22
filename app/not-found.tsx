import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell grid min-h-[55vh] place-items-center text-center">
      <div>
        <p className="text-sm uppercase text-bronze-100">404</p>
        <h1 className="mt-3 font-display text-5xl text-ivory">Страница не найдена</h1>
        <p className="mt-4 text-mist">Возможно, товар или раздел были перемещены.</p>
        <Link
          href="/catalog"
          className="mt-8 inline-flex rounded-[10px] bg-bronze-200 px-5 py-3 font-semibold text-ink-950"
        >
          Вернуться в каталог
        </Link>
      </div>
    </section>
  );
}
