import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RequestCartProvider } from "@/components/request/RequestCartContext";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { ToastProvider } from "@/components/ui/ToastProvider";
import { CookieConsent } from "@/components/legal/CookieConsent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zonakomforta.ru";
const yandexMetrikaId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Зона Комфорта — премиальный каталог мебели",
    template: "%s | Зона Комфорта"
  },
  description:
    "Премиальный каталог мебели для дома и офиса: кухни, диваны, кровати, шкафы, спальни и офисные кресла.",
  openGraph: {
    title: "Зона Комфорта — мебель для дома и офиса",
    description:
      "Тёмный luxury showroom, коллекции мебели и заявка на персональный подбор.",
    url: siteUrl,
    siteName: "Зона Комфорта",
    images: [
      {
        url: "/images/hero/showroom-hero.png",
        width: 1600,
        height: 950,
        alt: "Премиальный мебельный шоурум Зона Комфорта"
      }
    ],
    locale: "ru_RU",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <div className="ambient-grid" aria-hidden />
        <ToastProvider>
          <RequestCartProvider>
            <SmoothScrollProvider>
              <Header />
              <main>{children}</main>
              <Footer />
              <CookieConsent yandexMetrikaId={yandexMetrikaId} />
            </SmoothScrollProvider>
          </RequestCartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
