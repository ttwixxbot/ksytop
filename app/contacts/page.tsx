import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteContacts } from "@/data/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты Зона Комфорта: телефон, email, адрес шоурума и форма заявки."
};

const contacts = [
  { icon: Phone, label: "Телефон", value: siteContacts.phone },
  { icon: Mail, label: "Email", value: siteContacts.email },
  { icon: MapPin, label: "Адрес", value: siteContacts.address },
  { icon: Clock, label: "Время работы", value: siteContacts.hours }
];

export default function ContactsPage() {
  return (
    <section className="section-shell grid gap-10 !pt-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm uppercase text-bronze-100">Шоурум и консультации</p>
        <h1 className="page-title mt-3">Контакты</h1>
        <p className="mt-6 text-lg leading-8 text-mist">
          Свяжитесь с нами, чтобы обсудить подбор мебели, материалы и сроки. Форма подготовит
          письмо на почту шоурума, чтобы вы могли сразу отправить заявку.
        </p>
        <div className="mt-8 grid gap-4">
          {contacts.map((item) => (
            <div key={item.label} className="glass-card flex gap-4 p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[10px] border border-bronze-200/25 text-bronze-100">
                <item.icon size={21} aria-hidden />
              </span>
              <span>
                <span className="block text-sm uppercase text-bronze-100">{item.label}</span>
                <span className="mt-1 block text-mist">{item.value}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="glass-card relative mt-6 min-h-[260px] overflow-hidden p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(200,148,85,0.22),transparent_18rem),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))]" />
          <div className="absolute left-[12%] top-[24%] h-[1px] w-[76%] rotate-[-12deg] bg-bronze-200/35" />
          <div className="absolute left-[20%] top-[58%] h-[1px] w-[62%] rotate-[7deg] bg-bronze-200/22" />
          <div className="relative z-10">
            <p className="text-sm uppercase text-bronze-100">Зона Комфорта</p>
            <h2 className="mt-2 font-display text-3xl text-ivory">Тёмная карта шоурума</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-mist">
              {siteContacts.shortAddress}. Вход со стороны центральной галереи.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
