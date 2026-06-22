"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { legalInfo } from "@/data/site";

type ConsentState = "accepted" | "declined";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

export function CookieConsent({ yandexMetrikaId }: { yandexMetrikaId?: string }) {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(legalInfo.consentKey);
    setConsent(stored === "accepted" || stored === "declined" ? stored : null);
    setReady(true);

    const openSettings = () => {
      window.localStorage.removeItem(legalInfo.consentKey);
      setConsent(null);
      setReady(true);
    };

    window.addEventListener("zk:cookie-settings", openSettings);

    return () => window.removeEventListener("zk:cookie-settings", openSettings);
  }, []);

  const normalizedMetrikaId = useMemo(() => {
    const value = yandexMetrikaId?.trim();
    return value && /^\d+$/.test(value) ? value : undefined;
  }, [yandexMetrikaId]);

  const saveConsent = (value: ConsentState) => {
    window.localStorage.setItem(legalInfo.consentKey, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" ? <YandexMetrika counterId={normalizedMetrikaId} /> : null}

      <AnimatePresence>
        {ready && consent === null ? (
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[80] px-4 pb-4 sm:px-6 sm:pb-6"
            role="dialog"
            aria-label="Согласие на cookie и аналитику"
          >
            <div className="glass-card mx-auto flex max-w-5xl flex-col gap-4 p-4 shadow-[0_24px_90px_rgba(0,0,0,0.58)] md:flex-row md:items-center md:justify-between md:p-5">
              <p className="max-w-3xl text-sm leading-6 text-mist">
                Мы используем необходимые cookie и localStorage для работы каталога и заявки, а с
                вашего согласия — аналитические cookie Яндекс.Метрики, чтобы улучшать сайт. Нажимая
                «Согласен», вы разрешаете обработку cookie и обезличенных данных посещения по{" "}
                <Link href="/privacy" className="font-semibold text-bronze-100 underline-offset-4 hover:underline">
                  Политике конфиденциальности
                </Link>
                . Можно отказаться: сайт продолжит работать.
              </p>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  className="premium-button min-h-11 rounded-[10px] border border-bronze-200/35 px-4 text-sm font-semibold text-ivory transition hover:border-bronze-200/70 hover:bg-ivory/[0.05]"
                  onClick={() => saveConsent("declined")}
                >
                  Только необходимые
                </button>
                <button
                  type="button"
                  className="premium-button min-h-11 rounded-[10px] bg-bronze-200 px-5 text-sm font-semibold text-ink-950 transition hover:bg-bronze-100"
                  onClick={() => saveConsent("accepted")}
                >
                  Согласен
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function YandexMetrika({ counterId }: { counterId?: string }) {
  if (!counterId) {
    return null;
  }

  return (
    <Script id="yandex-metrika" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(${counterId}, "init", {
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: false
        });
      `}
    </Script>
  );
}
