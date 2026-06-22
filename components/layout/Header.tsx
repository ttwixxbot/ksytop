"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, PackageCheck, Search, ShoppingBag, X } from "lucide-react";
import { useRequestCart } from "@/components/request/RequestCartContext";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/catalog", label: "Каталог" },
  { href: "/collections", label: "Коллекции" },
  { href: "/ideas", label: "Идеи для дома" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count, hydrated } = useRequestCart();
  const requestCount = hydrated ? count : 0;

  return (
    <header className="sticky top-0 z-50 border-b border-bronze-200/10 bg-ink-950/72 backdrop-blur-2xl">
      <div className="mx-auto flex h-[76px] w-[min(1320px,calc(100%_-_32px))] items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Зона Комфорта">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-bronze-200/60 bg-bronze-300/10 shadow-bronze">
            <PackageCheck size={24} className="text-bronze-200" aria-hidden />
          </span>
          <span>
            <span className="block font-display text-xl text-bronze-100">Зона Комфорта</span>
            <span className="block text-[11px] uppercase text-mist">Мебель для дома и офиса</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-mist lg:flex" aria-label="Главное меню">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-bronze-100">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <IconButton label="Поиск">
            <Search size={18} />
          </IconButton>
          <IconButton label="Избранное">
            <Heart size={18} />
          </IconButton>
          <Link
            href="/request"
            className="relative inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-bronze-200/30 bg-ivory/[0.04] px-4 text-sm text-ivory transition hover:border-bronze-200/70 hover:bg-bronze-300/10"
          >
            <ShoppingBag size={17} aria-hidden />
            Заявка
            <span className="grid h-6 min-w-6 place-items-center rounded-full bg-bronze-200 px-1.5 text-xs font-bold text-ink-950">
              {requestCount}
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-[10px] border border-bronze-200/25 bg-ivory/[0.04] text-ivory lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-bronze-200/10 bg-ink-950/95 lg:hidden"
          >
            <div className="mx-auto grid w-[min(100%-32px,680px)] gap-3 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[10px] border border-bronze-200/12 px-4 py-3 text-mist transition hover:border-bronze-200/40 hover:text-ivory"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/request"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-[10px] bg-bronze-200 px-4 py-3 text-center font-semibold text-ink-950"
              >
                Заявка на подбор ({requestCount})
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function IconButton({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        "grid h-11 w-11 place-items-center rounded-[10px] text-mist transition",
        "hover:bg-ivory/[0.05] hover:text-bronze-100"
      )}
    >
      {children}
    </button>
  );
}
