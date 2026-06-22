import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { categories } from "@/data/categories";
import { siteContacts } from "@/data/site";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CookieSettingsLink } from "@/components/legal/CookieSettingsLink";

const buyerLinks = [
  { label: "Доставка и оплата", href: "/delivery" },
  { label: "Гарантия", href: "/warranty" },
  { label: "Возврат и обмен", href: "/returns" },
  { label: "Вопросы и ответы", href: "/faq" }
];
const companyLinks = [
  { label: "О нас", href: "/about" },
  { label: "Коллекции", href: "/collections" },
  { label: "Идеи для дома", href: "/ideas" },
  { label: "Контакты", href: "/contacts" }
];
const contactLinks = [
  { href: siteContacts.phoneHref, label: "Позвонить", icon: Phone },
  { href: siteContacts.emailHref, label: "Написать на почту", icon: Mail },
  { href: "/contacts", label: "Открыть контакты", icon: Send }
];

export function Footer() {
  return (
    <footer className="border-t border-bronze-200/10 bg-ink-950/80">
      <div className="section-shell !pb-8 !pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr_1.15fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-bronze-200/60 bg-bronze-300/10 text-bronze-100">
                ZK
              </span>
              <span>
                <span className="block font-display text-2xl text-bronze-100">Зона Комфорта</span>
                <span className="text-xs uppercase text-mist">Мебель для дома и офиса</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-mist">
              Создаём пространства, в которых хочется жить, работать и отдыхать. Каталог без
              онлайн-оплаты: подбираем мебель и оформляем заявку персонально.
            </p>
            <div className="mt-6 flex gap-3">
              {contactLinks.map(({ href, label, icon: Icon }) =>
                href.startsWith("/") ? (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-bronze-200/20 text-mist transition hover:border-bronze-200/60 hover:text-bronze-100"
                  >
                    <Icon size={17} aria-hidden />
                  </Link>
                ) : (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-bronze-200/20 text-mist transition hover:border-bronze-200/60 hover:text-bronze-100"
                  >
                    <Icon size={17} aria-hidden />
                  </a>
                )
              )}
            </div>
          </div>

          <FooterColumn title="Каталог">
            {categories.map((category) => (
              <Link key={category.slug} href={`/catalog/${category.slug}`}>
                {category.name}
              </Link>
            ))}
          </FooterColumn>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <FooterColumn title="Покупателям">
              {buyerLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </FooterColumn>
            <FooterColumn title="О компании">
              {companyLinks.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </FooterColumn>
          </div>

          <div className="glass-card p-5">
            <h2 className="font-display text-2xl text-ivory">Будьте в курсе новинок</h2>
            <p className="mt-2 text-sm text-mist">Редкие поступления, коллекции и персональные подборки.</p>
            <NewsletterForm />
            <div className="mt-6 grid gap-3 text-sm text-mist">
              <span className="flex items-center gap-3">
                <Phone size={17} className="text-bronze-200" aria-hidden /> {siteContacts.phone}
              </span>
              <span className="flex items-center gap-3">
                <MapPin size={17} className="text-bronze-200" aria-hidden /> {siteContacts.shortAddress}
              </span>
              <span className="flex items-center gap-3">
                <Mail size={17} className="text-bronze-200" aria-hidden /> {siteContacts.email}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-bronze-200/10 pt-5 text-xs text-mist md:flex-row md:items-center md:justify-between">
          <span>© 2026 Зона Комфорта. Все права защищены.</span>
          <span className="flex flex-wrap gap-5">
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/terms">Пользовательское соглашение</Link>
            <CookieSettingsLink />
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold uppercase text-bronze-100">{title}</h2>
      <div className="grid gap-2 text-sm text-mist [&_a]:transition hover:[&_a]:text-bronze-100">
        {children}
      </div>
    </div>
  );
}
